"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const AgeVerificationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already verified their age
    const hasVerified = localStorage.getItem('age-verified');

    if (!hasVerified) {
      setIsOpen(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('age-verified', 'true');
    setIsOpen(false);
  };

  const handleDeny = () => {
    // Redirect to a safe website or show a message
    window.location.href = 'https://www.google.com';
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md" onInteractOutside={(e) => e.preventDefault()}>
        <DialogTitle className="text-2xl font-bold text-center mb-4">
          Leeftijdscontrole
        </DialogTitle>
        <div className="space-y-4">
          <p className="text-center">
            Wij verkopen (ook) leeftijdsgebonden artikelen, bijv. alcoholhoudende dranken. Deze artikelen worden enkel afgeleverd aan personen die 18 jaar of ouder zijn. Bij aflevering van leeftijdsgebonden artikelen vragen wij altijd om legitimatie. Door op "Ja" te klikken bevestig je 18 jaar of ouder te zijn bij aankoop van leeftijdsgebonden artikelen.
          </p>
          <div className="flex justify-center space-x-4 pt-4">
            <Button
              variant="outline"
              className="w-32 bg-black text-white hover:bg-gray-800 hover:text-white"
              onClick={handleDeny}
            >
              Nee
            </Button>
            <Button
              className="w-32 bg-black text-white hover:bg-gray-800"
              onClick={handleConfirm}
            >
              Ja
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgeVerificationModal;
