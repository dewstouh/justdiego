export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="text-center">
        <p className="text-xs text-gray-600">
          © {currentYear} Diego Rodriguez
        </p>
      </div>
    </footer>
  );
}
