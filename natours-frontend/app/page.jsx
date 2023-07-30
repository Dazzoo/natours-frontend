import Image from 'next/image';

export default function Home() {
  return (
    <div className=''>
      <header className='bg-grey-tundora h-32 pl-20 pr-20 sm:h-32 md:h-32 lg:h-32 xl:h-32 flex justify-between text-[1.6rem] relative'>
        <nav className='flex h-full items-center'>
          <a
            href='#'
            className='text-white-alabaster	font-lato cursor-pointer font-normal uppercase hover:translate-y-[-2px] hover-text-shadow-black'
          >
            All tours
          </a>
        </nav>
        <div className='flex self-center absolute left-1/2 transform -translate-x-1/2'>
          <img className='h-[3.5rem]' src='./img/logo-white.png' />
        </div>
        <nav className='flex h-full items-center'>
          <a
            href='#'
            className='text-white-alabaster	font-lato cursor-pointer font-normal uppercase mr-[3rem] hover:translate-y-[-2px] hover-text-shadow-black'
          >
            Log in
          </a>
          <a
            href='#'
            className='text-white-alabaster	font-lato cursor-pointer font-normal 
            uppercase py-[1rem] px-[3rem] border-solid 
            border border-current rounded-[10rem] hover:bg-white-alabaster hover:text-grey-boulder hover:border-grey-boulder hover:translate-y-[-2px]'
          >
            Sign up
          </a>
        </nav>
      </header>
      <main className='bg-white-alabaster  flex py-32 px-24 overflow-auto'>
        <div className='border border-black border-solid w-[100%] flex  justify-center overflow-auto flex-wrap'>
          <div className='rounded-[3px] min-h-[50rem] w-[25%] min-w-[24rem] max-w-[36rem] mx-[3rem] my-[4rem] bg-white box-shadow-standard'>
            <div className='clip-path-card'>
              <img src='./img/tour-2-cover.jpg'></img>
            </div>
          </div>
          <div className='rounded-[3px] min-h-[50rem] w-[25%] min-w-[24rem] max-w-[36rem] mx-[3rem] my-[4rem] bg-white box-shadow-standard'></div>
          <div className='rounded-[3px] min-h-[50rem] w-[25%] min-w-[24rem] max-w-[36rem] mx-[3rem] my-[4rem] bg-white box-shadow-standard'></div>
        </div>
      </main>
      <footer className='bg-white-alabaster pt-[6rem] pr-[4rem] pb-[3rem] pl-[4rem] flex justify-between'>
        <div>
          <img className='h-[3.5rem]' src='./img/logo-green.png' />
        </div>
        <div className='content-between	text-[1.4rem]'>
          <ul className='flex mb-[1rem] '>
            <li className='mr-[1.5rem] hover:text-green-emerald'>
              <a href='#'>About us</a>
            </li>
            <li className='mr-[1.5rem] hover:text-green-emerald'>
              <a href='#'>Download apps</a>
            </li>
            <li className='mr-[1.5rem] hover:text-green-emerald'>
              <a href='#'>Become a guide</a>
            </li>
            <li className='mr-[1.5rem] hover:text-green-emerald'>
              <a href='#'>Careers</a>
            </li>
            <li className='hover:text-green-emerald'>
              <a href='#'>Contact</a>
            </li>
          </ul>
          <div className='flex justify-end'>© 2023 by Yurii Shushanskyi.</div>
        </div>
      </footer>
    </div>
  );
}
