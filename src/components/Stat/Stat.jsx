'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import CountUp from 'react-countup';

const Stat = ({ textPrimary, textGreen }) => {
  const pathname = usePathname();
  return (
    <div
      className={`container flex flex-wrap ${pathname !== '/home' && 'mt-[9.5rem]'} items-center justify-between text-center md:flex-nowrap`}
    >
      <div className='w-1/2 py-3 xl:w-auto'>
        <div
          className={`el-messiri text-7xl font-semibold ${textPrimary ? 'text-primary' : textGreen ? 'text-green' : 'text-secondary'}`}
        >
          <CountUp end={12} duration={1} enableScrollSpy />
          k+
        </div>
        <p className='text-grey-3'>Happy Clients</p>
      </div>
      <div className='hidden h-[4.125rem] w-[1px] bg-primary opacity-45 md:block'></div>
      <div className='w-1/2 py-3 xl:w-auto'>
        <div
          className={`el-messiri text-7xl font-semibold ${textPrimary ? 'text-primary' : textGreen ? 'text-green' : 'text-secondary'}`}
        >
          <CountUp end={16} duration={1} enableScrollSpy />+
        </div>
        <p className='text-grey-3'>Health Section</p>
      </div>
      <div className='hidden h-[4.125rem] w-[1px] bg-primary opacity-45 md:block'></div>
      <div className='w-1/2 py-3 xl:w-auto'>
        <div
          className={`el-messiri text-7xl font-semibold ${textPrimary ? 'text-primary' : textGreen ? 'text-green' : 'text-secondary'}`}
        >
          <CountUp end={45} duration={1} enableScrollSpy />+
        </div>
        <p className='text-grey-3'>Certified Dentists</p>
      </div>
      <div className='hidden h-[4.125rem] w-[1px] bg-primary opacity-45 md:block'></div>
      <div className='w-1/2 py-3 xl:w-auto'>
        <div
          className={`el-messiri text-7xl font-semibold ${textPrimary ? 'text-primary' : textGreen ? 'text-green' : 'text-secondary'}`}
        >
          <CountUp end={48} duration={1} enableScrollSpy />+
        </div>
        <p className='text-grey-3'>Award Winning</p>
      </div>
    </div>
  );
};

export default Stat;
