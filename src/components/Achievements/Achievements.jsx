import React from 'react';
import Stat from '../Stat/Stat';
import DoctorFeedbacks from '../DoctorFeedbacks/DoctorFeedbacks';

const Achievements = () => {
  return (
    <div className='bg-[#F9F7F7] pb-7 pt-9'>
      <p className='text-center text-lg'>Our Achievements</p>
      <h3 className='mx-auto mb-4 w-11/12 text-center text-[#3F3A64] xl:w-1/2'>
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
