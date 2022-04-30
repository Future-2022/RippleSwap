import React, { useState, useEffect, useHistory } from 'react';
import { FaAlignJustify, FaHome, FaTractor, FaBabyCarriage, FaSteam, FaOutdent,
         FaShareSquare, FaTwitter, FaArrowRight, FaAlignRight, FaClosedCaptioning, FaExternalLinkAlt, FaTimes, FaQuestion, FaQuestionCircle, FaArrowLeft, FaWhatsappSquare, FaExchangeAlt, FaAddressBook, FaPlus, FaTransgender, FaFileContract, FaStar, FaFacebook, FaAngleDoubleRight} from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Navbar from '../../components/NavBar';
import './index.css';
// import TradeViewChart from 'react-crypto-chart';
import mainLogo from '../../img/icons/main-logo.svg';
import coinBack from '../../img/coin-back.webp';
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

import footerImg from '../../img/footer-back.webp';

// import $ from 'jquery';

const Home = (props) => {
    
    // const [openModal, setOpenModal] = useState(false);    
    // const [openCheck, setOpenChecked] = useState('close');    
    // const [login, setLogin] = useState(false);    
    // const [bnbPrice, setBNBPrice] = useState(0);    
    // const [babydogePrice, setBabydogePrice] = useState(0);    
    
    // const openChecked = (status) => {
    //     setOpenChecked(status);
    // }
    
    // const OpenModal = () => {
    //     if(openModal === false)
    //         setOpenModal(true)
    //     else
    //         setOpenModal(false);
    // }
    // useEffect(() => {
    //     const formData = {
    //         'currency':"USD",
    //         'code':"BABYDOGE",
    //         'meta':true
    //     }
    //     window.setTimeout(function() {
    //         $.ajax({
    //           url: "https://api.binance.com/api/v3/avgPrice?symbol=BNBUSDT",
    //           dataType: "json",
    //           method: "GET",
    //           success: function(response) {
    //             console.log(response);
    //             setBNBPrice(response.price);
    //           }
    //         });
    //         $.ajax({
    //             url: "https://api.livecoinwatch.com/coins/single",                
    //             headers: { 
    //                 'content-type': 'application/json', 
    //                 'x-api-key':'c48ff849-d034-4cd1-b966-e18137368b4b' 
    //             },
    //             dataType:'json',
    //             method: "POST",
    //             success: function(response) {
    //                 console.log(response.rate);
    //                 setBabydogePrice(response.rate);
    //             },              
    //             data: JSON.stringify(formData)
    //         });
    //       }, 100);
    // }, []);

    return (
        <>
            <div className='main-body'>
                <div className='p-main'>
                    <div className='d-flex justify-content-between py-3'>
                        <div>
                            <img src={mainLogo} width={210} height={150} />
                        </div>
                        <div className='d-flex text-white'>
                            <div className='px-2'>How do it works</div>
                            <div className='px-2'>About</div>
                            <div className='px-2'>FAQ</div>
                        </div>
                    </div>

                    <div className='text-white d-flex'>
                        <FaArrowLeft className='text-main-color align-self-center'/>
                        <span className='pl-3 align-self-center fs-19'>ALL Coins</span>
                    </div>

                    <div className='d-flex text-white pt-3'>
                        <div className='swap-card'>
                            <div className='py-3 px-4'>
                                <div>
                                    <div><p className='mb-1'>You send</p></div>
                                    <div className='d-flex'>
                                        <input type='text' className='input-form'/>
                                        <div className='select-form'><span className='line-text'>|</span></div>
                                        <div className='select'>
                                            <select className="get-type" name="getType">
                                                <option value="BTC">BTC</option>
                                                <option value="ETH">ETH</option>
                                                <option value="BNB">BNB</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='pull-right pt-2'><FaExchangeAlt className='inline-block mr-2'/></div>
                                <div>
                                    <div><p className='mb-1'>You send</p></div>
                                    <div className='d-flex'>
                                        <input type='text' disabled className='input-form text-gray' value={2352.34}/>
                                        <div className='select-form'><span className='line-text'>|</span></div>
                                        <div className='select'>
                                            <select className="get-type" name="getType">
                                                <option value="BTC">XRP</option>
                                                <option value="ETH">ETH</option>
                                                <option value="BNB">BNB</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-4'><div className='offer-btn'>VIEW OFFERS</div></div>
                            </div>
                        </div>

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

                    <div className='text-white'>
                        <div><h4 className='font-OpenSansRegular'>Swapspace Reviews</h4></div>
                        <div className='d-flex'>
                            <div className='w-3'>
                                <div className='item-card'>
                                    <div className='item-title d-flex'>
                                        <img src='images/asteroid.png' className='item-icon sepia align-self-center' width={34}/>
                                        <h5 className='px-4 font-font-OpenSansSemiBold align-self-center'>Farm XRP</h5>
                                    </div>
                                    <div className='px-3 py-3'>
                                        <p className='font-OpenSansRegular text-gray fs-14'>SwapSpace has been a trusted exchange partner of Hive. Our community members enjoy the reliable service</p>
                                    </div>
                                    <hr className='text-gray'/>
                                    <div><div className='item-btn'>Farm XRP</div></div>
                                </div>                                
                            </div>
                            <div className='w-3'>
                                <div className='item-card'>
                                    <div className='item-title d-flex'>
                                        <img src='images/star.png' className='item-icon sepia align-self-center' width={34}/>
                                        <h5 className='px-4 font-font-OpenSansSemiBold'>Stake XRP</h5>
                                    </div>
                                    <div className='px-3 py-3'>
                                        <p className='font-OpenSansRegular text-gray fs-14'>SwapSpace has been a trusted exchange partner of Hive. Our community members enjoy the reliable service</p>
                                    </div>
                                    <hr className='text-gray'/>
                                    <div><div className='item-btn'>Stake XRP</div></div>
                                </div>
                            </div>
                            <div className='w-3'>
                                <div className='item-card'>
                                    <div className='item-title d-flex'>
                                        <img src='images/telescope.png' className='item-icon sepia align-self-center' width={34}/>
                                        <h5 className='px-4 font-font-OpenSansSemiBold'>Portfolio</h5>
                                    </div>
                                    <div className='px-3 py-3'>
                                        <p className='font-OpenSansRegular text-gray fs-14'>SwapSpace has been a trusted exchange partner of Hive. Our community members enjoy the reliable service</p>
                                    </div>
                                    <hr className='text-gray'/>
                                    <div><div className='item-btn'>Portfolio</div></div>
                                </div>
                            </div>
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

                    <div className='text-white pt-4'>
                        <div><h4 className='font-OpenSansRegular'>XRP Price Chat</h4></div>
                            <p className='text-gray'>
                                Here you can see the current price of XRP, as well as XRP price history.
                            </p>
                        <div className='xrp-chart'>
                            <p className='p-4'>xrp/USDT</p>
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
                        <div className='QA d-flex justify-content-between my-3'>
                            <h5 className='align-self-center fs-18 font-OpenSansRegular'>Will XRP go up?</h5>
                            <FaPlus className=' align-self-center' />
                        </div>
                        <div className='QA d-flex justify-content-between my-3'>
                            <h5 className='align-self-center fs-18 font-OpenSansRegular'>Is XRP a good investment?</h5>
                            <FaPlus className=' align-self-center' />
                        </div>
                    </div>
                </div>

                <div className='footer text-white'>
                    <div className='footer-image pt-5'>
                        <div className='p-main'>
                            <div>                            
                                <div><h1>Wanna scroll to outer space?</h1></div>
                                <div><h4 className='font-OpenSansRegular'> Join our newsletter. Get back to Earth anytime.</h4></div>
                                <div className='d-flex pt-5'>
                                    <div><input type='text' className='contract-form' placeholder='Your Email Address' /></div>
                                    <div className='send-btn ml-2'><FaArrowRight className='line-block' /></div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    

                    <div>
                        <div className='p-main'>
                            <div className='d-flex'>                            
                                <div className='w-50'>
                                    <div><h4 className='font-OpenSansRegulars cum-yellow'>SwapSpace</h4></div>
                                    <div>
                                        <p className='subscripe text-justify mr-5 font-OpenSansRegular fs-14'>SwapSpace provides you with a full spectrum of crypto exchange options to help you swap your crypto quickly and easily. We partner with top cryptocurrency exchanges to give you the ability to easily swap more than 800 cryptocurrencies and tokens with no limits or registration — all while keeping the highest standard of care for our customers.

                                            Our highest priority is saving your time, which is why we did all the work for you. You only need to decide what cryptocurrency you want to swap — and then choose the best exchange option for you. As easy as pie!</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-around w-50'>
                                    <div>
                                        <h6 className='text-grey font-OpenSansRegular'>Supported coins</h6>
                                        <div><p className='mb-1'>Bitcoin</p></div>
                                        <div><p className='mb-1'>Ethereum</p></div>
                                        <div><p className='mb-1'>XRP</p></div>
                                        <div><p className='mb-1'>Litecoin</p></div>
                                        <div><p className='mb-1'>Dash</p></div>
                                        <div><p className='mb-1'>Dogecoin</p></div>
                                        <div><p className='mb-1 d-flex'>All coins <FaAngleDoubleRight className='align-self-center ml-2' /> </p></div>
                                    </div>
                                    <div>
                                        <h6 className='text-grey font-OpenSansRegular'>Company</h6>
                                        <div><p className='mb-1'>About</p></div>
                                        <div><p className='mb-1'>Blog</p></div>
                                        <div><p className='mb-1'>Contracts</p></div>
                                        <div><p className='mb-1'>Our Partners</p></div>
                                        <div><p className='mb-1'>Press About Us</p></div>
                                        <div><p className='mb-1'>Brand Assets</p></div>
                                    </div>
                                    <div>
                                        <h6 className='text-grey font-OpenSansRegular'>Info</h6>
                                        <div><p className='mb-1'>How It works</p></div>
                                        <div><p className='mb-1'>FAQ</p></div>
                                        <div><p className='mb-1'>Price Predictions</p></div>
                                        <div><p className='mb-1'>Bitcoin Halving</p></div>
                                        <div><p className='mb-1'>Exchange Pairs</p></div>
                                    </div>
                                    <div>
                                        <h6 className='text-grey font-OpenSansRegular'>For Partners</h6>
                                        <div><p className='mb-1'>Exchange Listing</p></div>
                                        <div><p className='mb-1'>Affiliate Program</p></div>
                                        <div className='d-flex'><p className='mb-1'>API Docs</p><FaExternalLinkAlt className='align-self-center ml-2'/></div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <hr className='text-grey'/>

                    <div>
                        <div className='p-main d-flex text-grey font-font-OpenSansRegular justify-content-around'>
                            <div>© 2019– 2022 SwapSpace Ltd. All rights reserved</div>
                            <div className='d-flex'>
                                <div className='px-1'>Terms of Use</div>
                                <div className='px-1'>Privacy Policy</div>
                            </div>
                            <div className='d-flex'>
                                <FaStar className='align-self-center'/> <span className='trust align-self-center pl-1'>TrustPilot</span>
                            </div>
                            <div><FaTwitter /></div>
                            <div><FaFacebook /></div>
                            <div><FaExchangeAlt /></div>
                            <div><FaHome /></div>
                            <div><FaClosedCaptioning /></div>
                        </div>
                    </div>
                </div>                

            </div>
            {/* <Navbar openChecked={openChecked} isLogin={setLogin}/>
            
            <div className={`${openCheck !== 'close' ? 'p-main-close':'p-main'}`}>
                <div className='d-flex upSide'>
                    <div><img src={panBg1} className="lbd-img"/></div>
                    <div className='text-center d-flex justify-content-between flex-column'>
                        <img src={upImage} className="main-image-title"/>
                        <p className='text-sm font-OpenSansSemiBold mb-0 under-text'>The #1 AMM and yield farm on Binance Smart Chain.</p>
                    </div>
                    <div><img src={panBg} className="lbd-img2"/></div>
                </div>
                <div className='d-flex medium-section justify-content-center flex-wrap'>
                    <div className='second-card1'>
                        <div className='card-main' style={{padding: '70px 30px'}}>
                            <div><h1 className='font-OpenSansBold card-main-title'>Farms & Staking</h1></div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <div><img src={logo_short}  className='w-24-2'/></div>
                                    <div>
                                        <p className='title-color'>Staked BabyDoge:</p>
                                        <p className='mb-0 text-grey-stake-balance'>Staked: <span className='text-pink'>{localStorage.getItem('stakeAmount')}</span></p>
                                    </div>
                                    <div>
                                        <p className='title-color'>BabyDoge to Stake in million (10^6):</p>
                                        <p className='under-text mb-0'>Locked</p>
                                    </div>
                                </div>                                
                            </div>
                            <div className="w-100 align-self-center btn btn-primary rounded-button-long main-bg-color font-OpenSansBold mr-4 mt-5" onClick={() => OpenModal()}>
                                Unlock Wallet
                            </div>
                        </div>
                    </div>
                    <div className='second-card2'>
                        <div className='card-main' style={{height: '100%'}}>
                            <h4 className='font-OpenSansBold mb-0'>Earn up to</h4>
                            <h2 className='font-OpenSansBold mb-0 farm-num'><CountUp className='font-OpenSansBold' start={0} end={826} duration={1} />.21% APR</h2>
                            <h4 className='font-OpenSansBold mb-0'>in Farms</h4>
                            <div><FaArrowRight className='main-color right-icon'/></div>
                            <div className="d-flex justify-content-center" style={{height:'80%', flexWrap: 'wrap'}}>
                                <div className='mx-1' style={{width: '230px'}}>
                                    <p className='mb-0 mt-2 text-grey-stake-balance font-OpenSansBold'>
                                        BabyDoge: $ 
                                        <span className='text-pink'>
                                            {Number(babydogePrice).toFixed(11)}
                                        </span>
                                    </p>
                                    <Chart coinType='baby-doge-coin' coinName='BabyDoge'/>
                                </div>
                                <div className='mx-1' style={{width: '230px'}}>
                                    <p className='mb-0 mt-2 text-grey-stake-balance font-OpenSansBold'>
                                        BNB: $ 
                                        <span className='text-pink'>
                                            {Number(bnbPrice).toFixed(10)}
                                        </span>
                                    </p>
                                    <Chart coinType='binancecoin' coinName='Binance' />
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className='d-flex mt-5 justify-content-center flex-wrap'>
                    <div className='third-card1'>
                        <div className='card-main color-blackpink fs-12 d-flex flex-column justify-content-end'>
                            <h2 className='font-OpenSansBold mb-0 LBD-status'>LBD Status</h2>
                            <div className='d-flex justify-content-between pt-3'>
                                <p className='font-OpenSansBold mb-0'>Total LBD Supply</p>
                                <p className='mb-0'><CountUp className='font-OpenSansBold' start={0} end={851154292422656} duration={2} /></p>
                            </div>     
                            <div className='d-flex justify-content-between pt-1'>
                                <p className='font-OpenSansBold mb-0'>Total LBD Burned</p>
                                <p className='mb-0'><CountUp className='font-OpenSansBold' start={0} end={148845707577344} duration={2} /></p>
                            </div>   
                            <div className='d-flex justify-content-between pt-1'>
                                <p className='font-OpenSansBold mb-0'>Distributed LBD/block</p>
                                <p className='mb-0'><CountUp className='font-OpenSansBold' start={0} end={64300411} duration={2} /></p>
                            </div>                          
                        </div>                        
                    </div>
                    <div className='third-card2'>
                        <div className='card-main d-flex flex-column justify-content-end h-100'>
                            <h4 className='font-OpenSansBold mb-0 Total-value pb-3'>Total Value Locked (TVL)</h4>
                            <h2 className='font-OpenSansBold mb-0 LBD-status pb-1'>$<CountUp className='font-OpenSansBold' start={0} end={295190} duration={2} /></h2>
                            <h4 className='font-OpenSansBold mb-0 title-color pb-4 pt-0'>Across all farms and pools</h4>
                        </div>                        
                    </div>
                </div>
            </div>
            <MyModal isOpen={openModal}/>             */}
        </>
    )
}

export default Home;
