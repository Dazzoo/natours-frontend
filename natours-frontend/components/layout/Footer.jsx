import React from 'react';
import Image from 'next/image';

function Footer(props) {
  return (
    <footer className='bg-white-alabaster pt-[6rem] pr-[4rem] pb-[3rem] pl-[4rem] flex justify-between font-lato '>
      <div className=' max-md:pr-[2rem] max-md:m-[auto]'>
        <Image width={150} height={30} src='/img/logo-green.png' />
      </div>
      <div className='content-between	text-[1.4rem]'>
        <ul className='flex mb-[1rem] '>
          <li className='mr-[1.5rem] hover:text-green-emerald'>
            <a href='#'>About us</a>
          </li>
          <li className='mr-[1.5rem] hover:text-green-emerald'>
            <a href='#'>Download apps</a>
          </li>
          <li className='mr-[1.5rem] hover:text-green-emerald'>
            <a href='#'>Become a guide</a>
          </li>
          <li className='mr-[1.5rem] hover:text-green-emerald'>
            <a href='#'>Careers</a>
          </li>
          <li className='hover:text-green-emerald'>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <div className='flex justify-end'>© 2023 by Yurii Shushanskyi.</div>
      </div>
    </footer>
  );
}

export default Footer;
