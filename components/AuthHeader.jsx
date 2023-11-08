'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import authApi from '@/api/auth/authApi';
import useUser from '@/hooks/useUser'
import PreloaderCycling from '@/components/preloaders/PreloaderCycling';
import { useRouter } from 'next/navigation';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';


function AuthHeader() {
  const router = useRouter();

  const { user, loggedOut, isLoading, mutate } = useUser();

  const user_name = user?.name;
  const user_photo_path = user?.photo?.path
    ? `${process.env.API_BASE_URL}/${user?.photo.path.replace(/^public\\/, '')}`
    : null;

  const logout = async () => {
    const res = await authApi.logOut(window.localStorage?.jwt);
    if (res === 'success') {
      await mutate()
      router.push('/')
      window.location.reload()
    }
  };


  const items = [
    {
      key: 'account-settings',
      label: 'Settings',
    },
    {
      key: 'my-bookings',
      label: 'My Bookings',
    },
    {
      key: 'my-reviews',
      label: 'My Reviews',
    },
    {
      key: 'billing',
      label: 'Billing',
    },
    {
      key: 'logout',
      label: 'Logout',
    },
  ];

  if (isLoading) {
    return (
      <div className=' flex w-[20rem] justify-center items-center'>
        <PreloaderCycling className={'max-w-[8rem] block'}  />
      </div>)
  }

  if (user) {
  return (
    <Dropdown placement='bottom-end'>
      <DropdownTrigger>
        <div className='flex h-full items-center cursor-pointer px-[1rem]	hover:bg-grey-tundora-lighter'>
          <div className='text-white-alabaster font-normal uppercase mr-[3rem] '>{user_name}</div>
          <span>
            <Image
              className='clip-path-circle select-none drag-none w-full h-full max-w-[50px] max-h-[50px]'
              width={50}
              height={50}
              alt={'Profile pic'}
              src={user_photo_path || '/img/no-user-image.jpg'}
            />
          </span>
        </div>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='Dynamic Actions'
        items={items}
        className={
          '  box-shadow-bold bg-grey-tundora rounded-[8px] mt-[-1rem]'
        }
      >
        {item => (
          <DropdownItem
            key={item.key}
            className={
              'dropdown-item  text-[2rem] text-white-alabaster w-[100%] py-[1rem] px-[3rem] [&:not(:first-child)]:mt-[0.5rem] hover:bg-grey-tundora-lighter rounded-[8px]'
            }
            onClick={
              item.key === 'logout' ? () => logout() : () => router.push(`/${item.key}`)
            }
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
  }
  
  return (
    <nav className='flex h-full items-center'>
      <Link
        href='/login'
        className='text-white-alabaster cursor-pointer font-normal uppercase mr-[3rem] hover:translate-y-[-2px] hover-text-shadow-black transition duration-300'
      >
        Log in
      </Link>
      <Link
        href='/signup'
        className='text-white-alabaster cursor-pointer font-normal 
    uppercase py-[1rem] px-[3rem] border-solid 
    border border-current rounded-[10rem] hover:bg-white-alabaster hover:text-grey-boulder hover:border-grey-boulder hover:translate-y-[-2px] transition duration-300'
      >
        Sign up
      </Link>
    </nav>
  )

}

export default AuthHeader;
