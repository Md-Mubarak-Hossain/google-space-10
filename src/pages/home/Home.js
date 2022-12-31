import React from 'react';
import { Link } from 'react-router-dom';
import AddTask from '../task/addTask/AddTask';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { BsArrowRightCircleFill } from 'react-icons/bs';
const Home = () => {
    return (
        <div>
            <div className='avatar w-full flex flex-col place-items-center justify-center items-center p-10 my-10'>
                <h2 className='text-xl lg:text-3xl font-bold text-blue-700'>Google Space Use instructions</h2>
                <ol className='m-5'>
                    <li className='flex place-items-center py-1'> <BsArrowRightCircleFill className='mx-1'></BsArrowRightCircleFill><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem illum nobis minima sit optio id cum sint maxime magnam.</p></li>
                    <li className='flex place-items-center py-1'> <BsArrowRightCircleFill className='mx-1'></BsArrowRightCircleFill><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem illum nobis minima sit optio id cum sint maxime magnam.</p></li>
                    <li className='flex place-items-center py-1'> <BsArrowRightCircleFill className='mx-1'></BsArrowRightCircleFill><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem illum nobis minima sit optio id cum sint maxime magnam.</p></li>
                    <li className='flex place-items-center py-1'> <BsArrowRightCircleFill className='mx-1'></BsArrowRightCircleFill><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem illum nobis minima sit optio id cum sint maxime magnam.</p></li>
                    <li className='flex place-items-center py-1'> <BsArrowRightCircleFill className='mx-1'></BsArrowRightCircleFill><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem illum nobis minima sit optio id cum sint maxime magnam.</p></li>
                </ol>
                <p className='w-56 h-56 rounded-full text-slate-900 font-bold bg-slate-200 flex flex-col place-items-center justify-center items-center uppercase text-2xl'>
                    <Link to="/signup" className="font-medium flex flex-col items-center justify-center place-items-center">
                        Get Started
                        <FaExternalLinkAlt className='px-1'></FaExternalLinkAlt>
                    </Link>
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 p-5 uppercase'>
                <Link to='/add' className=' shadow shadow-violet-600 w-56 h-20 flex flex-col place-items-center justify-center items-center'> <FaExternalLinkAlt className='px-1'></FaExternalLinkAlt>Add Task</Link>
                <Link to='/complete' className=' shadow shadow-violet-600 w-56 h-20 flex flex-col place-items-center justify-center items-center'> <FaExternalLinkAlt className='px-1'></FaExternalLinkAlt>Complete Task</Link>
                <Link to='/my' className='shadow shadow-violet-600 w-56 h-20 flex flex-col place-items-center justify-center items-center'> <FaExternalLinkAlt className='px-1'></FaExternalLinkAlt>Your Task</Link>
                <Link to='/signup' className=' shadow shadow-violet-600 w-56 h-20 flex flex-col place-items-center justify-center items-center'> <FaExternalLinkAlt className='px-1'></FaExternalLinkAlt>Create Account</Link>
            </div >
        </div >
    );
};

export default Home;