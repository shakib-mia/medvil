import BreadCumb from '@/components/BreadCumb/BreadCumb';
import Layouts from '@/components/Layouts/Layouts';
import Services from '@/components/Services/Services';
import React from 'react';

const page = () => {
  return (
    <Layouts>
      <BreadCumb>
        <h3>Services</h3>
        <p>Home &raquo; Services</p>
      </BreadCumb>
      <Services />
    </Layouts>
  );
};

export default page;
