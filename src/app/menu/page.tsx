import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const productCategories = [
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
  { id: 'tosti', name: 'Tosti' },
  { id: 'hot-wings', name: 'Hot wings' },
  { id: 'milkshakes', name: 'Milkshakes' },
  { id: 'ben-jerrys', name: "Ben & Jerry's 100 ml" },
  { id: 'verpakking', name: 'VERPAKKING' },
  { id: 'falafel', name: 'Falafel' },
  { id: 'kapsalon', name: 'KAPSALON' },
  { id: 'wraps', name: 'WRAPS' },
  { id: 'turkse-pizza', name: 'TURKSE PIZZA' },
  { id: 'schotels', name: 'SCHOTELS' },
  { id: 'warme-dranken', name: 'WARME DRANKEN' },
];

// Sample products for demo
const products = [
  {
    id: 1,
    name: 'Cheeseburger',
    category: 'hs-special',
    description: 'Inclusief speciaal saus',
    price: 5.50,
    options: ['Gebakken ei', 'Kaas'],
    image: 'https://ext.same-assets.com/358449976/3874740806.png'
  },
  {
    id: 2,
    name: 'Friet',
    category: 'hs-special',
    description: '',
    price: 2.50,
    options: ['Friet', 'Friet groot', 'Raspatat', 'Raspatat groot', 'Geen', 'Mayonaise'],
    image: ''
  },
  {
    id: 3,
    name: 'Kapsalon, Groot',
    category: 'hs-special',
    description: '',
    price: 8.00,
    options: ['Geen saus', 'Knoflooksaus', 'Sambal', 'Knoflook en Sambal', 'Kaas', 'Extra vlees'],
    image: 'https://ext.same-assets.com/2868292482/3268540329.png'
  },
  {
    id: 4,
    name: 'Kipburger',
    category: 'hs-special',
    description: 'Inclusief speciaal saus',
    price: 4.75,
    options: ['Gebakken ei', 'Kaas'],
    image: 'https://ext.same-assets.com/2748561565/2879049261.png'
  },
  {
    id: 5,
    name: 'Broodje Döner',
    category: 'hs-special',
    description: '',
    price: 5.00,
    options: ['Geen saus', 'Knoflooksaus', 'Sambal', 'Knoflook en Sambal', 'Mayonaise', 'Ketchup'],
    image: ''
  },
];

export default function MenuPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Cafetaria Hollands spoor</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Categories Menu */}
          <div className="md:col-span-1">
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h2 className="text-xl font-bold mb-4">Menu Categorieën</h2>
              <ul className="space-y-2">
                {productCategories.map((category) => (
                  <li key={category.id}>
                    <a
                      href={`#${category.id}`}
                      className="block p-2 hover:bg-gray-100 rounded text-[#403a34] hover:text-[#995a3b] transition-colors"
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Filters</h2>
              <div className="text-sm text-gray-700">
                <h3 className="font-medium mb-2">Allergenen</h3>
                <p className="text-gray-500">Allergenenpaneel wordt gemaakt...</p>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="md:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 id="hs-special" className="text-2xl font-bold mb-6 text-[#403a34]">HS special</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="flex p-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold mb-1">
                          {product.name}
                        </CardTitle>
                        {product.description && (
                          <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                        )}
                        {product.options.length > 0 && (
                          <p className="text-xs text-gray-500 mb-4">
                            Keuze uit: {product.options.join(', ')}.
                          </p>
                        )}
                        <p className="font-medium mt-auto">€ {product.price.toFixed(2)}</p>
                      </div>
                      {product.image && (
                        <div className="ml-4 flex-shrink-0">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={80}
                            height={80}
                            className="rounded-md"
                          />
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Sample placeholders for other categories */}
              <div className="mt-12">
                <h2 id="belegde-broodjes" className="text-2xl font-bold mb-6 text-[#403a34]">Belegde broodjes</h2>
                <p className="text-gray-500">Producten worden geladen...</p>
              </div>

              <div className="mt-12">
                <h2 id="friet" className="text-2xl font-bold mb-6 text-[#403a34]">Friet</h2>
                <p className="text-gray-500">Producten worden geladen...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
