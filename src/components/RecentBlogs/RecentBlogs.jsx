'use client';
import { url } from '@/constants';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RecentBlog from '../RecentBlog/RecentBlog';

async function getPosts() {
  const { data } = await axios.get(url + 'articles.json');
  //   console.log(data);
  return data;
}

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getPosts().then((data) => setBlogs(data.slice(0, 3)));
  }, []);
  return (
    <div className='container'>
      <p className='mb-2 text-center text-sm font-medium xl:text-lg'>
        Daily Experience
      </p>
      <h4
        className='mb-6 text-center
      '
      >
        Our <span className='text-green'>Recent</span> Blogs
      </h4>

      <div className='grid grid-cols-1 gap-3 pb-4 md:grid-cols-2 xl:grid-cols-3 xl:pb-10'>
        {blogs.length > 0 ? (
          blogs.map((item, key) => <RecentBlog {...item} key={key} />)
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
};

export default RecentBlogs;
