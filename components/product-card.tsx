import Link from 'next/link';
import { Product } from '@/lib/types';
import { getColorName, getCapTypeName } from '@/lib/products';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const displayName = product.name;

  return (
    <Link href={`/product/${product.id}`}>
      <div className="cursor-pointer group">
        {/* Image Container */}
        <div className="relative aspect-square bg-gray-100 overflow-hidden mb-6">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            fill
          />
          {/* Sold Out Badge */}
          {product.soldOut && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-red-600 text-white px-4 py-2 font-bold text-sm uppercase tracking-wider">
                SOLD OUT
              </div>
            </div>
          )}
          {/* Variant Badges */}
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-2">
            {product.sleeveLength && (
              <span className="bg-black text-white px-2 py-1 text-xs font-bold uppercase tracking-wider">
                {product.sleeveLength === 'short' ? 'Short' : 'Long'} Sleeve
              </span>
            )}
            {product.capType && (
              <span className="bg-black text-white px-2 py-1 text-xs font-bold uppercase tracking-wider">
                {getCapTypeName(product.capType)}
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <div>
            <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-balance">
              {product.baseName}
            </h3>
            {product.color && (
              <p className="text-xs text-gray-600 uppercase tracking-widest">
                {getColorName(product.color)}
              </p>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            {product.salePrice ? (
              <>
                <span className="text-xs md:text-sm line-through text-gray-500 font-semibold">
                  ${product.price}
                </span>
                <span className="text-xs md:text-sm font-bold">
                  ${product.salePrice}
                </span>
              </>
            ) : (
              <span className="text-xs md:text-sm font-bold">
                ${product.price}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
