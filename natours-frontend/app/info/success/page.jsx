import React from 'react';
import { useRouter } from 'next/navigation';

async function page() {
    const { location } = useRouter();
    const message = location.state && location.state.message;

        return (
            <div className='min-h-[90vh] flex justify-center items-center text-[1.6rem]' >
                {message}
            </div>
        )
}

export default page;