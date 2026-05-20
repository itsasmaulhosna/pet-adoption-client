import Banner from '@/components/HomePage/Banner';
import ExtraSections from '@/components/HomePage/ExtraSection';
import FeaturedPet from '@/components/HomePage/FeaturedPet';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedPet />
      <ExtraSections />
    </div>
  );
}
