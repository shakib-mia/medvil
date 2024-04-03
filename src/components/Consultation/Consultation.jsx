import React from 'react';
import Button from '../Button/Button';

const Consultation = () => {
  return (
    <div className='bg-grey-5 py-4 xl:py-6 2xl:py-10'>
      <div className='container'>
        <div className='mx-auto w-full xl:w-4/5'>
          <p className='text-center text-lg font-medium'>Contact</p>
          <h4 className='mt-2 text-center'>
            Get Free <span className='text-green'>Consultation</span>
          </h4>

          <form className='mt-2 bg-white p-2 xl:mt-6 xl:p-5'>
            <div className='grid grid-cols-1 gap-3 xl:grid-cols-2'>
              <input
                className='rounded-md border border-[#CCD7E575] p-1 focus:outline-none'
                placeholder='Your Name'
              />
              <input
                className='rounded-md border border-[#CCD7E575] p-1 focus:outline-none'
                placeholder='Your Email'
              />
            </div>

            <div className='mt-3 grid grid-cols-1 gap-3 xl:grid-cols-2'>
              <input
                className='rounded-md border border-[#CCD7E575] p-1 focus:outline-none'
                placeholder='Your Phone'
              />
              <input
                className='rounded-md border border-[#CCD7E575] p-1 focus:outline-none'
                placeholder='Your Website'
              />
            </div>

            <textarea
              rows='4'
              className='mt-3 w-full rounded-md border border-[#CCD7E575] p-1 focus:outline-none'
              placeholder='Message...'
            ></textarea>

            <div className='mt-4 flex justify-center'>
              <Button
                type='submit'
                className='!rounded-full !border-green !bg-green hover:!bg-transparent hover:!text-green'
              >
                Send A Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
