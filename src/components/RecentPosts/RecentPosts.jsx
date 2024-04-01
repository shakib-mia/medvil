'use client';
import React, { useEffect, useState } from 'react';
import RecentPost from '../RecentPost/RecentPost';
import axios from 'axios';
import { url } from '@/constants';
import InputField from '../InputField/InputField';
import { FaSearch } from 'react-icons/fa';
// import { posts } from '@/constants';

async function getData() {
  const { data } = await axios.get(`${url}/articles.json`);
  return data;
}

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);
  const [foundPosts, setFoundPosts] = useState(posts);
  useEffect(() => {
    getData().then((res) => setPosts(res));
  }, []);

  // console.log(foundPosts);

  return (
    <>
      <div className='relative rounded-lg bg-primary'>
        <InputField
          className='bg-transparent text-white placeholder:text-white'
          placeholder='Search....'
          onChange={(e) => {
            e.target.value.length > 0
              ? setFoundPosts(
                  posts.filter((post) => post.heading.includes(e.target.value))
                )
              : setFoundPosts(posts);
          }}
        />

        <FaSearch className='absolute bottom-0 right-3 top-0 my-auto text-white' />
      </div>
      <h4 className='my-3'>Recent Posts</h4>

      <div className='flex flex-col gap-2'>
        {foundPosts.length > 0
          ? foundPosts.map((post, key) => <RecentPost {...post} key={key} />)
          : posts.map((post, key) => <RecentPost {...post} key={key} />)}
      </div>
    </>
  );
};

export default RecentPosts;
