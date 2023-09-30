'use client'
import React, { useEffect, useState } from 'react';
import { ErrorMessage } from "@hookform/error-message";

function InputBasic({ name, type, required, id, pattern_value, pattern_message, register, errors, validate }) {

  const [value, setValue] = useState(null)
    
  
  const handleInputChange = event => {
    const value = event.target.value;
    setValue(value)
  };

  const validByPattern = (value) => {
    return !pattern_value.test(value)
  }


  return (
    <div className='relative' >
      {/* <label className=' text-[1.5rem] font-bold absolute bottom-[100%]'>{'value' ? name : null}</label> */}
      <input
        className={`bg-grey-concrete font-lato input-auth w-[100%] ${errors[name]?.type || validByPattern(value) ? 'input-auth-error-focus' : 'input-auth-valid-focus'}`}
        type={type}
        id={id}
        required={required}
        placeholder={name}
        {...register(`${name}`, {
          pattern: {
            value: pattern_value,
            message: pattern_message
          },
          validate: validate,
          onChange: handleInputChange
        })}
       
      />
      <div className='absolute top-[100%] text-orange-burning font-semibold text-[1.4rem]' >
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p>{message}</p>}
      />
      </div>
      
    </div>
  );
}

export default InputBasic;
