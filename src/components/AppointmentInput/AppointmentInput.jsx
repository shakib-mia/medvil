import React from 'react';
import { LuMailOpen, LuUser2 } from 'react-icons/lu';
import { FiPhone } from 'react-icons/fi';

const AppointmentInput = (props) => {
  const { placeholder } = props;
  return (
    <div className='flex rounded-full border border-[#DEE4EB] px-3 py-2'>
      <input
        {...props}
        className='h-full w-full bg-transparent text-base text-[#83868a] focus:outline-none'
        placeholder={placeholder}
      />
      {placeholder?.toLowerCase()?.includes('name') && (
        <LuUser2 className='text-[#7D7D7D]' />
      )}
      {placeholder?.toLowerCase()?.includes('email') && (
        <LuMailOpen className='text-[#7D7D7D]' />
      )}
      {placeholder?.toLowerCase()?.includes('phone') && (
        <FiPhone className='text-[#7D7D7D]' />
      )}
    </div>
  );
};

export default AppointmentInput;
