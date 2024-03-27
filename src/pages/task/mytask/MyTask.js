
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/Context';
import Loading from '../../../router/Loading';
const MyTask = () => {
    const { user, loading } = useContext(AuthContext)
    const [tasks, setTask] = useState([])
    useEffect(() => {
        fetch(`https://projects-drive-file.vercel.app/mytask`)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])
    const handleDelete = id => {
        const procced = window.confirm(`Are you sure to delete??`)
        if (procced) {
            fetch(`https://projects-drive-file.vercel.app/mytask/${id}`, {
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
   
    return (
<>{
loading?<div className='pt-20'><Loading></Loading></div>:
        <div className="my-10 p-2 w-screen min-h-screen">
            <div className='text-lg lg:text-xl uppercase'>Your Project House</div>
            <hr className='w-full text-xl font-bold text-violet-900' />
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4'>
                {tasks.map(task => <div key={task._id}>
                    {
                        task.email !== user.email ?
                            <>
                                <div className='w-full lg:h-full lg:shadow-violet-700 lg:shadow-xl lg:relative lg:p-5 rounded'>
                                    <div className='w-full p-2 lg:my-5'>
                                        <div className="p-2 text-sm uppercase text-blue-700">WORKER: {task.worker}</div>
                                        <div className="p-2 text-sm uppercase text-blue-700 font-bold">PROJECT NAME: {task.title}</div>
                                        <div className="p-2 text-sm text-justify">PROJECT DESCRIPTION: {task?.description?.slice(0, 300)}</div>
                                        <div className="p-2 text-sm text-justify uppercase">PROJECT images:
                                            <img src={task.thumb} alt="" />
                                        </div>
                                        <div className="p-2 text-sm ">live site: {task.live}</div>
                                        <div className="p-2 text-sm ">client site repository: {task.client}</div>
                                        <div className="p-2 text-sm ">server site repository: {task?.server}</div>
                                    </div>
                                    <div className="p-2 text-sm">
                                        {
                                            task.description.length > 0 ?
                                                <div className='w-full flex lg:absolute bottom-0 my-2'>
                                                    <Link to={`/taskdetail/${task._id}`} className=' bg-violet-800 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase'> Complete</Link>
                                                    <button onClick={() => handleDelete(task._id)} className='uppercase text-xs bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-1'>Delete</button>
                                                </div>
                                                :
                                                <div className='w-full flex lg:absolute bottom-0 my-2'>
                                                    <Link to={`/uncomplete/${task._id}`} className='btn bg-red-800 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase text-xs'>incomplete</Link>
                                                    <button onClick={() => handleDelete(task._id)} className='uppercase text-xs bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-1'>Delete</button>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </>
                            :
                            <div className='pt-20 text-center'>There is no task you have matched</div>
                    }


                </div>)
                }
            </div>
        </div>}

</>
    );
};
export default MyTask;