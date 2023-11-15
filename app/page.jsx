import Image from 'next/image';
import useSWR from "swr";
import TourCard from '@/components/TourCard';
import toursApi from '@/api/tours/toursApi';

export default async function Home(props) {
  // const { data: tours, error } = useSWR('getTours', async () => await toursApi.getTours())

  const tours = await toursApi.getTours();

  return (
    <div className='font-lato'>
      <main className='bg-white-alabaster  flex py-32 px-24 overflow-hidden	 '>
        <div className=' w-[100%] min-h-[90vh] flex  justify-center overflow-hidden	 flex-wrap'>
          {tours.map(tour => (
            <TourCard key={tour._id} tour={tour} />
          ))}
        </div>
      </main>
    </div>
  );
}
