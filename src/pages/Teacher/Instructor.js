import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import InstructorData from './InstructorData';

const Instructor = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addTeacher/Instructor')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            <h2 className='text-center text-5xl my-10 font-bold text-indigo-900 font-color'>Instructor</h2>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map(data => <InstructorData data={data} key={data._id}></InstructorData>)
                }
           </div>
        </div>
    );
};

export default Instructor;