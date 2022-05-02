import React, { useState, useEffect } from 'react';
import Connect from './Connect';
import mainLogo from '../../img/icons/main-logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Header = (props) => {
     

    return (
        <>
            <div className='d-flex justify-content-between py-3'>
                <div>
                    <Link to='/'>
                        <img src={mainLogo} width={210} height={150} />
                    </Link>
                </div>
                <div className='d-flex text-white'>
                    <div className='px-2 pt-2'>How do it works</div>
                    <div className='px-2 pt-2'>About</div>
                    <div className='px-2 pt-2'>FAQ</div>   
                    <Connect />
                </div>
            </div>              
            
            <ToastContainer
                autoClose={3000}
                closeButton={false}
                closeOnClick
            />    
        </>
    )
}

export default Header;
