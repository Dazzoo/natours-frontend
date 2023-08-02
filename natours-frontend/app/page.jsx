import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TourCard from '@/components/TourCard';

export default function Home() {
  return (
    <div className='font-lato'>
      <main className='bg-white-alabaster  flex py-32 px-24 overflow-auto '>
        <div className=' w-[100%] flex  justify-center overflow-auto flex-wrap'>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </div>
      </main>
    </div>
  );
}
