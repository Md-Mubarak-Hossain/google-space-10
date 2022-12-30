import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useTitle from '../Hooks/useTitle';
import { AuthContext } from '../context/Context';

const Login = () => {
    useTitle('Login');
    const { user, logIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.from?.state?.pathname || '/';
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
                console.log(user)
                navigate(from, { replace: true });
                return alert('Successfully log in!!!');
            })
            .catch(err => {
                setError('User or Password is invalid!!!')
                console.error(err)
            })
    }
    const googleHandle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(err => console.error(err))
    }
    return (
        <>

            <div className="w-full flex flex-col justify-center items-center place-items-center  bg-white shadow-md rounded p-4 mb-2 lg:px-8 lg:pt-6 lg:pb-8 lg:mb-4">

                <div className='w-full border py-5 px-5 lg:px-10 lg:w-1/2 mx-auto rounded-lg'>
                    <h2 className='uppercase text-center w-full'>login form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name='email' placeholder="email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" name='password' />
                            <p className="text-red-500 text-xs italic">{error}</p>
                        </div>
                        <div className="flex flex-col items-center justify-between">
                            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign Up
                            </button>
                            <Link to='/signup' className="inline-block align-baseline text-gray-600 text-sm" >
                                Don't have an account?<span className='text-xs text-blue-700 underline font-bold'>Sign up</span>
                            </Link>
                        </div>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </form>

                    <hr className='bg-gray-400 mt-5' />
                    <p className='w-full text-center text-xs'>OR</p>
                    <hr className='bg-gray-400 mb-5' />
                    <button onClick={googleHandle} className="w-full flex flex-col place-items-center btn btn-outline  my-2  lowercase  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded">
                        <p className='flex'><FcGoogle className='px-1 text-2xl'></FcGoogle>Sign in with<span className='text-orange-500 px-1'>google</span></p>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Login;