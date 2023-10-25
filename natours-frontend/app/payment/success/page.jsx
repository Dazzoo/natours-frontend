'use client'
import React, { useEffect, useState, useMemo } from 'react';
import {  useSearchParams, useRouter } from 'next/navigation';
import PreloaderCycling from '@/components/preloaders/PreloaderCycling'
import bookingsApi from '@/api/bookings/bookingsApi'

function page() {
    const [pending, setPending] = useState(false);
    const [params, setParams] = useState({});
    const searchParams = useSearchParams();
    const { push } = useRouter()
      const handleBookingPayment = async () => {
            const response = await bookingsApi.createBooking(params.tourId, params.userId, params.price);
            if (String(response?.status).startsWith('2')) {
                debugger
                push(`/info/success/booking/`, 'replace')
            } else if (response?.data.error.message) {
                push(`/info/error/error/${response.data.error.message}`, 'replace')
            } else if (response?.data.message) {
                push(`/info/error/error/${response.data.message}`, 'replace')
            } else {
                push(`/info/error/error/Something went wrong`, 'replace')
            }
      }

      useEffect( () => {
        setParams({
            tourId: searchParams.get('tourId'),
            userId: searchParams.get('userId'),
            price: searchParams.get('price')
        })
      }, [])

      useEffect( () => {
        if (params?.tourId && params?.userId && params?.price && !pending) {
            alert('trigger')
            setPending(true);
            handleBookingPayment()
        }
      }, [params, pending])

  return (
    <div className='min-h-[90vh] flex justify-center items-center ' >
        <PreloaderCycling/>
    </div>
);
}

export default page
