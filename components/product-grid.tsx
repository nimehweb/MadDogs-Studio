import { Product } from '@/lib/types';
import { ProductCard } from './product-card';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <section className="py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {title && (
          <h2 className="text-lg md:text-2xl font-black uppercase tracking-widest mb-12">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 gap-2 md:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
