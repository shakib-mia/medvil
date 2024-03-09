'use client';
import React from 'react';
import Service from '../Service/Service';
import dentalSurgery from './../../assets/icons/services/dental-surgery.png';
import gumTreatment from './../../assets/icons/services/gum-treatment.png';
import rootCanal from './../../assets/icons/services/root-canal.png';
import teethWhitening from './../../assets/icons/services/teeth-whitening.png';
import nephrology from '../../assets/icons/services/nephrology.jpg';
import plasticSurgery from '../../assets/icons/services/plastic-surgery.jpg';
import { usePathname } from 'next/navigation';

const Services = () => {
  const pathname = usePathname();
  // console.log(pathname);
  const services = [
    {
      image: teethWhitening,
      heading: 'Teeth Whitening',
      paragraph:
        'We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.',
      link: '/',
    },
    {
      image: rootCanal,
      heading: 'Root Canal',
      paragraph:
        "We believe in practicing medicine with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient's interests first & provide best solution.",
      link: '/',
    },
    {
      image: dentalSurgery,
      heading: 'Dental Surgery',
      paragraph:
        'We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.',
      link: '/',
    },
    {
      image: gumTreatment,
      heading: 'Gum Treatment',
      paragraph:
        'We believe in working collaboratively with our team members and other healthcare professionals to provide comprehensive and effective care to our patients.',
      link: '/',
    },
    {
      image: plasticSurgery,
      heading: 'Plastic Surgery',
      paragraph:
        'We leverage our years of experience, knowledge, industry contacts, and asset protection strategies to provide our clients with a unique client-centric experience',
      link: '/',
    },
    {
      image: nephrology,
      heading: 'Nephrology',
      paragraph:
        'At Generational Law Group, we’ve built our practice to focus on the needs of Entertainment Professionals, Content Creators, Creative Businesses & Executives, and established individuals and their families.',
      link: '/',
    },
  ];

  const length = pathname === '/' ? 4 : services.length;

  return (
    <section className='container py-4 md:py-6 xl:py-10'>
      <h3 className='text-center'>
        Services <span className='text-primary'>We Offer</span>
      </h3>
      <p className='mx-auto text-center text-base text-grey-2 md:w-1/2'>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>

      <div className='mt-3 grid grid-cols-1 gap-2 md:mt-6 md:grid-cols-2 md:gap-3'>
        {services.slice(0, length).map((service) => (
          <Service {...service} key={service.heading} />
        ))}
      </div>
    </section>
  );
};

export default Services;
