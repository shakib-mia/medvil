import React from 'react';
import img6 from './../../assets/images/6352a0f3a3ecc1f81dff6dd1_Sponsor-Img-6.png';
import img5 from './../../assets/images/6352a0f6bf61d682874d1937_Sponsor-Img-5.png';
import img4 from './../../assets/images/6352a0f7f56e891c1e603cf7_Sponsor-Img-4.png';
import img3 from './../../assets/images/6352a0f991211c5fe86858c6_Sponsor-Img-3.png';
import img2 from './../../assets/images/6352a0fbef305ab20ede4aa8_Sponsor-Img-2.png';
import img1 from './../../assets/images/6352a0fd3d82991fbed3f46b_Sponsor-Img-1.png';
import Image from 'next/image';

const Sponsors = () => {
  return (
    <div className='container flex flex-wrap justify-between gap-5 border-y border-grey-4 py-8'>
      <Image src={img6} alt='treva' />
      <Image src={img5} alt='kanba' />
      <Image src={img4} alt='hexlab' />
      <Image src={img3} alt='codelab' />
      <Image src={img2} alt='circle' />
      <Image src={img1} alt='zootv' />
    </div>
  );
};

export default Sponsors;
