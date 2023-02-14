import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../../Layouts/DashboardLayouts";
import BookList from "../BookList/BookList";
import Contact from "../Contact/Contact";
import AddTeacher from "../Dashboard/AddTeacher";
import Alluser from "../Dashboard/Alluser";
import JobSeekerList from "../Dashboard/JobSeekerList";
import UploadNotice from "../Dashboard/UploadNotice";
import About from "../Home/About/About";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login/Login";
import SignUp from "../Login/Signup/SignUp";
import NoticeRoute from "../Notice/NoticeRoute";
import Student from "../Student/Student";
import Teacher from "../Teacher/Teacher";
import UseNotice from './../Notice/UseNotice';
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/notice',
                element: <UseNotice />
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/student',
                element: <Student></Student>
            },
            {
                path: '/teacher',
                element: <Teacher></Teacher>,
            },
            {
                path: '/book',
                element: <BookList />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },

            {
                path: '/notice/:id',
                element: <NoticeRoute />,
                loader: ({ params }) => fetch(`https://cpi-project-server-ayakub.vercel.app/noticeAll/${params.id}`)
            },
           
        
        ]
    },
    {
        path: '/dashboard',
        element: <AdminRoute><DashboardLayouts></DashboardLayouts></AdminRoute>, children: [
            {
                path: '/dashboard',
                element: <UploadNotice></UploadNotice>
            },
            {
                path: '/dashboard/addteacher',
                element: <AddTeacher></AddTeacher>
            },
            {
                path: '/dashboard/alluser',
                element: <Alluser></Alluser>
            },
            {
                path:'/dashboard/jobseekerlist',
                element:<JobSeekerList/>
            }

                    ]
    }
                    ])