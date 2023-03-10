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

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('https://server-space.vercel.app/mytask')
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
                    loader: async ({ params }) => fetch(`https://server-space.vercel.app/mytask/${params.id}`)
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
                    loader: async ({ params }) => fetch(`https://server-space.vercel.app/mytask/${params.id}`)
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