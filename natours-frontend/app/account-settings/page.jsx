'use client';
import React, { useEffect, useState, useRef } from 'react';
import usersApi from '@/api/users/usersApi';
import authApi from '@/api/auth/authApi';
import useUser from '@/hooks/useUser'
import { useRouter } from 'next/navigation'
import ButtonSubmitGreenSmall from '@/components/buttons/ButtonSubmitGreenSmall';
import { AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai';
import Image from 'next/image';
import PreloaderCycling from '@/components/preloaders/PreloaderCycling';
import EditableInput from './EditableField';
import InputBasic from '@/components/input/InputBasic';
import TitleH1 from '@/components/titles/TitleH1'
import { useForm } from "react-hook-form";
import PasswordChange from './PasswordChange'


function page({}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [UserName, setUserName] = useState(null);
  const [UserEmail, setUserEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [ShowPasswordField, setShowPasswordField] = useState(false);
  const [InfoChanged, setInfoChanged] = useState(false);
  const [editUserName, setEditUserName] = useState(false);
  const [editUserEmail, setEditUserEmail] = useState(false);
  const inputEmailRef = useRef(null);
  const inputUserNameRef = useRef(null);
  const router = useRouter()

  const { register, handleSubmit, formState: { errors }  } = useForm();
  const { user, loggedOut, isLoading, mutate } = useUser();

  useEffect(() => {
    if (user?.name && UserName && user?.name !== UserName) {
      setInfoChanged(true);
    }
    if (user?.email && UserEmail && user?.email !== UserEmail) {
      setInfoChanged(true);
    }
  }, [UserName, UserEmail]);

  useEffect(() => {
    setUserName(user?.name);
    setUserEmail(user?.email);
  }, [user]);

  const user_photo_path = user?.photo?.path
    ? `${process.env.API_BASE_URL}/${user?.photo.path.replace(/^public\\/, '')}`
    : null;

  const handleEditUserName = () => {
    setEditUserName(prev => !prev);
  };

  const handleEditUserEmail = () => {
    setEditUserEmail(prev => !prev);
  };

  const handleImageChange = event => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };


  const handleUpload = async () => {
    // Check if an image is selected

    if (selectedImage) {
      const formData = new FormData();
      formData.append('photo', selectedImage);
      const statusCode = await usersApi.updateUserImage(formData);
      if (String(statusCode).startsWith('2')) {
        window.location.reload();
      }
    } else {
      console.warn('No image selected');
    }
  };

  const handleSaveChanges = async (data) => {
    if (!data['Confirm Your Password']) {
      setShowPasswordField(true);
    } else {
      const status = await authApi.updateUserInfo(UserName, UserEmail, data['Confirm Your Password']);

      if (String(status).startsWith('2')) {
        setInfoChanged(false);
        window.location.reload();
      }
    }
  };

  useEffect(() => {
    if (loggedOut) {
      router.push('/login')
    }
  }, [user, loggedOut]);

  if (isLoading) {
    return (
    <div className='mt-[30vh] h-[100vh]'>
      <PreloaderCycling />
    </div>)
  }

  return (
    <div>
      <div className='p-[5rem] flex items-center flex-col relative'>
          <>
          <TitleH1
                className={'mb-[3.5rem]'}
                value='Your account settings'
            />
            <div className='mt-[2rem] '>
              <div className='min-h-[30rem]'>
                <Image
                  className='clip-path-circle select-none drag-none w-full h-full'
                  width={300}
                  height={300}
                  alt={'Profile pic'}
                  src={user_photo_path || '/img/no-user-image.jpg'}
                />
              </div>
            </div>
            <div className='text-[1.2rem]  flex flex-col content-center items-center mt-[5rem] max-md:mt-[-2rem] '>
              <input
                className=' custom-file-upload text-green-emerald text-[1.6rem] bb w-[14rem]'
                type='file'
                accept='image/*'
                onChange={handleImageChange}
              />
              <div className='mt-[2rem]'>
                <ButtonSubmitGreenSmall onClick={() => handleUpload()} value={'Update Photo'} />
              </div>
            </div>
            <div className='text-[2rem] py-[2rem] mt-[5rem] flex justify-between max-w-[35rem] w-[35rem] max-md:w-[30rem]'>
              <div className='font-medium text-black-basic select-none'>Name:</div>
              <div className='relative w-[100%] box-border'>
                <EditableInput
                  onBlur={() => setEditUserName(false)}
                  edit={editUserName}
                  setEdit={setEditUserName}
                  value={UserName}
                  setValue={setUserName}
                />
                {editUserName ? null : <div className='text-right box-border	'>{UserName}</div>}
                <span
                  onClick={() => {
                    handleEditUserName();
                  }}
                  className='absolute left-[105%] inset-y-0 flex items-center justify-center w-min p-[1rem] cursor-pointer'
                >
                  {editUserName ? <AiOutlineCheck /> : <AiOutlineEdit />}
                </span>
              </div>
            </div>
            <div className='text-[2rem] py-[2rem] flex justify-between max-w-[35rem] w-[35rem] max-md:w-[30rem] '>
              <div className='font-medium text-black-basic select-none'>Email:</div>
              <div className='relative w-[100%] box-border	'>
                <EditableInput
                  onBlur={() => setEditUserEmail(false)}
                  edit={editUserEmail}
                  setEdit={setEditUserEmail}
                  value={UserEmail}
                  setValue={setUserEmail}
                />
                {editUserEmail ? null : <div className='text-right box-border		'>{UserEmail}</div>}
                <span
                  onClick={() => {
                    handleEditUserEmail();
                  }}
                  className='absolute left-[105%] inset-y-0 flex items-center justify-center w-min p-[1rem] cursor-pointer'
                >
                  {editUserEmail ? <AiOutlineCheck /> : <AiOutlineEdit />}
                </span>
              </div>
            </div>
            <div className='min-h-[5rem] my-[2rem] w-[50rem]  ' >
            {InfoChanged ? 
              <form onSubmit={handleSubmit(handleSaveChanges)}>
              <div className=' inline-flex w-[100%] justify-between' >
              <span className='w-[30rem] '>
                <InputBasic
                  setValue={setPassword}
                  type='password'
                  value={Password}
                  required={true}
                  register={register}
                  errors={errors}
                  pattern_value={/.{8,}/}
                  pattern_message={'At least 8 characters is required'}
                  name='Confirm Your Password'
                />
              </span>
              <span className=' ml-[2rem]'>
                  <ButtonSubmitGreenSmall
                    value={'Save Changes'}
                  />
              </span>
              </div>
              </form>

            : null}
            </div> 

            
          </>
      </div>
      <PasswordChange mutate={mutate} />
    </div>
  );
}

export default page;
