import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 pt-24 md:pt-32 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-widest mb-6">
            404
          </h1>
          <h2 className="text-2xl font-black uppercase tracking-widest mb-4">
            PAGE NOT FOUND
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-black text-white hover:bg-gray-900 px-8 py-6 font-bold uppercase tracking-wider">
            <Link href="/">BACK TO HOME</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
