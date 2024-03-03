import Image from 'next/image';
import React from 'react';
import quote from '../../assets/icons/quote.png';

const FeedbackItem = ({ heading, comment, name, designation, image }) => {
  return (
    <div className='bg-white bg-opacity-90 p-[35px]'>
      <p className='text-xl text-primary'>{heading}</p>
      <h6 className='mt-2 text-secondary'>{comment}</h6>

      <div className='mt-[32px] flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image
            src={image}
            alt={name}
            className='h-[64px] w-[64px] rounded-full'
          />
          <aside>
            <h5 className='text-primary'>{name}</h5>
            <p className='mt-[1px] text-grey-2'>{designation}</p>
          </aside>
        </div>

        <Image src={quote} alt='quote' className='h-fit w-fit' />
      </div>
    </div>
  );
};

export default FeedbackItem;
