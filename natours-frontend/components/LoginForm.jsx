'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import ButtonSubmitGreenSmall from '@/components/ButtonSubmitGreenSmall';
import inputErrorHandler from '@/utility/inputErrorHandler';
import isObjectEmpty from '@/utility/isObjectEmpty';
import authApi from '@/api/auth/authApi';

function LoginForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm();
  const onSubmit = async data => {
    let token = await authApi.Login(data['Email address'], data['Password']);
    if (token) {
      // localStorage.setItem('natours_token', token);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col mb-[2.5rem] relative'>
        <label className=' text-[1.6rem] font-bold mb-[0.75rem]'>Email address</label>
        <input
          className={`bg-grey-concrete font-lato input-auth ${
            errors['Email address']?.type ? 'input-auth-error-focus' : 'input-auth-valid-focus'
          }`}
          type='email'
          placeholder='Email address'
          {...register('Email address', {
            required: true,
            min: 3,
          })}
        />
        {errors['Email address'] && (
          <p className='absolute bottom-[-25%] text-[1.4rem] text-orange-burning font-semibold'>
            {errors['Email address']?.message || inputErrorHandler(errors['Email address']?.type)}
          </p>
        )}
      </div>

      <div className='flex flex-col mb-[2.5rem] relative'>
        <label className=' text-[1.6rem] font-bold mb-[0.75rem]'>Password</label>
        <input
          className={`bg-grey-concrete font-lato input-auth ${
            errors['Password']?.type ? 'input-auth-error-focus' : 'input-auth-valid-focus'
          }`}
          type='password'
          placeholder='Password'
          {...register('Password', {
            required: true,
            min: 3,
          })}
        />
        {errors['Password'] && (
          <p className='absolute bottom-[-25%] text-[1.4rem] text-orange-burning font-semibold'>
            {errors['Password']?.message || inputErrorHandler(errors['Password']?.type)}
          </p>
        )}
      </div>

      <div className='mt-[3rem]'>
        <ButtonSubmitGreenSmall value='Login' />
      </div>
    </form>
  );
}

export default LoginForm;
