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
            const name = decodeURIComponent(options[1])
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
        case 'forgot-password':
              const email = decodeURIComponent(options[1])
              return (
                <Success>
                  {`Email has been sent successfully on ${email}. Please check your inbox.`}
                </Success>
              )
          break;
        case 'booking':
              return (
                <Success>
                  <div className='flex-row leading-relaxed' >
                    <div className=' flex justify-center' >
                        Payment Successful! 🎉
                      </div>
                      <div className=' flex justify-center' >
                        Thank you for your payment. Your tour is now booked. We're excited to have you on board and look forward to providing you with an amazing experience.
                      </div>
                      <div className=' flex justify-center' >
                       Please check your email for the booking confirmation and further details. If you have any questions or need assistance, feel free to reach out to our customer support team.
                      </div>
                      <div className=' flex justify-center' >
                        Have a fantastic time on your tour! 🌟
                      </div>
                  </div>
                </Success>
              )
          break;
        default:
          const message = decodeURIComponent(options[1])
              return (
                <Success>
                  {message}
                </Success>
              )
      }
}

export default page