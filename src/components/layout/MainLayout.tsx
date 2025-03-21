import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AgeVerificationModal from '../AgeVerificationModal';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <AgeVerificationModal />
    </div>
  );
};

export default MainLayout;
