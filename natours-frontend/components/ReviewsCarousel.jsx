'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiOutlineStar } from 'react-icons/ai';
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
      breakpoint: { max: 660, min: 0 },
      items: 1,
    },
  };

  return (
    <div className=' w-[100%] min-h-[40rem] select-none drag-none mr-[20%] relative'>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        arrows={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition='all .5'
        // transitionDuration={500}
        rewind={true}
        rewindWithAnimation={true}
        containerClass='carousel-container'
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass='custom-dot-list-style-reviews  '
        itemClass='carousel-item-padding-40-px'
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((el, index) => (
          <div ket={el}>
            <div
              className={`box-shadow-standard m-auto bg-white-alabaster rounded-[10px] w-[35rem] h-[35rem] flex flex-col content-center items-center  p-[5rem] mb-[5rem]`}
            >
              <div className=' flex flex-col items-center '>
                <div className=''>
                  <Image
                    className='clip-path-circle'
                    width={50}
                    height={50}
                    src={'/img/no-user-image.gif'}
                  />
                </div>
                <div className='uppercase text-[1.65rem] font-semibold ml-[1rem] pr-[1.5rem]  mt-[1rem]'>
                  GUIDE {el}
                </div>
              </div>
              <div className='mt-[1rem]  h-[12rem] text-[1.5rem] italic overflow-hidden '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
                quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
                harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
                earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
                aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium
                molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
              </div>
              <div className='inline-flex mt-[1rem]'>
                <AiOutlineStar className='h-[2.5rem] w-[2.5rem] fill-green-emerald stroke-green-emerald stroke-3 ' />
                <AiOutlineStar className='h-[2.5rem] w-[2.5rem] fill-green-emerald stroke-green-emerald stroke-3 ' />
                <AiOutlineStar className='h-[2.5rem] w-[2.5rem] fill-green-emerald stroke-green-emerald stroke-3 ' />

                <AiOutlineStar className='h-[2.5rem] w-[2.5rem] fill-green-emerald stroke-green-emerald stroke-3 ' />
                <AiOutlineStar className='h-[2.5rem] w-[2.5rem] fill-green-emerald stroke-green-emerald stroke-3 ' />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ReviewsCarousel;
