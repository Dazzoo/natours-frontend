'use client'
import React, { useEffect, useState } from 'react';
import usersApi from '@/api/users/usersApi';
import authApi from '@/api/auth/authApi';
import TitleH2 from '@/components/titles/TitleH2'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation'
import ButtonSubmitGreenSmall from '@/components/buttons/ButtonSubmitGreenSmall';
import InputBasic from '@/components/input/InputBasic';


function PasswordChange({mutate}) {
    const [currentPasswordUpdate, setCurrentPasswordUpdate] = useState(null);
    const [newPasswordUpdate, setNewPasswordUpdate] = useState(null);
    const [confirmPasswordUpdate, setConfirmPasswordUpdate] = useState(null);
    const router = useRouter()
    const { register, handleSubmit, formState: { errors }, watch  } = useForm();

    const validatePasswordMatch = (value) => {
      const newPassword = watch('New Password'); // Replace 'newPassword' with the actual field name
      return newPassword === value || 'Passwords do not match';
    };

    const handleUpdatePassword = async (data) => {
        if (data['Current password'] && data['New Password'] && data['Confirm Your New Password']) {
          const statusCode = await usersApi.updateUserPassword(data['Current password'], data['New Password'], data['Confirm Your New Password']);
          if (String(statusCode).startsWith('2')) {
            const res = await authApi.logOut();
              if (res === 'success') {
                mutate()
                router.push('/login')
              }
          }
        } else {
    
        }
      }

    return (
        <div className=' flex flex-col items-center p-[5rem] border-t-2	border-grey-tundora border-solid' >
            <TitleH2
                className={'mb-[2rem]'}
                value='Password change'
            />
            <form onSubmit={handleSubmit(handleUpdatePassword)}>
              <div className='mt-[3rem] w-[30rem] '>
                <InputBasic
                  id='current-password'
                  type="password"
                  errors={errors}
                  register={register}
                  pattern_value={/.{8,}/}
                  pattern_message={'At least 8 characters is required'}
                  required={true}
                  name='Current password'
                />
              </div>
              <div className='mt-[3rem] w-[30rem] '>
                <InputBasic
                  type="password"
                  required={true}
                  errors={errors}
                  register={register}
                  pattern_value={/.{8,}/}
                  pattern_message={'At least 8 characters is required'}
                  name='New Password'
                />
              </div>
              <div className='mt-[3rem] w-[30rem] '>
                <InputBasic
                  type="password"
                  required={true}
                  errors={errors}
                  register={register}
                  pattern_value={/.{8,}/}
                  pattern_message={'At least 8 characters is required'}
                  validate={validatePasswordMatch}
                  name='Confirm Your New Password'
                />
              </div>
              <div className='mt-[3rem] flex justify-center'>
                <ButtonSubmitGreenSmall
                  value={'Update password'}
                />
              </div>
            </form>

            
      </div>
    );
}

export default PasswordChange