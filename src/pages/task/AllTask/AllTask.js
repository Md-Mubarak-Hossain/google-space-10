
import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../../context/Context';
import { Link } from 'react-router-dom';


const AllTask = () => {
    const { user, loading } = useContext(AuthContext)
    const [tasks, setTask] = useState([])
    useEffect(() => {
        fetch(`https://projects-drive-file.vercel.app/mytask`)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])

    console.log(tasks);

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
    if (loading)
        return <p>loading...</p >
    return (

        <div className="my-10 p-2">
            <div className='text-lg lg:text-xl'>ALL Project Display</div>
            <hr className='w-full text-xl font-bold' />
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4'>
                {tasks.map(task => <div key={task._id}  >
                    <div className='w-full lg:h-full lg:shadow-violet-700 lg:shadow-xl  lg:p-5 rounded'>
                        <div className='w-full p-2 lg:my-5'>
                            <div className="p-2 text-sm ">Developer Name: {task?.worker}</div>
                            <div className="p-2 text-sm font-bold">PROJECT NAME: {task?.title}</div>
                            <div className="p-2 text-sm text-justify">PROJECT DESCRIPTION: {task?.description.slice(0,200)}</div>
                            <div className="p-2 h-32 text-sm text-justify">
                                <img className="h-32 w-full" src={task?.thumb} alt="projectImages" />
                            </div>
                            <div className="p-2 text-sm">live site: {task?.liveSite}</div>
                            <div className="p-2 text-sm">client site repository: {task?.clientSite}</div>
                            <div className="p-2 text-sm">server site repository: {task?.serverSite}</div>
                        </div>
                    <Link to={`/update/${task._id}`} >See Details</Link>
                    </div>
                    <button onClick={()=>handleDelete(`${task?._id}`)}>Delete</button>
                  
                </div>)
                }
            </div>
        </div >
    );
};
export default AllTask;