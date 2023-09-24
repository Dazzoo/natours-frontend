import React from 'react';
import LogRegLayout from '@/components/layout/LogRegLayout';
import LoginForm from './LoginForm';

function page(props) {
  return (
    <LogRegLayout>
      <h2 className='uppercase font-bold	text-[2.25rem] bg-green-emerald-gradient bg-clip-text text-transparent mb-[3.5rem]'>
        Log into your account
      </h2>
      <LoginForm/>
    </LogRegLayout>
  );
}

export default page;
