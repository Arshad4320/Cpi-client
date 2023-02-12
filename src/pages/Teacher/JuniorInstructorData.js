import React from 'react';
import { useContext } from 'react';
import { FaArchive } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvidor';
import useAdmin from '../../hooks/useAdmin';

const JuniorInstructorData = ({ data , handleDelete}) => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const { image, name, designation, email, number, _id } = data;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-5">
                <figure ><img className='rounded' style={{ width: "250px", height: "280px" }} src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold font-color">{name}</h2>
                    <p className='text-xl font-semibold font-color'>{designation}</p>
                    <p className='font-semibold font-color'>{email}</p>
                    <div className='flex justify-between'>
                    <p className='font-semibold font-color'>{number}</p>
{ isAdmin &&
 <button title='delete teacher'  onClick={() =>handleDelete(_id)} className='text-red-600 text-2xl'><FaArchive></FaArchive></button>
 }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JuniorInstructorData;