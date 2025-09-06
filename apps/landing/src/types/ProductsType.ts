// Types
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

interface CartItem {
  product: Product;
  quantity: number;
}

export type { Product, CartItem };
