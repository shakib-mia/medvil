'use client';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layouts = ({ children }) => {
  return (
    <>
      <div className='relative'>
        <Navbar />

        <main className='sticky w-full'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
