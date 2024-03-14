import Layouts from '@/components/Layouts/Layouts';
import React from 'react';
import doctor from '../../assets/images/doctor-details.png';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import { FaCheck } from 'react-icons/fa6';

const page = () => {
  return (
    <Layouts title='Doctor Details'>
      <div className='container flex gap-5 py-10'>
        <div className='w-5/12'>
          <Image src={doctor} alt='doctor' className='w-full' />
          <div className='relative mt-3 rounded-lg bg-[#F3F6F7] p-4 pb-8'>
            <h5 className='mb-2 text-[#3F3A64]'>My time Schedule</h5>
            <div className='divide-y divide-dashed divide-[#00000030]'>
              <div className='flex justify-between py-2 text-[#7d7d7d]'>
                <aside>Mon - fri:</aside>
                <aside>8:00 am - 6:00 pm</aside>
              </div>
              <div className='flex justify-between py-2 text-[#7d7d7d]'>
                <aside>Saturday:</aside>
                <aside>8:00 am - 6:00 pm</aside>
              </div>
              <div className='flex justify-between py-2 text-[#7d7d7d]'>
                <aside>Sunday:</aside>
                <aside>8:00 am - 6:00 pm</aside>
              </div>
            </div>

            <Button className='absolute bottom-[-1.5rem] left-0 right-0 mx-auto !rounded-full hover:bg-slate-200 md:bottom-[-2rem]'>
              (123) 34764 43456
            </Button>
          </div>
        </div>
        <div className='w-7/12'>
          <div className='flex items-center justify-between pb-3'>
            <h3 className='text-5xl'>Dr. John Deo</h3>
            <div className='bg-[#F3F6F7] px-4 py-1 text-lg font-medium text-primary'>
              Fee: $65
            </div>
          </div>

          <h5 className='border-b border-[#66666638] pb-2 text-xl'>
            About The Doctor
          </h5>
          <p className='mb-10 mt-2 text-base text-[#7D7D7D]'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using{' '}
            {'Content here, content here'}, making it look like readable
            English. Many desktop publishing packages and web page editors
          </p>

          <div className='flex rounded-lg bg-[#F3F6F7] p-3'>
            <div className='w-5/12'>
              <h6 className='font-bold text-[#3F3A64]'>Speciality</h6>
            </div>
            <div className='w-7/12'>
              <h6 className='font-bold text-[#666666]'>Medicine</h6>
            </div>
          </div>

          <div className='flex rounded-lg  p-3'>
            <div className='w-5/12'>
              <h6 className='font-bold text-[#3F3A64]'>Degrees</h6>
            </div>
            <div className='w-7/12'>
              <h6 className='font-bold text-[#666666]'>MBBS, M.D</h6>
            </div>
          </div>

          <div className='flex rounded-lg bg-[#F3F6F7] p-3'>
            <div className='w-5/12'>
              <h6 className='font-bold text-[#3F3A64]'>Areas of Expertise</h6>
            </div>
            <div className='flex w-7/12 flex-col gap-1 text-grey-3'>
              <div className='flex items-center gap-1'>
                <FaCheck className='text-primary' />
                <p>Cardiac Imaging – Non-invasive.</p>
              </div>
              <div className='flex items-center gap-1'>
                <FaCheck className='text-primary' />
                <p>Hypertrophic Cardiomyopathy.</p>
              </div>
              <div className='flex items-center gap-1'>
                <FaCheck className='text-primary' />
                <p>Cardiac Rehabilitation and Exercise.</p>
              </div>
            </div>
          </div>

          <div className='flex rounded-lg  p-3'>
            <div className='w-5/12'>
              <h6 className='font-bold text-[#3F3A64]'>Office</h6>
            </div>
            <div className='w-7/12'>
              <p className='text-[#666666]'>
                434 William S Canning Blvd, Fall River MA 2721
              </p>
            </div>
          </div>

          <div className='flex rounded-lg bg-[#F3F6F7] p-3'>
            <div className='w-5/12'>
              <h6 className='font-bold text-[#3F3A64]'>University</h6>
            </div>
            <div className='w-7/12'>
              <h6 className='font-bold text-[#666666]'>Harvard University</h6>
            </div>
          </div>

          <div className='mt-4 rounded-lg bg-primary p-6 text-white'>
            <h4>Book An Appointment</h4>
            <p className='mt-2 w-4/6 text-base'>
              Scenarios and economically sound ROI. Dynamically seize cross
              platform {'"outside the box"'} thinking after enterprise...
            </p>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default page;
