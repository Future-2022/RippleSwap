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
                        <div className='d-flex flex-wrap justify-content-center'>                            
                            <div className='w-50 min-267 '>
                                <div><h4 className='font-OpenSansRegulars cum-yellow'>SwapSpace</h4></div>
                                <div>
                                    <p className='subscripe text-justify mx-4 font-OpenSansRegular fs-14'>SwapSpace provides you with a full spectrum of crypto exchange options to help you swap your crypto quickly and easily. We partner with top cryptocurrency exchanges to give you the ability to easily swap more than 800 cryptocurrencies and tokens with no limits or registration — all while keeping the highest standard of care for our customers.

                                        Our highest priority is saving your time, which is why we did all the work for you. You only need to decide what cryptocurrency you want to swap — and then choose the best exchange option for you. As easy as pie!</p>
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
