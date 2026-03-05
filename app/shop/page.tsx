'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductGrid } from '@/components/product-grid';
import { ProductFilters } from '@/components/product-filters';
import { PRODUCTS, filterProducts } from '@/lib/products';
import { FilterState } from '@/lib/types';

export default function Shop() {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    colors: [],
    sleeveLengths: [],
    capTypes: [],
  });

  const filteredProducts = filterProducts(filters);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 md:pt-32">
        <ProductFilters filters={filters} onFilterChange={setFilters} />

        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg md:text-2xl font-black uppercase tracking-widest">
                SHOP ALL
              </h2>
              <p className="text-xs md:text-sm text-gray-600 uppercase tracking-widest">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {filteredProducts.map((product) => (
                  <div key={product.id}>
                    <ProductGrid products={[product]} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24">
                <p className="text-lg font-semibold text-gray-600 mb-4">No products found</p>
                <p className="text-sm text-gray-500">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
