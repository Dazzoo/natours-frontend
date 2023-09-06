'use client';
import React from 'react';
import { useState } from 'react';
import usersApi from '@/api/users/usersApi';

function page({}) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = event => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = async () => {
    // Check if an image is selected

    if (selectedImage) {
      const formData = new FormData();
      formData.append('photo', selectedImage);
      usersApi.updateUserImage(formData);
    } else {
      console.warn('No image selected');
    }
  };

  return (
    <div>
      <div>Account Setting</div>
      <div>
        <input type='file' accept='image/*' onChange={handleImageChange} />
        <button onClick={handleUpload}>Upload Image</button>
      </div>
    </div>
  );
}

export default page;
