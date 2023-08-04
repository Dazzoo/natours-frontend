import React from 'react';
import LoginForm from '@/components/LoginForm';
import LogRegLayout from '@/components/layout/LogRegLayout';

function page(props) {
  return (
    <LogRegLayout>
      <h2 className='uppercase font-bold	text-[2.25rem] bg-green-emerald-gradient bg-clip-text text-transparent mb-[3.5rem]'>
        Log into your account
      </h2>
      <LoginForm />
    </LogRegLayout>
  );
}

export default page;
