import Article from '@/components/Article/Article';
import Layouts from '@/components/Layouts/Layouts';
import React from 'react';
import articleImg1 from '@/assets/images/articles/Rectangle 9390.jpg';
import articleImg2 from '@/assets/images/articles/Rectangle 9390-1.jpg';

const page = () => {
  const articles = [
    {
      image: articleImg1,
      heading:
        'Officia deserunt mollitia animi id est laborum Coyium soluta nobis est eligendi optio',
      date: 'November 07,2023',
      link: '/',
    },
    {
      image: articleImg2,
      heading:
        'Ocumque nihily impedit quo minus id quod sit Laypiquo minus id quod maxime placeat.',
      date: 'November 07,2023',
      link: '/',
    },
    {
      image: articleImg1,
      heading:
        'Officia deserunt mollitia animi id est laborum Coyium soluta nobis est eligendi optio',
      date: 'November 07,2023',
      link: '/',
    },
    {
      image: articleImg2,
      heading:
        'Ocumque nihily impedit quo minus id quod sit Laypiquo minus id quod maxime placeat.',
      date: 'November 07,2023',
      link: '/',
    },
    {
      image: articleImg1,
      heading:
        'Officia deserunt mollitia animi id est laborum Coyium soluta nobis est eligendi optio',
      date: 'November 07,2023',
      link: '/',
    },
    {
      image: articleImg2,
      heading:
        'Ocumque nihily impedit quo minus id quod sit Laypiquo minus id quod maxime placeat.',
      date: 'November 07,2023',
      link: '/',
    },
    {
      image: articleImg1,
      heading:
        'Officia deserunt mollitia animi id est laborum Coyium soluta nobis est eligendi optio',
      date: 'November 07,2023',
      link: '/',
    },
    {
      image: articleImg2,
      heading:
        'Ocumque nihily impedit quo minus id quod sit Laypiquo minus id quod maxime placeat.',
      date: 'November 07,2023',
      link: '/',
    },
  ];

  return (
    <Layouts title='Blog'>
      <div className='py-4 md:py-6 xl:py-10'>
        <h3 className='text-center text-secondary'>
          News & <span className='text-primary'>Articles</span>
        </h3>
        <p className='mx-auto px-2 text-center text-grey-2 lg:w-1/2 xl:w-1/3'>
          Get a full view so you know where to save. Track spending, detect
          fraud and keep tabs on rising lorem ipsum dolor sit.
        </p>

        <div className='container mt-6 grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2'>
          {articles.map((article, key) => (
            <Article {...article} key={key} />
          ))}
        </div>
      </div>
    </Layouts>
  );
};

export default page;
