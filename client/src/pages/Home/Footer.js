import React, { useState, useEffect, useHistory } from 'react';
import { FaAlignJustify, FaHome, FaTractor, FaBabyCarriage, FaSteam, FaOutdent,
    FaShareSquare, FaTwitter, FaArrowRight, FaAlignRight, FaClosedCaptioning, FaExternalLinkAlt, FaTimes, FaQuestion, FaQuestionCircle, FaArrowLeft, FaWhatsappSquare, FaExchangeAlt, FaAddressBook, FaPlus, FaTransgender, FaFileContract, FaStar, FaFacebook, FaAngleDoubleRight} from 'react-icons/fa';

const Footer = (props) => {

    return (
        <>              
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
                                    <p className='subscripe text-justify mr-40 font-OpenSansRegular fs-14'>SwapSpace provides you with a full spectrum of crypto exchange options to help you swap your crypto quickly and easily. We partner with top cryptocurrency exchanges to give you the ability to easily swap more than 800 cryptocurrencies and tokens with no limits or registration — all while keeping the highest standard of care for our customers.

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
                        <div className='align-self-center'><FaTwitter className='fs-24'/></div>
                        <div className='align-self-center'><FaFacebook className='fs-24'/></div>
                        <div className='align-self-center'><FaExchangeAlt className='fs-24'/></div>
                        <div className='align-self-center'><FaHome className='fs-24'/></div>
                        <div className='align-self-center'><FaClosedCaptioning className='fs-24'/></div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Footer;
