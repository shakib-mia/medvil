import Blog from '@/components/ServiceDetails/ServiceDetails';
import Categories from '@/components/Categories/Categories';
import Layouts from '@/components/Layouts/Layouts';
import RecentPosts from '@/components/RecentPosts/RecentPosts';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import ServiceDetails from '@/components/ServiceDetails/ServiceDetails';

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
        </aside>
        <aside className='w-full xl:w-8/12'>
          <ServiceDetails />
        </aside>
      </div>
    </Layouts>
  );
};

export default page;
