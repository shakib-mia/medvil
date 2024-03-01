import React from 'react';
import whyChoose from '../../assets/images/why-choose.png';
import Image from 'next/image';
import Feature from '../Feature/Feature';

const WhyChoose = () => {
  const contents = [
    {
      serial: '01',
      heading: 'Personalized Service',
      paragraph:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, Diagnosy always try to provide the most common of get the proper issuer for cure Healthcare',
    },
    {
      serial: '02',
      heading: 'Qualified Nurses & Staff',
      paragraph:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, Diagnosy always try to provide the most common of get the proper issuer for cure Healthcare',
    },
    {
      serial: '03',
      heading: '24/7 Medical Consultation',
      paragraph:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, Diagnosy always try to provide the most common of get the proper issuer for cure Healthcare',
    },
  ];

  return (
    <div
      id='why-choose'
      className='container grid grid-cols-1 items-center gap-4 py-9 md:gap-7 lg:grid-cols-2'
    >
      <aside>
        <h3>
          Why Choose <span className='text-primary'>Medvil?</span>
        </h3>

        <div className='mt-4 flex flex-col gap-3 md:mt-6 md:gap-8'>
          {contents.map((content) => (
            <Feature {...content} key={content.serial} />
          ))}
        </div>
      </aside>

      <aside>
        <Image src={whyChoose} alt='why-choose' />
      </aside>
    </div>
  );
};

export default WhyChoose;
