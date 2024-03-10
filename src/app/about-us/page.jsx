import React from 'react';
import Layouts from '../../components/Layouts/Layouts';
import BreadCumb from '@/components/BreadCumb/BreadCumb';
import HealthySmiles from '@/components/HealthySmiles/HealthySmiles';
import Services from '@/components/Services/Services';
import Appointment from '@/components/Appointment/Appointment';
import Specialists from '@/components/Specialists/Specialists';
import Partners from '@/components/Partners/Partners';

const About = () => {
  return (
    <Layouts title='About Us'>
      <HealthySmiles />
      <Services />
      <Appointment />
      <Specialists containerClassName={'mt-4 md:mt-6 xl:mt-9'} />
      <Partners />
    </Layouts>
  );
};

export default About;
