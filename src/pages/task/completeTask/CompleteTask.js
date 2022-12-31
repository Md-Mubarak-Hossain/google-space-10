
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/Context';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ExternalLink } from 'react-external-link';
import Protect from '../../../router/Protect';
const MyTask = () => {
    const { loading } = useContext(AuthContext)
    const [tasks, setTask] = useState([])
    useEffect(() => {
        fetch('https://server-space.vercel.app/mytask')
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])

    console.log(tasks);

    const handleDelete = id => {
        const procced = window.confirm(`Are you sure to delete??`)
        if (procced) {
            fetch(`https://server-space.vercel.app/mytask/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remainTask = tasks.filter(d => d._id !== id)
                        setTask(remainTask);
                        tasks();
                        alert('successfully deleted')
                    }

                })
        }
    }
    if (loading)
        return <p>loading...</p >
    return (
        <>
            {tasks.map(task => <div key={task._id}>
                {
                    task.description.length === 0 ?
                        <></> :
                        <>
                            <div className="overflow-hidden  shadow sm:rounded-lg p-5 m-5">
                                <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg font-medium leading-6 text-blue-900">Project Information</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-blue-500">Project details and application.</p>
                                </div>
                                <div className="border-t border-gray-200">
                                    <dl>
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Worker Name</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{task.worker}</dd>
                                        </div>
                                        <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Project name</dt>
                                            <dd className="mt-1 text-sm text-blue-900 sm:col-span-2 sm:mt-0">{task.name}</dd>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{task.email}</dd>
                                        </div>
                                        <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Get access</dt>
                                            <dd className="mt-1 text-sm text-gray-500 sm:col-span-2 sm:mt-0">$120,000</dd>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">About</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 rounded">{task.description}</dd>
                                        </div>
                                    </dl>
                                </div>
                                <div className='flex my-2'>
                                    <button className='uppercase text-xs btn mx-2 btn-blue-400'><Link to={`/uncomplete/${task._id}`} className=' bg-violet-800 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline '>Update</Link></button>
                                    <Protect><button className='uppercase text-xs bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => handleDelete(task._id)}>Delete</button></Protect>
                                    <button className='uppercase text-xs btn mx-2 btn-blue-400'><Link to={`/taskdetail/${task._id}`} className=' bg-violet-800 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase'> Complete Project</Link></button>
                                </div>
                            </div>
                        </>
                }
            </div >)
            }
        </>
    );
};
export default MyTask;