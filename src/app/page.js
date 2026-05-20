import Banner from '@/components/Banner';
import FeaturedPet from '@/components/FeaturedPet';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedPet />
    </div>
  );
}
