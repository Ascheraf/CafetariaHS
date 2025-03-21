import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import QuickInfoSection from '@/components/home/QuickInfoSection';
import InfoSection from '@/components/home/InfoSection';
import MapSection from '@/components/home/MapSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <QuickInfoSection />
      <InfoSection />
      <MapSection />
    </MainLayout>
  );
}
