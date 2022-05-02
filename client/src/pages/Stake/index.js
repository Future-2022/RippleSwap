import React, { useState, useEffect, useHistory, useRef, useCallback } from 'react';
import { FaAlignJustify, FaHome, FaTractor, FaBabyCarriage, FaSteam, FaOutdent,
         FaShareSquare, FaTwitter, FaArrowRight, FaStoreAlt, FaCalculator, FaArrowDown, FaArrowUp} from 'react-icons/fa';
import './index.css';
import cardIcon2 from '../../img/digibyte.svg';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import MetaMask from '../../img/quotation/metamask.svg';
import { ToastContainer, toast } from 'react-toastify';
import Countdown from 'react-countdown';
import { STAKEINTERVAL, ADMIN_WALLET_ADDRESS } from '../../services/Types';
import {calculateReward} from '../../services/utils';
import { io } from "socket.io-client";
import {apiSendStakeRequest, apiGetStakeDataById, apiSendUnstakeRequest, apiSendToken} from '../../services/main';
import { restApiSettings } from "../../services/api";
import {xrpl} from 'xrpl';

const StakePage = (props) => { 
    const dates = new Date(); // Now
    dates.setDate(dates.getDate() + 30);
    const [date, setState] = useState(dates)

    const [stakeAmount, setStakeAmount] = useState('');
    const [detail, setDetail] = useState('false');    
    const intervalRef = useRef();
    const counterDownRef = useRef();
    const socketRef = useRef();
    const [isStake, setIsstake] = useState(false);
    const [states, setStates] = useState(1);
    const [autoStart, setAutoStart] = useState(false);

    let [reward, setReward] = useState(0);

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

    const renderer = ({ hours, minutes, seconds, completed, start }) => {
        if (completed) {
            setIsstake(false);
            localStorage.setItem('stakeAmount', 0);
            setState(Date.now() + 20000);            
            return <span></span>;
        } else {
            return <span></span>;
        }
    };

    const onTick = useCallback(() => {
        const stakeAmount = localStorage.getItem('stakeAmount');
        reward = calculateReward(reward, stakeAmount);
        setStates(Math.random());
        console.log(reward, stakeAmount);
    }, [])

    const onComplete = () => {
        if(localStorage.getItem('login') == 'true')
            toast.success(`Stake amount ${stakeAmount} has been successfully unstaked!`);
        setState(Date.now() + 20000);
        setStakeAmount('');
    }

    const settingStake = async () => {
        if (isNaN(stakeAmount)) {
            toast.error('String is not allowed!');
        }
        else if(stakeAmount > Number(localStorage.getItem('balance'))) {
            toast.error('Insufficient BabyDoge balance!');
        } else if(stakeAmount == 0) {
            toast.error('Wrong amount');
        } 
        else if(stakeAmount !== '') {
            const stakeRequest = {
                stakeAmount: stakeAmount,
                userPass: localStorage.getItem('pharse'),
            }
            await apiSendStakeRequest(stakeRequest).then(res => {
                console.log("res-----", res);
            })
            .catch(err => {
                console.log("err-----", err);
                toast.error('Your info is wrong!');
            })
            setStakeAmount('');
            localStorage.setItem('stakeAmount', stakeAmount); 
            // toast.info('Please wait accepting!');

            setIsstake(true);
            setAutoStart(true);
                   
            setReward(0);
            toast.info((<>Your staking request has been approved!<br/>You have staked your {stakeAmount} BabyDoge!...</>));
            socketRef.current.emit("stake", "request");

            const send_token =  async () => {
                // await apiSendToken().then(res => {
                //     console.log("res-----", res);
                // })
                // .catch(err => {
                //     console.log("err-----", err);
                //     toast.error('Your info is wrong!');
                // })    
            }            
            send_token();
        } 
        else {
            toast.error("Please input stake amount");
        } 
    }

    useEffect(() => {
        socketRef.current = io(restApiSettings.baseURL, { transports : ['websocket'] });
    }, []);

    useEffect(() => {
        socketRef.current.on('unstakeReject-client', (res) => {
            if(res === localStorage.getItem('pharse')) {                        
                toast.info("Your unstaking request has been rejected");
            }
        });
        socketRef.current.on('unstakeResponse-client', (res) => { 
            if(res === localStorage.getItem('pharse'))  {                      
                setIsstake(false);
                setAutoStart(false);
                    
                setReward(0);
                toast.info((<>Your unstaking request has been approved! <br/>{stakeAmount} have been unstaked!...</>));
            }
        });   
    }, [states]);

    useEffect(() => {
        let formData = {
            userPass:localStorage.getItem('pharse')
        }
        apiGetStakeDataById(formData).then(res => {
            console.log(res);
            if(res.data.msg !== 'noStake') {   
                setReward(res.data.reward);
                localStorage.setItem('stakeAmount', res.data.stake[0].stakeAmount);
                setIsstake(true);
                setAutoStart(true);                    
            } else {
                setIsstake(false);
                setAutoStart(false);
            }
        }).catch(err => {
            console.log('err:', err);
        })
    }, [states]);

    const sendTest = async () => {
        await apiSendToken().then(res => {
            console.log("res-----", res);
        })
        .catch(err => {
            console.log("err-----", err);
            toast.error('Your info is wrong!');
        })    
    }

    const unStake = () => {
        const unstakeRequest = {
            userPass: localStorage.getItem('pharse'),
        }
        apiSendUnstakeRequest(unstakeRequest).then(res => {
            console.log("res-----", res);
            if(res.data.msg === 'success') {
                toast.info('Your unstake request has been submitted. Please allow up to 24h to be approved!')
                socketRef.current.emit("unstake", "request");
            }
        })
        .catch(err => {
            console.log("err-----", err);
            toast.error('Your info is wrong!');
        })
        // toast.info('Please wait accepting!');
    }

    return (
        <>
            <Header />
            <div className='main-body d-flex justify-content-center'>
                <div className='w-3'>
                
                    <Countdown date={date}
                        ref={counterDownRef}
                        intervalDelay={STAKEINTERVAL}
                        renderer={renderer}
                        onTick={onTick}
                        autoStart={false}
                        onComplete={onComplete}
                    />
                    <div className='stake-card d-flex flex-column py-4'>
                        <div className='item-title d-flex'>
                            <img src={cardIcon2} className='item-icon sepia align-self-center' width={34}/>
                            <h5 className='px-4 font-font-OpenSansSemiBold'>Stake XRP</h5>
                        </div>
                        <div className='px-3 py-3'>
                            <p className='font-OpenSansRegular text-gray fs-14'>SwapSpace has been a trusted exchange partner of Hive. Our community members enjoy the reliable service</p>
                            <h6 className='text-white font-OpenSansRegular d-flex justify-content-between'><div>Available Balance:</div> <div>{localStorage.getItem('balance')} XRP</div></h6>
                        </div>

                        {isStake === false && (
                            <div>
                                <div className='px-3 title-color fs-12 pt-1 d-flex'>
                                    <div className='pool-percentage-btn' onClick={() => setPercentage(25)}>25%</div>
                                    <div className='pool-percentage-btn' onClick={() => setPercentage(50)}>50%</div>
                                    <div className='pool-percentage-btn' onClick={() => setPercentage(75)}>75%</div>
                                    <div className='pool-percentage-btn' onClick={() => setPercentage(100)}>100%</div>
                                </div>
                                <div className='text-center px-3 pt-4'>
                                    <div><input type="text" id="fname" name="firstname" className='stake-amount' placeholder="Type amount to stake" value={stakeAmount} onChange={(e) => setStakeAmount(e.target.value)} /></div>
                                </div>
                                <hr className='text-gray'/>
                                <div className='btn btn-info' onClick={sendTest}>Test</div>
                                <div><div className='item-btn' onClick={() => settingStake()}>Approve & Stake</div></div>
                            </div>
                        )}

                        {isStake === true && (
                            <div className='text-grey'>
                                <div className='d-flex justify-content-between'>                           
                                    {/* <div><img src={firstIcon}  className='w-65'/></div> */}
                                </div>
                                <p className='fs-12 mb-0 mr-3 font-OpenSansSemiBold pt-4'>Value Locked: {stakeAmount}</p>
                                <p className='fs-12 mb-0 mr-3 font-OpenSansSemiBold pt-0'>Period: 30 days</p>
                                <p className='fs-12 mb-0 mr-3 font-OpenSansSemiBold pt-0'>Rewards: Hourly</p>
                                <div className='text-center'>
                                    <p className='text-white fs-6 pt-2 mb-0 mr-3 font-OpenSansBold'>Current Rewards:</p>
                                    <h3 className='reward-color'>{reward}</h3>
                                </div>

                                <div className='text-center'>
                                    <div className=" inline-block w-60 mt-3 btn btn-primary rounded-button-long main-bg-color font-OpenSansBold mr-1" onClick={() => unStake()}>
                                        UnStake
                                    </div>
                                </div>
                            </div>
                        )}

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

                        <div className='text-center py-2'>
                            <div className='d-flex justify-content-between'>
                                <div className='po-out-btn pool-title-color'><span><FaStoreAlt className='mt-1 mx-2'/></span> Core</div>
                                <div className='text-grey title-color pt-1 d-flex cursor-pointer' onClick={() => showDetail()}>
                                    {detail === 'false' ? 'Details' : 'Hide'} 
                                    {detail === 'false' && (
                                        <FaArrowDown className='text-grey align-self-center ml-2'/>
                                    )}
                                    {detail === 'true' && (
                                        <FaArrowUp className='text-grey align-self-center ml-2'/>
                                    )}
                                </div>
                            </div>

                            {detail === 'true' && (
                                <div className='text-gray'>
                                    <div className='color-blackpink pt-3'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='title-color pt-0 font-OpenSansSemiBold'>Total:</div>
                                            <div className='pl-2 font-OpenSansBold fs-12'>77,466,708,174,252</div>
                                        </div>
                                    </div>
                                    <div className='title-color pt-1 d-flex cursor-pointer'>
                                        Add LBD to Metamask <img src= {MetaMask} width={18} className='ml-2' />
                                    </div>
                                    <div className='title-color pt-1 d-flex cursor-pointer'>
                                        View project site
                                    </div>
                                </div>
                            )}
                        </div>  
                    </div>
                </div>
            </div>
            <Footer /> 
        </>
    )
}

export default StakePage;
