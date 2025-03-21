export interface MenuItem {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  options?: string[];
  image?: string;
  isPopular?: boolean;
  allergens?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
}

export const menuCategories: MenuCategory[] = [
  { id: 'hs-special', name: 'HS special' },
  { id: 'belegde-broodjes', name: 'Belegde broodjes' },
  { id: 'friet', name: 'Friet' },
  { id: 'broodjes', name: 'Broodjes' },
  { id: 'snacks', name: 'Snacks' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'menus', name: "Menu's" },
  { id: 'dranken', name: 'HS dranken' },
  { id: 'frisdranken', name: 'HS frisdranken' },
  { id: 'sauzen', name: 'Sauzen' },
  { id: 'hot-wings', name: 'Hot wings' },
  { id: 'kapsalon', name: 'KAPSALON' },
  { id: 'wraps', name: 'WRAPS' },
  { id: 'turkse-pizza', name: 'TURKSE PIZZA' },
  { id: 'schotels', name: 'SCHOTELS' },
];

export const menuItems: MenuItem[] = [
  // HS special
  {
    id: 1,
    name: 'Cheeseburger',
    category: 'hs-special',
    description: 'Inclusief speciaal saus',
    price: 5.50,
    options: ['Gebakken ei', 'Kaas'],
    image: 'https://ext.same-assets.com/358449976/3874740806.png',
    isPopular: true,
    allergens: ['gluten', 'melk', 'ei']
  },
  {
    id: 2,
    name: 'Friet',
    category: 'hs-special',
    description: '',
    price: 2.50,
    options: ['Friet', 'Friet groot', 'Raspatat', 'Raspatat groot', 'Geen', 'Mayonaise'],
    allergens: ['gluten']
  },
  {
    id: 3,
    name: 'Kapsalon, Groot',
    category: 'hs-special',
    description: '',
    price: 8.00,
    options: ['Geen saus', 'Knoflooksaus', 'Sambal', 'Knoflook en Sambal', 'Kaas', 'Extra vlees'],
    image: 'https://ext.same-assets.com/2868292482/3268540329.png',
    isPopular: true,
    allergens: ['gluten', 'melk']
  },
  {
    id: 4,
    name: 'Kipburger',
    category: 'hs-special',
    description: 'Inclusief speciaal saus',
    price: 4.75,
    options: ['Gebakken ei', 'Kaas'],
    image: 'https://ext.same-assets.com/2748561565/2879049261.png',
    allergens: ['gluten', 'ei']
  },
  {
    id: 5,
    name: 'Broodje Döner',
    category: 'hs-special',
    description: '',
    price: 5.00,
    options: ['Geen saus', 'Knoflooksaus', 'Sambal', 'Knoflook en Sambal', 'Mayonaise', 'Ketchup'],
    allergens: ['gluten']
  },
  {
    id: 6,
    name: 'Halve kip',
    category: 'hs-special',
    description: '',
    price: 6.00,
    options: ['Geen saus', 'Mayo', 'Ketchup', 'Curry', 'Pindasaus', 'Knoflooksaus'],
    allergens: []
  },
  {
    id: 7,
    name: 'Hotwings 10 stuks',
    category: 'hs-special',
    description: '',
    price: 7.50,
    options: ['Geen saus', 'Mayonaise', 'Ketchup', 'Curry', 'Pindasaus', 'Chilisaus'],
    allergens: ['gluten']
  },

  // Belegde broodjes
  {
    id: 101,
    name: 'Broodje gekookte ei',
    category: 'belegde-broodjes',
    description: '',
    price: 2.00,
    options: ['Geen', 'Mayonaise', 'Ketchup', 'Curry', 'Pindasaus', 'Chilisaus'],
    image: 'https://ext.same-assets.com/1370557096/3519374397.png',
    allergens: ['gluten', 'ei']
  },
  {
    id: 102,
    name: 'Broodje jonge kaas',
    category: 'belegde-broodjes',
    description: '',
    price: 2.00,
    options: ['Geen', 'Mayonaise', 'Ketchup', 'Curry', 'Pindasaus', 'Chilisaus'],
    allergens: ['gluten', 'melk']
  },
  {
    id: 103,
    name: 'Broodje gebakken ei',
    category: 'belegde-broodjes',
    description: '',
    price: 2.00,
    options: ['Geen', 'Mayonaise', 'Ketchup', 'Curry', 'Pindasaus', 'Chilisaus'],
    image: 'https://ext.same-assets.com/358449976/3874740806.png',
    allergens: ['gluten', 'ei']
  },
  {
    id: 104,
    name: 'Broodje gezond',
    category: 'belegde-broodjes',
    description: '',
    price: 3.00,
    options: ['Geen', 'Mayonaise', 'Ketchup', 'Curry', 'Pindasaus', 'Chilisaus'],
    image: 'https://ext.same-assets.com/358449976/3874740806.png',
    allergens: ['gluten', 'melk']
  },
  {
    id: 105,
    name: 'Broodje gebakken ei kaas',
    category: 'belegde-broodjes',
    description: '',
    price: 2.50,
    options: ['Geen', 'Mayonaise', 'Ketchup', 'Curry', 'Pindasaus', 'Chilisaus'],
    image: 'https://ext.same-assets.com/358449976/3874740806.png',
    allergens: ['gluten', 'ei', 'melk']
  },

  // Friet
  {
    id: 201,
    name: 'Friet',
    category: 'friet',
    description: '',
    price: 2.50,
    options: ['Friet', 'Friet groot', 'Raspatat', 'Raspatat groot', 'Geen', 'Mayonaise'],
    allergens: ['gluten']
  },
  {
    id: 202,
    name: 'Friet Groot',
    category: 'friet',
    description: '',
    price: 3.50,
    options: ['Geen', 'Mayonaise', 'Ketchup', 'Curry', 'Pindasaus', 'Chilisaus'],
    allergens: ['gluten']
  },
  {
    id: 203,
    name: 'Raspatat',
    category: 'friet',
    description: '',
    price: 2.75,
    options: ['Geen', 'Mayonaise', 'Ketchup', 'Curry', 'Pindasaus', 'Chilisaus'],
    allergens: ['gluten']
  },
  {
    id: 204,
    name: 'Raspatat Groot',
    category: 'friet',
    description: '',
    price: 3.75,
    options: ['Geen', 'Mayonaise', 'Ketchup', 'Curry', 'Pindasaus', 'Chilisaus'],
    allergens: ['gluten']
  },

  // Broodjes
  {
    id: 301,
    name: 'Broodje sate',
    category: 'broodjes',
    description: 'Inclusief satsaus',
    price: 2.00,
    options: ['Geen', 'Mayonaise', 'Ketchup', 'Curry', 'Pindasaus', 'Chilisaus'],
    image: 'https://ext.same-assets.com/4172489862/2082988379.png',
    allergens: ['gluten', 'pinda']
  },
  {
    id: 302,
    name: 'Broodje Döner',
    category: 'broodjes',
    description: '',
    price: 5.00,
    options: ['Geen saus', 'Knoflooksaus', 'Sambal', 'Knoflook en Sambal', 'Mayonaise', 'Ketchup'],
    allergens: ['gluten']
  },
  {
    id: 303,
    name: 'Broodje Shoarma',
    category: 'broodjes',
    description: '',
    price: 6.00,
    options: ['Geen saus', 'Knoflooksaus', 'Sambal', 'Knoflook en Sambal', 'Mayonaise', 'Ketchup'],
    allergens: ['gluten']
  },

  // Snacks
  {
    id: 401,
    name: 'KipNuggets 9st',
    category: 'snacks',
    description: '',
    price: 4.00,
    allergens: ['gluten']
  },
  {
    id: 402,
    name: 'KipNuggets 6st',
    category: 'snacks',
    description: '',
    price: 3.00,
    allergens: ['gluten']
  },
  {
    id: 403,
    name: 'Sate stick',
    category: 'snacks',
    description: 'Inclusief satsaus',
    price: 1.50,
    image: 'https://ext.same-assets.com/4172489862/2082988379.png',
    allergens: ['pinda']
  },
  {
    id: 404,
    name: 'Kip frikandel',
    category: 'snacks',
    description: '',
    price: 2.50,
    options: ['Geen', 'Mayonaise', 'Ketchup', 'Curry', 'Pindasaus', 'Chilisaus'],
    image: 'https://ext.same-assets.com/1370557096/3519374397.png',
    allergens: ['gluten']
  },
  {
    id: 405,
    name: 'Kaassouffle',
    category: 'snacks',
    description: '',
    price: 2.50,
    options: ['Geen', 'Mayonaise', 'Ketchup', 'Curry', 'Pindasaus', 'Chilisaus'],
    image: 'https://ext.same-assets.com/1370557096/3519374397.png',
    allergens: ['gluten', 'melk']
  },
  {
    id: 406,
    name: 'Rundvlees kroket',
    category: 'snacks',
    description: '',
    price: 2.50,
    options: ['Geen', 'Mayonaise', 'Ketchup', 'Curry', 'Pindasaus', 'Chilisaus'],
    image: 'https://ext.same-assets.com/1370557096/3519374397.png',
    allergens: ['gluten']
  },

  // Burgers
  {
    id: 501,
    name: 'Special Spicy Burger',
    category: 'burgers',
    description: 'Met gebakken ei, jonge kaas, sur. peper en hamburgersaus',
    price: 6.75,
    options: ['Kaas'],
    allergens: ['gluten', 'ei', 'melk']
  },
  {
    id: 502,
    name: 'Hamburger',
    category: 'burgers',
    description: 'Inclusief speciaal saus',
    price: 5.00,
    options: ['Gebakken ei', 'Kaas'],
    image: 'https://ext.same-assets.com/2748561565/2879049261.png',
    allergens: ['gluten']
  },
  {
    id: 503,
    name: 'Kipburger',
    category: 'burgers',
    description: 'Inclusief speciaal saus',
    price: 4.75,
    options: ['Gebakken ei', 'Kaas'],
    image: 'https://ext.same-assets.com/2748561565/2879049261.png',
    allergens: ['gluten']
  },
  {
    id: 504,
    name: 'Cheeseburger',
    category: 'burgers',
    description: 'Inclusief speciaal saus',
    price: 5.50,
    options: ['Gebakken ei', 'Kaas'],
    image: 'https://ext.same-assets.com/358449976/3874740806.png',
    allergens: ['gluten', 'melk']
  },
  {
    id: 505,
    name: 'Eggburger',
    category: 'burgers',
    description: 'Inclusief speciaal saus',
    price: 5.75,
    options: ['Kaas'],
    image: 'https://ext.same-assets.com/1370557096/3519374397.png',
    allergens: ['gluten', 'ei']
  },
  {
    id: 506,
    name: 'Hamburger ei/kaas',
    category: 'burgers',
    description: '',
    price: 6.00,
    options: ['Gebakken ei', 'Kaas'],
    image: 'https://ext.same-assets.com/358449976/3874740806.png',
    allergens: ['gluten', 'ei', 'melk']
  },
  {
    id: 507,
    name: 'Double burger',
    category: 'burgers',
    description: 'Inclusief speciaal saus',
    price: 7.50,
    options: ['Gebakken ei', 'Kaas'],
    image: 'https://ext.same-assets.com/2748561565/2879049261.png',
    allergens: ['gluten']
  },
  {
    id: 508,
    name: 'Double cheese burger',
    category: 'burgers',
    description: 'Inclusief speciaal saus',
    price: 8.00,
    options: ['Gebakken ei', 'Kaas'],
    image: 'https://ext.same-assets.com/358449976/3874740806.png',
    allergens: ['gluten', 'melk']
  },
  {
    id: 509,
    name: 'HS burger',
    category: 'burgers',
    description: 'Inclusief speciaal saus, kaas en gebakken ei',
    price: 8.50,
    image: 'https://ext.same-assets.com/2748561565/2879049261.png',
    isPopular: true,
    allergens: ['gluten', 'ei', 'melk']
  },
  {
    id: 510,
    name: 'Spicy chicken burger',
    category: 'burgers',
    description: '',
    price: 5.25,
    allergens: ['gluten']
  },

  // Menus
  {
    id: 601,
    name: 'KIDS MENU',
    category: 'menus',
    description: '4 nuggets incl. patatje en fristi',
    price: 7.50,
    options: ['Coca-Cola', 'Coca-Cola Zero', 'Cola Cherry', 'Fanta orange', 'Fanta cassis', 'Fernandes geel'],
    allergens: ['gluten']
  },
  {
    id: 602,
    name: 'Saté menu 6st.',
    category: 'menus',
    description: '',
    price: 11.75,
    options: ['Coca-Cola', 'Coca-Cola Zero', 'Cola Cherry', 'Fanta orange', 'Fanta cassis', 'Fernandes geel'],
    allergens: ['pinda', 'gluten']
  },
  {
    id: 603,
    name: 'Nuggets Menu 9st',
    category: 'menus',
    description: '',
    price: 8.50,
    allergens: ['gluten']
  },

  // Kapsalon
  {
    id: 701,
    name: 'Kapsalon, Groot',
    category: 'kapsalon',
    description: '',
    price: 8.00,
    options: ['Geen saus', 'Knoflooksaus', 'Sambal', 'Knoflook en Sambal', 'Kaas', 'Extra vlees'],
    image: 'https://ext.same-assets.com/2868292482/3268540329.png',
    isPopular: true,
    allergens: ['gluten', 'melk']
  },
  {
    id: 702,
    name: 'Kapsalon, Klein',
    category: 'kapsalon',
    description: '',
    price: 6.00,
    options: ['Geen saus', 'Knoflooksaus', 'Sambal', 'Knoflook en Sambal', 'Kaas', 'Extra vlees'],
    image: 'https://ext.same-assets.com/2868292482/3268540329.png',
    allergens: ['gluten', 'melk']
  },
  {
    id: 703,
    name: 'Kapsalon groot shoarma',
    category: 'kapsalon',
    description: '',
    price: 9.00,
    options: ['Geen saus', 'Knoflooksaus', 'Sambal', 'Knoflook en Sambal', 'Kaas', 'Extra vlees'],
    image: 'https://ext.same-assets.com/2868292482/3268540329.png',
    allergens: ['gluten', 'melk']
  },

  // Hot Wings
  {
    id: 801,
    name: 'Hotwings 6 stuks',
    category: 'hot-wings',
    description: '',
    price: 5.00,
    options: ['Geen saus', 'Mayonaise', 'Ketchup', 'Curry', 'Pindasaus', 'Chilisaus'],
    allergens: ['gluten']
  },
  {
    id: 802,
    name: 'Hotwings 10 stuks',
    category: 'hot-wings',
    description: '',
    price: 7.50,
    options: ['Geen saus', 'Mayonaise', 'Ketchup', 'Curry', 'Pindasaus', 'Chilisaus'],
    allergens: ['gluten']
  },
];

export function getMenuItemsByCategory(categoryId: string): MenuItem[] {
  return menuItems.filter(item => item.category === categoryId);
}

export function getMenuItemById(id: number): MenuItem | undefined {
  return menuItems.find(item => item.id === id);
}

export function getPopularItems(): MenuItem[] {
  return menuItems.filter(item => item.isPopular);
}
