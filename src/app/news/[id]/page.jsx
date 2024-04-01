'use client';
import Layouts from '@/components/Layouts/Layouts';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CiCalendar, CiHeart } from 'react-icons/ci';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa6';
import { IoEyeOutline } from 'react-icons/io5';
import { LuUser } from 'react-icons/lu';
import { AiOutlineLoading } from 'react-icons/ai';
import Comment from '@/components/Comment/Comment';
import InputField from '@/components/InputField/InputField';
import Button from '@/components/Button/Button';
import { url } from '@/constants';
import Suggestions from '@/components/Suggestions/Suggestions';
import RecentPost from '@/components/RecentPost/RecentPost';
import RecentPosts from '@/components/RecentPosts/RecentPosts';
import Categories from '@/components/Categories/Categories';
import Head from 'next/head';
// import Head from 'next/head';

async function getData() {
  const res = await fetch(`${url}/articles.json`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // console.log(res);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function updateData(updatedArticles) {
  // console.log(updatedArticles);
  const res = await fetch(`${url}/api/updateArticle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedArticles),
  });
  // console.log(res);
  if (!res.ok) {
    throw new Error('Failed to update data');
  }

  return res.json();
}

export default function Page() {
  const [data, setData] = useState({});
  const pathname = usePathname();
  const [update, setUpdate] = useState(true);
  // console.log(data);
  useEffect(() => {
    getData()
      .then((data) => {
        // console.log(
        //   // data.find((item) => item.postId === pathname.split('/')[2])
        //   data
        // );
        // console.log(data[pathname.split('/')[2] - 1]);
        setData(data[pathname.split('/')[2] - 1]);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error state appropriately
      });
  }, [update]);

  const postComment = async (e) => {
    e.preventDefault();
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric', // Use the numeric representation of the year.
      month: 'long', // Use the full name of the month.
      day: 'numeric', // Use the numeric representation of the day of the month.
    });

    // console.log(formattedDate);

    const comment = {
      name: e.target.name.value,
      email: e.target.email.value,
      text: e.target.text.value,
      date: formattedDate,
    };

    // console.log(data);

    const postsRes = await fetch(`${url}/articles.json`);
    const posts = await postsRes.json();
    posts[data.postId - 1].comments.push({
      id: data.comments.length + 1,
      comment,
      replies: [],
    });

    // console.log();

    updateData(posts).then((data) => setUpdate(!update));
    e.target.reset();
  };
  // console.log(data);

  return (
    <>
      {data && data.paragraphs?.length ? (
        <Layouts title={data.heading}>
          <div className='container py-10'>
            <div className='flex flex-col gap-4 xl:flex-row'>
              <div className='w-full xl:w-7/12'>
                <Image
                  src={data.image}
                  alt={data.heading}
                  layout='responsive'
                  width={600}
                  height={100}
                />
                <div className='mt-3 flex gap-3'>
                  <div className='flex items-center gap-1'>
                    <CiCalendar className='font-bold text-primary' />
                    <p className='text-base text-grey-3'>{data.date}</p>
                  </div>

                  <div className='flex items-center gap-1'>
                    <LuUser className='font-bold text-primary' />
                    <p className='text-base text-grey-3'>{data.author}</p>
                  </div>

                  <div className='flex items-center gap-1'>
                    <IoEyeOutline className='font-bold text-primary' />
                    <p className='text-base text-grey-3'>{data.viewCount}</p>
                  </div>

                  <div className='flex items-center gap-1'>
                    <CiHeart className='font-bold text-primary' />
                    <p className='text-base text-grey-3'>
                      {data.favoriteCount}
                    </p>
                  </div>
                </div>

                <h4 className='my-2'>{data.heading}</h4>
                <hr />

                <div className='mt-2 flex flex-col gap-2'>
                  {data.paragraphs.map((text, id) => (
                    <p key={id} className='text-lg text-grey-3'>
                      {text}
                    </p>
                  ))}
                </div>

                <div className='mt-6 flex justify-between rounded-sm border border-grey-5 p-2'>
                  <aside className='flex gap-1'>
                    <b>Tags:</b> {data.tags}
                  </aside>
                  <aside className='flex items-center gap-1'>
                    <b>Share:</b>
                    <a className='transition hover:text-primary' href={data.fb}>
                      <FaFacebookF />
                    </a>
                    <a
                      className='transition hover:text-primary'
                      href={data.twitter}
                    >
                      <FaTwitter />
                    </a>
                    <a
                      className='transition hover:text-primary'
                      href={data.instagram}
                    >
                      <FaInstagram />
                    </a>
                    <a
                      className='transition hover:text-primary'
                      href={data.pinterest}
                    >
                      <FaPinterest />
                    </a>
                  </aside>
                </div>

                <h4 className='mb-4 mt-6'>
                  Comments - {data.comments.length <= 9 ? 0 : ''}
                  {data.comments.length}
                </h4>

                <div className='flex flex-col gap-4'>
                  {data.comments.map((comment, key) => (
                    <Comment
                      key={key}
                      comment={comment}
                      data={data}
                      update={update}
                      setUpdate={setUpdate}
                    />
                  ))}
                </div>

                <div className='mt-6'>
                  <h5 className='border-b border-grey-5 pb-3'>
                    Post a comment
                  </h5>

                  <form action='' className='mt-3' onSubmit={postComment}>
                    <div className='grid grid-cols-2 gap-2'>
                      <InputField name='name' placeholder='Name*' />
                      <InputField name='email' placeholder='Email*' />
                    </div>

                    <InputField
                      rows={5}
                      name='text'
                      resize={false}
                      placeholder='Write a Comment'
                      textarea
                      className='my-2'
                    />

                    <Button className='!rounded-full'>Post a Comment</Button>
                  </form>
                </div>
              </div>
              <div className='w-full rounded-lg bg-primary-light p-3 xl:w-5/12'>
                {/* <Suggestions /> */}
                <RecentPosts />
                <Categories />
              </div>
            </div>
          </div>
        </Layouts>
      ) : (
        <div className='flex h-screen items-center justify-center'>
          <AiOutlineLoading className='animate-spin text-9xl' />
        </div>
      )}
    </>
  );
}
