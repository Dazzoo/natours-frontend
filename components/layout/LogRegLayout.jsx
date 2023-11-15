import React from 'react';

function RegLogLayout({ children }) {
  return (
    <main className='bg-white-alabaster py-[8rem] px-[6rem]  flex justify-center font-lato '>
      <div className='bg-white-basic max-w-[55rem] min-w-[10rem] w-[55rem] bg-white min-h-[20rem] py-[5rem] px-[7rem] 
      max-md:py-[2rem] max-md:px-[3.5rem] box-shadow-bold rounded-[5px] '>
        {children}
      </div>
    </main>
  );
}

export default RegLogLayout;
