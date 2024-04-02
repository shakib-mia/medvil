import React from 'react';
import WhyChooseItem from '../WhyChooseItem/WhyChooseItem';
import reason from '@/assets/images/reason-for-choosing.png';
import Image from 'next/image';

const WhyChoose2 = () => {
  return (
    <section className='mt-10 pt-10'>
      <div className='container grid grid-cols-1 items-center xl:grid-cols-2'>
        <aside>
          <p className='font-medium'>Why choose us</p>

          <h3 className='mt-2 text-[#3F3A64]'>
            Few <span className='text-green'>Reasons</span> Why You Should{' '}
            <span className='text-green'>Choose Us</span>
          </h3>

          <div className='mt-6'>
            <WhyChooseItem
              heading={'Personalized Service'}
              text={
                'Indulge in personalized dental care at Medvil. Our expert team tailors treatments to your unique needs, ensuring a comfortable and exceptional experience.'
              }
            />

            <WhyChooseItem
              heading={'Personalized Service'}
              text={
                'Indulge in personalized dental care at Medvil. Our expert team tailors treatments to your unique needs, ensuring a comfortable and exceptional experience.'
              }
            />

            <WhyChooseItem
              heading={'Personalized Service'}
              text={
                'Indulge in personalized dental care at Medvil. Our expert team tailors treatments to your unique needs, ensuring a comfortable and exceptional experience.'
              }
            />
          </div>
        </aside>

        <aside>
          <Image src={reason} alt='reason' />
        </aside>
      </div>
    </section>
  );
};

export default WhyChoose2;
