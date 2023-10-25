import React from 'react';
import TitleH1 from '@/components/titles/TitleH1'
import bookingsApi from '@/api/bookings/bookingsApi';
import jwtParser from '@/utility/jwtParser'
import TourCard from '@/components/TourCard'

async function page(props) {
    
    const bookings = await bookingsApi.getMyBookings(jwtParser())

    console.log('bookings', bookings)
    return (
        <div className=' min-h-[100vh] py-32 px-24 overflow-auto'>
            <TitleH1
                className={'mb-[3.5rem] flex justify-center'}
                value='Your bookings'
            />
            {bookings && bookings.length > 0 ? 
            <div>
                <div className=' w-[100%] min-h-[90vh] flex  justify-center overflow-auto flex-wrap'>
                {bookings.map(booking => (
                    <TourCard key={booking.tour._id} tour={booking.tour} />
                ))}
                </div>
            </div>
            :
            <h3 className='mt-[20rem] text-[5rem] font-bold ' >
                Coming soon...
            </h3>
            }
        </div>
    );
}

export default page;