
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/Context';

const AllTask = () => {
    const { user, loading } = useContext(AuthContext)
    const [tasks, setTask] = useState([])
    useEffect(() => {
        fetch(`https://server-space.vercel.app/mytask`)
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

        <div class="my-10 p-2">
            <div className='text-lg lg:text-xl uppercase'>ALL Project Display</div>
            <hr className='w-full text-xl font-bold text-violet-900' />
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4'>
                {tasks.map(task => <div key={task._id}  >
                    <div className='w-full lg:h-full lg:shadow-violet-700 lg:shadow-xl  lg:p-5 rounded'>
                        <div className='w-full p-2 lg:my-5'>
                            <div class="p-2 text-sm uppercase text-blue-700">WORKER: {task.worker}</div>
                            <div class="p-2 text-sm uppercase text-blue-700 font-bold">PROJECT NAME: {task.name}</div>
                            <div class="p-2 text-sm text-justify">PROJECT DESCRIPTION: {task.description.slice(0, 300)}</div>
                            <div class="p-2 text-sm text-justify uppercase">PROJECT images:
                                <img src={task.image} alt="" />
                            </div>
                            <div class="p-2 text-sm text-justify">live site: {task.live}</div>
                            <div class="p-2 text-sm text-justify">client site repository: {task.client}</div>
                            <div class="p-2 text-sm text-justify">server site repository: {task?.server}</div>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div >
    );
};
export default AllTask;