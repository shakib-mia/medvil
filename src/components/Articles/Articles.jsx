import React from 'react';
import articleImg1 from '../../assets/images/articles/Rectangle 9390.jpg';
import articleImg2 from '../../assets/images/articles/Rectangle 9390-1.jpg';
import Article from '../Article/Article';

const Articles = () => {
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
  ];
  return (
    <div className='container'>
      <h3 className='text-center text-secondary'>
        News & <span className='text-primary'>Articles</span>
      </h3>

      <p className='mx-auto w-11/12 text-center text-grey-2 md:w-1/2'>
        Get a full view so you know where to save. Track spending, detect fraud
        and keep tabs on rising lorem ipsum dolor sit.
      </p>

      <div className='mt-6 grid grid-cols-1 gap-3 md:grid-cols-2'>
        {articles.map((article, key) => (
          <Article {...article} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
