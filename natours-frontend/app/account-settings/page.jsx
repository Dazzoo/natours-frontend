'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import usersApi from '@/api/users/usersApi';
import authApi from '@/api/auth/authApi';
import ButtonSubmitGreenSmall from '@/components/ButtonSubmitGreenSmall';
import { AiOutlineEdit } from 'react-icons/ai';
import Image from 'next/image';
import PreloaderCycling from '@/components/preloaders/PreloaderCycling';

function page({}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const userInfo = await authApi.getMe();
      if (userInfo.data) {
        setUserInfo(userInfo?.data);
      }
    };
    getUserInfo();
  }, []);

  const user_name = userInfo?.name;
  const user_email = userInfo?.email;
  const user_photo_path = userInfo?.photo?.path
    ? `${process.env.API_BASE_URL}/${userInfo?.photo.path.replace(/^public\\/, '')}`
    : null;

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

  return (
    <div>
      <div className=' min-h-[100vh] p-[5rem] flex items-center flex-col'>
        {!userInfo ? (
          <div className='mt-[30vh]'>
            <PreloaderCycling />
          </div>
        ) : (
          <>
            <div className='mt-[2rem] '>
              <div className='min-h-[30rem]'>
                <Image
                  className='clip-path-circle select-none drag-none '
                  width={300}
                  height={300}
                  alt={'Profile pic'}
                  src={user_photo_path || '/img/no-user-image.gif'}
                />
              </div>
            </div>
            <div className='text-[1.2rem] flex flex-col content-center items-center '>
              <input
                className='w-[70%]'
                type='file'
                accept='image/*'
                onChange={handleImageChange}
              />
              <div className='mt-[2rem]'>
                <ButtonSubmitGreenSmall onClick={() => handleUpload()} value={'Update Photo'} />
              </div>
            </div>
            <div className='text-[2rem] py-[2rem] mt-[5rem] flex justify-between min-w-[35rem]'>
              <div className='font-medium text-black'>Name:</div>
              <div className='relative'>
                {user_name}
                <span className='absolute left-[105%]  inset-0 flex items-center justify-center w-min p-[1rem] cursor-pointer	'>
                  <AiOutlineEdit />
                </span>
              </div>
            </div>
            <div className='text-[2rem] py-[2rem] flex justify-between min-w-[35rem]'>
              <div className='font-medium text-black'>Email:</div>
              <div className='relative'>
                {user_email}
                <span className='absolute left-[105%]  inset-0 flex items-center justify-center w-min p-[1rem] cursor-pointer	'>
                  <AiOutlineEdit />
                </span>
              </div>
            </div>
          </>
        )}
        {/* <div className='text-[4rem] font-medium	'>Account settings </div> */}
      </div>
    </div>
  );
}

export default page;
