import { Product, FilterState, ProductCategory } from './types';
import productsData from './products-v2.json';

const transformProduct = (product: any): Product => {
  return {
    id: product.id,
    baseId: product.baseId,
    name: `${product.baseName} - ${product.color && (product.sleeveLength || product.capType)
      ? `${product.color.charAt(0).toUpperCase() + product.color.slice(1)} ${product.sleeveLength === 'short' ? 'Short Sleeve' : product.sleeveLength === 'long' ? 'Long Sleeve' : product.capType === 'face' ? 'Face Cap' : 'Skull Cap'}`
      : product.baseName}`,
    price: product.basePrice,
    salePrice: product.baseSalePrice,
    image: product.image,
    images: product.images,
    soldOut: product.soldOut,
    description: product.description,
    features: product.features,
    modelHeight: product.modelHeight,
    modelSize: product.modelSize,
    sizes: product.sizes,
    shippingDays: product.shippingDays,
    shippingInfo: product.shippingInfo,
    category: product.category,
    color: product.color,
    sleeveLength: product.sleeveLength,
    capType: product.capType,
    stock: product.stock,
    baseName: product.baseName,
    basePrice: product.basePrice,
    baseSalePrice: product.baseSalePrice,
  };
};

export const PRODUCTS: Product[] = productsData.products.map(transformProduct);

export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return PRODUCTS.slice(0, 4);
};

export const filterProducts = (filters: FilterState): Product[] => {
  return PRODUCTS.filter(product => {
    if (filters.category !== 'all' && product.category !== filters.category) {
      return false;
    }

    if (filters.colors.length > 0 && !filters.colors.includes(product.color || '')) {
      return false;
    }

    if (filters.sleeveLengths.length > 0 && product.sleeveLength && !filters.sleeveLengths.includes(product.sleeveLength)) {
      return false;
    }

    if (filters.capTypes.length > 0 && product.capType && !filters.capTypes.includes(product.capType)) {
      return false;
    }

    return true;
  });
};

export const getAvailableColors = (category?: ProductCategory | 'all'): string[] => {
  const filtered = category && category !== 'all' 
    ? PRODUCTS.filter(p => p.category === category) 
    : PRODUCTS;
  const colors = new Set(filtered.map(p => p.color).filter((c): c is string => Boolean(c)));
  return Array.from(colors);
};

export const getAvailableSleeveLengths = (): string[] => {
  const sleeves = new Set(
    PRODUCTS.filter(p => p.category === 'shirts')
      .map(p => p.sleeveLength)
      .filter((s): s is string => Boolean(s))
  );
  return Array.from(sleeves);
};

export const getAvailableCapTypes = (): string[] => {
  const types = new Set(
    PRODUCTS.filter(p => p.category === 'caps')
      .map(p => p.capType)
      .filter((t): t is string => Boolean(t))
  );
  return Array.from(types);
};

export const getColorName = (colorId: string): string => {
  const color = (productsData as any).colors?.find((c: any) => c.id === colorId);
  return color?.name || colorId;
};

export const getCapTypeName = (typeId: string): string => {
  const type = productsData.capTypes.find(c => c.id === typeId);
  return type?.name || typeId;
};
