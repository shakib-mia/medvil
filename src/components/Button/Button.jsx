// 'use client';
import React from 'react';

const Button = (props) => {
  const { children, className, onClick } = props;

  return (
    <button
      className={`group flex h-[3rem] w-[12rem] items-center justify-center rounded-lg border-2 border-primary bg-primary text-base font-bold text-white duration-[150ms] hover:bg-transparent hover:text-primary md:h-[4rem] md:w-[13.75rem] ${className ? ' ' + className : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
