import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import loginImage from '../../../Img/loginpage/login.avif'
import { AuthContext } from '../../../Context/AuthProvidor';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const {login, googleSignUp} = useContext(AuthContext)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const googleProvidor = new GoogleAuthProvider()
  const handleLogin = (data) =>{
login(data.email, data.password)
.then(result => {
  const user = result.user;
  console.log(user);
  navigate('/')
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Login Successfull',
    showConfirmButton: false,
    timer: 1500
  })
})
.catch(error => {
  console.log(error);
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
           <img src={loginImage} alt="" />
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-1xl bg-base-100 -ml-4">
          <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>
            <div className="card-body">
            <form onSubmit={handleSubmit(handleLogin)}>
                    <div className=" rounded-none w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-accent w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required"
                            })}
                            className="input input-accent w-full max-w-xs" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                   
                    </div>
                    <p className='mt-2 text-blue-600 text-xl'><Link to='/signup' >Create a account?</Link></p>
                    <input className='btn btn-accent w-full mt-3' value="Login" type="submit" />
                    <button className='btn btn-gray-300 mt-5 w-full' onClick={handleWithGoogleSignIn}><FaGoogle></FaGoogle><span className='ml-3'> GOOGLE</span></button>
                    {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;