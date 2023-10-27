'use client'
import React, { useState } from 'react';
import useUser from '@/hooks/useUser'
import ButtonSubmitGreenSmall from '@/components/buttons/ButtonSubmitGreenSmall';
import { useRouter } from 'next/navigation'
import bookingsApi from '@/api/bookings/bookingsApi'

function BookTour({ tourId }) {
    const { user, loggedOut, isLoading, mutate } = useUser();
    const [Processing, setProcessing] = useState(null)

    const { push } = useRouter()

    const handleBookTour = async () => {
        setProcessing('Processing..')
        if (!user) {
            push('/login')
        } {
            const res = await bookingsApi.getCheckoutSession(tourId)
            if (res.data.data.url) push(res.data.data.url)
        }
        setProcessing(null)
    }

  return (
    <>
      <ButtonSubmitGreenSmall
      value={Processing || 'BOOK TOUR NOW!'} 
      className={'min-w-[20rem]'} 
      onClick={handleBookTour}  />
    </>
  );
}

export default BookTour;
