import React from 'react';
import RegisterForm from '@/components/RegisterForm';
import LogRegLayout from '@/components/layout/LogRegLayout';

function page(props) {
  return (
    <LogRegLayout>
      <h2 className='uppercase font-bold	text-[2.25rem] bg-green-emerald-gradient bg-clip-text text-transparent mb-[3.5rem]'>
        Create your account!
      </h2>
      <RegisterForm />
    </LogRegLayout>
  );
}

export default page;
