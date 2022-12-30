import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const CompleteTask = () => {
    const { data: tasks, isLoading } = useQuery({
        queryKey: ['description'],
        queryFn: async () => {
            const res = await fetch('https://server-space.vercel.app/mytask');
            const data = await res.json();
            return data;
        }
    })
    // const { name, description, image } = tasks;
    if (isLoading)
        return <p>loading...</p >
    return (

        <div className="w-full overflow-x-auto my-10 p-2">
            <h2>{tasks.length}</h2>
            <table className="w-full text-left border border-separate rounded border-slate-200" cellspacing="0">
                <tbody>
                    <tr>
                        <th scope="col" className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">No</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Task Name</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Task description</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Image</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Task Position</th>
                    </tr>
                    {tasks.map(task => <tr key={task._id}>
                        {
                            task.description.length === 0 ?
                                <></>
                                :
                                <>
                                    <th scope="row" className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">1</th>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{task.name}</td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{task.description}</td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                                        <img src={task.image} alt="" className='w-48' />
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        <button>Edit task</button>
                                        <button>Delete task</button>
                                    </td>
                                </>
                        }

                    </tr>)
                    }
                </tbody>
            </table>
        </div >
    );
};
export default CompleteTask;