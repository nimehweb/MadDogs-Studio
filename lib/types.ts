export type ProductCategory = 'shirts' | 'caps';

export interface Product {
  id: string;
  baseId?: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  images: string[];
  soldOut: boolean;
  description: string;
  features: string[];
  modelHeight: string;
  modelSize: string;
  sizes: string[];
  shippingDays: string;
  shippingInfo: string;
  category?: ProductCategory;
  color?: string;
  sleeveLength?: string;
  capType?: string;
  stock?: number;
  baseName?: string;
  basePrice?: number;
  baseSalePrice?: number;
}

export interface Color {
  id: string;
  name: string;
  hex: string;
}

export interface SleeveLength {
  id: string;
  name: string;
}

export interface CapType {
  id: string;
  name: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
  color?: string;
  sleeveLength?: string;
  capType?: string;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (productId: string, size: string, quantity: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export interface FilterState {
  category: ProductCategory | 'all';
  colors: string[];
  sleeveLengths: string[];
  capTypes: string[];
}
