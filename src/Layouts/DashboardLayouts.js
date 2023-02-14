import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../pages/Nabvar/Navbar';
import '../../src/pages/Styles/styles.css'
import useAdmin from '../hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvidor';
const DashboardLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-color text-white text-xl font-semibold">
                        {


                            <>
                                <li className='hover:text-orange-400'><Link to='/dashboard'>Upload Notice</Link></li>
                                <li className='hover:text-orange-400'><Link to='/dashboard/addteacher'>Add Teacher</Link></li>
                                <li className='hover:text-orange-400'><Link to='/dashboard/alluser'>All User</Link></li>
                                <li className='hover:text-orange-400'><Link to='/dashboard/jobseekerlist'>Job Seeker List</Link></li>
                            </>


                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayouts;