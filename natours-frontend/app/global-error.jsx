'use client';

export default function GlobalError({ error, reset }) {
  console.log('error', error);
  return (
    <div>
      <div className='h-[100vh]  text-[3.2rem] flex pt-[30vh]  items-center flex-col '>
        <span>
          <span>
            <h2 className='inline-flex font-semibold bg-orange-red-gradient  bg-clip-text text-transparent'>
              UH OH! SOMETHING WENT WRONG!&nbsp;
            </h2>
          </span>
          <span className='inline-flex'>&nbsp;😢 🤯</span>
          {}
        </span>

        <button className='flex text-[2.6rem] mt-[1.2rem] font-medium' onClick={() => reset()}>
          Please try again later.
        </button>
      </div>
    </div>
  );
}
