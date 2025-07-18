import { PrismaClient } from '../generated/prisma';
import {
    countriesMock,
    technologiesMock,
    tagsMock,
    documentsMock,
    socialMediasMock,
    solutionsMock,
    usersMock,
    companiesMock,
    permissionsMock,
    rolesMock,
    toolsMock,
} from '../mocks';
import { navigationsMock } from '../mocks/website/navigations';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seeding...');

    // Clear existing data (in reverse order of dependencies)
    console.log('🧹 Clearing existing data...');
    await prisma.review.deleteMany();
    await prisma.solution.deleteMany();
    await prisma.tool.deleteMany();
    await prisma.document.deleteMany();
    await prisma.user.deleteMany();
    await prisma.company.deleteMany();
    await prisma.socialMedia.deleteMany();
    await prisma.technology.deleteMany();
    await prisma.tag.deleteMany();
    await prisma.country.deleteMany();
    await prisma.role.deleteMany();
    await prisma.permission.deleteMany();
    await prisma.navigationItem.deleteMany();

    // 1. Seed Countries
    console.log('🌍 Seeding countries...');
    await prisma.country.createMany({ data: countriesMock });

    // 2. Seed Technologies
    console.log('💻 Seeding technologies...');
    await prisma.technology.createMany({ data: technologiesMock });

    // 3. Seed Tags
    console.log('🏷️ Seeding tags...');
    await prisma.tag.createMany({ data: tagsMock });

    // 4. Seed Social Media platforms
    console.log('📱 Seeding social media platforms...');
    await prisma.socialMedia.createMany({ data: socialMediasMock });


    // 5. Seed Permissions and Roles
    console.log('🔐 Seeding permissions and roles...');
    await prisma.permission.createMany({ data: permissionsMock });
    for (const role of rolesMock) {
        await prisma.role.create({ data: role });
    }

    // 6. Seed Users
    console.log('👥 Seeding users...');
    for (const user of usersMock) {
        await prisma.user.create({ data: user });
    }

    // 7. Seed Companies
    console.log('🏢 Seeding companies...');
    for (const company of companiesMock) {
        await prisma.company.create({ data: company });
    }

    // 8. Seed Documents
    console.log('📄 Seeding documents...');
    for (const document of documentsMock) {
        await prisma.document.create({ data: document });
    }

    // 9. Seed Tools (based on solution data structure)
    console.log('🔧 Seeding tools...');
    for (const tool of toolsMock) {
        await prisma.tool.create({ data: tool });
    }

    // 10. Seed Solutions
    console.log('💡 Seeding solutions...');
    for (const solution of solutionsMock) {
        await prisma.solution.create({ data: solution });
    }

    // 11. Seed Reviews
    console.log('⭐ Seeding reviews...');
    /*for (const review of reviewsMock) {
        await prisma.review.create({ data: review });
    }*/

    // 12. Seed Navigation Items
    console.log('🧭 Seeding navigation items...');
    await prisma.navigationItem.createMany({
        data: navigationsMock,
    });

    console.log('✅ Database seeding completed successfully!');

    // Print summary
    const counts = {
        countries: await prisma.country.count(),
        technologies: await prisma.technology.count(),
        tags: await prisma.tag.count(),
        users: await prisma.user.count(),
        companies: await prisma.company.count(),
        solutions: await prisma.solution.count(),
        tools: await prisma.tool.count(),
        reviews: await prisma.review.count(),
        documents: await prisma.document.count(),
        socialMedia: await prisma.socialMedia.count(),
        navigationItems: await prisma.navigationItem.count(),
    };

    console.log('\n📊 Seeding Summary:');
    Object.entries(counts).forEach(([model, count]) => {
        console.log(`  ${model}: ${count} records`);
    });
}

main()
    .catch((e) => {
        console.error('❌ Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });