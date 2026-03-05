'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { ShoppingCart } from 'lucide-react';
import { MobileMenu } from './mobile-menu';
import Image from 'next/image';

export function Header() {
  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-black z-50 px-6 md:px-12 py-6">
      <div className="flex items-center justify-between">
        {/* Hamburger Menu */}
        <MobileMenu variant="solid" />

        {/* Centered Logo */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <Image src="/images/md_logo_black.jpg.png" alt="Mad Dogs StudioHq" width={200} height={200} />
        </Link>

        {/* Cart Right - Icon only on mobile, with text on desktop */}
        <Link href="/cart" className="ml-auto flex items-center gap-2 hover:opacity-60 transition-opacity text-black">
          <ShoppingCart size={20} />
          <span className="hidden md:inline text-xs md:text-sm font-bold uppercase tracking-wider">
            CART {cartCount > 0 && `(${cartCount})`}
          </span>
        </Link>
      </div>
    </header>
  );
}
