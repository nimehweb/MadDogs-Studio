'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { getProductById } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotal } = useCart();

  const handleCheckout = () => {
    // Replace with your WhatsApp business number (include country code without + or spaces)
    const whatsappNumber = '08164297768'; // e.g., '1234567890' for US, '447123456789' for UK
    
    // Build the cart message
    let message = `Hey! 👋 I'd love to place an order with you guys.\n`;
    message += "Here's what I'm looking to get:\n\n";
    
    items.forEach((item, index) => {
      const product = getProductById(item.productId);
      if (product) {
        const price = product.salePrice || product.price;
        const itemTotal = price * item.quantity;
        
        message += `${index + 1}. *${product.name}*\n`;
        message += `   - Size: ${item.size}\n`;
        message += `   - Quantity: ${item.quantity}\n`;
        message += `   - $${price.toFixed(2)} each = $${itemTotal.toFixed(2)}\n\n`;
      }
    });
    
    const total = getTotal();
    message += `That brings my total to *$${total.toFixed(2)}*\n\n`;
    message += `Could you confirm if everything is available? Looking forward to hearing from you! 😊`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 md:py-32">
        <h2 className="text-2xl font-black uppercase tracking-widest mb-6">
          YOUR CART IS EMPTY
        </h2>
        <p className="text-gray-700 mb-8 text-center max-w-md">
          Add some amazing pieces to get started.
        </p>
        <Button asChild className="bg-black text-white hover:bg-gray-900 px-8 py-3 font-bold uppercase tracking-wider">
          <Link href="/shop">CONTINUE SHOPPING</Link>
        </Button>
      </div>
    );
  }

  const total = getTotal();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-black uppercase tracking-widest mb-12">
        SHOPPING CART
      </h1>

      {/* Cart Items */}
      <div className="space-y-8 mb-12">
        {items.map((item) => {
          const product = getProductById(item.productId);
          if (!product) return null;

          const price = product.salePrice || product.price;
          const itemTotal = price * item.quantity;

          return (
            <div
              key={`${item.productId}-${item.size}`}
              className="border-b border-black pb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                {/* Product Image */}
                <div className="bg-gray-100 aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div>
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-sm font-black uppercase tracking-widest hover:opacity-60 transition-opacity mb-4">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">
                      <span className="font-bold">SIZE:</span> {item.size}
                    </p>
                    {product.salePrice && (
                      <div>
                        <span className="line-through text-gray-500">
                          ${product.price}
                        </span>
                        {' '}
                        <span className="font-bold">${product.salePrice}</span>
                      </div>
                    )}
                    {!product.salePrice && (
                      <p className="font-bold">${product.price}</p>
                    )}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-3">
                    QUANTITY
                  </p>
                  <div className="flex items-center gap-2 border border-black w-fit">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.size,
                          item.quantity - 1
                        )
                      }
                      className="w-8 h-8 flex items-center justify-center font-bold hover:bg-gray-100 transition-colors text-sm"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.size,
                          item.quantity + 1
                        )
                      }
                      className="w-8 h-8 flex items-center justify-center font-bold hover:bg-gray-100 transition-colors text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price and Remove */}
                <div className="flex flex-col items-end gap-4">
                  <div className="text-right">
                    <p className="text-xs text-gray-700 mb-1">TOTAL</p>
                    <p className="text-lg font-black">${itemTotal.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.productId, item.size)}
                    className="p-2 hover:bg-gray-100 transition-colors rounded"
                    aria-label="Remove item"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Summary */}
      <div className="border-t-2 border-black pt-8">
        <div className="flex justify-end mb-8">
          <div className="w-full md:w-72">
            <div className="flex justify-between mb-4 pb-4 border-b border-black">
              <span className="font-bold uppercase tracking-wider">SUBTOTAL</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-6 text-gray-700 text-sm">
              <span>Shipping calculated at checkout</span>
            </div>
            <Button 
              onClick={handleCheckout}
              className="w-full bg-black text-white hover:bg-gray-900 h-12 font-bold uppercase tracking-wider"
            >
              PROCEED TO CHECKOUT
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full mt-3 border-black text-black hover:bg-gray-100"
            >
              <Link href="/shop">CONTINUE SHOPPING</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
