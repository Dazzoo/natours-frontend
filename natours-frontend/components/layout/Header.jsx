import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import authApi from '@/api/auth/authApi';
import jwtParser from '@/utility/jwtParser';
import AuthHeader from '@/components/AuthHeader';
import ThemeToggle from '@/components/buttons/ThemeToggle';

export const fetchCache = 'force-no-store';

export async function Header(props) {
  return (
    <header className='bg-grey-tundora h-32 pl-20 pr-20 flex justify-between text-[1.6rem] relative font-lato'>
      <nav className='flex h-full items-center'>
        <Link
          href='/'
          className='text-white-alabaster cursor-pointer font-normal uppercase hover:translate-y-[-2px] hover-text-shadow-black transition duration-300'
        >
          All tours
        </Link>
        <div className='ml-[1rem]' >
        <ThemeToggle />
        </div>
      </nav>
      <div className='header_logo flex self-center absolute left-1/2 transform -translate-x-1/2'>
        <Image height={35} width={68} src='/img/logo-white.png' />
      </div>
        <AuthHeader  />
    </header>
  );
}
