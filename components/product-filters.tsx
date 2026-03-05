'use client';

import { FilterState, ProductCategory } from '@/lib/types';
import { getAvailableColors, getAvailableSleeveLengths, getAvailableCapTypes, getColorName, getCapTypeName } from '@/lib/products';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex flex-wrap gap-4 items-center">
          {/* Category Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest">Product Type</label>
            <Select
              value={filters.category}
              onValueChange={(value) => handleCategoryChange(value as ProductCategory | 'all')}
            >
              <SelectTrigger className="w-30 border-black">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="shirts">Shirts</SelectItem>
                <SelectItem value="caps">Caps</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Color Dropdown */}
          {availableColors.length > 0 && (
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest">Color</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-35 justify-between border-black bg-white hover:bg-gray-100"
                  >
                    {filters.colors.length > 0
                      ? `${filters.colors.length} selected`
                      : 'Select colors'}
                    <ChevronDown className=" h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-35">
                  <DropdownMenuLabel className="text-xs font-bold uppercase tracking-widest">Colors</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {availableColors.map((color) => (
                    <DropdownMenuCheckboxItem
                      key={color}
                      checked={filters.colors.includes(color)}
                      onCheckedChange={() => toggleColor(color)}
                    >
                      {getColorName(color)}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {/* Sleeve Length Dropdown (Shirts Only) */}
          {(filters.category === 'all' || filters.category === 'shirts') && availableSleeveLengths.length > 0 && (
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest">Sleeve Length</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-35 justify-between border-black bg-white hover:bg-gray-100"
                  >
                    {filters.sleeveLengths.length > 0
                      ? `${filters.sleeveLengths.length} selected`
                      : 'Select sleeve'}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-35">
                  <DropdownMenuLabel className="text-xs font-bold uppercase tracking-widest">Sleeve Length</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {availableSleeveLengths.map((length) => (
                    <DropdownMenuCheckboxItem
                      key={length}
                      checked={filters.sleeveLengths.includes(length)}
                      onCheckedChange={() => toggleSleeveLength(length)}
                    >
                      {length === 'short' ? 'Short Sleeve' : 'Long Sleeve'}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {/* Cap Type Dropdown (Caps Only) */}
          {(filters.category === 'all' || filters.category === 'caps') && availableCapTypes.length > 0 && (
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest">Cap Type</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-35 justify-between border-black bg-white hover:bg-gray-100"
                  >
                    {filters.capTypes.length > 0
                      ? `${filters.capTypes.length} selected`
                      : 'Select type'}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-35">
                  <DropdownMenuLabel className="text-xs font-bold uppercase tracking-widest">Cap Type</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {availableCapTypes.map((type) => (
                    <DropdownMenuCheckboxItem
                      key={type}
                      checked={filters.capTypes.includes(type)}
                      onCheckedChange={() => toggleCapType(type)}
                    >
                      {getCapTypeName(type)}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {/* Clear Filters */}
          {hasActiveFilters && (
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest invisible">Clear</label>
              <Button
                onClick={clearFilters}
                variant="outline"
                className="border-black bg-white text-black hover:bg-gray-100"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
