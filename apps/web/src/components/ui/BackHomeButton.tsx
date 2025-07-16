import Link from 'next/link'

export default function BackHomeButton() {
  return (
      <div className="text-center">
          <Link
              href="/"
              className="inline-block bg-white text-gray-900 px-8 py-3 border-2 border-gray-300 font-bold hover:border-gray-900 hover:bg-gray-50 transition-all duration-200"
          >
              ← BACK TO HOME
          </Link>
      </div>
  )
}
