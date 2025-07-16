import Image from "next/image";
import Link from "next/link";

interface GuideCardProps {
    slug: string;
    title: string;
    description: string;
    thumbnailUrl?: string | null;
}

export function GuideCard({ slug, title, description, thumbnailUrl }: GuideCardProps) {
  return (
    <Link
      href={`/guides/${slug}`}
      className="group block border border-gray-300 bg-white hover:border-gray-900 transition-colors duration-200"
    >
      <div className="aspect-[4/1.5] bg-gray-100 flex items-center justify-center border-b border-gray-300">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400">
            <span className="text-3xl">📄</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-sm uppercase tracking-wide mb-1 text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 text-xs leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}