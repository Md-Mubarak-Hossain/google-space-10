import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { BsCardImage } from 'react-icons/bs'
import { AuthContext } from '../../../context/Context';

const AddTask = () => {
    const { user, loading } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    // const { data: tasks, isLoading } = useQuery({
    //     queryKey: ['description'],
    //     queryFn: async () => {
    //         const res = await fetch('https://server-space.vercel.app/mytask');
    //         const data = await res.json();
    //         return data;
    //     }
    // })

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
                        worker: data.worker,
                        email: data.email,
                        live: data.live,
                        client: data.client,
                        server: data.server,
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

    if (loading) {
        return <p>loading...</p>
    }

    return (

        <div className='w-full p-5 flex flex-col place-items-center justify-center items-center'>
            <h2 className="text-lg lg:text-xl uppercase px-5 text-orange-700 font-bold">Add Your Task</h2>
            <form onSubmit={handleSubmit(handleUploadData)} className='uppercase flex flex-col place-items-center justify-center items-center lg:w-1/2'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 lg:p-5'>

                    <div className="form-control w-full text-xs">
                        <label className="label"> <span className="label-text">Worker Name</span></label>
                        <input type="text" defaultValue={user?.displayName} {...register("worker", {
                            required: false
                        })} className="input input-bordered w-full  border-gray-900 border-dashed text-black" readOnly />
                        {errors.worker && <p className='text-red-500'>{errors.worker.message}</p>}
                    </div>
                    <div className="form-control w-full text-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" defaultValue={user.email} {...register("email", {
                            required: false
                        })} className="input input-bordered w-full border-gray-900 border-dashed text-black" readOnly />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 lg:p-5'>
                    <div className="form-control w-full text-xs m-2">
                        <label className="label"> <span className="label-text">Project Name</span></label>
                        <input type="text" placeholder='enter task name' {...register("name", {
                            required: "Project Name is Required"
                        })} className="input input-bordered w-full  border-gray-900 border-dashed text-black border p-2" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full text-xs m-2">
                        <label className="label"> <span className="label-text">Live site link</span></label>
                        <input type="text" placeholder='paste your live site link' {...register("live", {
                            required: false
                        })} className="input input-bordered w-full  border-gray-900 border-dashed text-black border p-2" />
                        {errors.live && <p className='text-red-500'>{errors.live.message}</p>}
                    </div>
                    <div className="form-control w-full text-xs m-2">
                        <label className="label"> <span className="label-text">Client site Repository</span></label>
                        <input type="text" placeholder='Past client site repository link' {...register("client", {
                            required: "Client site Repository is Required"
                        })} className="input input-bordered w-full  border-gray-900 border-dashed text-black border p-2" />
                        {errors.client && <p className='text-red-500'>{errors.client.message}</p>}
                    </div>
                    <div className="form-control w-full text-xs m-2">
                        <label className="label"> <span className="label-text">Server site repository</span></label>
                        <input type="text" placeholder='Past client site repository link' {...register("server", {
                            required: false
                        })} className="input input-bordered w-full  border-gray-900 border-dashed text-black border p-2" />
                        {errors.server && <p className='text-red-500'>{errors.server.message}</p>}
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-5'>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Project Image</label>
                        <div className="mt-1 flex flex-col place-items-center justify-center items-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 lg:h-48">
                            <div className="space-y-1 text-center  flex flex-col place-items-center justify-center items-center">
                                <div className='w-32 h-32 bg-gray-300 rounded-full flex flex-col place-items-center justify-center items-center'>
                                    <BsCardImage className='block text-7xl w-full text-gray-500'></BsCardImage>
                                </div>
                                <div className="flex text-sm text-gray-600">
                                    <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">

                                        <input type="file" {...register("image", {
                                            required: "Task images is Required"
                                        })}
                                            className="input input-bordered w-full text-black" />
                                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <textarea rows='5' type="text" {...register("description",
                            {
                                required: false
                            }
                        )} className="input input-bordered border-2 border-dashed border-gray-400 w-full p-2 lg:h-48 text-black rounded-lg " />
                        {errors.description && <p className='text-red-500'>{errors.description.message}</p>}

                    </div>
                </div>
                <button class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded-lg my-2 text-sm uppercase">
                    SUBMIT Project
                </button>
            </form>
        </div>
    );
};

export default AddTask;