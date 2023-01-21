import React from 'react';
import { useForm } from "react-hook-form";

const SingUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (

        <form onSubmit={handleSubmit(onSubmit)} className='w-50'>
            <div className='grid grid-cols-1 '>
                <input defaultValue="Name" {...register("name")} />
                <input defaultValue="Email" {...register("email")} />
                <input defaultValue="Password" {...register("password")} />
                <input defaultValue="Address" {...register("address")} />
            </div>
            <input type="submit" />
        </form>
    );
};

export default SingUp;