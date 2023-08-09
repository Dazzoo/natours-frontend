import React from 'react';
import Image from 'next/image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';

function TourPage({ tour }) {
  const coverImgUrl = tour => `${process.env.API_BASE_URL}/img/tours/${tour.imageCover}`;

  return (
    <div className='rounded-[3px] bg-white box-shadow-standard relative font-lato'>
      <div className='clip-path-card before:bg-green-emerald-gradient before:absolute before:w-[100%] before:h-[100%] before:opacity-80 h-[85vh] '>
        <Image width={2000} height={1000} src={coverImgUrl(tour) || '/img/tour-2-cover.jpg'} />
      </div>
      <div className='flex w-[100%] justify-center text-white-alabaster'>
        <div
          className='absolute z-20 top-[16%]  w-[55rem] text-center 
'
        >
          <span className='  bg-green-emerald-gradient-85 text-[5.5rem] box-decoration-clone py-[1rem] px-[1.5rem] uppercase'>
            {tour.name}&nbsp;tour
          </span>
          <div className='flex justify-around  absolute w-[100%]   text-[1.8rem] uppercase font-semibold	p-[3rem]'>
            <div className=''>
              <span className='flex items-center'>
                <AiOutlineClockCircle className='h-[3rem] w-[3rem] ' />
                &nbsp;
                {tour.duration} days
              </span>
            </div>
            <div className=''>
              <span className='flex items-center'>
                <IoLocationOutline className='h-[3rem] w-[3rem] ' />
                &nbsp;
                {tour.startLocation.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourPage;
