import React from 'react';
import expertsBG from '@/assets/images/experts-bg.png';
import specialist1 from '@/assets/images/experts/doctor-1.jpg';
import specialist2 from '@/assets/images/experts/doctor-2.jpg';
import specialist3 from '@/assets/images/experts/doctor-3.jpg';
import specialist4 from '@/assets/images/experts/doctor-4.jpg';
import Expert from '../Expert/Expert';

const Experts = () => {
  const specialists = [
    {
      image: specialist1,
      name: 'Dr. Sarah Rodriguez',
      designation: 'General Dentistry',
      fee: 120,
    },
    {
      image: specialist2,
      name: 'Dr. Michael Chen',
      designation: 'Orthodontics',
      fee: 150,
    },
    {
      image: specialist3,
      name: 'Dr. Jessica Lee',
      designation: 'Periodontics',
      fee: 120,
    },
    {
      image: specialist4,
      name: 'Dr. Alex kim',
      designation: 'Maxillofacial Surgery',
      fee: 90,
    },
  ];

  return (
    <div
      className='py-5 xl:py-10'
      style={{ backgroundImage: `url(${expertsBG.src})` }}
    >
      <div className='container'>
        <p className='text-center font-medium'>Best Dentists</p>
        <h3 className='text-center text-[#3F3A64]'>
          Meet Our <span className='text-green'>Specialists</span>
        </h3>

        <div className='mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {specialists.map((item, key) => (
            <Expert {...item} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experts;
