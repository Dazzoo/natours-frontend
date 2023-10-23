'use client'
import React from 'react';
import useUser from '@/hooks/useUser'
import ButtonSubmitGreenSmall from '@/components/buttons/ButtonSubmitGreenSmall';
import { useRouter } from 'next/navigation'

function BookTour() {

    const { user, loggedOut, isLoading, mutate } = useUser();

    const { push } = useRouter()

    const handleBookTour = async () => {
        if (!user) {
            push('/login')
        } {
            // process checkout and redirect to link
        }
    }

  return (
    <>
      <ButtonSubmitGreenSmall value={'BOOK TOUR NOW!'} onClick={handleBookTour} />
    </>
  );
}

export default BookTour;
