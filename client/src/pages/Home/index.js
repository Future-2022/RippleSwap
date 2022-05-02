import React, { useState, useEffect, useHistory } from 'react';
import { FaAlignJustify, FaHome, FaTractor, FaBabyCarriage, FaSteam, FaOutdent,
         FaShareSquare, FaTwitter, FaArrowRight, FaAlignRight, FaClosedCaptioning, FaExternalLinkAlt, FaTimes, FaQuestion, FaQuestionCircle, FaArrowLeft, FaWhatsappSquare, FaExchangeAlt, FaAddressBook, FaPlus, FaTransgender, FaFileContract, FaStar, FaFacebook, FaAngleDoubleRight} from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Navbar from '../../components/NavBar';
import './index.css';
// import TradeViewChart from 'react-crypto-chart';

import coinBack from '../../img/coin-back.webp';
import Chart from '../../pages/Chart';
import icon1 from '../../img/icons/1.svg';
import icon2 from '../../img/icons/2.svg';
import icon3 from '../../img/icons/3.svg';
import icon4 from '../../img/icons/4.svg';
import icon5 from '../../img/icons/5.svg';
import icon6 from '../../img/icons/6.svg';

import expIcon1 from '../../img/icons/7.svg';
import expIcon2 from '../../img/icons/8.svg';
import expIcon3 from '../../img/icons/9.svg';
import expIcon4 from '../../img/icons/10.svg';

import SwapCard from './SwapCard';
import Header from './Header';
import Footer from './Footer';
import ItemCard from './ItemCard';

const Home = (props) => {
    const [openItem, setOpenItem] = useState(0);  

    return (
        <>
            <div className='main-body'>
                <div className='p-main'>
                    
                    <Header/>
                    <div className='text-white d-flex'>
                        <FaArrowLeft className='text-main-color align-self-center'/>
                        <span className='pl-3 align-self-center fs-19'>ALL Coins</span>
                    </div>

                    <div className='d-flex text-white pt-3'>
                        <SwapCard />
                        <div className='main-title'>
                            <div><h1>Exchage XRP</h1></div>
                            <div>
                                <p className='text-gray'>
                                    If you're looking to swap XRP, SwapSpace is your one-stop-shop. We have some light reading for you - in case you'd want a refresher on what is XRP or some fresh information about xrp’s price movements. And, of course, we provide you with the multiple XRP exchange options so that you can choose the offer with the best rates and lowest XRP fees, as well as other parameters that suit you.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src={coinBack} />
                        </div>
                    </div>

                    <div className='text-white pt-4'>
                        <div><h4 className='font-OpenSansRegular'>XRP Status</h4></div>
                        <div className='d-flex px-3 pt-2'>
                            <div className='long-bar px-4 py-3 fs-18'>
                                <p className='text-gray'>To help you make a decision about exchanging your XRP, we gathered some cold hard numbers: XRP price chart and other stats, such as XRP market cap.</p>
                            </div>
                        </div>
                        <div className='d-flex px-5 pt-4 flex-sm-wrap'>
                            <div className='w-3 d-flex'>
                                <div><img src={icon1} width={75} /></div>
                                <div className='pl-4 align-self-center'>
                                    <div className='cum-red pb-0'>24H HIGH</div>
                                    <div><h4 className='font-OpenSansSemiBold'>$0.647</h4></div>
                                </div>
                            </div>
                            <div className='w-3 d-flex'>
                                <div><img src={icon2} width={75} /></div>
                                <div className='pl-4 align-self-center'>
                                    <div className='cum-red pb-0'>XRP MARKET CAP</div>
                                    <div><h4 className='font-OpenSansSemiBold'>$60,523,701,582.931</h4></div>
                                </div>
                            </div>
                            <div className='w-3 d-flex'>
                                <div><img src={icon3} width={75} /></div>
                                <div className='pl-4 align-self-center'>
                                    <div className='cum-red pb-0'>CIRCULATING SUPPLY</div>
                                    <div><h4 className='font-OpenSansSemiBold'>99,989,594,553 XRP</h4></div>
                                </div>
                            </div>

                            <div className='w-3 d-flex pt-3'>
                                <div><img src={icon4} width={75} /></div>
                                <div className='pl-4 align-self-center'>
                                    <div className='cum-red pb-0'>24H LOW</div>
                                    <div><h4 className='font-OpenSansSemiBold'>$0.5994</h4></div>
                                </div>
                            </div>
                            <div className='w-3 d-flex pt-3'>
                                <div><img src={icon5} width={75} /></div>
                                <div className='pl-4 align-self-center'>
                                    <div className='cum-red pb-0'>XRP PRICE</div>
                                    <div><h4 className='font-OpenSansSemiBold'>$0.6053</h4></div>
                                </div>
                            </div>
                            <div className='w-3 d-flex pt-3'>
                                <div><img src={icon6} width={75} /></div>
                                <div className='pl-4 align-self-center'>
                                    <div className='cum-red pb-0'>24H VOLUME</div>
                                    <div><h4 className='font-OpenSansSemiBold'>$84,011,634.908</h4></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ItemCard />

                    <div className='text-white pt-4'>
                        <div><h4 className='font-OpenSansRegular'>XRP Price Chat</h4></div>
                            <p className='text-gray'>
                                Here you can see the current price of XRP, as well as XRP price history.
                            </p>
                        <div className='xrp-chart'>
                            <p className='pt-4 pl-4'>xrp/USDT</p>
                            <div className='pl-5'><Chart coinType='ripple' coinName='Ripple' /></div>
                        </div>
                    </div>

                    <div className='text-white pt-4'>
                        <div className='w-25'><h4 className='font-OpenSansRegular line-height-4'>A Simple Way To Exchange XRP Here At SwapSpace</h4></div>
                        <div className='pt-4'>
                            <div className='d-flex'>
                                <div><img src={expIcon1} width={75} /></div>
                                <div className='pl-4 align-self-center'>
                                    <div className='cum-red pb-0'>STEP 1</div>
                                    <div><h5 className='font-OpenSansSemiBold'>Choose pair</h5></div>
                                </div>
                            </div>
                            <p className='text-gray w-50'>Choose the cryptocurrencies you would like to exchange among more than 800 coins and tokens. Pick them from drop-down menus. Type the number of coins you want to swap.</p>
                        </div>
                        <div className='pt-4'>
                            <div className='d-flex'>
                                <div><img src={expIcon2} width={75} /></div>
                                <div className='pl-4 align-self-center'>
                                    <div className='cum-red pb-0'>STEP 2</div>
                                    <div><h5 className='font-OpenSansSemiBold'>Select the best rate</h5></div>
                                </div>
                            </div>
                            <p className='text-gray w-50'>You choose the rate – we do the magic! Pick up the exchange service by the rate which meets your requirements. Make sure you are okay with the selected service network fee and privacy policy: some of them require you to pass the AML/KYC procedure.</p>
                        </div>
                        <div className='pt-4'>
                            <div className='d-flex'>
                                <div><img src={expIcon3} width={75} /></div>
                                <div className='pl-4 align-self-center'>
                                    <div className='cum-red pb-0'>STEP 3</div>
                                    <div><h5 className='font-OpenSansSemiBold'>Transfer funds</h5></div>
                                </div>
                            </div>
                            <p className='text-gray w-50'>Send the exact amount to the address provided and receive the crypto in your wallet within minutes. Don’t have a wallet yet? Our support will recommend a good one!</p>
                        </div>
                        <div className='pt-4'>
                            <div className='d-flex'>
                                <div><img src={expIcon4} width={75} /></div>
                                <div className='pl-4 align-self-center'>
                                    <div className='cum-red pb-0'>STEP 4</div>
                                    <div><h5 className='font-OpenSansSemiBold'>Receive your coins</h5></div>
                                </div>
                            </div>
                            <p className='text-gray w-50'>You’ll get your coins in a few minutes! The exact time is a subject of various parameters such as blockchain network workload, transaction volume, our partners’ processing speed, etc. Concerned about your transaction? Check the swap tracker or feel free to contact the support: <a href='safemoonswap.app' className='text-white'>support@swapspace.co.</a></p>
                        </div>
                    </div>

                    <div className='text-white pt-4'>
                        <div><h4 className='font-OpenSansRegular'>Frequently Asked Questions</h4></div>

                        <div className='QA my-3 cursor-pointer'>
                            <div className='d-flex justify-content-between' onClick={() => {if(openItem == 1) {setOpenItem(0)} else setOpenItem(1)}}>
                                <h5 className='align-self-center fs-18 font-OpenSansRegular'>Will XRP go up?</h5>
                                <FaPlus className=' align-self-center' />
                            </div>
                            {openItem == 1 && (
                                <div className='text-gray'>Cryptocurrencies are volatile, so it’s hard to make an exact prognosis. However, you can read our XRP price prediction to see what the experts say in their xrp’s forecasts.</div>
                            )}
                        </div>
                        
                        <div className='QA my-3 cursor-pointer'>
                            <div className='d-flex justify-content-between' onClick={() => {if(openItem == 2) {setOpenItem(0)} else setOpenItem(2)}}>
                                <h5 className='align-self-center fs-18 font-OpenSansRegular'>Is XRP a good investment?</h5>
                                <FaPlus className=' align-self-center' />
                            </div>
                            {openItem == 2  && (
                                <div className='text-gray'>It depends on many parameters such as your goals, whether you consider holding XRP long-term or short-term, etc. You can also read the information here on SwapSpace to find out more about the XRP price dynamics in the past or - possibly - in the future to decide whether XRP is a good investment in 2022. However, you should always do your own research before making financial decisions.</div>
                            )}
                        </div>
                    </div>
                </div> 
                <Footer />        
            </div>         
        </>
    )
}

export default Home;
