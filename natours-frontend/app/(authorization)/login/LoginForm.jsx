'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import ButtonSubmitGreenSmall from '@/components/buttons/ButtonSubmitGreenSmall';
import inputErrorHandler from '@/utility/inputErrorHandler';
import authApi from '@/api/auth/authApi';
import useUser from '@/hooks/useUser'
import InputBasic from '@/components/input/InputBasic';

function LoginForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm();

  const router = useRouter()

  const { user, mutate, loggedOut, isLoading } = useUser();

  const onSubmit = async data => {
    let token = await authApi.Login(data['Email address'], data['Password']);
    if (token) {
      localStorage.setItem('jwt', token);
      mutate()      
    }
  };

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col mb-[2.5rem] relative'>
        <label className=' text-[1.6rem] font-bold mb-[0.75rem]'>Email address</label>
        <InputBasic
                  type="text"
                  required={true}
                  errors={errors}
                  register={register}
                  pattern_value={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
                  pattern_message={'Wrong email format'}
                  name='Email address'
                />
        
      </div>

      <div className='flex flex-col mb-[2.5rem] relative'>
        <label className=' text-[1.6rem] font-bold mb-[0.75rem]'>Password</label>
        <InputBasic
                  type="password"
                  required={true}
                  errors={errors}
                  register={register}
                  pattern_value={/.{8,}/}
                  pattern_message={'At least 8 characters is required'}
                  name='Password'
                />
      </div>

      <div className='mt-[3rem]'>
        <ButtonSubmitGreenSmall value='Login' />
      </div>
    </form>
  );
}

export default LoginForm;
