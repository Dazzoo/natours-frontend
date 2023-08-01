import Image from 'next/image';
import { IoLocationOutline } from 'react-icons/io5';

export default function Home() {
  return (
    <div className='font-lato'>
      <header className='bg-grey-tundora h-32 pl-20 pr-20 sm:h-32 md:h-32 lg:h-32 xl:h-32 flex justify-between text-[1.6rem] relative'>
        <nav className='flex h-full items-center'>
          <a
            href='#'
            className='text-white-alabaster cursor-pointer font-normal uppercase hover:translate-y-[-2px] hover-text-shadow-black transition duration-300'
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
            className='text-white-alabaster cursor-pointer font-normal uppercase mr-[3rem] hover:translate-y-[-2px] hover-text-shadow-black transition duration-300'
          >
            Log in
          </a>
          <a
            href='#'
            className='text-white-alabaster cursor-pointer font-normal 
            uppercase py-[1rem] px-[3rem] border-solid 
            border border-current rounded-[10rem] hover:bg-white-alabaster hover:text-grey-boulder hover:border-grey-boulder hover:translate-y-[-2px] transition duration-300'
          >
            Sign up
          </a>
        </nav>
      </header>
      <main className='bg-white-alabaster  flex py-32 px-24 overflow-auto '>
        <div className='border border-black border-solid w-[100%] flex  justify-center overflow-auto flex-wrap'>
          <div className='rounded-[3px]  w-[25%] min-w-[28rem] max-w-[36rem] mx-[3rem] my-[4rem] bg-white box-shadow-standard relative '>
            <div className='clip-path-card before:bg-green-emerald-gradient before:absolute before:w-[100%] before:h-[100%] before:opacity-70 '>
              <img src='./img/tour-2-cover.jpg'></img>
            </div>
            <h3 className='absolute z-20 top-[14%] xl:top-[20%] 2xl:top-[27%] right-[2rem] w-[70%]  text-right '>
              <span className='text-white-alabaster bg-green-emerald-gradient-85  text-[2.75rem] box-decoration-clone py-[1rem] px-[1.5rem] uppercase'>
                The Sea Explorer
              </span>
            </h3>
            <div className='mx-[3rem] my-[2.5rem]'>
              <div className='uppercase text-[1.2rem] font-bold	text-grey-boulder'>
                medium-7-day-tour
              </div>
              <div className='mt-[1rem] text-[1.5rem] italic'>
                Exploring the jaw-dropping US east coast by foot and by boat
              </div>
              <div className='text-[1.3rem]'>
                <div className='mt-[1rem] flex justify-between '>
                  <span className='w-[45%]  inline-flex items-center'>
                    <span className='inline-flex mr-[0.3rem]'>
                      <IoLocationOutline className='h-[2rem] w-[2rem] fill-green-emerald stroke-green-emerald stroke-3' />
                    </span>
                    <span>Miami, USA</span>
                  </span>
                  <span className='w-[45%] inline-flex items-center'>
                    <span className='inline-flex mr-[0.3rem]'>
                      <IoLocationOutline className='h-[2rem] w-[2rem] fill-green-emerald stroke-green-emerald' />
                    </span>
                    <span>June 2021</span>
                  </span>
                </div>
                <div className='mt-[1rem] flex justify-between'>
                  <span className='w-[45%] inline-flex items-center'>
                    <span className='inline-flex mr-[0.3rem]'>
                      <IoLocationOutline className='h-[2rem] w-[2rem] fill-green-emerald stroke-green-emerald' />
                    </span>
                    <span>4 stops</span>
                  </span>
                  <span className='w-[45%] inline-flex items-center'>
                    <span className='inline-flex mr-[0.3rem]'>
                      <IoLocationOutline className='h-[2rem] w-[2rem] fill-green-emerald stroke-green-emerald' />
                    </span>
                    <span>15 people</span>
                  </span>
                </div>
              </div>
            </div>
            <div className='bg-white-alabaster py-[2.5rem] px-[3rem] flex justify-between text-[1.4rem]'>
              <div
                className='
'
              >
                <div>
                  <span className=' font-bold'>$497</span>
                  <span className='text-grey-dusty'> per person</span>
                </div>

                <div className='mt-[1rem]'>
                  <span className=' font-bold'>4.3 </span>
                  <span className='text-grey-dusty'> rating(7)</span>
                </div>
              </div>
              <a className='py-[1.25rem] px-[3rem] bg-green-emerald rounded-[10rem] text-white flex self-center uppercase hover:translate-y-[-2px] hover-button-shadow cursor-pointer transition duration-300'>
                Details
              </a>
            </div>
          </div>

          <div className='rounded-[3px] min-h-[20rem] w-[25%] min-w-[28rem] max-w-[36rem] mx-[3rem] my-[4rem] bg-white box-shadow-standard relative '></div>
          <div className='rounded-[3px] min-h-[20rem] w-[25%] min-w-[28rem] max-w-[36rem] mx-[3rem] my-[4rem] bg-white box-shadow-standard relative '></div>
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
