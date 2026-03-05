'use client';

import { useState } from 'react';
import { Product } from '@/lib/types';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product.id, selectedSize, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const price = product.salePrice || product.price;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      {/* Image Gallery */}
      <div className="flex flex-col gap-4">
        {product.images.map((image, index) => (
          <div
            key={index}
            className="aspect-square bg-gray-100 overflow-hidden"
          >
            <img
              src={image}
              alt={`${product.name} - View ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-start">
        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-widest mb-6 text-balance">
          {product.name}
        </h1>

        {/* Price */}
        <div className="flex items-center gap-4 mb-8">
          {product.salePrice ? (
            <>
              <span className="text-2xl font-black">
                ${product.salePrice}
              </span>
              <span className="text-lg line-through text-gray-500">
                ${product.price}
              </span>
            </>
          ) : (
            <span className="text-2xl font-black">
              ${product.price}
            </span>
          )}
        </div>

        {/* Availability */}
        {product.soldOut ? (
          <div className="bg-red-600 text-white py-3 px-4 mb-8 font-bold uppercase tracking-wider text-center">
            SOLD OUT
          </div>
        ) : (
          <div className="bg-green-100 text-black py-2 px-4 mb-8 font-bold uppercase tracking-wider text-sm text-center">
            IN STOCK
          </div>
        )}

        {/* Model Stats */}
        <div className="border-t border-b border-black py-6 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">
                MODEL HEIGHT
              </p>
              <p className="text-sm font-semibold">{product.modelHeight}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">
                WEARING SIZE
              </p>
              <p className="text-sm font-semibold">{product.modelSize}</p>
            </div>
          </div>
        </div>

        {/* Size Selection */}
        {!product.soldOut && (
          <>
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest mb-4">
                SIZE
              </p>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-2 text-xs font-bold uppercase tracking-wider border border-black transition-colors ${
                      selectedSize === size
                        ? 'bg-black text-white'
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest mb-4">
                QUANTITY
              </p>
              <div className="flex items-center gap-4 border border-black w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center font-bold hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center font-bold hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className={`w-full h-14 text-sm font-black uppercase tracking-wider transition-colors mb-4 ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              {addedToCart ? '✓ ADDED TO CART' : 'ADD TO CART'}
            </Button>
          </>
        )}

        {/* Description */}
        <div className="mt-8 pt-8 border-t border-black">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-4">
            DESCRIPTION
          </p>
          <p className="text-sm leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Features */}
          <p className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-4">
            FEATURES
          </p>
          <ul className="space-y-2 mb-6">
            {product.features.map((feature, index) => (
              <li key={index} className="text-sm">
                • {feature}
              </li>
            ))}
          </ul>

          {/* Shipping Info */}
          <p className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-4">
            SHIPPING
          </p>
          <p className="text-sm">{product.shippingInfo}</p>
        </div>
      </div>
    </div>
  );
}
