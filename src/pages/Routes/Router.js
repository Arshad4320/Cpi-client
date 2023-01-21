import { createBrowserRouter } from "react-router-dom";
import BookList from "../BookList/BookList";
import Contact from "../Contact/Contact";
import About from "../Home/About/About";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import Notice from "../Notice/Notice";
import SingUp from "../SingUp/SingUp";
import Student from "../Student/Student";
import Teacher from "../Teacher/Teacher";

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
                path:'/about',
                element:<About></About>
            },
            {
                path:'/notice',
                element:<Notice></Notice>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/student',
                element:<Student></Student>
            },
            {
                path:'/teacher',
                element:<Teacher></Teacher>
            },
            {
                path:'/book',
                element:<BookList/>
            },
            {
                path:'/singup',
                element:<SingUp></SingUp>
            }
        ]
    }
])