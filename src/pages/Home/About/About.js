import React from 'react';
import img from '../../../Img/img4.jpg'
const About = () => {
    return (
        <div className='mx-10' >
            <h2 className='text-center text-5xl my-10 font-bold text-indigo-900'>About Us</h2>
            <div className="card lg:card-side shadow-xl my-16" >
                <img className='rounded-lg' src={img} alt="Album" />
                <div >
                    <p className='text-justify text-gray-600 font-semibold text-lg ml-5 p-5'>A computer engineer is responsible for constructing and managing an organization’s computer system and providing technical support to the organization. A computer engineer typically works in an office or laboratory environment as part of a team and enjoys a traditional work schedule. A computer engineer, who may be a software engineer, is responsible for developing, testing, and evaluating the software that enables our computer to work. They may help in the development of new computer games and business applications or even in the design of entirely new operating systems. Whether a student’s goal is to become a computing professional, DTI is committed to helping them gain the background they need to be a world class engineer.</p>
                </div>
            </div>
        </div>

    );
};

export default About;