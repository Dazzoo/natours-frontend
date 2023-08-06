import Image from 'next/image';

import TourCard from '@/components/TourCard';

export default function Home(props) {
  return (
    <div className='font-lato'>
      <main className='bg-white-alabaster  flex py-32 px-24 overflow-auto '>
        {props.one}
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
export async function getStaticProps() {
  console.log('data');

  const data = await getTours();

  return {
    props: {
      one: 'one',
    },
  };
}
