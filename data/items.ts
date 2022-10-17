type category =
  | 'laptops'
  | 'computers'
  | 'monitors'
  | 'clothes'
  | 'motorization'
  | 'wheels'
  | 'watches';

type Item = {
  id: number;
  userId: number;
  name: string;
  price: number;
  image?: string;
  description: string;
  categories: category[];
  locality: string;
};

export const items: Item[] = [
  {
    id: 1,
    userId: 111,
    name: 'Laptop lenovo',
    price: 1000,
    image:
      'https://ecsmedia.pl/c/laptop-lenovo-ideapad-330-15ikb-81de01u0pb-i5-8250u-r530-4-gb-ram-15-6-256-gb-windows-10-home-w-iext55533401.jpg',
    description: 'Laptop lenovo 15.6 ryzen 4800 gtx 1660ti, contact me: 123 231 321',
    locality: 'Amelin',
    categories: ['laptops'],
  },
  {
    id: 2,
    userId: 222,
    name: 'Alusy 17',
    price: 500,
    image: 'https://www.alusy.pl/CMS/Data/Produkty/FelgiAlu/n_96_d.jpg',
    description: 'Eleganckie alusy do golfika',
    locality: 'Poznań',
    categories: ['motorization', 'wheels'],
  },
  {
    id: 3,
    userId: 333,
    name: 'Monitor lg',
    price: 1000,
    image: 'https://www.lg.com/pl/images/monitory/MD05901438/gallery/XXM38H-B_251017_D03.jpg',
    description: 'Kozak monitor super okazja klient już z niemiec jedzie ale moge odwołać',
    locality: 'Kraków',
    categories: ['computers', 'monitors'],
  },
  {
    id: 4,
    userId: 444,
    name: 'Sikor',
    price: 5000,
    description: 'Dojebany sikor nie stać cie na takiego',
    locality: 'Warszawa',
    categories: ['watches'],
  },
];
