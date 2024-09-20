import React, { useEffect } from 'react';
import InputField from '../InputField/InputField';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

async function getData() {
  const { data } = await axios.get(`${url}articles.json`);
  return data;
}

const Suggestions = () => {
  useEffect(() => {
    getData().then((res) => console.log(res));
  }, []);

  return (
    <div className='rounded-lg bg-primary-light p-3'>
      <div className='relative rounded-lg bg-primary'>
        <InputField
          className='bg-transparent placeholder:text-white'
          placeholder='Search....'
        />

        <FaSearch className='absolute bottom-0 right-3 top-0 my-auto text-white' />
      </div>

      <h4 className='my-3'>Recent Posts</h4>
    </div>
  );
};

export default Suggestions;
