import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddTeacher = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = '509aa0a2fc583b7f6c3e65417809235d';
    const AddTeacher = data => {

        console.log(data.number);
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
                        name: data.name,
                        designation: data.designation,
                        number: data.phone,
                        email: data.email,
                        image: imgData.data.url
                    }
                    console.log(notice)

                    //product data added database

                    fetch('http://localhost:5000/addTeacher', {
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
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Teacher Added success',
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
            <h3 className='text-center text-4xl my-10 font-bold text-indigo-900'>Add Teacher</h3>
            <form onSubmit={handleSubmit(AddTeacher)}>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-5' >
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-xl text-gray-500">Name</span></label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" {...register("name", {
                            required: 'Name is required'
                        })} />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-xl text-gray-500">Select Designation</span></label>
                        <select className="select select-primary w-full max-w-xs"
                            {...register("designation", {
                                required: 'Designation is required'
                            })}
                        >
                            <option>Chief Instructor</option>
                            <option>Instructor</option>
                            <option>Junior Instructor</option>
                            <option>Guest Teacher</option>

                        </select>
                        {errors.designation && <p className='text-red-500'>{errors.designation.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-xl text-gray-500">Phone</span></label>
                        <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" {...register("phone", {
                            required: 'Phone is required'
                        })} />
                        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-xl text-gray-500">Email</span></label>
                        <input type="email" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" {...register("email", {
                            required: 'Email is required'
                        })} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-xl text-gray-500">Teacher Image</span></label>
                        <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs"  {...register("image", {
                            required: 'Image is required'
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

export default AddTeacher;