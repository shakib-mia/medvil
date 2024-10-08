import Image from 'next/image';
import React from 'react';

const DoctorsFeedbackItem = ({ image, name, designation, text }) => {
  return (
    <div className='bg-white p-3 py-5 shadow-[0_0_26px_0_#CCCDCD40] transition hover:shadow-[0_0_14px_0_#CCCDCD40] md:p-4 xl:px-[2rem]'>
      <div className='flex gap-3'>
        <Image src={image} alt={name} />
        <aside>
          <h4 className='capitalize text-secondary'>{name}</h4>
          <p className='mt-1 text-grey-3'>{designation}</p>
        </aside>
      </div>
      <p className='mt-3 text-grey-3'>{text}</p>
    </div>
  );
};

export default DoctorsFeedbackItem;
