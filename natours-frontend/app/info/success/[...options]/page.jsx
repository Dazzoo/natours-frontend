import React from 'react';

const Success = ({children}) => {
    return (
        <div className='min-h-[90vh] flex flex-col justify-center items-center text-[1.7rem]' >
            <h2 className='text-[4rem] font-bold' >
              Success 🥳
            </h2>
            <div className=' font-semibold my-[7rem] w-[40%] max-sm:w-[80%] max-w-[max-content]' >
                {children}
            </div>
        </div>
    )
}

function page({params}) {
  const options = params.options
  const type = options[0]  
    
    switch (type) {
        case 'register':
            const name = options[1]?.replaceAll('%20', ' ')
            return (
              <Success>
                Dear {name},
                Thank you for creating an account with us! To complete the registration process, please verify your email address by clicking on the verification link that has been sent to your email.
                If you do not see the email in your inbox, please check your spam folder.
                If you have any questions or need further assistance, please don't hesitate to contact our support team.
                Best regards, Natours
              </Success>
              )
          break;
        case 'confirm-email':
              const message = options[1]?.replaceAll('%20', ' ')
              return (
                <Success>
                  {message}
                </Success>
              )
          break;
        case 'valueN':

          break;
        default:
          break;
      }
}

export default page