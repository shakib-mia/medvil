'use client';
import React, { useState } from 'react';

const Accordion = ({ heading, text }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='mb-3 w-full'>
      <div
        className='flex w-full cursor-pointer items-center justify-between bg-[#F3F6F7] px-[32px] py-3 text-secondary'
        onClick={() => setOpen(true)}
      >
        <p>{heading}</p>
        <aside>+</aside>
      </div>

      {open && (
        <div className='mt-3'>
          <div className='flex items-center gap-2'>
            <div className='h-[50px] w-[5px] rounded-full bg-primary'></div>
            <div
              className='flex w-full cursor-pointer items-center justify-between pr-[32px]'
              onClick={() => setOpen(false)}
            >
              <p>{heading}</p>
              <aside className='flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary'>
                -
              </aside>
            </div>
          </div>
          <p className='ml-[20px] mt-1 w-9/12 text-grey-4'>{text}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
