import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import InstructorData from './InstructorData';

const Instructor = () => {

    const { data: instructor = [], isLoading } = useQuery({
        queryKey: ['usersAll'],
        queryFn: () =>
            fetch('http://localhost:5000/addTeacher/Instructor')
                .then(res =>
                    res.json()
                )
    })
    if(isLoading){
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-center text-5xl my-10 font-bold text-indigo-900 font-color'>Instructor</h2>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    instructor.map(data => <InstructorData data={data} key={data._id}></InstructorData>)
                }
           </div>
        </div>
    );
};

export default Instructor;