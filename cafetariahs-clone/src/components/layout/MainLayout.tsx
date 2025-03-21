"use client";

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AgeVerificationModal from '../AgeVerificationModal';
import { CartProvider } from '@/context/CartContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <AgeVerificationModal />
      </div>
    </CartProvider>
  );
};

export default MainLayout;
