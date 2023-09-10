import React from 'react';
// import { useForm } from 'react-hook-form';

function InputPasswordBasic({ name, value, setValue }) {
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
    <div>
      <label className=' text-[1.6rem] font-bold mb-[0.75rem]'></label>
      <input
        className={`bg-grey-concrete font-lato input-auth input-auth-valid-focus w-[100%]`}
        type='password'
        value={value} // Set the input value to the userName state
        onChange={e => {
          handleInputChange(e);
          // onChange();
        }}
        placeholder={name}
        // {...register('Password', {
        //   required: true,
        //   min: 3,
        // })}
      />
    </div>
  );
}

export default InputPasswordBasic;
