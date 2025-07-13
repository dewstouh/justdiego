import { getLegalDocuments } from '@justdiego/react-utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const legalDocuments = getLegalDocuments();

  return (
    <footer className="w-full py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Social and Professional Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <a 
            href="https://github.com/dewstouh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200"
          >
            GitHub
          </a>
          <a 
            href="https://bsky.app/profile/justdiego.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200"
          >
            Bluesky
          </a>
          <a 
            href="https://www.fiverr.com/diego_roguez" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200"
          >
            Fiverr
          </a>
        </div>

        {/* Legal Links */}
        <div className="text-center mb-8">
          <div className="flex flex-wrap justify-center gap-1 text-xs text-gray-400">
            {legalDocuments.map((document, index) => (
              <span key={document.id}>
                <a 
                  href={`/legal/${document.title.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="hover:text-gray-600 hover:underline transition-all duration-200"
                >
                  {document.title}
                </a>
                {index < legalDocuments.length - 1 && (
                  <span className="hidden sm:inline"> · </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            © {currentYear} Diego Rodriguez
          </p>
        </div>
      </div>
    </footer>
  );
}
