'use client';
import React, { useEffect, useState, useRef } from 'react';

function EditableInput({ edit, setEdit, value, setValue, onChange, onBlur }) {
  const inputRef = useRef(null);

  const onInputBlur = () => {
    if (onBlur) {
      onBlur()
    }
  };

  const handleInputChange = event => {
    const value = event.target.value;

    setValue(value);
  };

  useEffect(() => {
    if (inputRef.current && edit) {
      inputRef.current.focus();
    }
  }, [inputRef.current, edit]);

  return (
    <div>
      <input
        ref={inputRef}
        onBlur={onInputBlur}
        autofocus={true}
        value={value} // Set the input value to the userName state
        onChange={e => {
          handleInputChange(e);
          // onChange();
        }}
        className={`${
          !edit ? 'hidden' : ''
        } text-right bg-transparent border-none focus:outline-none focus:ring-0 box-bordermax-w-[100%] w-[100%]`}
        type='text'
      />
    </div>
  );
}

export default EditableInput;
