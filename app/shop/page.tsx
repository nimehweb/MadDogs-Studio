import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductGrid } from '@/components/product-grid';
import { PRODUCTS } from '@/lib/products';

export const metadata = {
  title: 'Shop All | YOUR BRAND NAME',
  description: 'Browse our complete collection of streetwear essentials',
};

export default function Shop() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 pt-24 md:pt-32">
        <ProductGrid products={PRODUCTS} title="SHOP ALL" />
      </main>

      <Footer />
    </div>
  );
}
