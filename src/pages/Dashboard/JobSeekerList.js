import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import JobSeekerListData from './JobSeekerListData';

const JobSeekerList = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        fetch('https://cpi-project-server-ayakub.vercel.app/jobseeker')
        .then(res=>res.json())
        .then(result=>setData(result))
    },[])
    return (
        <div>
        <h3 className='text-center text-4xl my-10 font-bold text-indigo-900'>Job Sheeker List</h3>
            <div>
                {
                    data?.map((data=><JobSeekerListData data={data} key={data._id}/>))
                }
            </div>
        </div>
    );
};

export default JobSeekerList;