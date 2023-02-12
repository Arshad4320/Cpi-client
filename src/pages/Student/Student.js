import React from 'react';
import { useForm } from 'react-hook-form';

const Student = () => {
    const { register, handleSubmit, errors } = useForm();
    const handleJobSubmit = () =>[

    ]
    // return (
    //     <form onSubmit={handleSubmit(handleJobSubmit)}>
    //     <div>
    //       <label htmlFor="firstName">First Name:</label>
    //       <input
    //         type="text"
    //         // id="firstName"
    //         // name="firstName"
    //         // ref={register({ required: true, minLength: 2 })}
    //       />
    //       {/* {errors.firstName && "First name is required"} */}
    //     </div>
    //     <div>
          
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         type="email"
    //         // id="email"
    //         // name="email"
    //         // ref={register({ required: true })}
    //       />
    //       {/* {errors.email && "Email is required"} */}
    //     </div>
    //     <div>
    //       <label htmlFor="phone">Phone:</label>
    //       <input
    //         type="tel"
    //         // id="phone"
    //         // name="phone"
    //         // ref={register({ required: true })}
    //       />
    //       {/* {errors.phone && "Phone is required"} */}
    //     </div>
    //     <div>
    //       <label htmlFor="address">Address:</label>
    //       <textarea
    //         id="address"
    //         // name="address"
    //         // ref={register({ required: true, minLength: 10 })}
    //       />
    //       {/* {errors.address && "Address is required"} */}
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>
    // );
};

export default Student;
