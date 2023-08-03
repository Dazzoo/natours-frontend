import React from 'react';

function ButtonGreenSmall(props) {
  return (
    <a
      className='py-[1.25rem] px-[3rem] bg-green-emerald rounded-[10rem] text-white flex self-center 
    uppercase hover:translate-y-[-2px] hover-button-shadow cursor-pointer transition duration-300 text-[1.4rem]'
      onClick={props.onClick}
    >
      {props.name}
    </a>
  );
}

export default ButtonGreenSmall;
