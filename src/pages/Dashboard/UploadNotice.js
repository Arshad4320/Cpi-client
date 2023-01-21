import React from 'react';
import { useForm } from 'react-hook-form';

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

                            }
                        })
                }


            })

    }
    return (
        <div>
            <h3>Upload The Notice</h3>
            <form onSubmit={handleSubmit(handleNoticeAdd)}>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-5' >
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Title</span></label>
                        <textarea className="textarea textarea-primary" {...register("title", {
                            required: 'Title required'
                        })} />
                        {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <textarea className="textarea textarea-primary" {...register("description", {
                        })} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Notice Image</span></label>
                        <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs"  {...register("image", {
                        })} />

                    </div>
                </div>
                <div className='flex justify-center'>
                    <input className='btn btn-accent w-4/5 md:w-3/5 lg:w-2/5  mt-4 ' value="Sign Up" type="submit" />
                </div>

            </form>
        </div>
    );
};

export default UploadNotice;