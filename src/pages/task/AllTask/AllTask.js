import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/Context';
import { Link } from 'react-router-dom';
import Loading from '../../../router/Loading';

const AllTask = () => {
    const { loading } = useContext(AuthContext)
    const [tasks, setTask] = useState([])
    useEffect(() => {
        fetch(`https://projects-drive-file.vercel.app/mytask`)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])

    console.log(tasks);
// if(loading)<p>loading...</p>
    
    return (
        <>
        {
        loading?<Loading/>:<>
        <div className="my-10 p-2">
            <div className='text-lg lg:text-xl'>ALL Project Display</div>
            <hr className='w-full text-xl font-bold' />
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4'>
                {tasks.map(task => <div key={task._id}  >
                    <div className='w-full  lg:shadow-violet-700 lg:shadow-xl  lg:p-5 rounded'>
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
                </div>)
                }
            </div>
        </div >
        </>}
        </>
    );
};
export default AllTask;