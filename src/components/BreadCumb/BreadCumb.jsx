import React from 'react';
import breadcumb from '../../assets/images/breadcumb-bg.jpg';

const BreadCumb = ({ children }) => {
  return (
    <div
      style={{ backgroundImage: `url(${breadcumb.src})` }}
      className='flex flex-col items-center justify-center gap-2 py-4 text-white md:py-9'
    >
      {children}
    </div>
  );
};

export default BreadCumb;
