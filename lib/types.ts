export type ProductCategory = 'Pearl Necklaces' | 'Pearl Earrings' | 'Pearl Bracelets' | 'Pearl Rings' | 'Pearl Hair Accessories';

export interface PearlProduct {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  image_url: string;
  description?: string;
}
