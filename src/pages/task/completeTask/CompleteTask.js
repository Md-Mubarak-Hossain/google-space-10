
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/Context';
import Protect from '../../../router/Protect';
const MyTask = () => {
    const { user, loading } = useContext(AuthContext)
    const [tasks, setTask] = useState([])
    useEffect(() => {
        fetch(`https://server-space.vercel.app/mytask`)
            .then(res => res.json())
            .then(data => {
                setTask(data)
                console.log(data)
            }
            )

    }, [])

    console.log(tasks);

    const handleDelete = id => {
        const procced = window.confirm(`Are you sure to delete?? `)
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
        <div className='w-screen min-h-screen'>
            <h2 className='my-5 w-full text-center uppercase'>Your Completed Project Display</h2>
            {tasks.map(task => <div key={task._id}>
                {
                    task.email === user.email ?

                        <>
                            {
                                task.description.length === 0 ?
                                    <></> :
                                    <div className="overflow-hidden  shadow sm:rounded-lg p-5 m-5">
                                        <div className="px-4 py-5 sm:px-6">
                                            <h3 className="text-lg font-medium leading-6 text-blue-900 uppercase">{task.name} Project Information</h3>
                                            <p className="mt-1 max-w-2xl text-sm text-blue-500">Project details and application.</p>
                                        </div>
                                        <div className="border-t border-gray-200">
                                            <dl>
                                                <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium ">Worker Name</dt>
                                                    <dd className="mt-1 text-sm  sm:col-span-2 sm:mt-0">{task.worker}</dd>
                                                </div>
                                                <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium ">Project name</dt>
                                                    <dd className="mt-1 text-sm text-blue-900 sm:col-span-2 sm:mt-0">{task.name}</dd>
                                                </div>
                                                <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium ">Project images</dt>
                                                    <dd className="mt-1 text-sm  sm:col-span-2 sm:mt-0">
                                                        <img src={task.image} alt="" className='rounded-lg' />
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                        <div className='flex my-2'>
                                            <button className='uppercase text-xs btn mx-2 btn-blue-400'><Link to={`/uncomplete/${task._id}`} className=' bg-violet-800 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline '>Update</Link></button>
                                            <Protect><button className='uppercase text-xs bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => handleDelete(task._id)}>Delete</button></Protect>
                                            <button className='uppercase text-xs btn mx-2 btn-blue-400'><Link to={`/taskdetail/${task._id}`} className=' bg-violet-800 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase'>See Detail
                                            </Link></button>
                                        </div>
                                    </div>
                            }
                        </>
                        : <></>
                }
            </div>)
            }
        </div >
    );
};
export default MyTask;