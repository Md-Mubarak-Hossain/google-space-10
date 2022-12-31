import React from 'react';
import { Link } from 'react-router-dom';
import AddTask from '../task/addTask/AddTask';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { BsArrowRightCircleFill } from 'react-icons/bs';
const Home = () => {
    return (
        <div className=''>
            <div className='avatar w-full flex flex-col place-items-center justify-center items-center p-2 lg:p-10 mt-5 lg:mt-10'>
                <h2 className='text-xl lg:text-3xl font-bold text-blue-700 mb-5'>Google Space Use instructions</h2>
                <p className='w-56 h-56 rounded-full text-white font-bold bg-violet-800 flex flex-col place-items-center justify-center items-center uppercase text-2xl'>
                    <Link to="/signup" className="font-medium flex flex-col items-center justify-center place-items-center">
                        Get Started
                        <FaExternalLinkAlt className='mx-1 text-xl'></FaExternalLinkAlt>
                    </Link>
                </p>
                <ol className='w-full lg:w-3/4 mx-auto  my-2 lg:m-5 flex flex-col justify-center items-center  place-items-center text-justify'>
                    <li className='w-full flex place-items-center py-1'> <BsArrowRightCircleFill className='mx-1'></BsArrowRightCircleFill><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem illum nobis minima sit optio id cum sint maxime magnam.</p></li>
                    <li className='w-full flex place-items-center py-1'> <BsArrowRightCircleFill className='mx-1'></BsArrowRightCircleFill><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem illum nobis minima sit optio id cum sint maxime magnam.</p></li>
                    <li className='w-full flex place-items-center py-1'> <BsArrowRightCircleFill className='mx-1'></BsArrowRightCircleFill><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem illum nobis minima sit optio id cum sint maxime magnam.</p></li>
                    <li className='w-full flex place-items-center py-1'> <BsArrowRightCircleFill className='mx-1'></BsArrowRightCircleFill><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem illum nobis minima sit optio id cum sint maxime magnam.</p></li>
                    <li className='w-full flex place-items-center py-1'> <BsArrowRightCircleFill className='mx-1'></BsArrowRightCircleFill><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem illum nobis minima sit optio id cum sint maxime magnam.</p></li>
                </ol>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 p-5 uppercase place-items-center gap-2 lg:gap-4'>
                <Link to='/signup' className='rounded-lg bg-violet-800 text-white shadow shadow-violet-600 w-full lg:w-56 h-20 flex flex-col place-items-center justify-center items-center'> <FaExternalLinkAlt className='mx-1 text-xl'></FaExternalLinkAlt>Create Account</Link>
                <Link to='/add' className='rounded-lg bg-violet-800 text-white shadow shadow-violet-600 w-full lg:w-56 h-20 flex flex-col place-items-center justify-center items-center'> <FaExternalLinkAlt className='mx-1 text-xl'></FaExternalLinkAlt>Add Project</Link>
                <Link to='/my' className='rounded-lg bg-violet-800 text-white shadow shadow-violet-600 w-full lg:w-56 h-20 flex flex-col place-items-center justify-center items-center'> <FaExternalLinkAlt className='mx-1 text-xl'></FaExternalLinkAlt>Your Project</Link>
                <Link to='/all' className='rounded-lg bg-violet-800 text-white shadow shadow-violet-600 w-full lg:w-56 h-20 flex flex-col place-items-center justify-center items-center'> <FaExternalLinkAlt className='mx-1 text-xl'></FaExternalLinkAlt>All Project</Link>

            </div>
        </div>
    );
};

export default Home;