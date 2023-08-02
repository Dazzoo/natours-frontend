'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

function RegisterForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(register);
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <div className='flex flex-col mb-[2.5rem]'>
        <label className=' text-[1.6rem] font-bold mb-[0.75rem]'>Your name</label>
        <input
          type='text'
          className='bg-grey-concrete font-lato input-auth '
          {...register('firstName')}
        />
      </div>
      <div className='flex flex-col'>
        <label>Email address</label>
        <input />
      </div>
      <div className='flex flex-col'>
        <label>Password</label>
        <input />
      </div>
      <div className='flex flex-col'>
        <label>Confirm password</label>
        <input />
      </div>
    </form>
  );
}

export default RegisterForm;
