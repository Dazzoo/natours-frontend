import React from 'react';
import LogRegLayout from '@/components/layout/LogRegLayout';
import LoginForm from './LoginForm';
import TitleH2 from '@/components/titles/TitleH2'

function page(props) {
  return (
    <LogRegLayout>
      <TitleH2
        className={'mb-[3.5rem]'}
        value='Log into your account'
      />
      <LoginForm/>
    </LogRegLayout>
  );
}

export default page;
