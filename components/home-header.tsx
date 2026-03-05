'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { ShoppingCart } from 'lucide-react';
import { MobileMenu } from './mobile-menu';
import Image from 'next/image';

export function HomeHeader() {
  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="absolute inset-0 z-50 px-6 md:px-12 py-6 flex flex-col pointer-events-none">
      {/* Top Bar - Hamburger and Cart */}
      <div className="flex items-center justify-between h-fit pointer-events-auto">
        {/* Hamburger Menu */}
        <MobileMenu variant="overlay" />

        {/* Cart Right */}
        <Link href="/cart" className="ml-auto hover:opacity-60 transition-opacity text-white">
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="text-xs font-bold">({cartCount})</span>
          )}
        </Link>
      </div>

      {/* Centered Logo - Vertically Centered */}
      <div className="flex-1 flex items-center justify-center pointer-events-auto">
          <Image src="/images/md_logo_white.jpg.png" alt="Mad Dogs StudioHq" width={700} height={700} />
      </div>
    </header>
  );
}
