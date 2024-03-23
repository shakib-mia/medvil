import React from 'react';
import RecentPost from '../RecentPost/RecentPost';
import post1 from '@/assets/images/recent-posts/unsplash_eUSCGHW-uZw.jpg';
import post2 from '@/assets/images/recent-posts/unsplash_eUSCGHW-uZw-1.jpg';
import post3 from '@/assets/images/recent-posts/unsplash_eUSCGHW-uZw-2.jpg';
import post4 from '@/assets/images/recent-posts/unsplash_eUSCGHW-uZw-3.jpg';
import post5 from '@/assets/images/recent-posts/unsplash_eUSCGHW-uZw-4.jpg';

const RecentPosts = () => {
  const posts = [
    {
      image: post1,
      heading: 'Preventing Heart Disease: Tips for a Heart-Healthy Lifestyle',
      date: 'Monday 02, November 2023',
    },
    {
      image: post2,
      heading: 'Managing Chronic Pain: Treatment Options and Strategies',
      date: 'Monday 02, November 2023',
    },
    {
      image: post3,
      heading: 'The Role of Physical Therapy in Injury Recovery and Prevention',
      date: 'Monday 02, November 2023',
    },
    {
      image: post4,
      heading: 'Allergies and Asthma: Causes, Symptoms, and Treatment Options',
      date: 'Monday 02, November 2023',
    },
    {
      image: post5,
      heading: 'Preventing Heart Disease: Tips for a Heart-Healthy Lifestyle',
      date: 'Monday 02, November 2023',
    },
  ];

  return (
    <div className='mt-[2rem]'>
      <h4 className='mb-3'>Recent Posts</h4>
      <div className='flex flex-col gap-2'>
        {posts.map((post, key) => (
          <RecentPost {...post} key={key} />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
