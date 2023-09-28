'use client'
import React, { useEffect } from 'react';
import { ErrorMessage } from "@hookform/error-message";

function InputPasswordBasic({ name, value, setValue, type, required, id, pattern_value, pattern_message, register, errors }) {
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //     setError,
  //     watch,
  //   } = useForm();
  
  const handleInputChange = event => {
    const value = event.target.value;

    setValue(value);
  };


  return (
    <div className='relative' >
      <label className=' text-[1.5rem] font-bold absolute bottom-[100%]'>{value ? name : null}</label>
      <input
        className={`bg-grey-concrete font-lato input-auth w-[100%] ${errors[name]?.type ? 'input-auth-error-focus' : 'input-auth-valid-focus'}`}
        type={type}
        id={id}
        required={required}
        value={value} 
        onChange={e => {
          handleInputChange(e);
          // onChange();
        }}
        placeholder={name}
        {...register(`${name}`, {
          pattern: {
            value: pattern_value,
            message: pattern_message // JS only: <p>error message</p> TS only support string
          }
        })}
       
      />
      <div className='absolute top-[100%] text-red-error font-medium text-[1.5rem]' >
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p>{message}</p>}
      />
      </div>
      
    </div>
  );
}

export default InputPasswordBasic;
