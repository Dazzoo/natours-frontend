import React from 'react';
import authApi from '@/api/auth/authApi';
import PreloaderCycling from '@/components/preloaders/PreloaderCycling'
import { redirect } from 'next/navigation'

async function page({params}) {
  const resetToken = params.token

  const onSubmit = async () => {
    let response = await authApi.ResetPassword(resetToken);

  if (String(response?.status).startsWith('2')) {
    redirect(`/info/success/reset-password/${data['Email address']}`, 'replace')
    } else if (response?.data.error.message) {
        redirect(`/info/error/error/${response.data.error.message}`, 'replace')
    } else if (response?.data.message) {
        redirect(`/info/error/error/${response.data.message}`, 'replace')
    } else {
        redirect(`/info/error/error/Something went wrong`, 'replace')
    }
  }

  return (
    <div className='min-h-[90vh] flex justify-center items-center ' >
            <PreloaderCycling/>
        </div>
  ) 
}

export default page