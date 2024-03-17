'use client';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const Select = ({ heading, options, setSelectedItem, selectedItem }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-64 relative'>
      <div
        className={`flex cursor-pointer items-center justify-between rounded-[28px] border border-[#DEE4EB] px-3 py-2 text-[#7D7D7D] ${open && 'rounded-b-none border-b-0'}`}
        onClick={() => setOpen(!open)}
      >
        {selectedItem.length ? selectedItem : heading}
        <FaChevronDown
          className={`transition ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {open && (
        <ul className='absolute z-[9] w-full overflow-hidden rounded-b-lg border border-t-0 border-[#DEE4EB] bg-[#F3F6F7] shadow-lg'>
          {options?.map((item, key) => (
            <li
              className='cursor-pointer px-3 py-1 hover:bg-slate-300'
              key={key}
              onClick={() => {
                setSelectedItem(item);
                setOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
