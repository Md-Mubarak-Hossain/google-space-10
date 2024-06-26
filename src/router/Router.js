import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/home/Home';
import AddTask from '../pages/task/addTask/AddTask';
import CompleteTask from '../pages/task/completeTask/CompleteTask';
import UncompleteTask from '../pages/task/notcompleteTask/Uncomplete.js';
import MyTask from '../pages/task/mytask/MyTask';
import Signup from '../account/Signup';
import Login from '../account/Login';
import Protect from './Protect';
import TaskDetail from '../pages/task/completeTask/TaskDetail';
import AllTask from '../pages/task/AllTask/AllTask';
import Update from '../pages/task/updateTask/Update';
import AddSubTask from '../pages/task/addTask/AddSubTask';
import Dashboard from '../dashboard/Dashboard';
import Thumb from '../pages/projects/addprojects/Thumb';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('https://projects-drive-file.vercel.app/mytask')
                },
                {
                    path:"/thumb",
                    element:<Thumb/>
                }
                ,
                {
                    path: '/dashboard',
                    element: <Protect><Dashboard></Dashboard></Protect>,
                    loader: () => fetch('https://projects-drive-file.vercel.app/mytask')
                },
                {
                    path: '/addSub',
                    element: <Protect><AddSubTask></AddSubTask></Protect>,
                    loader: () => fetch('https://projects-drive-file.vercel.app/mytask')
                },
                {
                    path: '/add',
                    element: <Protect><AddTask></AddTask></Protect>
                },
                {
                    path: '/my',
                    element: <Protect><MyTask></MyTask></Protect>
                },
                {
                    path: '/uncomplete/:id',
                    element: <Protect><UncompleteTask></UncompleteTask></Protect>,
                    loader: async ({ params }) => fetch(`https://projects-drive-file.vercel.app/mytask/${params.id}`)
                },
                {
                    path: '/update/:id',
                    element: <Protect><Update></Update></Protect>,
                    loader: async ({ params }) => fetch(`https://projects-drive-file.vercel.app/mytask/${params.id}`)
                },
                {
                    path: '/complete',
                    element: <CompleteTask></CompleteTask>
                },
                {
                    path: '/all',
                    element: <AllTask></AllTask>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/signup',
                    element: <Signup></Signup>
                },
                {
                    path: '/taskdetail/:id',
                    element: <TaskDetail></TaskDetail>,
                    loader: async ({ params }) => fetch(`https://projects-drive-file.vercel.app/mytask/${params.id}`)
                },
                {
                    path: '/update/:id',
                    element: <Update></Update>,
                    loader: async ({ params }) => fetch(`https://projects-drive-file.vercel.app/mytask/${params.id}`)
                },
            ]
        },
        {
            path: '/*',
            element: <div>404</div>

        }
    ])
    return (
        <RouterProvider router={router}>
        </RouterProvider >
    );
};

export default Router;