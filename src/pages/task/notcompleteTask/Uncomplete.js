import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/Context';
import useTitle from '../../../Hooks/useTitle';
import Loading from '../../../router/Loading';


const Uncomplete = () => {
    useTitle('Update taskData');
    const taskData = useLoaderData();
    // console.log(taskData)
    const { loading } = useContext(AuthContext)
    const [tasks, setTask] = useState(taskData)

    const handleSub = event => {
        event.preventDefault();
        fetch(`https://projects-drive-file.vercel.app/mytask/${tasks._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('successfully updated!!!');
                    event.target.reset();
                }


            })
    }
    const onChangeHandle = event => {

        const value = event.target.value;
        const field = event.target.name;
        const newtaskData = { ...tasks }
        newtaskData[field] = value;
        setTask(newtaskData);
    }
    console.log(tasks)
    return (
        <>{loading?<Loading></Loading>:
        <div className='pt-10'>
            <h2 className='w-full p-4 text-center text-bold'>Uncomplete Task</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <form onSubmit={handleSub} className="w-full max-w-lg p-5">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Worker Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" defaultValue={taskData?.worker} readOnly disabled />

                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Task Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" defaultValue={taskData?.name} readOnly disabled />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Description
                            </label>
                            <textarea onChange={onChangeHandle} cols='12' rows='5' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" name='description' type="password" placeholder="Please write about your task" required />
                        </div>
                    </div>
                    <button className="btn w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </form>
                <div className='w-full p-5'>
                    <h2>Task Image</h2>
                    <img src={taskData?.image} alt="" className='rounded' />
                </div>
            </div>
        </div>}
        </>
    );
};

export default Uncomplete;