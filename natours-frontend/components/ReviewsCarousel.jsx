'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

function ReviewsCarousel(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='bb w-[100%] min-h-[40rem] '>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
      >
        <div className='box-shadow-standard m-auto bg-white-alabaster rounded-[10px] w-[40rem] h-[40rem] flex flex-col content-center items-center  p-[5rem]'>
          <div className='bb flex flex-col items-center '>
            <div className=''>
              <Image
                className='clip-path-circle'
                width={50}
                height={50}
                src={'/img/no-user-image.gif'}
              />
            </div>
            <div className='uppercase text-[1.85rem] font-semibold ml-[1rem] pr-[1.5rem]  mt-[1rem]'>
              GUIDE
            </div>
          </div>
          <div className='mt-[1rem] bb h-[17rem] text-[1.7rem] italic overflow-hidden	'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </div>
        </div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    </div>
  );
}

export default ReviewsCarousel;
