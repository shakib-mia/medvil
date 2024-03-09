import Image from 'next/image';
import React from 'react';

const AppointmentItem = ({ image, heading, paragraph }) => {
  return (
    <div className='flex flex-col items-center gap-2 rounded-[10px] border border-primary border-opacity-0 bg-white p-[32px] shadow-[2px_15px_43px_-16px_#64606012] hover:border-opacity-[0.12] md:flex-row'>
      <Image src={image} alt={heading} />
      <aside className='text-center md:text-left'>
        <h5 className='text-secondary'>{heading}</h5>
        <p className='mt-1 text-base text-grey-2'>{paragraph}</p>
      </aside>
    </div>
  );
};

export default AppointmentItem;
