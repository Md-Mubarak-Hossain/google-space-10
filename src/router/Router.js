import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Demo from '../components/demo/Demo';
import Main from '../layouts/Main';
import Home from '../pages/home/Home';
import AddTask from '../pages/task/addTask/AddTask';
import CompleteTask from '../pages/task/completeTask/CompleteTask';
import UncompleteTask from '../pages/task/notcompleteTask/Uncomplete.js';

import MyTask from '../pages/task/mytask/MyTask';

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
                    element: <AddTask></AddTask>
                },
                {
                    path: '/my',
                    element: <MyTask></MyTask>
                },
                {
                    path: '/uncomplete/:id',
                    element: <UncompleteTask></UncompleteTask>,
                    loader: async ({ params }) => fetch(`https://server-space.vercel.app/mytask/${params.id}`)
                },
                {
                    path: '/complete',
                    element: <CompleteTask></CompleteTask>
                },
                {
                    path: '/demo',
                    element: <Demo></Demo>
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