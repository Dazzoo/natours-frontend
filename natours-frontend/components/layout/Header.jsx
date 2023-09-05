import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import authApi from '@/api/auth/authApi';
import jwtParser from '@/utility/jwtParser';
import UserInfo from '@/components/UserInfo';

export const fetchCache = 'force-no-store';

export async function Header(props) {
  const userInfo = await authApi.getMe(jwtParser());

  const user_name = userInfo?.data.name;

  return (
    <header className='bg-grey-tundora h-32 pl-20 pr-20 flex justify-between text-[1.6rem] relative font-lato'>
      <nav className='flex h-full items-center'>
        <Link
          href='/'
          className='text-white-alabaster cursor-pointer font-normal uppercase hover:translate-y-[-2px] hover-text-shadow-black transition duration-300'
        >
          All tours
        </Link>
      </nav>
      <div className='header_logo flex self-center absolute left-1/2 transform -translate-x-1/2'>
        <Image height={35} width={68} src='/img/logo-white.png' />
      </div>
      {user_name ? (
        <UserInfo user_name={user_name} />
      ) : (
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
      )}
    </header>
  );
}
