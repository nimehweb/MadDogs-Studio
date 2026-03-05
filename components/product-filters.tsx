'use client';

import { FilterState, ProductCategory } from '@/lib/types';
import { getAvailableColors, getAvailableSleeveLengths, getAvailableCapTypes, getColorName, getCapTypeName } from '@/lib/products';
import { Button } from '@/components/ui/button';

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  const availableColors = getAvailableColors();
  const availableSleeveLengths = getAvailableSleeveLengths();
  const availableCapTypes = getAvailableCapTypes();

  const handleCategoryChange = (category: ProductCategory | 'all') => {
    onFilterChange({
      ...filters,
      category,
      sleeveLengths: [],
      capTypes: [],
    });
  };

  const toggleColor = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color];
    onFilterChange({ ...filters, colors: newColors });
  };

  const toggleSleeveLength = (length: string) => {
    const newLengths = filters.sleeveLengths.includes(length)
      ? filters.sleeveLengths.filter(l => l !== length)
      : [...filters.sleeveLengths, length];
    onFilterChange({ ...filters, sleeveLengths: newLengths });
  };

  const toggleCapType = (type: string) => {
    const newTypes = filters.capTypes.includes(type)
      ? filters.capTypes.filter(t => t !== type)
      : [...filters.capTypes, type];
    onFilterChange({ ...filters, capTypes: newTypes });
  };

  const clearFilters = () => {
    onFilterChange({
      category: 'all',
      colors: [],
      sleeveLengths: [],
      capTypes: [],
    });
  };

  const hasActiveFilters = filters.category !== 'all' || filters.colors.length > 0 || filters.sleeveLengths.length > 0 || filters.capTypes.length > 0;

  return (
    <div className="w-full bg-white border-b border-black mb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Category Filter */}
        <div className="py-6 border-b border-gray-200">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Product Type</h3>
          <div className="flex flex-wrap gap-3">
            {['all', 'shirts', 'caps'].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat as ProductCategory | 'all')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border border-black transition-colors ${
                  filters.category === cat
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {cat === 'all' ? 'All' : cat === 'shirts' ? 'Shirts' : 'Caps'}
              </button>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        {availableColors.length > 0 && (
          <div className="py-6 border-b border-gray-200">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Color</h3>
            <div className="flex flex-wrap gap-3">
              {availableColors.map((color) => (
                <button
                  key={color}
                  onClick={() => toggleColor(color)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border border-black transition-colors ${
                    filters.colors.includes(color)
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {getColorName(color)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Sleeve Length Filter (Shirts Only) */}
        {(filters.category === 'all' || filters.category === 'shirts') && availableSleeveLengths.length > 0 && (
          <div className="py-6 border-b border-gray-200">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Sleeve Length</h3>
            <div className="flex flex-wrap gap-3">
              {availableSleeveLengths.map((length) => (
                <button
                  key={length}
                  onClick={() => toggleSleeveLength(length)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border border-black transition-colors ${
                    filters.sleeveLengths.includes(length)
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {length === 'short' ? 'Short Sleeve' : 'Long Sleeve'}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Cap Type Filter (Caps Only) */}
        {(filters.category === 'all' || filters.category === 'caps') && availableCapTypes.length > 0 && (
          <div className="py-6 border-b border-gray-200">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Cap Type</h3>
            <div className="flex flex-wrap gap-3">
              {availableCapTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => toggleCapType(type)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border border-black transition-colors ${
                    filters.capTypes.includes(type)
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {getCapTypeName(type)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div className="py-6">
            <Button
              onClick={clearFilters}
              className="text-xs font-bold uppercase tracking-wider border border-black bg-white text-black hover:bg-gray-100"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
