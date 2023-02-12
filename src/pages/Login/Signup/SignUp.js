import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useCallback } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/AuthProvidor';
import signupImage from '../../../Img/loginpage/signup.jpg'


const SignUp = () => {

  const navigate = useNavigate()
  const googleProvidor = new GoogleAuthProvider()
  const {createUser, user, googleSignUp} = useContext(AuthContext)
  // const [signUpError, setSignUPError] = useState('');
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const resetAsyncForm = useCallback(async () => {
    const result = await fetch('./api/formValues.json'); // result: { firstName: 'test', lastName: 'test2' }
    reset(result); // asynchronously reset your form values
  }, [reset]);
  
  useEffect(() => {
    resetAsyncForm()
  }, [resetAsyncForm])
  const handleSignUp = (data) => {
    // signUpError('')
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const user = result.user;
      console.log(user);
navigate('/')
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Sigup Successfully',
  showConfirmButton: false,
  timer: 1500
})
    })
    .catch(error => {
      console.log(error);
      // setSignUPError(error.message)
    })
    const role = 'normal'
    const userFormdata= {
      name:  data.name,
      password: data.password,
      email: data.email,
      role: role
    }
    console.log(userFormdata);

    fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userFormdata)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.acknowledged){

                }
                else{
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
                }
            })
            
            

  }
  const handleWithGoogleSignIn = () => {
    googleSignUp(googleProvidor)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate('/')
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Google Login Success',
              showConfirmButton: false,
              timer: 1500
            })
            const googleUser = {
              name: user.displayName,
              email: user.email,
              role: 'normal',
              password: ''
            }
            console.log(googleUser);
            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(googleUser)
            })
              .then(res => res.json())
              .then(resultgoogle => {
                  console.log(resultgoogle);
                  if (resultgoogle.acknowledged) {
            
                  }
            
              })            
        })
        .catch(error => {
            console.log(error);
            // setLoginError(error.message)
        })
}
    return (
        <div className="hero min-h-screen bg-base-200">
            
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left shadow-2xl rounded-xl">
           <img src={signupImage} alt="" />
            
          </div>
        
          <div className="card flex-shrink-0 w-full max-w-sm shadow-1xl bg-base-100 -ml-4">
          <h1 className="text-5xl font-bold text-center mt-2">Register now!</h1>
            <div className="card-body">
            <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" placeholder='Your Name' {...register("name", {
                            required: "Name is Required"
                        })} className="input input-primary w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" placeholder='Your 
                        Email' {...register("email", {
                            required: 'email is required'
                        })} className="input input-primary w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" placeholder='Password' {...register("password", {
                            required: "Password is required",
                        })} className="input input-primary w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <p className='mt-2 text-blue-600 text-xl'><Link to='/login' >I Have already account</Link></p>
                    <input className='btn btn-primary w-full mt-4' value="Sign Up" type="submit" />
                    <button className='btn btn-gray-300 mt-5 w-full' onClick={handleWithGoogleSignIn}><FaGoogle></FaGoogle><span className='ml-3'> GOOGLE</span></button>
                    {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;