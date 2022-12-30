import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/Context';
import useTitle from '../../../Hooks/useTitle';

const Uncomplete = () => {
    useTitle('Update task');
    const task = useLoaderData();
    console.log(task)
    const { worker, description, email, image, name, _id } = task;
    console.log(task)
    const { loading, user } = useContext(AuthContext)
    const [taskdata, setTask] = useState(task)

    const handleSub = event => {
        event.preventDefault();
        fetch(`https://server-space.vercel.app/mytask/${taskdata._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskdata)
        })

            .then(res => res.json())
            .then(data => {

                if (data.modified > 0) {
                    alert('successfully updated!!!');
                    event.target.reset();
                }

            })
    }
    const onChangeHandle = event => {
        const value = event.target.value;
        const field = event.target.field;
        const newTask = { ...taskdata }
        newTask[field] = value;
        setTask(newTask);
    }
    if (loading) {
        return <p>loading...</p>
    }
    return (
        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <h2 className="text-gray-700 text-base">Task description </h2>
                <textarea rows='5' className='form-control border-black border-dashed input input-bordered border' />
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Submit task</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Delete</span>
            </div>
        </div>
    );
};

export default Uncomplete;
