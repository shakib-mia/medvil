'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const QuickLinks = () => {
  const pathname = usePathname();
  return (
    <ul className='mt-3 flex flex-col gap-2'>
      <li>
        <Link
          className={`transition hover:text-green ${pathname === '/' && 'text-green'}`}
          href='/'
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`transition hover:text-green ${pathname === '/about-us' && 'text-green'}`}
          href='/about-us'
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          className={`transition hover:text-green ${pathname === '/services' && 'text-green'}`}
          href='/services'
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          className={`transition hover:text-green ${pathname === '/doctors' && 'text-green'}`}
          href='/doctors'
        >
          Doctors
        </Link>
      </li>
      <li>
        <Link
          className={`transition hover:text-green ${pathname === '/news' && 'text-green'}`}
          href='/news'
        >
          News
        </Link>
      </li>
      <li>
        <Link
          className={`transition hover:text-green ${pathname === '/contact' && 'text-green'}`}
          href='/contact'
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default QuickLinks;
