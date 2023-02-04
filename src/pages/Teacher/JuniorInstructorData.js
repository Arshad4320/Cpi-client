import React from 'react';

const JuniorInstructorData = ({ data }) => {
    const {image,name,designation,email,number}=data;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-5">
                <figure ><img className='rounded' src={image} alt="Shoes" /></figure>
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

export default JuniorInstructorData;