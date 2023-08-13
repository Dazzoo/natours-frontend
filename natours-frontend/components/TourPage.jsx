import React from 'react';
import Image from 'next/image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';

function TourPage({ tour }) {
  const coverImgUrl = tour => `${process.env.API_BASE_URL}/img/tours/${tour.imageCover}`;

  return (
    <div className='relative'>
      <div className='rounded-[3px] bg-transperent absolute font-lato'>
        <div className='clip-path-card before:bg-green-emerald-gradient before:absolute before:w-[100%] before:h-[100%] before:opacity-80 h-[25%] max-h-[85vh] '>
          <Image width={2000} height={4000} src={coverImgUrl(tour) || '/img/tour-2-cover.jpg'} />
        </div>
        <div className='flex w-[100%] justify-center text-white-alabaster'>
          <div className='absolute z-20 top-[16%] w-[55rem] max-sm:w-[30rem] text-center '>
            <h1 className='text-[5.5rem] max-sm:text-[3rem] '>
              <span className='  bg-green-emerald-gradient-85 box-decoration-clone py-[1rem] px-[1.5rem] uppercase'>
                {tour.name}&nbsp;tour
              </span>
            </h1>
            <div className='flex justify-around  absolute w-[100%]   text-[1.8rem] max-sm-text-[1rem] uppercase font-semibold	p-[3rem]'>
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
        <div className='black-border w-[50%] h-[100%] flex flex-col  items-center mt-[4rem] min-h-[80rem]'>
          <div>
            <div className=''>Quick facts</div>
            <div>
              <span>Next date</span>
              <span>July 2021</span>
            </div>
            <div>
              <span>Difficulty</span>
              <span>July 2021</span>
            </div>
            <div>
              <span>Participants</span>
              <span>July 2021</span>
            </div>
            <div>
              <span>Rating</span>
              <span>July 2021</span>
            </div>
          </div>
          <div>
            <div className=''>Your tour guides</div>
            <div>
              <span>Lead guide</span>
              <span>July 2021</span>
            </div>
            <div>
              <span>Tour guide</span>
              <span>July 2021</span>
            </div>
            <div>
              <span>Tour guide</span>
              <span>July 2021</span>
            </div>
          </div>
        </div>
      </div>
      <div className='black-border h-[200rem] flex justify-between'>
        <div className=' w-[50%] bg-white-alabaster h-[100%]'>
          <div className=' black-border w-[50%]'></div>
        </div>
        <div className=' w-[50%] '></div>
      </div>
    </div>
  );
}

export default TourPage;
