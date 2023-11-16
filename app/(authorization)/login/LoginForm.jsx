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
      router.push('/')
      window.location.reload()
    }
  };

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col mb-[2.5rem] max-md:mb-[1.4rem] relative'>
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
      

      <div className='mt-[3rem] flex justify-between items-center'>
        <ButtonSubmitGreenSmall value='Login' />
        <a href='/forgot-password' className='text-[1.6rem] ml-[1rem] max-md:text-[1.4rem] text-grey-boulder font-semibold' >
        Forgot password ?
      </a>
      </div>
    </form>
  );
}

export default LoginForm;
