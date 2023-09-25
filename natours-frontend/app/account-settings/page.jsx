'use client';
import React, { useEffect, useState, useRef } from 'react';
import usersApi from '@/api/users/usersApi';
import authApi from '@/api/auth/authApi';
import { useRouter } from 'next/navigation'
import useUser from '@/hooks/useUser'
import Router from "next/router";
import ButtonSubmitGreenSmall from '@/components/buttons/ButtonSubmitGreenSmall';
import { AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai';
import Image from 'next/image';
import PreloaderCycling from '@/components/preloaders/PreloaderCycling';
import EditableInput from './EditableField';
import InputPasswordBasic from '@/components/input/InputPasswordBasic';
import ErrorComponent from '@/components/ErrorComponent'
import TitleH1 from '@/components/titles/TitleH1'
import TitleH2 from '@/components/titles/TitleH2'


function page({}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [UserName, setUserName] = useState(null);
  const [UserEmail, setUserEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [ShowPasswordField, setShowPasswordField] = useState(false);
  const [InfoChanged, setInfoChanged] = useState(false);
  const [editUserName, setEditUserName] = useState(false);
  const [editUserEmail, setEditUserEmail] = useState(false);
  const [currentPasswordUpdate, setCurrentPasswordUpdate] = useState(null);
  const [newPasswordUpdate, setNewPasswordUpdate] = useState(null);
  const [confirmPasswordUpdate, setConfirmPasswordUpdate] = useState(null);
  const inputEmailRef = useRef(null);
  const inputUserNameRef = useRef(null);
  const router = useRouter()

  const { user, loggedOut, isLoading } = useUser();

  useEffect(() => {
    if (user?.name && UserName && user?.name !== UserName) {
      debugger
      setInfoChanged(true);
    }
    if (user?.email && UserEmail && user?.email !== UserEmail) {
      debugger
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

  const handleUpdatePassword = () => {
    alert('update password')
  }

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
      const status = await authApi.updateUserInfo(UserName, UserEmail, Password);

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
      <div className=' min-h-[100vh] p-[5rem] flex items-center flex-col relative'>
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
              <div className='font-medium text-black select-none'>Name:</div>
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
              <div className='font-medium text-black select-none'>Email:</div>
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
            {InfoChanged ? 
            <div className='absolute bottom-[0px]' >
              <div className='mt-[2rem] w-[30rem] '>
                <InputPasswordBasic
                  setValue={setPassword}
                  value={Password}
                  name='Confirm Your Password'
                />
              </div>
            <div className='mt-[2rem] flex justify-center'>
                <ButtonSubmitGreenSmall
                  onClick={() => handleSaveChanges()}
                  value={'Save Changes'}
                />
            </div>
            </div> 
            : null}
            
          </>
      </div>
      <div className=' flex flex-col items-center p-[5rem] border-t-2	border-grey-tundora border-solid' >
            <TitleH2
                className={'mb-[2rem]'}
                value='Password change'
            />
              <div className='mt-[3rem] w-[30rem] '>
                <InputPasswordBasic
                  setValue={setCurrentPasswordUpdate}
                  value={currentPasswordUpdate}
                  name='Current password'
                />
              </div>
              <div className='mt-[3rem] w-[30rem] '>
                <InputPasswordBasic
                  setValue={setNewPasswordUpdate}
                  value={newPasswordUpdate}
                  name='New Password'
                />
              </div>
              <div className='mt-[3rem] w-[30rem] '>
                <InputPasswordBasic
                  setValue={setConfirmPasswordUpdate}
                  value={confirmPasswordUpdate}
                  name='Confirm Your New Password'
                />
              </div>
              <div className='mt-[3rem] flex justify-center'>
                <ButtonSubmitGreenSmall
                  onClick={() => handleUpdatePassword()}
                  value={'Update password'}
                />
            </div>
            
      </div>
    </div>
  );
}

export default page;
