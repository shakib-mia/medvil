// 'use client';
import React from 'react';

const Button = (props) => {
  const { children, className, onClick, outlined, light } = props;

  const variants = outlined
    ? 'border-[#0BBC5C26] text-primary hover:border-primary hover:bg-primary hover:text-white'
    : 'border-[#0BBC5C26] bg-primary text-white hover:bg-transparent hover:text-primary';

  return (
    <button
      className={`group ${className ? ' ' + className : ''} flex h-[3rem] w-[12rem] items-center justify-center rounded-lg border-2 ${variants} text-base font-bold duration-[150ms] md:h-[4rem] md:w-[13.75rem]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
