import { Category } from './category.interface';

export interface ProductsState {
  products: Product[];
  selectedCategory?: Category;
  search?: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: Category;
  thumbnail: string;
  images: string[];
}
