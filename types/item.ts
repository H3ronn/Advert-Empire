export type Category =
  | 'laptops'
  | 'computers'
  | 'monitors'
  | 'clothes'
  | 'motorization'
  | 'wheels'
  | 'watches';

export type Item = {
  id: number;
  userId: number;
  added: string;
  name: string;
  price: number;
  image?: string;
  description: string;
  categories: Category[];
  locality: string;
};
