import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
// import toast from 'react-hot-toast';

import { BsCardImage } from 'react-icons/bs'

const AddTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const { data: tasks, isLoading } = useQuery({
        queryKey: ['description'],
        queryFn: async () => {
            const res = await fetch('https://server-space.vercel.app/mytask');
            const data = await res.json();
            return data;
        }
    })

    const handleUploadData = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const taskPost = {
                        name: data.name,
                        email: data.email,
                        description: data.description,
                        image: imgData.data.url
                    }

                    // save doctor information to the database
                    fetch('https://server-space.vercel.app/mytask', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(taskPost)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            if (result.acknowledged) {
                                alert(`${data.name} is added successfully`);
                            }
                        })
                }
            })
    }

    if (isLoading) {
        return <p>loading...</p>
    }

    return (
        <div className='w-full p-7'>
            <h2 className="text-4xl">Add A Task</h2>
            <form onSubmit={handleSubmit(handleUploadData)}>
                <div className='grid grid-cols-2'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Task Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Task Name is Required"
                        })} className="input input-bordered w-full border-b-2 border-slate-900 " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: "email is Required"
                        })} className="input input-bordered w-full border-b-2 border-slate-900" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <textarea rows='5' type="text" {...register("description",
                        {
                            required: false
                        }
                    )} className="input input-bordered border border-dashed w-full border-slate-900" />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Task Image</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <div className="space-y-1 text-center  flex flex-col place-items-center justify-center items-center">
                            <div className='w-32 h-32 bg-gray-300 rounded-full flex flex-col place-items-center justify-center items-center'>
                                <BsCardImage className='block text-7xl w-full text-gray-500'></BsCardImage>
                            </div>
                            <div className="flex text-sm text-gray-600">
                                <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">

                                    <input type="file" {...register("image", {
                                        required: "Task images is Required"
                                    })}
                                        className="input input-bordered w-full max-w-xs" />
                                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                                </label>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Task" type="submit" />
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    SUBMIT TASK
                </button>
            </form >
        </div >
    );
};

export default AddTask;