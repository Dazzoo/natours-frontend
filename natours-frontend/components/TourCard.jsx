import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { IoFlagOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { AiOutlineCalendar } from 'react-icons/ai';

function TourCard(props) {
  return (
    <div className='rounded-[3px]  w-[25%] min-w-[28rem] max-w-[36rem] mx-[3rem] my-[4rem] bg-white box-shadow-standard relative font-lato'>
      <div className='clip-path-card before:bg-green-emerald-gradient before:absolute before:w-[100%] before:h-[100%] before:opacity-70 '>
        <img src='./img/tour-2-cover.jpg'></img>
      </div>
      <h3 className='absolute z-20 top-[14%] xl:top-[20%] 2xl:top-[27%] right-[2rem] w-[70%]  text-right '>
        <span className='text-white-alabaster bg-green-emerald-gradient-85  text-[2.75rem] box-decoration-clone py-[1rem] px-[1.5rem] uppercase'>
          The Sea Explorer
        </span>
      </h3>
      <div className='mx-[3rem] my-[2.5rem]'>
        <div className='uppercase text-[1.2rem] font-bold	text-grey-boulder'>medium-7-day-tour</div>
        <div className='mt-[1rem] text-[1.5rem] italic'>
          Exploring the jaw-dropping US east coast by foot and by boat
        </div>
        <div className='text-[1.3rem]'>
          <div className='mt-[1rem] flex justify-between '>
            <span className='w-[45%]  inline-flex items-center'>
              <span className='inline-flex mr-[0.3rem]'>
                <IoLocationOutline className='h-[2rem] w-[2rem] fill-green-emerald stroke-green-emerald stroke-3' />
              </span>
              <span>Miami, USA</span>
            </span>
            <span className='w-[45%] inline-flex items-center'>
              <span className='inline-flex mr-[0.3rem]'>
                <AiOutlineCalendar className='h-[2rem] w-[2rem] fill-green-emerald stroke-green-emerald' />
              </span>
              <span>June 2021</span>
            </span>
          </div>
          <div className='mt-[1rem] flex justify-between'>
            <span className='w-[45%] inline-flex items-center'>
              <span className='inline-flex mr-[0.3rem]'>
                <IoFlagOutline className='h-[2rem] w-[2rem] fill-green-emerald stroke-green-emerald' />
              </span>
              <span>4 stops</span>
            </span>
            <span className='w-[45%] inline-flex items-center'>
              <span className='inline-flex mr-[0.3rem]'>
                <IoPersonOutline className='h-[2rem] w-[2rem] fill-green-emerald stroke-green-emerald' />
              </span>
              <span>15 people</span>
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
            <span className=' font-bold'>$497</span>
            <span className='text-grey-dusty'> per person</span>
          </div>

          <div className='mt-[1rem]'>
            <span className=' font-bold'>4.3 </span>
            <span className='text-grey-dusty'> rating(7)</span>
          </div>
        </div>
        <a className='py-[1.25rem] px-[3rem] bg-green-emerald rounded-[10rem] text-white flex self-center uppercase hover:translate-y-[-2px] hover-button-shadow cursor-pointer transition duration-300'>
          Details
        </a>
      </div>
    </div>
  );
}

export default TourCard;
