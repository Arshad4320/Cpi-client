import React from 'react';
import ChipInstructor from './ChipInstructor';
import GuestTeacher from './GuestTeacher';
import Instructor from './Instructor';
import JuniorInstructor from './JuniorInstructor';

const Teacher = () => {

  return (
    <div id='teacher'>
      <ChipInstructor />
      <Instructor />
      <JuniorInstructor />
      <GuestTeacher />
    </div>
  );
};

export default Teacher;