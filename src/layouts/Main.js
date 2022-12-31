import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import logo from '../components/assets/download.png';
import { BsMoon, BsSun } from 'react-icons/bs';
import { AuthContext } from '../context/Context';
const Main = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isToggleOpen, setIsToggleOpen] = useState(false)
    const [them, setThem] = useState('bg-white text-slate-900');
    const logout = () => {
        logOut()
            .then(() => { })
    }
    const menuitems = <>
        <li role="none" className="flex items-stretch">
            <Link
                role="menuitem"
                aria-haspopup="false"
                tabIndex="0"
                className="flex items-center gap-2 py-2 lg:px-3">
                {
                    them === 'bg-white text-slate-900' ?
                        <button className='bg-slate-900 p-2 rounded-full' onClick={() => setThem('bg-slate-900 text-slate-100')}>
                            <BsMoon className='text-white'></BsMoon>
                        </button>
                        :
                        <button className='bg-white p-2 rounded-full' onClick={() => setThem('bg-white text-slate-900')}>
                            <BsSun className='text-red-700'></BsSun>
                        </button>
                }
            </Link>
        </li>
        <li role="none" className="flex items-stretch">
            <Link
                role="menuitem"
                aria-haspopup="false"
                tabIndex="0"
                className="flex items-center gap-2 py-2 lg:px-3"
                to='/'
            >
                <span>Home</span>
            </Link>
        </li>
        <li role="none" className="flex items-stretch">
            <Link
                role="menuitem"
                aria-current="page"
                aria-haspopup="false"
                tabIndex="0"
                className="flex items-center gap-2 py-2 lg:px-3"
                to='/add'
            >
                <span>Add Task</span>
            </Link>
        </li>
        <li role="none" className="flex items-stretch">
            <Link
                role="menuitem"
                aria-haspopup="false"
                tabIndex="0"
                className="flex items-center gap-2 py-2 lg:px-3"
                to='/my'
            >
                <span>My Task</span>
            </Link>
        </li>
        {
            user && user.uid ?
                <>
                    <li role="none" className="flex items-stretch">
                        <Link
                            role="menuitem"
                            aria-haspopup="false"
                            tabIndex="0"
                            className="flex items-center gap-2 py-2 lg:px-3"
                            to='/complete'>
                            <span>Complete Task</span>
                        </Link>
                    </li >
                    <button className='btn bg-violet-800 hover:bg-violet-500 text-white font-bold  py-1 px-4 rounded-lg  uppercase my-5' onClick={() => logout()}>log out</button>
                </>
                :
                <>
                    <li role="none" className="flex items-stretch">
                        <Link
                            role="menuitem"
                            aria-haspopup="false"
                            tabIndex="0"
                            className="flex items-center gap-2 py-2 lg:px-3"
                            to='/login'
                        >
                            <span>Login</span>
                        </Link>
                    </li>
                </>
        }
    </>
    return (
        <div className={them}
        >
            {/*<!-- Component: Basic Navbar --> */}
            < header className="border-b-1 relative z-20 w-full border-b border-slate-200  shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden" >
                <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">

                    <nav
                        aria-label="main navigation"
                        className={`flex h-[5.5rem] items-stretch justify-between uppercase text-sm`}
                        role="navigation"
                    >
                        {/*      <!-- Brand logo --> */}
                        <Link className="flex px-2 place-items-center">
                            <img src={logo} alt="" className="w-16 h-16" />
                            Google Space
                        </Link>

                        {/*      <!-- Mobile trigger --> */}
                        <button
                            className={`relative order-10 block h-10 w-10 self-center 
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
                                    className={`absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full  transition-all duration-300 bg-blue-600`}>
                                </span>
                                <span
                                    aria-hidden="true"
                                    className={`absolute block h-0.5 w-6 transform rounded-full transition duration-300 bg-blue-600`}>
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-blue-600 transitio9-all duration-300">
                                </span>
                            </div>
                        </button>
                        {/*      <!-- Navigation links --> */}
                        <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain ${them} px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 uppercase ${isToggleOpen
                                ? "visible opacity-100 backdrop-blur-sm"
                                : "invisible opacity-0"
                                } `}>
                            {menuitems}
                        </ul>
                    </nav>
                </div>
            </header >
            <Outlet></Outlet >
            <Footer></Footer>
        </div >
    );
};

export default Main;
