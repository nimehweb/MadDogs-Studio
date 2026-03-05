import { HomeHeader } from '@/components/home-header';
import { Footer } from '@/components/footer';
import { HeroCarousel } from '@/components/hero-carousel';
import { ProductGrid } from '@/components/product-grid';
import { getFeaturedProducts } from '@/lib/products';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section with Header */}
        <div className="relative">
          <HomeHeader />
          <HeroCarousel />
        </div>

        {/* Featured Products
        <ProductGrid products={featuredProducts} title="NEW ARRIVALS" /> */}
      </main>

      <Footer />
    </div>
  );
}
