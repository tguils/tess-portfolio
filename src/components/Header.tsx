import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl items-center justify-between px-8 py-6"
      >
        <Link href="/" className="text-xl font-bold text-gray-900">
          Tess Guilmette
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-purple-600">
            Home
          </Link>

          <Link href="/work" className="text-gray-700 hover:text-purple-600">
            Work
          </Link>

          <Link href="/about" className="text-gray-700 hover:text-purple-600">
            About
          </Link>

          <Link href="/contact" className="text-gray-700 hover:text-purple-600">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}