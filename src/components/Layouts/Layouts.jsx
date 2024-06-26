// 'use client';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BreadCumb from '../BreadCumb/BreadCumb';
// import { usePathname } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';

const Layouts = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? <>{title} - Medvil</> : 'Loading...'}</title>
      </Head>
      <div className='relative'>
        <Navbar />
        {title && (
          <BreadCumb>
            <h3 className='capitalize'>{title}</h3>
            <p className='capitalize'>
              <Link href={'/'}>Home</Link> &raquo; {title}
            </p>
          </BreadCumb>
        )}

        <main className='sticky w-full'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
