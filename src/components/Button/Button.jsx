// 'use client';
import React from 'react';

const Button = (props) => {
  const { children, className, onClick } = props;
  const buttonClassName = `group rounded-lg border-2 border-primary bg-primary w-[13.75rem] h-[4rem] text-base font-bold text-white hover:bg-transparent hover:text-primary duration-[150ms]${className ? ' ' + className : ''}`;
  return (
    <button
      className={`group flex h-[4rem] w-[13.75rem] items-center justify-center rounded-lg border-2 border-primary bg-primary text-base font-bold text-white duration-[150ms] hover:bg-transparent hover:text-primary ${className ? ' ' + className : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
