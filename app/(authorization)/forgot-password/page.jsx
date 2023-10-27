import React from 'react';
import LogRegLayout from '@/components/layout/LogRegLayout';
import TitleH2 from '@/components/titles/TitleH2'
import ResetPassword from './ResetPassword'

async function page() {
    return (
        <LogRegLayout>
            <TitleH2
            className={'mb-[3.5rem]'}
            value='Reset your password'
            />
            <ResetPassword/>
        </LogRegLayout>
    );
}

export default page;