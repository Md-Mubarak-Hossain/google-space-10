import React from 'react';
import {  Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/header/Header';


const Main = () => {
    
    return (
        <div>
            <Header/>
            <div className='pt-16'>
            <Outlet></Outlet >
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
