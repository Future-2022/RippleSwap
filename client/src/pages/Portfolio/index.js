import React, { useState, useEffect, useHistory } from 'react';
import { FaAlignJustify, FaHome, FaTractor, FaBabyCarriage, FaSteam, FaOutdent,
         FaShareSquare, FaTwitter, FaArrowRight, FaStoreAlt, FaCalculator, FaArrowDown, FaArrowUp} from 'react-icons/fa';
import './index.css';
import cardIcon3 from '../../img/1414.png';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import MetaMask from '../../img/quotation/metamask.svg';

const Portfolio = (props) => {

    const [stakeAmount, setStakeAmount] = useState('');
    const [detail, setDetail] = useState('false');

    const setPercentage = (percentage) => {
        let temp = localStorage.getItem('balance') * percentage/100;
        setStakeAmount(temp);
    }

    const showDetail = () => {
        if(detail === 'false') {
            setDetail('true')
        } else {
            setDetail('false')
        }
    }    

    return (
        <>
            <Header />
            <div className='main-body d-flex justify-content-center'>
                <div className='w-3'>
                    <div className='stake-card d-flex flex-column py-4'>
                        <div className='item-title d-flex'>
                            <img src={cardIcon3} className='item-icon sepia align-self-center' width={34}/>
                            <h5 className='px-4 font-font-OpenSansSemiBold'>Portfolio XRP</h5>
                        </div>
                        <div className='px-3 py-3'>
                            <p className='font-OpenSansRegular text-gray fs-14'>SwapSpace has been a trusted exchange partner of Hive. Our community members enjoy the reliable service</p>
                            <h6 className='text-white font-OpenSansRegular d-flex justify-content-between'><div>XRP Balance:</div> <div>{localStorage.getItem('balance')} XRP</div></h6>
                            <h6 className='text-white font-OpenSansRegular d-flex justify-content-between'><div>BNB Balance:</div> <div>0</div></h6>
                        </div>
                        <hr className='text-gray'/>

                        <div className='text-white pt-3'>
                            <div className='d-flex justify-content-between'>
                                <div className='title-color pt-0 font-OpenSansSemiBold'>APR:</div>
                                <div className='d-flex'>
                                    <span className='pl-2 font-OpenSansBold'>218.13%</span>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='title-color pt-0 font-OpenSansSemiBold'>Your Stake (10^6):</div>
                                <div className='d-flex'>
                                    <span className='pl-2 font-OpenSansBold'>{localStorage.getItem('stakeAmount')} <p>0$</p></span>
                                </div>
                            </div>
                        </div>                         
                    </div>
                </div>
            </div>
            <Footer /> 
        </>
    )
}

export default Portfolio;
