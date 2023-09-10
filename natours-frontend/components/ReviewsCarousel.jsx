'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
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
      breakpoint: { max: 1210, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 660, min: 0 },
      items: 1,
    },
  };

  const createPhotoPath = path => {
    return path ? `${process.env.API_BASE_URL}/${path.replace(/^public\\/, '')}` : null;
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
        {props.reviews?.map((r, index) => (
          <div key={r.id}>
            <div
              className={`box-shadow-standard m-auto bg-white-alabaster rounded-[10px] w-[35rem] h-[35rem] flex flex-col content-center items-center  p-[5rem] mb-[5rem]`}
            >
              <div className=' flex flex-col items-center '>
                <div className=''>
                  <Image
                    className='clip-path-circle'
                    width={50}
                    height={50}
                    src={createPhotoPath(r.user?.photo.path) || '/img/no-user-image.gif'}
                  />
                </div>
                <div className='uppercase text-[1.65rem] font-semibold ml-[1rem] pr-[1.5rem]  mt-[1rem]'>
                  {r?.user.name}
                </div>
              </div>
              <div className='mt-[1rem]  h-[12rem] text-[1.5rem] italic overflow-hidden '>
                {r.review}
              </div>
              <div className='inline-flex mt-[1rem]'>
                {[1, 2, 3, 4, 5].map(count =>
                  Number(r?.rating) >= count ? (
                    <AiFillStar className='h-[2.5rem] w-[2.5rem] fill-green-emerald stroke-green-emerald stroke-3 ' />
                  ) : (
                    <AiOutlineStar className='h-[2.5rem] w-[2.5rem] fill-green-emerald stroke-green-emerald stroke-3 ' />
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ReviewsCarousel;
