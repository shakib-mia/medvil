import React from 'react';
import headerBg from '@/assets/images/header-bg.jpg';
import doctor from '@/assets/images/doctor.png';
import Image from 'next/image';

const Header2 = () => {
  return (
    <div
      className='h-screen bg-[size:100%_100vh] bg-no-repeat'
      style={{ backgroundImage: `url(${headerBg.src})` }}
    >
      <div className='container h-full'>
        <div className='text-green flex h-full items-end text-lg'>
          <div className='w-4/6'></div>
          <aside className='flex h-full w-2/6 items-end overflow-hidden'>
            <Image src={doctor} className='w-full' alt='doctor' />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Header2;
