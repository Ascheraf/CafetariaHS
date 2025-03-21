"use client";

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { menuCategories, menuItems, getMenuItemsByCategory } from '@/data/menuItems';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('hs-special');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = searchQuery
    ? menuItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : getMenuItemsByCategory(activeCategory);

  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Cafetaria Hollands spoor</h1>

        <div className="flex items-center justify-center mb-8 relative">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Zoeken in menu..."
              className="pl-10 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Categories Menu */}
          <div className="md:col-span-1">
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h2 className="text-xl font-bold mb-4">Menu Categorieën</h2>
              <ul className="space-y-2">
                {menuCategories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => {
                        setActiveCategory(category.id);
                        setSearchQuery('');
                      }}
                      className={`block w-full text-left p-2 rounded ${
                        activeCategory === category.id
                          ? 'bg-[#995a3b] text-white'
                          : 'hover:bg-gray-100 text-[#403a34] hover:text-[#995a3b]'
                      } transition-colors`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Allergenen Info</h2>
              <div className="text-sm text-gray-700 space-y-1">
                <p>🥛 melk</p>
                <p>🥚 ei</p>
                <p>🌾 gluten</p>
                <p>🥜 pinda</p>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="md:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow">
              {searchQuery ? (
                <h2 className="text-2xl font-bold mb-6 text-[#403a34]">
                  Zoekresultaten voor "{searchQuery}"
                </h2>
              ) : (
                <h2 className="text-2xl font-bold mb-6 text-[#403a34]">
                  {menuCategories.find(c => c.id === activeCategory)?.name || ''}
                </h2>
              )}

              {filteredItems.length === 0 ? (
                <p className="text-gray-500">Geen items gevonden.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredItems.map((product) => (
                    <Link href={`/menu/${product.id}`} key={product.id}>
                      <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex p-4">
                          <div className="flex-1">
                            <CardTitle className="text-lg font-bold mb-1 group-hover:text-[#995a3b]">
                              {product.name}
                              {product.isPopular && (
                                <Badge variant="outline" className="ml-2 bg-[#995a3b] text-white">
                                  Populair
                                </Badge>
                              )}
                            </CardTitle>
                            {product.description && (
                              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                            )}
                            {product.options && product.options.length > 0 && (
                              <p className="text-xs text-gray-500 mb-4">
                                Keuze uit: {product.options.join(', ')}
                              </p>
                            )}
                            <div className="mt-2 flex flex-wrap gap-1">
                              {product.allergens && product.allergens.map(allergen => (
                                <span key={allergen} className="text-xs text-gray-500">
                                  {allergen === 'melk' && '🥛'}
                                  {allergen === 'ei' && '🥚'}
                                  {allergen === 'gluten' && '🌾'}
                                  {allergen === 'pinda' && '🥜'}
                                </span>
                              ))}
                            </div>
                            <p className="font-medium mt-2">€ {product.price.toFixed(2)}</p>
                          </div>
                          {product.image && (
                            <div className="ml-4 flex-shrink-0">
                              <Image
                                src={product.image}
                                alt={product.name}
                                width={80}
                                height={80}
                                className="rounded-md object-cover"
                              />
                            </div>
                          )}
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
