import Accordion from '@/components/Accordion/Accordion';
import Layouts from '@/components/Layouts/Layouts';
import NavTabs from '@/components/NavTabs/NavTabs';
import React from 'react';

const page = () => {
  const options = [
    'Basic Questions',
    'Medical Questions',
    'Pricing Plans',
    'Basic Questions',
  ];
  return (
    <Layouts title='FAQ'>
      <div className='container py-4 md:py-6 xl:py-10'>
        <p className='text-center'>FAQ</p>
        <h4 className='mt-2 text-center text-xl font-bold md:text-2xl xl:text-5xl'>
          Frequently <span className='text-primary'>Asked</span> Question
        </h4>

        <NavTabs options={options}>
          <div className='tab'>
            <Accordion
              heading={
                'It is a long established fact that a reader will be distracted?'
              }
              text={
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.'
              }
            />
            <Accordion
              heading={
                'Many desktop publishing packages and web page editors now use Lorem Ipsum?'
              }
              text={
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.'
              }
            />
            <Accordion
              heading={
                "Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden?"
              }
              text={
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.'
              }
            />
          </div>
          <div className='tab'>
            <Accordion
              heading={
                'Many desktop publishing packages and web page editors now use Lorem Ipsum?'
              }
              text={
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.'
              }
            />
            <Accordion
              heading={
                "Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden?"
              }
              text={
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.'
              }
            />
            <Accordion
              heading={
                'Many desktop publishing packages and web page editors now use Lorem Ipsum?'
              }
              text={
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.'
              }
            />
          </div>
          <div className='tab'>
            <Accordion
              heading={
                'Many desktop publishing packages and web page editors now use Lorem Ipsum?'
              }
              text={
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.'
              }
            />
            <Accordion
              heading={
                'It is a long established fact that a reader will be distracted?'
              }
              text={
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.'
              }
            />
            <Accordion
              heading={
                'It is a long established fact that a reader will be distracted?'
              }
              text={
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.'
              }
            />
          </div>
          <div className='tab'>
            <Accordion
              heading={
                'Many desktop publishing packages and web page editors now use Lorem Ipsum?'
              }
              text={
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.'
              }
            />
            <Accordion
              heading={
                'It is a long established fact that a reader will be distracted?'
              }
              text={
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.'
              }
            />
            <Accordion
              heading={
                'It is a long established fact that a reader will be distracted?'
              }
              text={
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.'
              }
            />
          </div>
        </NavTabs>
      </div>
    </Layouts>
  );
};

export default page;
