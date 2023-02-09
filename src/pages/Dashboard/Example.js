import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Example = () => {
    const [countriesData, setCountriesData] = useState([])
  
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountriesData(data));
  },[])
  const { register, handleSubmit, formState: { errors } } = useForm();
    // const date = new Date().toLocaleDateString();
    // console.log(date)
    const formData = (data) => {
        console.log(data.name)
       
    }
    return (
        <form onSubmit={handleSubmit(formData)}>
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mt-5 mx-10" {...register("name", { required: 'name is required' })}/>
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

            <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mt-5 mx-10" {...register("number", { required: 'number is required' })}/>
            {errors.number && <p className='text-red-500'>{errors.number.message}</p>}

            <input type="date" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mt-5 mx-10" {...register("birth", { required: 'number is required' })}/>
            {errors.birth && <p className='text-red-500'>{errors.birth.message}</p>}



            <label className="label"> <span className="label-text text-xl text-gray-500">Gender</span></label>
            {/* <select className="select select-primary w-full max-w-xs"
                            {...register("designation", {
                                required: 'Designation is required'
                            })}
                        >
                            
                                {
                                    countriesData?.map((country => <option>{country.name.common}</option> ))
                                }
                        </select> */}
  

                        <input type="file" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mt-5 mx-10" {...register("image", { required: 'image is required' })}/>
                        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}

      
      <input type="submit" className='btn btn-secondary' />
    </form>
    );
};

export default Example;