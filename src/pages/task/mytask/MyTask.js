
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/Context';

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

        <div class="w-full overflow-x-auto my-10 p-2">
            <h2>total task:{tasks.length}</h2>
            <table class="w-full text-left border border-separate rounded border-slate-200">
                <tbody>
                    <tr>
                        <th scope="col" class="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Worker</th>
                        <th scope="col" class="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Task Name</th>
                        <th scope="col" class="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Task description</th>
                        <th scope="col" class="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Image</th>
                        <th scope="col" class="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Task Position</th>
                    </tr>
                    {tasks.map(task => <tr key={task._id}>

                        <th scope="row" class="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                            <button onClick={() => handleDelete(task._id)}>Delete</button>
                        </th>
                        <th scope="row" class="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{task.worker}</th>
                        <td class="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{task.name}</td>
                        <td class="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{task.description}</td>
                        <td class="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                            <img src={task.image} alt="" className='w-48' />
                        </td>
                        <td class="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                            {
                                task.description.length > 0 ?
                                    <button>completed</button>
                                    :
                                    <Link to={`/uncomplete/${task._id}`} className='text-red-900'>not complete</Link>
                            }
                        </td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div >
    );
};
export default MyTask;