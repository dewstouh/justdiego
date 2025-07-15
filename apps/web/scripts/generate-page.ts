#!/usr/bin/env node

/**
 * Page Generator CLI Tool
 * 
 * Usage:
 * npm run page:create -- --name "about" --title "About Us" --description "Learn about our company"
 * pnpm page:create -- --name "services" --title "Our Services" --description "Explore our offerings"
 * 
 * This script automatically generates marketing pages with the standardized Page layout
 */

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

interface PageOptions {
  name: string;
  title: string;
  description?: string;
  note?: string;
  dataFetcher?: string;
  hasMetadata?: boolean;
}

function generatePageTemplate(options: PageOptions): string {
  const {
    name,
    title,
    description = '',
    note = '',
    dataFetcher = '',
    hasMetadata = true
  } = options;

  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  const slug = name.toLowerCase().replace(/\s+/g, '-');

  return `import { SimplePage, createPageMetadata } from '../_components/SimplePage';${dataFetcher ? `\nimport { ${dataFetcher} } from '../../../lib/data/[DATA_SOURCE]';` : ''}

${hasMetadata ? `export const metadata = createPageMetadata(
  '${title}',
  '${description}',
  '/${slug}'
);` : ''}

export default ${dataFetcher ? 'async ' : ''}function ${capitalizedName}Page() {${dataFetcher ? `
  const data = await ${dataFetcher}();` : ''}

  return (
    <SimplePage config={{
      title: "${title}",${description ? `
      description: "${description}",` : ''}${note ? `
      note: "${note}",` : ''}
    }}>
      {/* Add your page content here */}
      <div>
        <p className="text-gray-600">
          Content for ${title} page goes here.
        </p>
      </div>
    </SimplePage>
  );
}
`;
}

function parseArgs() {
  const args = process.argv.slice(2);
  const options: Partial<PageOptions> = {};

  for (let i = 0; i < args.length; i += 2) {
    const key = args[i]?.replace('--', '');
    const value = args[i + 1];

    if (key && value) {
      switch (key) {
        case 'name':
          options.name = value;
          break;
        case 'title':
          options.title = value;
          break;
        case 'description':
          options.description = value;
          break;
        case 'note':
          options.note = value;
          break;
        case 'dataFetcher':
          options.dataFetcher = value;
          break;
        case 'no-metadata':
          options.hasMetadata = false;
          break;
      }
    }
  }

  return options;
}

function main() {
  const options = parseArgs();

  if (!options.name || !options.title) {
    console.log(`
Page Generator CLI

Usage:
  npm run page:create -- --name "page-name" --title "Page Title" [options]

Required:
  --name          The page name (used for file naming and route)
  --title         The page title

Optional:
  --description   Page description
  --note          Additional note for the page
  --dataFetcher   Name of data fetching function
  --no-metadata   Skip metadata generation

Examples:
  npm run page:create -- --name "about" --title "About Us" --description "Learn about our company"
  npm run page:create -- --name "services" --title "Our Services" --dataFetcher "getServices"
    `);
    process.exit(1);
  }

  const pageTemplate = generatePageTemplate(options as PageOptions);
  const filePath = join(process.cwd(), 'app', '(marketing)', options.name, 'page.tsx');
  const dirPath = join(process.cwd(), 'app', '(marketing)', options.name);

  // Create directory if it doesn't exist
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }

  // Check if file already exists
  if (existsSync(filePath)) {
    console.error(`❌ Page already exists: ${filePath}`);
    process.exit(1);
  }

  // Write the file
  writeFileSync(filePath, pageTemplate);
  
  console.log(`✅ Generated page: ${filePath}`);
  console.log(`🚀 Next steps:`);
  console.log(`   1. Add your page content in the SimplePage component`);
  if (options.dataFetcher) {
    console.log(`   2. Update the import path for ${options.dataFetcher}`);
  }
  console.log(`   3. Test your page at http://localhost:3000/${options.name}`);
}

if (require.main === module) {
  main();
}

export { generatePageTemplate, parseArgs };
