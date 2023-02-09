import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../../Layouts/DashboardLayouts";
import BookList from "../BookList/BookList";
import Contact from "../Contact/Contact";
import AddTeacher from "../Dashboard/AddTeacher";
import Example from "../Dashboard/Example";
import UploadNotice from "../Dashboard/UploadNotice";
import About from "../Home/About/About";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import NoticeRoute from "../Notice/NoticeRoute";
import Student from "../Student/Student";
import ChipInstructor from "../Teacher/ChipInstructor";
import Teacher from "../Teacher/Teacher";
import UseNotice from './../Notice/UseNotice';

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
                path: '/notice/:id',
                element: <NoticeRoute />,
                loader: ({ params }) => fetch(`http://localhost:5000/noticeAll/${params.id}`)
            }
        
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayouts></DashboardLayouts>, children: [
            {
                path: '/dashboard',
                element: <UploadNotice></UploadNotice>
            },
            {
                path: '/dashboard/addteacher',
                element: <AddTeacher></AddTeacher>
            },
            {
                path: '/dashboard/example',
                element: <Example></Example>
            },

                    ]
    }
                    ])