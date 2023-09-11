'use client';
import React, { useEffect, useState, useRef } from 'react';
import usersApi from '@/api/users/usersApi';
import authApi from '@/api/auth/authApi';
import ButtonSubmitGreenSmall from '@/components/ButtonSubmitGreenSmall';
import { AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai';
import Image from 'next/image';
import PreloaderCycling from '@/components/preloaders/PreloaderCycling';
import EditableInput from './EditableField';
import InputPasswordBasic from '@/components/input/InputPasswordBasic';

function page({}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [UserName, setUserName] = useState(null);
  const [UserEmail, setUserEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [ShowPasswordField, setShowPasswordField] = useState(false);
  const [InfoChanged, setInfoChanged] = useState(false);
  const [editUserName, setEditUserName] = useState(false);
  const [editUserEmail, setEditUserEmail] = useState(false);
  const inputEmailRef = useRef(null);
  const inputUserNameRef = useRef(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const userInfo = await authApi.getMe();
      if (userInfo.data) {
        setUserInfo(userInfo?.data);
      }
    };
    getUserInfo();
  }, []);

  useEffect(() => {
    setUserName(userInfo?.name);
    setUserEmail(userInfo?.email);
  }, [userInfo]);

  const user_photo_path = userInfo?.photo?.path
    ? `${process.env.API_BASE_URL}/${userInfo?.photo.path.replace(/^public\\/, '')}`
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

  const handleSaveChanges = async () => {
    if (!Password) {
      setShowPasswordField(true);
    } else {
      const res = await authApi.updateUserInfo(UserName, UserEmail, Password);

      if (res) {
        debugger;
        setInfoChanged(false);
      }
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
                  className='clip-path-circle select-none drag-none w-full h-full'
                  width={300}
                  height={300}
                  alt={'Profile pic'}
                  src={user_photo_path || '/img/no-user-image.gif'}
                />
              </div>
            </div>
            <div className='text-[1.2rem] flex flex-col content-center items-center mt-[5rem]'>
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
            <div className='text-[2rem] py-[2rem] mt-[5rem] flex justify-between max-w-[35rem] w-[35rem] '>
              <div className='font-medium text-black select-none'>Name:</div>
              <div className='relative w-[100%] box-border	'>
                <EditableInput
                  edit={editUserName}
                  setEdit={setEditUserName}
                  value={UserName}
                  setValue={setUserName}
                />
                {editUserName ? null : <div className='text-right box-border	'>{UserName}</div>}
                <span
                  onClick={() => {
                    handleEditUserName();
                    if (editUserName) {
                      setInfoChanged(true);
                    }
                  }}
                  className='absolute left-[105%] inset-y-0 flex items-center justify-center w-min p-[1rem] cursor-pointer'
                >
                  {editUserName ? <AiOutlineCheck /> : <AiOutlineEdit />}
                </span>
              </div>
            </div>
            <div className='text-[2rem] py-[2rem] flex justify-between max-w-[35rem] w-[35rem] '>
              <div className='font-medium text-black select-none'>Email:</div>
              <div className='relative w-[100%] box-border	'>
                <EditableInput
                  edit={editUserEmail}
                  setEdit={setEditUserEmail}
                  value={UserEmail}
                  setValue={setUserEmail}
                />
                {editUserEmail ? null : <div className='text-right box-border		'>{UserEmail}</div>}
                <span
                  onClick={() => {
                    handleEditUserEmail();
                    if (editUserEmail) {
                      setInfoChanged(true);
                    }
                  }}
                  className='absolute left-[105%] inset-y-0 flex items-center justify-center w-min p-[1rem] cursor-pointer'
                >
                  {editUserEmail ? <AiOutlineCheck /> : <AiOutlineEdit />}
                </span>
              </div>
            </div>
            <div className='mt-[2rem]'>
              {InfoChanged ? (
                <ButtonSubmitGreenSmall
                  onClick={() => handleSaveChanges()}
                  value={'Save Changes'}
                />
              ) : null}
            </div>
            <div className='mt-[2rem] w-[30rem] '>
              {ShowPasswordField ? (
                <InputPasswordBasic
                  setValue={setPassword}
                  value={Password}
                  name='Confirm Your Password'
                />
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default page;
