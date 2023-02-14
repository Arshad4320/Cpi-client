import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Student = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = '509aa0a2fc583b7f6c3e65417809235d';
const handleJobSubmit = (data) =>{
    
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
                    const biodata = {
                       name: data.name,
                       email: data.email,
                       session: data.session,
                       cv: imgData.data.url
                    }
                    console.log(biodata)

                    //product data added database

                    fetch('https://cpi-project-server-ayakub.vercel.app/jobseeker', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(biodata)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            if (result.acknowledged) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Bio data Added success',
                                    showConfirmButton: false,
                                    timer: 1500
                                })

                            }

                        })

                }

            })

            
                }
    return (
        <form onSubmit={handleSubmit(handleJobSubmit)}>
        <div className='sm:mx-3 md:mx-10 lg:mx-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
        <div className="form-control w-full ">
                        <label className="label"> <span className="label-text text-xl">Name</span></label>
                        <input type="text" placeholder='Your Name' {...register("name", {
                            required: "Name is Required"
                        })} className="input input-primary w-full " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text text-xl">Email</span></label>
                        <input type="email" placeholder='Your 
                        Email' {...register("email", {
                            required: 'email is required'
                        })} className="input input-primary w-full " />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label text-xl"> <span className="label-text text-xl">Session</span></label>
                        <input type="text" placeholder='Your session' {...register("session", {
                            required: 'session is required'
                        })} className="input input-primary w-full " />
                        {errors.session && <p className='text-red-500'>{errors.session.message}</p>}
                    </div>
                    
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text text-xl ">Upload CV</span></label>
                        <input type="file" className="file-input file-input-bordered file-input-primary w-full "  {...register("image", {
                            required: 'CV is required'
                        })} />
                        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                    </div>
                    
                     <div className='flex items-center'>
                     <input className='btn btn-primary w-full mt-4' value="Sign Up" type="submit" />
                     </div>
        </div>
      </form>
    );
};

export default Student;
