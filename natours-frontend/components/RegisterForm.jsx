'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import ButtonSubmitGreenSmall from '@/components/ButtonSubmitGreenSmall';
import inputErrorHandler from '@/utility/inputErrorHandler';
import isObjectEmpty from '@/utility/isObjectEmpty';

function RegisterForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm();
  const onSubmit = data => {
    console.log(
      data['Your name'],
      data['Email address'],
      data['Password'],
      data['Confirm password']
    );
  };

  const setConfirmPasswordError = confirm_pass => {
    if (watch('Password', '') !== confirm_pass) {
      console.log(watch('Password', ''), watch('Confirm password', ''));
      setError('Confirm password', {
        type: 'manual',
        message: 'Passwords do not match.',
      });
    } else {
      setError('Confirm password', {});
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col mb-[2.5rem] relative'>
        <label className=' text-[1.6rem] font-bold mb-[0.75rem]'>Your name</label>
        <input
          className={`bg-grey-concrete font-lato input-auth ${
            errors['Your name']?.type ? 'input-auth-error-focus' : 'input-auth-valid-focus'
          }`}
          type='text'
          placeholder='Your name'
          {...register('Your name', { required: true, min: 3, maxLength: 20 })}
        />
        {errors['Your name'] && (
          <p className='absolute bottom-[-25%] text-[1.4rem] text-orange-burning font-semibold	'>
            {errors['Your name'].message || inputErrorHandler(errors['Your name'].type)}
          </p>
        )}
      </div>
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
            maxLength: 30,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
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
            maxLength: 30,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          })}
        />
        {errors['Password'] && (
          <p className='absolute bottom-[-25%] text-[1.4rem] text-orange-burning font-semibold'>
            {errors['Password']?.message || inputErrorHandler(errors['Password']?.type)}
          </p>
        )}
      </div>
      <div className='flex flex-col mb-[2.5rem] relative'>
        <label className=' text-[1.6rem] font-bold mb-[0.75rem]'>Confirm password</label>
        <input
          className={`bg-grey-concrete font-lato input-auth ${
            errors['Confirm password']?.type ? 'input-auth-error-focus' : 'input-auth-valid-focus'
          }`}
          type='password'
          placeholder='Confirm password'
          {...register('Confirm password', {
            required: true,
            min: 3,
            maxLength: 30,
          })}
          onChange={e => setConfirmPasswordError(e.target.value)}
        />
        {errors['Confirm password'] && (
          <p className='absolute bottom-[-25%] text-[1.4rem] text-orange-burning font-semibold'>
            {errors['Confirm password']?.message ||
              inputErrorHandler(errors['Confirm password']?.type)}
          </p>
        )}
      </div>
      <div className='mt-[3rem]'>
        <ButtonSubmitGreenSmall value='Register' />
      </div>
    </form>
  );
}

export default RegisterForm;
