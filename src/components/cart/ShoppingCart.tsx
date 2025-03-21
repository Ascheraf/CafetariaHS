"use client";

import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export function ShoppingCart() {
  const {
    items,
    totalItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  const [isOpen, setIsOpen] = useState(false);

  const handleCheckout = () => {
    // Implement checkout logic
    alert('Bestelling wordt verwerkt! Bedankt voor uw aankoop!');
    clearCart();
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          onClick={() => setIsOpen(true)}
        >
          <ShoppingBag className="h-5 w-5" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-[#995a3b] text-white">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="text-2xl">Winkelwagen</SheetTitle>
        </SheetHeader>

        <div className="flex-grow overflow-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingBag className="h-16 w-16 text-gray-300" />
              <div>
                <p className="text-lg font-medium">Uw winkelwagen is leeg</p>
                <p className="text-sm text-gray-500">Voeg producten toe aan uw winkelwagen om te bestellen</p>
              </div>
              <SheetClose asChild>
                <Button
                  className="mt-4 bg-[#995a3b] hover:bg-[#7a4730] text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Bekijk menu
                </Button>
              </SheetClose>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.selectedOption}`} className="flex border-b pb-4">
                  {item.image ? (
                    <div className="flex-shrink-0 h-16 w-16 relative rounded overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 h-16 w-16 bg-gray-200 flex items-center justify-center rounded">
                      <ShoppingBag className="h-8 w-8 text-gray-400" />
                    </div>
                  )}

                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        {item.selectedOption && (
                          <p className="text-xs text-gray-500">{item.selectedOption}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus size={12} />
                        </Button>
                        <span className="mx-2 w-6 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={12} />
                        </Button>
                      </div>
                      <p className="font-medium text-sm">
                        € {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="border-t pt-4 flex-col gap-4">
            <div className="space-y-2 w-full">
              <div className="flex justify-between">
                <span>Subtotaal</span>
                <span>€ {totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Bezorgkosten</span>
                <span>€ 2.00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Totaal</span>
                <span>€ {(totalPrice + 2.00).toFixed(2)}</span>
              </div>
            </div>
            <Button
              className="w-full bg-[#995a3b] hover:bg-[#7a4730] text-white"
              onClick={handleCheckout}
            >
              Afrekenen
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={clearCart}
            >
              Winkelwagen leegmaken
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
