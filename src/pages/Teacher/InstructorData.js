import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvidor';

const InstructorData = ({ data }) => {
    const { image, name, designation, email, number } = data;
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <div className='flex justify-center'>
            loading....
        </div>
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-5">
                <figure ><img className='rounded ' style={{ width: "250px", height: "280px" }} src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold font-color">{name}</h2>
                    <p className='text-xl font-semibold font-color'>{designation}</p>
                    <p className='font-semibold font-color'>{email}</p>
                    <p className='font-semibold font-color'>{number}</p>

                </div>
            </div>
        </div>
    );
};

export default InstructorData;