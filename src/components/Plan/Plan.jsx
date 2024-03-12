import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';

const Plan = ({ planName, price, offers, details }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-slate-200 px-2 pb-4 pt-7 md:px-4
      ${planName === 'Gold' ? 'shadow-[0_0_80_0_#3530581F]' : 'shadow-[0_0_80_0_#CDDCDC40]'}`}
    >
      {planName === 'Gold' && (
        <p className='absolute left-0 top-0 w-full bg-primary py-2 text-center capitalize text-white'>
          most popular
        </p>
      )}
      <h4 className='mb-2 text-center lg:mb-[2rem]'>{planName}</h4>
      <div className='flex items-end justify-center gap-[5px]'>
        <h3 className='leading-[0.4]'>${price}</h3>
        <small className='text-sm'>/Hour</small>
      </div>

      <p className='mx-auto mb-3 mt-1 w-2/3 text-center text-sm text-grey-3'>
        {details}
      </p>

      <ul className='flex flex-col divide-y divide-[#F0EAEA]'>
        {offers.map(({ text, available }, key) => (
          <li
            className={`flex items-center gap-2 ${!available && 'text-grey-3'} py-1`}
            key={key}
          >
            {available ? (
              <>
                <FaCheck className='text-primary' /> {text}
              </>
            ) : (
              <>
                <IoCloseSharp /> {text}
              </>
            )}
          </li>
        ))}
      </ul>

      <div className='mt-3 flex justify-center md:mt-7'>
        <button
          className={`rounded-full transition ${planName === 'Gold' ? 'bg-primary text-white shadow-[0_0_10px_0_#00000026] hover:bg-transparent hover:text-primary' : 'shadow-[0_0_80px_0_#74717126] hover:bg-primary hover:text-white'} px-4 py-2 md:px-6`}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Plan;
