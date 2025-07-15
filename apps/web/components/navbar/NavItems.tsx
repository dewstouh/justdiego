'use client';

export default function NavItems({ onClick }: { onClick?: () => void }) {
    const navItems = [
        { id: 'home', title: 'Home', href: '/' },
        { id: 'solutions', title: 'Solutions', href: '/solutions' },
        { id: 'contact', title: 'Contact', href: '/contact' }
    ];

    return (
        <>
            {navItems.map((item) => (
                <a
                    key={item.id}
                    href={item.href}
                    className="text-xs md:text-sm font-bold text-gray-900 px-3 py-2 thick-underline transition-none"
                    onClick={onClick}
                >
                    {item.title.toUpperCase()}
                </a>
            ))}
        </>
    );
}
