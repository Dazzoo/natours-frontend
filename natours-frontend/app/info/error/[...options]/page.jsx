import React from 'react';

const Error = ({children}) => {
    return (
        <div className='min-h-[90vh] flex flex-col justify-center items-center text-[1.7rem]' >
            <h2 className='text-[4rem] font-bold' >
              Error 💥
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
        case 'error':
            const message = options[1]?.replaceAll('%20', ' ')
            return (
              <Error>
                {message}
              </Error>
              )
          break;
        default:
            return (
              <Error>
                {message}
              </Error>
              )
          break;
      }
}

export default page