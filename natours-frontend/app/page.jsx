import Image from 'next/image';
import TourCard from '@/components/TourCard';
import getTours from '@/api/tours/getTours';

// export async function getStaticProps() {
//   console.log('data');

//   const data = await getTours();

//   return {
//     props: { data: '123' },
//   };
// }

export default async function Home() {
  const tours = await getTours();

  return (
    <div className='font-lato'>
      <main className='bg-white-alabaster  flex py-32 px-24 overflow-auto '>
        <div className=' w-[100%] min-h-[90vh] flex  justify-center overflow-auto flex-wrap'>
          {tours?.map(tour => (
            <TourCard key={tour._id} tour={tour} />
          ))}
        </div>
      </main>
    </div>
  );
}
