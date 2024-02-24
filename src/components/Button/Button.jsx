// 'use client';
import React from 'react';

const Button = (props) => {
  const { children, className, onClick } = props;
  const buttonClassName = `group rounded-lg border-2 border-primary bg-primary p-2 text-base font-bold text-white hover:bg-transparent hover:text-primary duration-[150ms]${className ? ' ' + className : ''}`;
  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
