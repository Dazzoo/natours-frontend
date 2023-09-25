import React from 'react';
import TitleH1 from '@/components/titles/TitleH1'


function page(props) {
    return (
        <div className=' min-h-[100vh] p-[5rem] flex items-center flex-col'>
            <TitleH1
                className={'mb-[3.5rem]'}
                value='Your billing'
            />
            <h3 className='mt-[20rem] text-[5rem] font-bold ' >
                Coming soon...
            </h3>
        </div>
    );
}

export default page;