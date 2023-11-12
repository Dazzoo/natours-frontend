'use client'
import React, { useState, useEffect } from 'react';
import TitleH1 from '@/components/titles/TitleH1'
import bookingsApi from '@/api/bookings/bookingsApi';
import TourCard from '@/components/TourCard'
import useSWR from "swr";
import PreloaderCycling from '@/components/preloaders/PreloaderCycling';

function page() {

    const { data: bookings, error, isLoading } = useSWR('getTours', async () => await bookingsApi.getMyBookings())

    if (isLoading) {
        return (
        <div className='mt-[30vh] h-[100vh]'>
          <PreloaderCycling />
        </div>)
      }

    return (
        <div className=' min-h-[100vh] py-32 px-24 overflow-auto'>
            <TitleH1
                className={'mb-[3.5rem] flex justify-center'}
                value='Your bookings'
            />
            {bookings && bookings?.length > 0 ? 
            <div>
                <div className=' w-[100%] min-h-[90vh] flex  justify-center overflow-auto flex-wrap'>
                {bookings.map(booking => (
                    <TourCard key={booking.tour._id} tour={booking.tour} />
                ))}
                </div>
            </div>
            :
            <h3 className='mt-[20rem] text-[5rem] font-bold flex justify-center' >
                No bookings yet
            </h3>
            }
        </div>
    );
}

export default page;