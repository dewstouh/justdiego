import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Global Breadcrumb component for displaying navigation links throughout the website.
 * @param {Object} props - Component properties.
 * @param {BreadcrumbItem[]} props.items - Array of breadcrumb items with label and optional href.
 * @param {string} props.className - Optional additional CSS classes.
 * @returns {JSX.Element} The rendered breadcrumb component.
 * 
 * @example
 * <Breadcrumb items={[
 *   { label: "Home", href: "/" },
 *   { label: "Solutions", href: "/solutions" },
 *   { label: "Company Name" } // Last item without href (current page)
 * ]} />
 */
export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
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



