import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Context';
import edit from './edit.svg';
import linkedin from './linkedIn.svg';
import ProjectsOverView from './ProjectsOverView';
import styles from "./Dashboard.modules.css"
import Footer from '../pages/shared/Footer/Footer';
const Dashboard = () => {

    const { user, logOut } = useContext(AuthContext);
    const logout = () => {
        logOut()
            .then(() => { })
    }
    console.log(user);
    return (
        <div className='relative w-full px-0 grid grid-cols-2 mx-auto pt-5 bg-base-300'>
            <div className={`overflow-y-auto w-1/4 bg-base-300 fixed top-20 z-20 h-screen left-0 px-2`}>
                <div className='flex justify-between items-center py-4'>
                    <h2>{user?.displayName}</h2><p className='hover:text-gray-400 pr-5' title='Edit'>
                        <img src={edit} alt="Edit" className='w-5 h-5' /></p>
                </div>
                <img src={user?.photoURL} alt="profile" className='rounded-full' />
                <div>
                    <address>
                        Raipura
                        Narsingdi
                    </address>
                </div>
                <div className='flex flex-col'>
                    <Link src={`mailto:${user?.email}`}>Email:{user?.email}</Link>
                    <p>Email Verification:{
                        (user.emailVerified) ? <span className='text-green-500'>Verified</span> : <span className='text-red-300'>Not Verified</span>
                    }</p>
                    <Link className='flex gap-1'><img src={linkedin} alt="linkedin" className='w-5 h-5' />LinkedIn</Link>
                    <Link>GitHub</Link>
                    <Link>Contact</Link>
                    <Link>Facebook</Link>
                    <Link>Website</Link>
                </div>
                <li className='flex'>
                    <button className='btn  btn-outline mr-auto  py-1 px-4  w-56 rounded-lg' onClick={() => logout()}>log out</button>
                </li>
            </div>

            <div className='absolute right-0 w-3/4 h-screen  text-gray-200 bg-base-300 top-5'>
                <div className='text-orange-300  flex gap-3 mr-auto bg-base-300 justify-between px-3'>
                    <p className="">Account Create Time:{user?.metadata?.creationTime}</p>
                    <p>Last signed in Time:{user?.metadata?.lastSignInTime}</p>
                </div>
                <div className='bg-base-100'>
                    <h2 className='w-2/3 text-blue-300 text-xl p-1'><span className='pb-3'>Project Overview</span></h2>
                    {/* content */}
                    <ProjectsOverView/>
                <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;