import { getLegalDocuments, getSocialMedias } from '@justdiego/react-utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const legalDocuments = getLegalDocuments();
  const socialMedias = getSocialMedias();

  return (
    <footer className="w-full py-12 border-t border-gray-200">


        {/* Social and Professional Links */}
      <div className="text-center max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {socialMedias.length > 0 && socialMedias.map((socialMedia, index) => (
            <span key={socialMedia.id}>
              <a key={socialMedia.id}
                href={socialMedia.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200"
              >
                {socialMedia.name}
              </a>
              {index < socialMedias.length - 1 && (
                <span className="hidden sm:inline"> · </span>
              )}
            </span>
          ))}
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
