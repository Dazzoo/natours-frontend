import React from 'react';
import RegisterForm from './RegisterForm'
import LogRegLayout from '@/components/layout/LogRegLayout';
import TitleH2 from '@/components/titles/TitleH2'

function page(props) {

  return (
    <LogRegLayout>
      <TitleH2
        className={'mb-[3.5rem]'}
        value='Create your account!'
      />
      <RegisterForm
        
      />
    </LogRegLayout>
  );
}
export default page;