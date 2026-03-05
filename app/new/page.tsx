import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductGrid } from '@/components/product-grid';
import { PRODUCTS } from '@/lib/products';

export const metadata = {
  title: 'New Arrivals | YOUR BRAND NAME',
  description: 'Check out our latest streetwear releases',
};

export default function New() {
  const newProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 pt-24 md:pt-32">
        <ProductGrid products={newProducts} title="NEW" />
      </main>

      <Footer />
    </div>
  );
}
