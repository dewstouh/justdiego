import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ServerBreadcrumbProps {
  pathname: string;
  className?: string;
  customLabels?: Record<string, string>;
  hideHome?: boolean;
}

/**
 * Server-side Breadcrumb component that generates breadcrumbs based on a provided pathname.
 * @param {Object} props - Component properties.
 * @param {string} props.pathname - The current pathname.
 * @param {string} props.className - Optional additional CSS classes.
 * @param {Record<string, string>} props.customLabels - Optional custom labels for specific paths.
 * @param {boolean} props.hideHome - Whether to hide the home breadcrumb.
 * @returns {JSX.Element} The rendered breadcrumb component.
 */
export default function ServerBreadcrumb({ 
  pathname,
  className = "", 
  customLabels = {},
  hideHome = false 
}: ServerBreadcrumbProps) {
  
  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [];
    
    // Add home if not hidden
    if (!hideHome) {
      items.push({ label: 'Home', href: '/' });
    }
    
    // Skip if we're on the home page
    if (pathname === '/') {
      return hideHome ? [] : items;
    }
    
    // Split pathname and filter out empty strings
    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    
    // Build breadcrumbs from path segments
    pathSegments.forEach((segment, index) => {
      const isLast = index === pathSegments.length - 1;
      const href = isLast ? undefined : '/' + pathSegments.slice(0, index + 1).join('/');
      
      // Clean up the segment for display
      let label = segment;
      
      // Check for custom labels first
      if (customLabels[segment]) {
        label = customLabels[segment];
      } else {
        // Auto-format the segment
        label = segment
          .replace(/-/g, ' ')           // Replace hyphens with spaces
          .replace(/_/g, ' ')           // Replace underscores with spaces
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
      }
      
      items.push({
        label,
        href
      });
    });
    
    return items;
  };
  
  const items = generateBreadcrumbs();
  
  if (!items.length) return null;

  return (
    <nav className={`mb-8 ${className}`} aria-label="Breadcrumb">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-gray-400" aria-hidden="true">→</span>
            )}
            {item.href ? (
              <Link 
                href={item.href} 
                className="hover:text-gray-900 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
