'use client';
import React, { Children, cloneElement, useState } from 'react';

const NavTabs = ({ options, children }) => {
  const [index, setIndex] = useState(0);

  const enhancedChildren = Children.map(children, (child, idx) =>
    cloneElement(child, {
      className:
        `${child.props.className || ''}${idx !== index ? ' hidden' : ''}`.trim(),
    })
  );

  return (
    <>
      <div className='my-3 flex flex-wrap gap-3 lg:my-6 lg:flex-nowrap'>
        {options.map((option, key) => (
          <button
            key={key}
            onClick={() => setIndex(key)}
            className={`inline-block w-full rounded-lg px-6 py-[2.25rem] shadow-[0_0_80px_0_#CBCBCB40] ${index === key ? 'bg-primary text-white' : ''}`}
          >
            <h5>{option}</h5>
          </button>
        ))}
      </div>
      <>{enhancedChildren}</>
    </>
  );
};

export default NavTabs;
