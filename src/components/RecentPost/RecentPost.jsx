import Image from 'next/image';
import React from 'react';

const RecentPost = ({ image, date, heading }) => {
  return (
    <div className='flex items-center gap-2'>
      <Image
        src={image}
        alt={heading}
        className='h-[5.3125rem] w-[5.3125rem] rounded-lg'
      />

      <aside>
        <p className='text-xs text-primary'>{date}</p>
        <h6 className='text-base text-secondary'>{heading}</h6>
      </aside>
    </div>
  );
};

export default RecentPost;
