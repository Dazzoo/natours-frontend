import React from 'react';
import RegisterForm from '@/components/RegisterForm';

function page(props) {
  return (
    <main className='bg-white-alabaster py-[8rem] px-[6rem] flex justify-center font-lato '>
      <div className='max-w-[55rem] min-w-[10rem] w-[55rem] bg-white min-h-[55rem] py-[5rem] px-[7rem] box-shadow-bold rounded-[5px]'>
        <h2 className='uppercase font-bold	text-[2.25rem] bg-green-emerald-gradient bg-clip-text text-transparent mb-[3.5rem]'>
          Create your account!
        </h2>
        <RegisterForm />
      </div>
    </main>
  );
}

export default page;
