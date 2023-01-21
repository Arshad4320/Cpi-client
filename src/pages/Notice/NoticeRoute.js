import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
const NoticeRoute = () => {
    const data=useLoaderData();
    console.log(data);
    const {date,title, description, image}=data;

    return (
        <div className='my-12'>
            <div className="card p-5 sm:w-100  lg:w-96 md:w-96 bg-base-100 shadow-xl mx-auto">
                <p className='text-justify text-gray-500 font-semibold text-xl'>Date : {date}</p>
                <p className='mb-2 text-gray-500 font-semibold text-xl'>Subject : {title}</p>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <figure><img src={image} alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <p className='mt-3 text-justify text-gray-500 xl'>{description}</p>
            </div>
        </div>
    );
};

export default NoticeRoute;