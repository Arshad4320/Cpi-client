import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loading from '../../Loading/Loading';
import InstructorData from './InstructorData';

const Instructor = () => {

    const { data: instructor = [], isLoading, refetch } = useQuery({
        queryKey: ['instructor'],
        queryFn: () =>
            fetch('http://localhost:5000/addTeacher/Instructor')
                .then(res =>
                    res.json()
                )
    })
    function handleDelete (id) {
        const permisson = window.confirm('are you sure ,deleted Teacher?')
        if (permisson) {
            fetch(`http://localhost:5000/teacher/${id}`, {
                 method: 'DELETE'
            }
            )
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Teacher delete success',
                            showConfirmButton: false,
                            timer: 1500
                          })
                        refetch()
                    }
                    console.log(data)

                })
        }

    }
    if(isLoading){
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-center text-4xl my-10 font-bold text-indigo-900 font-color'>Instructor</h2>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    instructor.map(data => <InstructorData 
                        data={data} 
                        handleDelete={handleDelete}
                        key={data._id}></InstructorData>)
                }
           </div>
        </div>
    );
};

export default Instructor;