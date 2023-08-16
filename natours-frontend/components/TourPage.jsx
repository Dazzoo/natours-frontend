import React from 'react';
import Image from 'next/image';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineCalendar } from 'react-icons/ai';
import { AiOutlineRise } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { IoPersonOutline } from 'react-icons/io5';

function TourPage({ tour }) {
  const coverImgUrl = tour => `${process.env.API_BASE_URL}/img/tours/${tour.imageCover}`;
  const RatingAverage = tour => tour.ratingsAverage?.toFixed(2);

  const startDate = tour => {
    const date = new Date(tour.startDates[0]);
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });
    return `${month} ${year}`;
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <div className='relative overflow-y-hidden	'>
        <div className=' absolute flex justify-between h-[100%] w-[100%] overflow-hidden z-[-1]'>
          <div className=' w-[50%] bg-white-alabaster h-[100%]'></div>
          <div className=' w-[50%] '></div>
        </div>
        <div className='rounded-[3px] bg-transperent relative font-lato'>
          <div className='clip-path-card before:bg-green-emerald-gradient before:absolute before:w-[100%] before:h-[100%] before:opacity-80 h-[25%] max-h-[85vh] '>
            <Image width={2000} height={4000} src={coverImgUrl(tour) || '/img/tour-2-cover.jpg'} />
          </div>
          <div className='flex w-[100%] justify-center text-white-alabaster'>
            <div className='absolute z-20 top-[16%] max-sm:top-[8%] max-lg:top-[11%] w-[55rem] max-sm:w-[30rem] text-center '>
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
        </div>
        <div className=' flex justify-between '>
          <div className=' w-[50%] bg-white-alabaster h-[100%] mx-[2rem]'>
            <div className='h-[100%] flex flex-col  items-center mt-[4rem] min-h-[80rem]'>
              <div>
                <div className='uppercase font-bold max-sm:text-center	text-[2.6rem] bg-green-emerald-gradient bg-clip-text text-transparent mb-[2.5rem] mt-[3rem]'>
                  Quick facts
                </div>
                <div className='flex flex-col'>
                  <div className='inline-flex max-sm:flex-col  items-center content-center  mb-[1.5rem]'>
                    <span className='pr-[0.8rem]'>
                      <AiOutlineCalendar className='h-[3rem] w-[3rem] fill-green-emerald stroke-green-emerald stroke-3 ' />
                    </span>
                    <span className='uppercase text-[1.85rem] font-semibold pr-[1.5rem]'>
                      Next date
                    </span>

                    <span className='text-[1.65rem] font-normal '>{startDate(tour)}</span>
                  </div>
                  <div className='inline-flex max-sm:flex-col items-center content-center  mb-[1.5rem]'>
                    <span className='pr-[0.8rem]'>
                      <AiOutlineRise className='h-[3rem] w-[3rem] fill-green-emerald stroke-green-emerald stroke-3 ' />
                    </span>
                    <span className='uppercase text-[1.85rem] font-semibold pr-[1.5rem]'>
                      Difficulty
                    </span>

                    <span className='text-[1.65rem] font-normal '>
                      {capitalizeFirstLetter(tour.difficulty)}
                    </span>
                  </div>
                  <div className='inline-flex max-sm:flex-col  items-center content-center  mb-[1.5rem]'>
                    <span className='pr-[0.8rem]'>
                      <IoPersonOutline className='h-[3rem] w-[3rem] fill-green-emerald stroke-green-emerald stroke-3 ' />
                    </span>
                    <span className='uppercase text-[1.85rem] font-semibold pr-[1.5rem]'>
                      Participants
                    </span>

                    <span className='text-[1.65rem] font-normal '>{tour.maxGroupSize} people</span>
                  </div>
                  <div className='inline-flex max-sm:flex-col  items-center content-center  mb-[1.5rem]'>
                    <span className='pr-[0.8rem]'>
                      <AiOutlineStar className='h-[3rem] w-[3rem] fill-green-emerald stroke-green-emerald stroke-3 ' />
                    </span>
                    <span className='uppercase text-[1.85rem] font-semibold pr-[1.5rem]'>
                      Rating
                    </span>

                    <span className='text-[1.65rem] font-normal '>{RatingAverage(tour)} / 5</span>
                  </div>
                </div>
              </div>
              <div className='mt-[7rem] flex flex-col mb-[8rem]'>
                <div className='uppercase font-bold max-sm:text-center	text-[2.6rem] bg-green-emerald-gradient bg-clip-text text-transparent mb-[2.5rem] mt-[3rem]'>
                  Your tour guides
                </div>
                {tour.guides.map(g => (
                  <div className='inline-flex max-sm:flex-col  items-center content-center  mb-[1.5rem]'>
                    <span className='ml-[-1rem]'>
                      <Image
                        className='clip-path-circle'
                        width={50}
                        height={50}
                        src={'/img/no-user-image.gif'}
                      />
                    </span>
                    <span className='uppercase text-[1.85rem] font-semibold ml-[1rem] pr-[1.5rem]'>
                      {g.role}
                    </span>
                    <span className='text-[1.65rem] font-normal '>{g.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=' w-[50%] flex justify-center'>
            <div className=' mt-[4rem] flex flex-col mb-[8rem] max-w-[70%]'>
              <div className='uppercase font-bold	text-[2.6rem] bg-green-emerald-gradient bg-clip-text text-transparent mb-[2.5rem] mt-[3rem]'>
                About the sport lover
              </div>
              <div className='text-[1.6rem] '>{tour.description}</div>
            </div>
          </div>
        </div>
        <div className=' h-[30vw] max-md:h-max   w-[100%]  inline-flex flex-row max-md:flex-col clip-path-card-both'>
          <Image
            className='w-[33%] max-md:w-[100%]'
            height={1000}
            width={1000}
            src={'/img/beach.jpg'}
          />
          <Image
            className='w-[34%] max-md:w-[100%]'
            height={1000}
            width={1000}
            src='/img/skateboarding.jpg'
          />
          <Image
            className='w-[33%] max-md:w-[100%]'
            height={1000}
            width={1000}
            src='/img/cycling.jpg'
          />
        </div>
        <div className=' bg-white-alabaster h-[120rem]  relative top-[-25rem] z-[-1] pt-[25rem] '></div>
        <div className=' bg-white-alabaster h-[40rem]  relative  '>
          <div className='bg-green-emerald-gradient clip-path-card-both  h-[100rem]  relative top-[-65rem] w-[100%]  flex content-center items-center'>
            <div className='   h-[100%]  overflow-y-hidden	'></div>
            <ReviewsCarousel />
          </div>
        </div>
        <div className='bb bg-white-alabaster mt-[0rem] max-md:mt-[-15%] h-[60rem] w-[100%] relative top-0 flex justify-center items-center'>
          <div className='box-shadow-bold-x2 w-[70%] max-md:w-[85%] h-[25rem] max-md:h-[20rem]  rounded-[20px] '>
            deqww
          </div>
        </div>
      </div>
    </>
  );
}

export default TourPage;
