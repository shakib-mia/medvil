import React from 'react';
import breadcumb from '../../assets/images/breadcumb-bg.jpg';

const BreadCumb = ({ children }) => {
  // console.log(document.getElementById('navbar')?.clientHeight);
  return (
    <div
      style={{
        backgroundImage: `url(${breadcumb.src})`,
        // marginTop: document.getElementById('navbar')?.clientHeight + 'px',
      }}
      className='flex flex-col items-center justify-center gap-2 py-4 text-white md:py-9'
    >
      <div className='container text-center'>{children}</div>
    </div>
  );
};

export default BreadCumb;
