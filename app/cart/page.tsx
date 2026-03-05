import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartPage } from '@/components/cart-page';

export const metadata = {
  title: 'Shopping Cart | YOUR BRAND NAME',
  description: 'View and manage your shopping cart',
};

export default function Cart() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 pt-24 md:pt-32 px-6 md:px-12 py-12 md:py-20">
        <CartPage />
      </main>

      <Footer />
    </div>
  );
}
