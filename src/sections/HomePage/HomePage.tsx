import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ferryengine</title>
        <meta name="description" content="A simple Next.js home page styled with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ferryengine</h1>
          <nav>
            <Link href="/" className="text-white mx-4 hover:underline">Home</Link>
            <Link href="/about" className="text-white mx-4 hover:underline">About</Link>
            <Link href="/contact" className="text-white mx-4 hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto text-center py-16">
        <section className="mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Welcome to My Tailwind App!</h2>
          <p className="text-lg text-gray-700 mb-6">A starter template for your Next.js projects.</p>
          <a
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </section>
      </main>

      <footer className="bg-gray-100 text-gray-700 py-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
