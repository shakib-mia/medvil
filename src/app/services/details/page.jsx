import Blog from '@/components/ServiceDetails/ServiceDetails';
import Categories from '@/components/Categories/Categories';
import Layouts from '@/components/Layouts/Layouts';
import RecentPosts from '@/components/RecentPosts/RecentPosts';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import ServiceDetails from '@/components/ServiceDetails/ServiceDetails';
import bg from '@/assets/images/call-for-help-bg.png';
import { FaPhoneVolume } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';

const page = () => {
  return (
    <Layouts title='Service Details'>
      <div className='container flex flex-col gap-[2.25rem] py-4 md:py-6 xl:flex-row xl:py-10'>
        <aside className='w-full xl:w-4/12'>
          {/* <div className='rounded-lg border p-3'> */}
          <div className='relative flex h-7 items-center rounded-lg shadow'>
            <input
              type='text'
              className='absolute h-full w-full bg-transparent px-[1.875rem] py-3 focus:outline-none'
              placeholder='Search...'
            />
            <CiSearch className='my-auto ml-auto mr-[1.875rem] text-2xl font-bold text-white' />
          </div>
          {/* <RecentPosts /> */}
          {/* </div> */}
          <Categories />
          <div
            className='mt-3 flex items-center bg-[size:100%_100%] bg-no-repeat p-2 text-white'
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <div className='border-r border-white pr-2'>
              <FiPhoneCall />
            </div>
            <p className='el-messiri pl-2 text-lg'>
              Call For Any Help <br />
              +99 - 234 436 34
            </p>
          </div>
        </aside>
        <aside className='w-full xl:w-8/12'>
          <ServiceDetails />
        </aside>
      </div>
    </Layouts>
  );
};

export default page;
