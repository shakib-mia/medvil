import Image from 'next/image';
import React, { useState } from 'react';
import { CiCalendar } from 'react-icons/ci';
import { PiArrowBendUpLeftBold } from 'react-icons/pi';
import Reply from '../Reply/Reply';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import avatar from '@/assets/images/avatar.jpg';
import { url } from '@/constants';

async function updateData(updatedArticles, id) {
  console.log(updatedArticles);
  const res = await fetch(`${url}/articles.json`);
  const data = await res.json();
  const post = data.find((item) => item.postId === id);
  post.comments = updatedArticles.comments;
  data[post.postId - 1] = post;

  const postRes = await fetch(`${url}api/updateArticle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  // console.log(res);
  if (!res.ok) {
    throw new Error('Failed to update data');
  }

  return postRes.json();
}

const Comment = ({ comment, data, update, setUpdate }) => {
  const [commentId, setCommentId] = useState(false);
  const date = new Date();

  const postReply = (e) => {
    e.preventDefault();
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric', // Use the numeric representation of the year.
      month: 'long', // Use the full name of the month.
      day: 'numeric', // Use the numeric representation of the day of the month.
    });

    comment.replies.push({
      name: e.target.name.value,
      email: e.target.email.value,
      text: e.target.text.value,
      date: formattedDate,
    });

    // data.comments.push(comment);
    console.log(data);

    updateData(data, data.postId).then((res) => {
      setUpdate(!update);
      setCommentId(!commentId);
      e.target.reset();
    });
  };

  return (
    <section>
      <div className='flex gap-2'>
        <Image
          src={comment.comment.image || avatar}
          alt={comment.comment.name}
          width={63}
          height={63}
          className='!h-[63px]'
        />
        <aside className='pt-1'>
          <div className='flex items-center gap-2'>
            <h6>{comment.comment.name}</h6>
            <aside
              className='flex cursor-pointer items-center gap-1'
              onClick={() => setCommentId(!commentId)}
            >
              <PiArrowBendUpLeftBold className='text-primary' />
              Reply
            </aside>
          </div>

          <div className='flex items-center gap-1'>
            <CiCalendar className='text-primary' />
            <p>{comment.comment.date}</p>
          </div>
        </aside>
      </div>

      <div className='ml-auto mt-2 w-11/12 pl-2 text-secondary'>
        {comment.comment.text}
      </div>

      {comment.replies?.map((reply, key) => (
        <Reply reply={reply} key={key} />
      ))}
      {commentId && (
        <form action='' className='mt-3' onSubmit={postReply}>
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

          <Button className='!rounded-full'>Reply</Button>
        </form>
      )}
    </section>
  );
};

export default Comment;
