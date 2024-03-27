import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/Context';
import Loading from '../router/Loading';

const ProjectsOverView = () => {
    const {loading}=useContext(AuthContext);
    const [task,setTask]=useState();
    const handleDelete = id => {
        const opinion = window.confirm(`Are you sure to delete??`)
        if (opinion) {
            fetch(`https://projects-drive-file.vercel.app/mytask/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remainTask = task.filter(d => d._id !== id)
                        setTask(remainTask);
                        task();
                        alert('successfully deleted')
                    }

                })
        }
    }
    const tasks = useLoaderData();
    console.log(tasks);
    
    return (
        <> {loading?<Loading></Loading>:
            <div className="overflow-x-auto h-screen">
                <table className="rounded-none">
                    {/* head */}
                    <thead>
                        <tr className='border-b border-green-900 text-lg'>
                            <th className='p-1'>No</th>
                            <th className='p-1'>Projects</th>
                            <th className='p-1'>Thumb</th>
                            <th className='p-1'>live site</th>
                            <th className='p-1'>Client site</th>
                            <th className='p-1'>Server site</th>
                            <th className='p-1'>Technology</th>
                            <th className='p-1'>Utility</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(t => <tr className='border-t border-green-900'>
                                <td className='p-1'>{t.id}</td>
                                <td className='p-1'>{t?.title?.slice(0, 12)}</td>
                                <td className='p-1'><img src={t.thumb} alt="thumb" className='w-20 h-16' /></td>
                                <td className='p-1'>{t.liveSite}</td>
                                <td className='p-1'>{t.clientSite}</td>
                                <td className='p-1'>{t.serverSite}</td>
                                <td className='p-1'>{t.technology}</td>
                                <td className='flex flex-col justify-center items-center'>
                                    <td className='p-1'><Link to={`/uncomplete/${t._id}`}className="text-orange-300">Edit</Link></td>
                                    <td className='p-1 text-blue-400'><Link to={`/update/${t._id}`} >Details</Link></td>
                                    <td className='p-1 text-red-500'><button onClick={()=>handleDelete(`${t?._id}`)}>Delete</button></td>                                
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>}
        </>
    );
};

export default ProjectsOverView;