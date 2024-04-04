'use client';
import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';
import axios from 'axios';
import { url } from '@/constants';
import { AiOutlineLoading } from 'react-icons/ai';

async function getData() {
  const { data } = await axios.get(`${url}/articles.json`);
  console.log(data);
  return data;
}
const Articles = () => {
  const [articles, setArticles] = useState([]);
  // console.log(url);

  useEffect(() => {
    getData().then((data) => setArticles(data));
  }, []);

  return (
    <div className='container'>
      <h3 className='text-center text-secondary'>
        News & <span className='text-primary'>Articles</span>
      </h3>

      <p className='mx-auto w-11/12 text-center text-grey-2 md:w-1/2'>
        Get a full view so you know where to save. Track spending, detect fraud
        and keep tabs on rising lorem ipsum dolor sit.
      </p>

      {articles.length > 0 ? (
        <div className='mt-6 grid grid-cols-1 gap-3 md:grid-cols-2'>
          {articles.slice(0, 2).map((article, key) => (
            <Article {...article} key={key} />
          ))}
        </div>
      ) : (
        <div className='flex h-screen items-center justify-center'>
          <AiOutlineLoading className='animate-spin text-9xl' />
        </div>
      )}
    </div>
  );
};

export default Articles;
