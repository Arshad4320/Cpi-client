import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const UploadNotice = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = '509aa0a2fc583b7f6c3e65417809235d';
    const date = new Date().toLocaleDateString();
    console.log(date)
    const time = new Date().toLocaleTimeString()
    console.log(time)
    //imagebb



    const handleNoticeAdd = data => {

        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const notice = {
                        date: date,
                        time: time,
                        title: data.title,
                        description: data.description,
                        image: imgData.data.url
                    }
                    console.log(notice)

                    //product data added database

                    fetch('http://localhost:5000/notice', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(notice)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            if (result.acknowledged) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Notice uploaded',
                                    showConfirmButton: false,
                                    timer: 1500
                                })

                            }

                        })

                }

            })

    }
    return (
        <div>
            <h3 className='text-center text-4xl my-10 font-bold text-indigo-900'>Upload The Notice</h3>
            <form onSubmit={handleSubmit(handleNoticeAdd)}>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-5' >
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-xl text-gray-500">Title</span></label>
                        <textarea className="textarea textarea-primary" {...register("title", {
                            required: 'Title required'
                        })} />
                        {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-xl text-gray-500">Description</span></label>
                        <textarea className="textarea textarea-primary" {...register("description", {
                        })} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-xl text-gray-500">Notice Image</span></label>
                        <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs"  {...register("image", {
                            required: 'image is required'
                        })} />
                         {errors.image && <p className='text-red-500'>{errors.image.message}</p>}

                    </div>
                </div>
                <div className='flex justify-center'>
                    <input className='btn btn-primary w-4/5 md:w-3/5 lg:w-64  mt-4 ' value="Submit" type="submit" />
                </div>

            </form>
        </div>
    );
};

export default UploadNotice;