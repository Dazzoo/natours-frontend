import React from 'react';
import authApi from '@/api/auth/authApi'
import PreloaderCycling from '@/components/preloaders/PreloaderCycling'

async function page({params}) {
    const { emailToken } = params;

    const response = await authApi.verifyEmail(emailToken);

    const message = response?.data?.message

    return (
        <div className='min-h-[90vh] flex justify-center items-center text-[1.6rem]' >
            {!message ? <PreloaderCycling/> : 
            String(message)}
        </div>
    );
}

export default page;