import LegalDocumentList from "@/components/footer/LegalDocumentList";
import SocialMediaList from "@/components/footer/SocialMediaList";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-12 border-t border-gray-200">
      {/* Social and Professional Links */}
      <div className="text-center max-w-6xl mx-auto px-4">
        <SocialMediaList />

        {/* Legal Links */}
        <div className="text-center mb-8">
          <LegalDocumentList />
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
