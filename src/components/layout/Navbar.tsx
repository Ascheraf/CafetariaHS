"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ShoppingCart } from '@/components/cart/ShoppingCart';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Cafetaria Hollands Spoor"
            width={120}
            height={50}
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-[#403a34] hover:text-[#995a3b] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="text-[#403a34] hover:text-[#995a3b] transition-colors"
          >
            Bestel online
          </Link>
          <Link
            href="/over-ons"
            className="text-[#403a34] hover:text-[#995a3b] transition-colors"
          >
            Over ons
          </Link>
          <Link
            href="/contact"
            className="text-[#403a34] hover:text-[#995a3b] transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="text-[#403a34] hover:text-[#995a3b] transition-colors"
          >
            Login
          </Link>

          {/* Shopping Cart */}
          <div className="ml-4">
            <ShoppingCart />
          </div>
        </nav>

        <div className="flex md:hidden items-center space-x-4">
          {/* Mobile Shopping Cart */}
          <ShoppingCart />

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-6 pt-6">
                <Link
                  href="/"
                  className="text-xl font-medium text-[#403a34] hover:text-[#995a3b] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/menu"
                  className="text-xl font-medium text-[#403a34] hover:text-[#995a3b] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Bestel online
                </Link>
                <Link
                  href="/over-ons"
                  className="text-xl font-medium text-[#403a34] hover:text-[#995a3b] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Over ons
                </Link>
                <Link
                  href="/contact"
                  className="text-xl font-medium text-[#403a34] hover:text-[#995a3b] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/login"
                  className="text-xl font-medium text-[#403a34] hover:text-[#995a3b] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
