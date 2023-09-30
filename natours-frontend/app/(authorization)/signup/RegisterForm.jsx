'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import ButtonSubmitGreenSmall from '@/components/buttons/ButtonSubmitGreenSmall';
import inputErrorHandler from '@/utility/inputErrorHandler';
import authApi from '@/api/auth/authApi';
import { useRouter } from 'next/navigation';
import InputBasic from '@/components/input/InputBasic';

function RegisterForm(props) {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async data => {
    let signUp = await authApi.SignUp(
      data['Your name'],
      data['Email address'],
      data['Password'],
      data['Confirm password']
    );
    if (signUp) {
      push('/login');
    }
  };

  const validatePasswordMatch = (value) => {
    const newPassword = watch('Password'); // Replace 'newPassword' with the actual field name
    return newPassword === value || 'Passwords do not match';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col mb-[2.5rem] relative'>
        <InputBasic
                  type="text"
                  required={true}
                  errors={errors}
                  register={register}
                  pattern_value={/^.{3,20}$/}
                  pattern_message={'Name length should not exceed 20 characters and should be at least 3 characters long'}
                  label={true}
                  name='Your name'
        />
      </div>
      <div className='flex flex-col mb-[2.5rem] relative'>
        <InputBasic
                  type="text"
                  required={true}
                  errors={errors}
                  register={register}
                  pattern_value={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,60}$/i}
                  pattern_message={'Wrong email format'}
                  label={true}
                  name='Email address'
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
  );
}

export default RegisterForm;
