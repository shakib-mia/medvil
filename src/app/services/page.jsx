'use client';
import BreadCumb from '@/components/BreadCumb/BreadCumb';
import Layouts from '@/components/Layouts/Layouts';
import Services from '@/components/Services/Services';
import Head from 'next/head';
import React from 'react';

const Page = () => {
  return (
    <Layouts>
      <Head>
        <title>{'title'}</title>
      </Head>
      <BreadCumb>
        <h3>Services</h3>
        <p>Home &raquo; Services</p>
      </BreadCumb>
      <Services />
    </Layouts>
  );
};

export default Page;
