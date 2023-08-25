import Image from 'next/image';
import TourCard from '@/components/TourCard';
import toursApi from '@/api/tours/toursApi';
import jwtParser from '@/utility/jwtParser';

export default async function Home(props) {
  const tours = await toursApi.getTours(jwtParser());

  return (
    <div className='font-lato'>
      <main className='bg-white-alabaster  flex py-32 px-24 overflow-auto '>
        <div className=' w-[100%] min-h-[90vh] flex  justify-center overflow-auto flex-wrap'>
          {tours.map(tour => (
            <TourCard key={tour._id} tour={tour} />
          ))}
        </div>
      </main>
    </div>
  );
}
