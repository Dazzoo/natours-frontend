import React from 'react';

function ButtonSubmitGreenSmall({ value, onClick }) {
  return (
    <input
      className='py-[1.25rem] text-[1.4rem] px-[3rem] bg-green-emerald rounded-[10rem] text-white flex self-center 
  uppercase hover:translate-y-[-2px] hover-button-shadow cursor-pointer transition duration-300'
      type='submit'
      value={value}
      onClick={onClick}
    />
  );
}

export default ButtonSubmitGreenSmall;
