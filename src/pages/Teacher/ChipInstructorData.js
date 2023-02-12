import React from 'react';
import { FaArchive } from 'react-icons/fa';

const ChipInstructorData = ({ data,handleDelete }) => {
    const { designation, email, image, name, number, _id} = data;
   
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mx-5 grid grid-cols-2 py-5">
                <div className=''> <figure ><img className='rounded mr-5' style={{ width: "280px", height: "220px" }} src={image} alt="ChifInstructor" /></figure></div>
                <div className="card-body w-3/7 -ml-8 -mt-7">
                    <h2 className="card-title font-color text-2xl font-bold">{name}</h2>
                    <p className='font-color font-semibold'>{designation}</p>
                    <p className='font-color font-semibold'>{email}</p>
                    <div className='flex justify-between'>
                    <p className='font-semibold font-color'>{number}</p>
                    <button onClick={() => handleDelete(_id)} className='text-red-600 text-2xl'><FaArchive></FaArchive></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChipInstructorData;