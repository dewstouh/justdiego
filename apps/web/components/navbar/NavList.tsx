
import { getNavigations } from "../../lib/data/navigation";

export default async function NavItems() {
    const navItems = await getNavigations();

    return (
        <>
            {navItems.map((item) => (
                <a
                    key={item.id}
                    href={item.href}
                    className="text-xs md:text-sm font-bold text-gray-900 px-3 py-2 thick-underline transition-none"
                >
                    {item.title.toUpperCase()}
                </a>
            ))}
        </>
    );
}
