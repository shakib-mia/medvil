import React from 'react';

const Feature = ({ heading, paragraph, serial }) => {
  return (
    <div className='flex gap-3'>
      <h4 className='text-primary'>{serial}/</h4>
      <aside>
        <h4 className='text-secondary'>{heading}</h4>
        <p className='text-base text-grey-2 md:mt-2'>{paragraph}</p>
      </aside>
    </div>
  );
};

export default Feature;
