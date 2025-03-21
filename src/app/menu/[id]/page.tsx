"use client";

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { getMenuItemById } from '@/data/menuItems';
import { notFound, useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { ChevronLeft, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const router = useRouter();
  const { addToCart } = useCart();
  const productId = parseInt(params.id);
  const product = getMenuItemById(productId);

  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    product?.options?.[0] || null
  );

  if (!product) {
    return notFound();
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedOption
    });

    // Show notification or feedback
    alert('Product toegevoegd aan winkelwagen!');
  };

  const handleQuantityChange = (change: number) => {
    const newValue = quantity + change;
    if (newValue >= 1 && newValue <= 10) {
      setQuantity(newValue);
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <button
          onClick={() => router.back()}
          className="flex items-center text-[#995a3b] mb-8 hover:underline"
        >
          <ChevronLeft size={20} />
          <span>Terug naar menu</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden shadow">
            {product.image ? (
              <div className="relative h-[300px] w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                />
              </div>
            ) : (
              <div className="h-[300px] w-full bg-gray-200 flex items-center justify-center">
                <ShoppingBag size={64} className="text-gray-400" />
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-2xl font-bold text-[#403a34]">{product.name}</h1>
                {product.isPopular && (
                  <Badge variant="outline" className="bg-[#995a3b] text-white">
                    Populair
                  </Badge>
                )}
              </div>

              {product.description && (
                <p className="text-gray-700 mb-4">{product.description}</p>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {product.allergens && product.allergens.map(allergen => (
                  <span key={allergen} className="flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {allergen === 'melk' && '🥛'}
                    {allergen === 'ei' && '🥚'}
                    {allergen === 'gluten' && '🌾'}
                    {allergen === 'pinda' && '🥜'}
                    {allergen}
                  </span>
                ))}
              </div>

              <p className="text-xl font-bold text-[#403a34] mb-6">€ {product.price.toFixed(2)}</p>

              {/* Options */}
              {product.options && product.options.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Kies uw optie:</h3>
                  <RadioGroup
                    value={selectedOption || ''}
                    onValueChange={setSelectedOption}
                    className="space-y-2"
                  >
                    {product.options.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`option-${option}`} />
                        <Label htmlFor={`option-${option}`}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Aantal:</h3>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </Button>
                  <span className="w-8 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                className="w-full bg-[#995a3b] hover:bg-[#7a4730] text-white"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Toevoegen aan winkelwagen - € {(product.price * quantity).toFixed(2)}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductPage;
