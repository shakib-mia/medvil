'use client';
import BreadCumb from '@/components/BreadCumb/BreadCumb';
import Layouts from '@/components/Layouts/Layouts';
import Services from '@/components/Services/Services';
import Head from 'next/head';
import React from 'react';

const Page = () => {
  return (
    <Layouts title='Services'>
      <Services />
    </Layouts>
  );
};

export default Page;
