import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Elevate Property Group</h1>
        <nav className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link href="/properties" className="text-gray-600 hover:text-gray-900">Properties</Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
