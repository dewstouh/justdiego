export default function Navbar() {
  const navItems = ['Solutions', 'Toolkit', 'Work', 'Projects'];

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-transparent flex justify-center items-center z-50">
        <div className="flex gap-6 md:gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs md:text-sm font-bold text-gray-900 px-3 py-2 thick-underline transition-none"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
    </nav>
  );
}
