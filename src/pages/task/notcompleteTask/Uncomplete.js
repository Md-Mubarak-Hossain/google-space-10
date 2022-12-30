import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Uncomplete = () => {
    const task = useLoaderData();
    console.log(task)
    const { description, email, image, name, _id } = task;

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
