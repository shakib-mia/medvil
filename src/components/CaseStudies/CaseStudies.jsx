import React from 'react';
import bg from '@/assets/images/case-studies-bg.jpg';
import image1 from '@/assets/images/case-studies/case-studies-1.png';
import image2 from '@/assets/images/case-studies/case-studies-2.png';
import image3 from '@/assets/images/case-studies/case-studies-3.png';
import image4 from '@/assets/images/case-studies/case-studies-4.png';
import image5 from '@/assets/images/case-studies/case-studies-5.png';
import image6 from '@/assets/images/case-studies/case-studies-6.png';
import CaseStudiesItem from '../CaseStudiesItem/CaseStudiesItem';

const CaseStudies = () => {
  const caseStudies = [
    { image: image1, text: 'Pulmonology' },
    { image: image2, text: 'Pulmonology' },
    { image: image3, text: 'Pulmonology' },
    { image: image4, text: 'Pulmonology' },
    { image: image5, text: 'Pulmonology' },
    { image: image6, text: 'Pulmonology' },
  ];
  return (
    <div
      className='bg-[size:auto_50%] bg-no-repeat py-4 xl:bg-[size:100%_auto] xl:py-10'
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className='container'>
        <p className='text-center text-lg text-white'>Featured Projects</p>
        <h3 className='mt-2 text-center text-white'>
          Our <span className='text-green'>Case</span> Studies
        </h3>

        <div className='mt-2 grid grid-cols-1 gap-3 md:grid-cols-2 xl:mt-6 xl:grid-cols-3'>
          {caseStudies.map((item, key) => (
            <CaseStudiesItem {...item} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
