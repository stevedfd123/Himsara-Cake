export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Cakes' | 'Cupcakes' | 'Cookies' | 'Pastries';
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Midnight Blue Velvet',
    description: 'A deep blue velvet cake with white chocolate ganache and premium cream cheese frosting.',
    price: 8500,
    image: 'https://imgur.com/p6Ps2Uk.jpg',
    category: 'Cakes',
  },
  {
    id: '2',
    name: 'Sky Blue Ombre',
    description: 'Layers of vanilla sponge with a spectrum of blue buttercream and delicate macaron accents.',
    price: 7200,
    image: 'https://imgur.com/IlRovxh.jpg',
    category: 'Cakes',
  },
  {
    id: '3',
    name: 'Blueberry Cloud Cupcakes',
    description: 'Fluffy vanilla cupcakes filled with fresh blueberry compote and topped with blue swirl frosting.',
    price: 450,
    image: 'https://imgur.com/gwoZYSp.jpg',
    category: 'Cupcakes',
  },
  {
    id: '4',
    name: 'Sapphire Royal Cookies',
    description: 'Crisp almond cookies with intricate hand-painted sapphire blue royal icing patterns.',
    price: 250,
    image: 'https://imgur.com/78iZAIn.jpg',
    category: 'Cupcakes',
  },
  {
    id: '5',
    name: 'Vanilla Bean Éclair',
    description: 'French style pastry filled with rich vanilla bean custard and topped with blue white chocolate.',
    price: 650,
    image: 'https://imgur.com/SevrgHb.jpg',
    category: 'Cupcakes',
  },
  {
    id: '6',
    name: 'Ocean Breeze Macarons',
    description: 'Delicate almond meringue shells with a salted caramel blue filling. Set of 6.',
    price: 1800,
    image: 'https://imgur.com/0NTIhh5.jpg',
    category: 'Cupcakes',
  }
];
