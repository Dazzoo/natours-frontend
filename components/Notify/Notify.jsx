import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './notify.css';

function Notify(props) {
  return (
    <ToastContainer
      position='top-right'
      autoClose={10000} // Adjust the duration as needed
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      pauseOnFocusLoss
    />
  );
}

export default Notify;
