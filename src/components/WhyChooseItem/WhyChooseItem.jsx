'use client';
import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const WhyChooseItem = ({ heading, text }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <label className='flex cursor-pointer justify-between border-b py-2'>
        <input
          type='checkbox'
          className='hidden'
          onChange={(e) => setVisible(e.target.checked)}
        />
        <h5>{heading}</h5>
        {visible ? <FaMinus /> : <FaPlus />}
      </label>

      <p
        className={`${visible ? 'h-auto py-2' : 'h-0'} overflow-hidden duration-500`}
      >
        {text}
      </p>
    </>
  );
};

export default WhyChooseItem;
