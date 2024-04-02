import React from 'react';
import appointmentBg from '@/assets/images/appointments-background.png';
import healthBg from '@/assets/images/health-background.png';
import locationsBg from '@/assets/images/locations-background.png';
import Button from '../Button/Button';

const CTA = () => {
  return (
    <div className='bg-[#FAFAFA]'>
      <div className='container grid grid-cols-1 xl:grid-cols-3'>
        <div
          className='bg-no-repeat p-4 text-center'
          style={{
            backgroundImage: `url(${appointmentBg.src})`,
            backgroundPositionY: '100%',
          }}
        >
          <h5>Book an Appointment</h5>
          <p className='text-lg text-[#7d7d7d]'>
            Diagnosy always help to provide proper treatment for most of get{' '}
          </p>
          <Button className='mx-auto mt-2 !rounded-full border-green bg-transparent !text-green'>
            Appointment
          </Button>
        </div>
        <div
          className='bg-no-repeat p-4 text-center'
          style={{
            backgroundImage: `url(${locationsBg.src})`,
            backgroundPositionY: '100%',
          }}
        >
          <h5>Get Direction</h5>
          <p className='text-lg text-[#7d7d7d]'>
            Find your way to a healthier smile. Get directions to Medvil Dental
            Hospital.
          </p>
          <Button className='mx-auto mt-2 !rounded-full border-green bg-transparent !text-green'>
            Get Direction
          </Button>
        </div>
        <div
          className='bg-no-repeat p-4 text-center'
          style={{
            backgroundImage: `url(${healthBg.src})`,
            backgroundPositionY: '100%',
          }}
        >
          <h5>Meet Our Dentists</h5>
          <p className='text-lg text-[#7d7d7d]'>
            Discover your smile experts. Meet the team transforming lives at
            Medvil.
          </p>
          <Button className='mx-auto mt-2 !rounded-full border-green bg-transparent !text-green'>
            Find A Dentists
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
