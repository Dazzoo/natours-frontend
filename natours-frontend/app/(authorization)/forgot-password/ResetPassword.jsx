'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import ButtonSubmitGreenSmall from '@/components/buttons/ButtonSubmitGreenSmall';
import authApi from '@/api/auth/authApi';
import InputBasic from '@/components/input/InputBasic';

function ResetPassword(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {push } = useRouter()


  const onSubmit = async data => {
    let response = await authApi.ForgotPassword(data['Email address']);
    console.log(response)
    if (String(response?.status).startsWith('2')) {
        push(`/info/success/forgot-password/${data['Email address']}`, 'replace')
    } else if (response?.data.error.message) {
        push(`/info/error/error/${response.data.error.message}`, 'replace')
    } else if (response?.data.message) {
        push(`/info/error/error/${response.data.message}`, 'replace')
    } else {
        push(`/info/error/error/Something went wrong`, 'replace')
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col mb-[2.5rem] relative'>
        <InputBasic
                  type="text"
                  required={true}
                  errors={errors}
                  register={register}
                  pattern_value={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
                  pattern_message={'Wrong email format'}
                  label={true}
                  name='Email address'
                />
      </div>
      

      <div className='mt-[3rem] flex justify-between'>
        <ButtonSubmitGreenSmall value='Reset password' />
      </div>
    </form>
  );
}

export default ResetPassword;
