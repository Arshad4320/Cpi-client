import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import {  useLoaderData } from 'react-router-dom';

import 'react-photo-view/dist/react-photo-view.css';
import Swal from 'sweetalert2';
import { FaArchive, FaDownload } from 'react-icons/fa';
import Pdf from "react-to-pdf";
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvidor';
import useAdmin from '../../hooks/useAdmin';

const ref = React.createRef();
const NoticeRoute = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const data = useLoaderData();
    console.log(data);
    const { date, title, description, image,_id } = data;

    function handleDelete (id) {
        const permisson = window.confirm('are you sure ,deleted seller?')
        if (permisson) {
            fetch(`https://cpi-project-server-ayakub.vercel.app/noticeDelete/${id}`, {
                 method: 'DELETE'
            }
            )
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            position: 'center',
                            icon: 'Deleted',
                            title: 'Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                        // refetch()
                    }
                    console.log(data)

                })
        }

    }
    return (
        <div className='my-12'>
            <div className="card p-5 sm:w-100  lg:w-96 md:w-96 bg-base-100 shadow-xl mx-auto">
                <p className='text-justify text-gray-500 font-semibold text-xl'>Date : {date}</p>
                <p className='mb-2 text-gray-500 font-semibold text-xl'>Subject : {title}</p>
             
                <PhotoProvider>
                    <PhotoView src={image}>
                        <figure><img ref={ref} src={image} alt="" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <p className='mt-3 text-justify text-gray-500 xl'>{description}</p>

                <div className='flex justify-evenly items-center'>
                {isAdmin &&
                    <button title='download notice' onClick={() => handleDelete(_id)} className='text-red-600 text-2xl'><FaArchive></FaArchive></button>}
                <Pdf targetRef={ref} filename={title}>
                            {({ toPdf }) => <button className='border-0 bg-dark text-white p-2 mb-2' onClick={toPdf}>Download <FaDownload title='Download notice' className=' text-2xl mb-2 text-gray-600 text-right'></FaDownload></button>}
                        </Pdf>  
                </div>
            </div>
        </div>
    );
};

export default NoticeRoute;