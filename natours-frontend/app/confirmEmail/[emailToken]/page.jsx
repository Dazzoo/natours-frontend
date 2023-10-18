import React from 'react';
import authApi from '@/api/auth/authApi'
import PreloaderCycling from '@/components/preloaders/PreloaderCycling'
import { redirect } from 'next/navigation'

async function page({params}) {
    const { emailToken } = params;
    const response = await authApi.verifyEmail(emailToken);

    if (String(response.status).startsWith('2')) {
        redirect(`/info/success/confirm-email/${response.data.data?.message}`, 'replace')
    } else if (response.data.error.message) {
        redirect(`/info/error/error/${response.data.error.message}`, 'replace')
    } else {
        redirect(`/info/error/error/Something went wrong`, 'replace')
    }

    return (
        <div className='min-h-[90vh] flex justify-center items-center ' >
            <PreloaderCycling/>
        </div>
    );
}

export default page;