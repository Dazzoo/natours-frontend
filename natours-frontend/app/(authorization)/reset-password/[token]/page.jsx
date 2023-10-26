'use client'
import React from 'react';
import authApi from '@/api/auth/authApi';
import PreloaderCycling from '@/components/preloaders/PreloaderCycling'
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import ButtonSubmitGreenSmall from '@/components/buttons/ButtonSubmitGreenSmall';
import InputBasic from '@/components/input/InputBasic';
import LogRegLayout from '@/components/layout/LogRegLayout';
import TitleH2 from '@/components/titles/TitleH2'

function page({params}) {
  const resetToken = params.token

  const { push } = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    let response = await authApi.ResetPassword(resetToken, data['Password'], data['Confirm password']);

      if (String(response?.status).startsWith('2')) {
        push(`/info/success/reset-password/${response.data.message}`, 'replace')
      } else if (response?.data.error.message) {
        push(`/info/error/error/${response.data.error.message}`, 'replace')
      } else if (response?.data.message) {
        push(`/info/error/error/${response.data.message}`, 'replace')
      } else {
        push(`/info/error/error/Something went wrong`, 'replace')
      }
  }

  const validatePasswordMatch = (value) => {
    const newPassword = watch('Password'); // Replace 'newPassword' with the actual field name
    return newPassword === value || 'Passwords do not match';
  };

  return (
    <LogRegLayout>
            <TitleH2
            className={'mb-[3.5rem]'}
            value='Create your new password'
            />
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className='flex flex-col mb-[2.5rem] relative'>
            
              <InputBasic
                        type="password"
                        required={true}
                        errors={errors}
                        register={register}
                        pattern_value={/.{8,}/}
                        pattern_message={'At least 8 characters is required'}
                        label={true}
                        name='Password'
                      />
            </div>
            <div className='flex flex-col mb-[2.5rem] relative'>
              
              <InputBasic
                        type="password"
                        required={true}
                        errors={errors}
                        register={register}
                        pattern_value={/.{8,}/}
                        pattern_message={'At least 8 characters is required'}
                        label={true}
                        validate={validatePasswordMatch}
                        name='Confirm password'
                      />
            </div>
            <div className='mt-[3rem]'>
              <ButtonSubmitGreenSmall value='Register' />
            </div>
          </form>
        </LogRegLayout>
  ) 
}

export default page