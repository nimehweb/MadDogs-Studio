export interface Product {
  id: string;
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
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (productId: string, size: string, quantity: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}
