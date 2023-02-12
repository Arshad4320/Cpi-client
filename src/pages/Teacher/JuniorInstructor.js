import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import JuniorInstructorData from './JuniorInstructorData';
import '../../../src/pages/Styles/styles.css'
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import Swal from 'sweetalert2';
const JuniorInstructor = () => {
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/addTeacher/Junior%20Instructor')
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[])
    const { data: juniorInstructor = [], isLoading, refetch } = useQuery({
        queryKey: ['junior'],
        queryFn: () =>
            fetch('http://localhost:5000/addTeacher/Junior%20Instructor')
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
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-center text-4xl my-10 font-bold text-indigo-900 font-color'>Junior Instructor</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
         {
                    juniorInstructor?.map((data => <JuniorInstructorData
                         data={data}
                         handleDelete={handleDelete}
                         key={data._id}></JuniorInstructorData>))
         }
            </div>
        </div>
    );
};

export default JuniorInstructor;