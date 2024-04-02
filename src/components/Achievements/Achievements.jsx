import React from 'react';
import Stat from '../Stat/Stat';
import DoctorFeedbacks from '../DoctorFeedbacks/DoctorFeedbacks';

const Achievements = () => {
  return (
    <div className='bg-[#F9F7F7] pb-[15rem]'>
      <p className='py-1 text-center text-lg'>Our Achievements</p>
      <h3 className='mx-auto mb-6 w-1/2 text-center text-[#3F3A64]'>
        Top Rated <span className='text-green'>By Customer</span> & 100% Success
        Rate
      </h3>

      <Stat textGreen />

      <div className='absolute left-0 right-0 mx-auto'>
        <DoctorFeedbacks />
      </div>
    </div>
  );
};

export default Achievements;
