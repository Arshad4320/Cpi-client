import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../src/Img/logo.png'
import '../Styles/styles.css'

const Navbar = () => {
    const listItem = <>
        <li className='text-lg text-white hover:text-orange-400 font-semibold'><Link to='/'>Home</Link></li>
        <li className='text-lg text-white font-semibold hover:text-orange-400'><Link to='/about'>About</Link></li>
        <li className='text-lg text-white font-semibold hover:text-orange-400'><Link to='/notice'>Notice</Link></li>
        <li className='text-lg text-white font-semibold hover:text-orange-400'><Link to='/teacher'>Teachers</Link></li>
        <li className='text-lg text-white font-semibold hover:text-orange-400'><Link to='/student'>Students Skill</Link></li>
        <li className='text-lg text-white font-semibold hover:text-orange-400'><Link to='/book'>Book List</Link></li>
        <li className='text-lg text-white font-semibold hover:text-orange-400'><Link to='/contact'>Contact</Link></li>
        <li className='text-lg text-white font-semibold hover:text-orange-400'><Link to='/dashboard'>DashBoard</Link></li>
    </>
    return (
        <div className="navbar bg-color ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-color rounded-b-md w-52">
                        {listItem}
                    </ul>
                </div>
                <Link to='/' className='w-16 flex '><img src={img} alt="logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {listItem}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn  btn-outline btn-primary">Sign Up</button>
                {/* dashboard-drawer */}
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;