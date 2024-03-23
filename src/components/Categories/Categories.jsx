import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Categories = () => {
  const categories = [
    'Content Marketing',
    'Digital Marketing',
    'Content Marketing',
    'SEO Marketing',
    'Web Design',
  ];
  return (
    <div className='mt-[2rem] rounded-lg border p-2 lg:p-3'>
      <h4 className='mb-3'>Categories</h4>

      <ul className='flex flex-col gap-2'>
        {categories.map((item, key) => (
          <li
            key={key}
            className='flex cursor-pointer items-center justify-between rounded bg-[#FAFAFA] px-2 py-1 leading-6 transition hover:bg-primary hover:text-white'
          >
            {item}

            <FaArrowRight />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
