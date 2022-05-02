import React, { useState, useEffect } from 'react';
import Connect from './Connect';
import mainLogo from '../../img/icons/main-logo.svg';
import { Link, useHistory } from 'react-router-dom';


import cardIcon1 from '../../img/hive-blockchain-hive-logo.svg';
import cardIcon2 from '../../img/digibyte.svg';
import cardIcon3 from '../../img/1414.png';

const ItemCard = (props) => {  
    const history = useHistory();

    const onRedirect = (page) => {
        if(localStorage.getItem('login') == 'true') {
            history.push('/' + page);
        }
        else {
            alert('please connect wallet');
        }
    }

    return (
        <>
            <div className='text-white pt-5'>
                <div><h4 className='font-OpenSansRegular'>Swapspace Reviews</h4></div>
                <div className='d-flex'>
                    <div className='w-3'>
                        <div className='item-card'>
                            <div className='item-title d-flex'>
                                <img src={cardIcon1} className='item-icon sepia align-self-center' width={34}/>
                                <h5 className='px-4 font-font-OpenSansSemiBold align-self-center'>Farm XRP</h5>
                            </div>
                            <div className='px-3 py-3'>
                                <p className='font-OpenSansRegular text-gray fs-14'>SwapSpace has been a trusted exchange partner of Hive. Our community members enjoy the reliable service</p>
                            </div>
                            <hr className='text-gray'/>
                            <div onClick={() => onRedirect('farm')}><div className='item-btn'>Farm XRP</div></div>
                        </div>                                
                    </div>
                    <div className='w-3'>
                        <div className='item-card'>
                            <div className='item-title d-flex'>
                                <img src={cardIcon2} className='item-icon sepia align-self-center' width={34}/>
                                <h5 className='px-4 font-font-OpenSansSemiBold'>Stake XRP</h5>
                            </div>
                            <div className='px-3 py-3'>
                                <p className='font-OpenSansRegular text-gray fs-14'>SwapSpace has been a trusted exchange partner of Hive. Our community members enjoy the reliable service</p>
                            </div>
                            <hr className='text-gray'/>
                            <div onClick={() => onRedirect('stake')}><div className='item-btn'>Stake XRP</div></div>
                        </div>
                    </div>
                    <div className='w-3'>
                        <div className='item-card'>
                            <div className='item-title d-flex'>
                                <img src={cardIcon3} className='item-icon sepia align-self-center' width={34}/>
                                <h5 className='px-4 font-font-OpenSansSemiBold'>Portfolio</h5>
                            </div>
                            <div className='px-3 py-3'>
                                <p className='font-OpenSansRegular text-gray fs-14'>SwapSpace has been a trusted exchange partner of Hive. Our community members enjoy the reliable service</p>
                            </div>
                            <hr className='text-gray'/>
                            <div onClick={() => onRedirect('portfolio')}><div className='item-btn'>Portfolio</div></div>
                        </div>
                    </div>
                </div>
            </div>       
        </>
    )
}

export default ItemCard;
