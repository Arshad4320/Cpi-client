import React from 'react';
import { Link } from 'react-router-dom';

const NoticeTitle = ({ data }) => {
    console.log(data)
    const { title, _id ,date}=data;
    return (
        <div className=' px-2 py-2 '>
           
            <Link  to={`/notice/${_id}`}>
                <div className=' border-indigo-900 border-t-2  hover:shadow-lg shadow-md rounded-md hover:bg-indigo-900  py-2 font-semibold hover:text-white text-blue-600'>
                    <span className='bg-indigo-900 p-2 rounded-l-md text-white'>{date}</span><span className=' underline p-2  ml-2 '>{title}</span>
                </div>
            </Link>
            
        </div>
    );
};

export default NoticeTitle;