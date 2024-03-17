'use client';
import React, { useState } from 'react';
import Select from '../Select/Select';
import AppointmentInput from '../AppointmentInput/AppointmentInput';
import Button from '../Button/Button';

const MakeAppointment = () => {
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  return (
    <>
      <div className='mt-4 rounded-lg bg-primary p-3 text-white md:p-4 lg:p-6'>
        <h4>Book An Appointment</h4>
        <p className='mt-2 text-sm xl:w-4/6 xl:text-base'>
          Scenarios and economically sound ROI. Dynamically seize cross platform{' '}
          {'"outside the box"'} thinking after enterprise...
        </p>
      </div>

      <div className='rounded-lg bg-[#F3F6F7] px-2 py-4 md:px-4 lg:px-6'>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
          <Select
            heading='Title'
            options={['Aerospace Medicine', 'Aerospace Medicine 2']}
            selectedItem={selectedTitle}
            setSelectedItem={setSelectedTitle}
          ></Select>
          <Select
            heading='Doctor'
            options={['Moor Jhon', 'John Doe']}
            selectedItem={selectedDoctor}
            setSelectedItem={setSelectedDoctor}
          ></Select>
          <AppointmentInput type='text' name='name' placeholder='Your Name' />
          <AppointmentInput type='email' placeholder='Email address' />
          <AppointmentInput type='tel' placeholder='Your Phone' />
          <AppointmentInput type='date' />
        </div>

        <div className='mt-[32px] flex justify-center'>
          <Button className='!rounded-full'>Make An Appointment</Button>
        </div>
      </div>
    </>
  );
};

export default MakeAppointment;
