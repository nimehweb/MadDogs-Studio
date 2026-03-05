'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

interface MobileMenuProps {
  variant?: 'overlay' | 'solid';
}

export function MobileMenu({ variant = 'overlay' }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const iconColor = variant === 'overlay' ? 'text-white' : 'text-black'

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={toggleMenu}
        className={`w-6 h-6 flex items-center justify-center ${iconColor} hover:opacity-70 transition-opacity`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={40} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeMenu}
        />
      )}

      <nav
        className={`absolute left-10 top-12 bg-white border rounded-lg z-50 transform transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-3 min-w-max">
          {/* <Link
            href="/new"
            onClick={closeMenu}
            className="text-black font-bold text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
          >
            NEW
          </Link> */}
          <Link
            href="/shop"
            onClick={closeMenu}
            className="text-black font-bold text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
          >
            SHOP ALL
          </Link>
          <Link
            href="/info"
            onClick={closeMenu}
            className="text-black font-bold text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
          >
            INFO
          </Link>
          <Link
            href="/cart"
            onClick={closeMenu}
            className="text-black font-bold text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
          >
            MY CART
          </Link>
        </div>
      </nav>
    </>
  )
}
