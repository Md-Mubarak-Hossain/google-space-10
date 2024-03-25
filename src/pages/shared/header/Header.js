import React, { useContext, useState } from 'react';
import logo from '../../../components/assets/download.png';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/Context';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isToggleOpen, setIsToggleOpen] = useState(false)
    
    const logout = () => {
        logOut()
            .then(() => { })
    }
    const menuitems = <>
        
        <li  className="flex">
            <Link
                className="flex items-center   px-2"
                to='/'
            >
                <span className='hover:border-b-2 hover:border-blue-200 focus:border-orange-400'>Home</span>
            </Link>
        </li>
        <li  className="flex">
            <Link
                className="flex items-center   px-2"
                to='/all'
            >
                <span className='hover:border-b-2 hover:border-blue-200 focus:border-orange-400'>All Task</span>
            </Link>
        </li>
        <li  className="flex">
            <Link
                className="flex items-center   px-2"
                to='/add'
            >
                <span className='hover:border-b-2 hover:border-blue-200 focus:border-orange-400'>Add Task</span>
            </Link>
        </li>
        <li  className="flex">
            <Link
                className="flex items-center   px-2"
                to='/my'
            >
                <span className='hover:border-b-2 hover:border-blue-200 focus:border-orange-400'>My Task</span>
            </Link>
        </li>
        {
            user && user.uid ?
                <>
                    <li  className="flex">
                        <Link
                            
                            className="flex items-center   px-2"
                            to='/complete'>
                            <span className='hover:border-b-2 hover:border-blue-200 focus:border-orange-400'>Complete Task</span>
                        </Link>
                    </li >
                    <button className='btn bg-violet-800 hover:bg-violet-500   py-1 px-4 rounded-lg' onClick={() => logout()}>log out</button>
                </>
                :
                <>
                    <li  className="flex">
                        <Link
                            className="flex items-center   px-2"
                            to='/login'
                        >
                            <span className='hover:border-b-2 hover:border-blue-200 focus:border-orange-400'>Login</span>
                        </Link>
                    </li>
                </>
        }
    </>
    return (
        <div>
              <header className="fixed z-20 w-full h-20 text-lg bg-base-300" >
                <div className="relative mx-auto w-full">

                    <nav
                        
                        className={`flex justify-between`}
                        role="navigation"
                    >
                        {/*      <!-- Brand logo --> */}
                        <Link className="text-2xl flex px-2 place-items-center">
                            <img src={logo} alt="" className="w-16 h-16" />
                            Projects Drive File
                        </Link>

                        {/*      <!-- Mobile trigger --> */}
                        <button
                            className={`relative order-10 block  w-10 self-center 
                           lg:hidden
                            ${isToggleOpen
                                    ?
                                    "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                                    : ""
                                }
    `}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? "true" : "false"}
                            aria-label="Toggle navigation">
                            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">

                                <span
                                    aria-hidden="true"
                                    className={`absolute block w-9/12 -translate-y-2 transform rounded-full  transition-all duration-300 bg-blue-600`}>
                                </span>
                                <span
                                    aria-hidden="true"
                                    className={`absolute block w-6 transform rounded-full transition duration-300 bg-blue-600`}>
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block w-1/2 origin-top-left translate-y-2 transform rounded-full bg-blue-600 transitio9-all duration-300">
                                </span>
                            </div>
                        </button>
                        {/*      <!-- Navigation links --> */}
                        <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`text-lg absolute top-0 left-0 z-[-1] 
                             w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain  px-8  font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex h-screen lg:h-full lg:w-auto lg lg:overflow-visible`}>
                            {menuitems}
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;