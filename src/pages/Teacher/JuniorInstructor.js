import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import JuniorInstructorData from './JuniorInstructorData';
import '../../../src/pages/Styles/styles.css'
const JuniorInstructor = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addTeacher/Junior%20Instructor')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            <h2 className='text-center text-5xl my-10 font-bold text-indigo-900 font-color'>Junior Instructor</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
         {
                    data?.map((data => <JuniorInstructorData data={data} key={data._id}></JuniorInstructorData>))
         }
            </div>
        </div>
    );
};

export default JuniorInstructor;