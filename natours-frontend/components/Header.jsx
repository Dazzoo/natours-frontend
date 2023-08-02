import React from 'react';

function Header(props) {
  return (
    <header className='bg-grey-tundora h-32 pl-20 pr-20 sm:h-32 md:h-32 lg:h-32 xl:h-32 flex justify-between text-[1.6rem] relative font-lato'>
      <nav className='flex h-full items-center'>
        <a
          href='#'
          className='text-white-alabaster cursor-pointer font-normal uppercase hover:translate-y-[-2px] hover-text-shadow-black transition duration-300'
        >
          All tours
        </a>
      </nav>
      <div className='flex self-center absolute left-1/2 transform -translate-x-1/2'>
        <img className='h-[3.5rem]' src='./img/logo-white.png' />
      </div>
      <nav className='flex h-full items-center'>
        <a
          href='/login'
          className='text-white-alabaster cursor-pointer font-normal uppercase mr-[3rem] hover:translate-y-[-2px] hover-text-shadow-black transition duration-300'
        >
          Log in
        </a>
        <a
          href='/signup'
          className='text-white-alabaster cursor-pointer font-normal 
            uppercase py-[1rem] px-[3rem] border-solid 
            border border-current rounded-[10rem] hover:bg-white-alabaster hover:text-grey-boulder hover:border-grey-boulder hover:translate-y-[-2px] transition duration-300'
        >
          Sign up
        </a>
      </nav>
    </header>
  );
}

export default Header;
