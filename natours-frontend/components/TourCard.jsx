import React from 'react';
import Image from 'next/image';
import { IoLocationOutline } from 'react-icons/io5';
import { IoFlagOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { AiOutlineCalendar } from 'react-icons/ai';
import ButtonGreenSmall from '@/components/ButtonGreenSmall';

function TourCard({ tour, key }) {
  const Difficulty = tour => `${tour.difficulty}-${tour.duration}-days-tour`;
  const Description = tour => tour.description.slice(0, 80);
  const coverImgUrl = tour => `${process.env.API_BASE_URL}/img/tours/${tour.imageCover}`;
  const RatingAverage = tour => tour.ratingsAverage?.toFixed(2);
  const startDate = tour => {
    const date = new Date(tour.startDates[0]);
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });
    return `${month} ${year}`;
  };

  return (
    <div
      key={key}
      className='rounded-[3px]  w-[25%] min-w-[28rem] max-w-[36rem] mx-[3rem] my-[4rem] bg-white box-shadow-standard relative font-lato'
    >
      <div className='clip-path-card before:bg-green-emerald-gradient before:absolute before:w-[100%] before:h-[100%] before:opacity-70 h-[21rem] '>
        <Image
          width={500}
          height={500}
          src={coverImgUrl(tour) || '/img/tour-2-cover.jpg'}
          alt={tour.name}
        />
      </div>
      <h3 className='absolute z-20 top-[14%] xl:top-[20%] 2xl:top-[27%] right-[2rem] w-[70%]  text-right '>
        <span className='text-white-alabaster bg-green-emerald-gradient-85  text-[2.75rem] box-decoration-clone py-[1rem] px-[1.5rem] uppercase'>
          {tour.name}
        </span>
      </h3>
      <div className='mx-[3rem] my-[2.5rem]'>
        <div className='uppercase text-[1.2rem] font-bold	text-grey-boulder'>{Difficulty(tour)}</div>
        <div className='mt-[1rem] text-[1.5rem] italic'>{Description(tour)}...</div>
        <div className='text-[1.3rem]'>
          <div className='mt-[1rem] flex justify-between '>
            <span className='w-[45%]  inline-flex items-center'>
              <span className='inline-flex mr-[0.3rem]'>
                <IoLocationOutline className='h-[2rem] w-[2rem] fill-green-emerald stroke-green-emerald stroke-3' />
              </span>
              <span>{tour.startLocation.description}</span>
            </span>
            <span className='w-[45%] inline-flex items-center'>
              <span className='inline-flex mr-[0.3rem]'>
                <AiOutlineCalendar className='h-[2rem] w-[2rem] fill-green-emerald stroke-green-emerald' />
              </span>
              <span>{startDate(tour)}</span>
            </span>
          </div>
          <div className='mt-[1rem] flex justify-between'>
            <span className='w-[45%] inline-flex items-center'>
              <span className='inline-flex mr-[0.3rem]'>
                <IoFlagOutline className='h-[2rem] w-[2rem] fill-green-emerald stroke-green-emerald' />
              </span>
              <span>{tour.locations.length} stops</span>
            </span>
            <span className='w-[45%] inline-flex items-center'>
              <span className='inline-flex mr-[0.3rem]'>
                <IoPersonOutline className='h-[2rem] w-[2rem] fill-green-emerald stroke-green-emerald' />
              </span>
              <span>{tour.maxGroupSize} people</span>
            </span>
          </div>
        </div>
      </div>
      <div className='bg-white-alabaster py-[2.5rem] px-[3rem] flex justify-between text-[1.4rem]'>
        <div
          className='
'
        >
          <div>
            <span className=' font-bold'>${tour.price}</span>
            <span className='text-grey-dusty'> per person</span>
          </div>

          <div className='mt-[1rem]'>
            <span className=' font-bold'>{RatingAverage(tour)}</span>
            <span className='text-grey-dusty'> rating({tour.ratingsQuantity})</span>
          </div>
        </div>
        <ButtonGreenSmall value='Details' href={`/tour/${tour.slug}`} />
      </div>
    </div>
  );
}

export default TourCard;
