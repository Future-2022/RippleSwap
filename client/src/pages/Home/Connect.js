import React, { useState, useEffect, useHistory } from 'react';
import coinBack from '../../img/coin-back.webp';
import $ from 'jquery';
import {deriveKeypair, xrpl} from 'xrpl';
import './index.css';
import {RippleAPI} from 'ripple-lib';
import * as Bip32 from "bip32";
import {mnemonicToSeed, validateMnemonic} from 'bip39';
import Keypairs from "ripple-keypairs";
import MyModal from '../../components/Modal';

const Connect = (props) => {

    const [openItem, setOpenItem] = useState(false);
    const [openModal, setOpenModal] = useState(false);  
    const [action, setAction] = useState(0);  
    const [pharse, setPharse] = useState('');  
    
    const api = new RippleAPI({
        server: 'wss://xrplcluster.com/' // XRP Test Net
    });

    const OpenMenu = () => {
        if(openItem == false) 
            setOpenItem(true);
        else 
            setOpenItem(false);
    }
    const bufferToHext = (buffer) => {
        return buffer.toString("hex").toUpperCase();
    }
    const LogOut = () => {
        let answer = window.confirm("Do you want to log out?");
        if(answer) {            
            localStorage.removeItem('login');
            localStorage.removeItem('address');
            localStorage.removeItem('balance');
            setOpenItem(false);
        }        
    }

    function run() {
        setOpenModal(true);
    }
    useEffect(() => {
        if(action !== 0) {
            alert("Connecting");
            connecting();
        }
    }, [action]);

    const connecting = async () => {
        await api.connect();
        const words = pharse;
        alert(words);
        let boolSeed = await validateMnemonic(words);
        if(boolSeed == true) {
            const Path = "m/44'/144'/0'/0/0";
            let seed = await mnemonicToSeed(words);
            const m = Bip32.fromSeed(seed);
            const Node = m.derivePath(Path);
            const publicKey = bufferToHext(Node.publicKey);
            const privateKey = bufferToHext(Node.privateKey);

            const Keypair = {
                publicKey: publicKey,
                privateKey: "00" + privateKey
            };
            const Address = Keypairs.deriveAddress(Keypair.publicKey);
            const info = await api.getAccountInfo(Address);
            localStorage.setItem('login', 'true');
            localStorage.setItem('address', Address);
            localStorage.setItem('balance', info['xrpBalance']);
            console.log('Done', info);
            
        }
    }
    return (   
        <div>     
            {localStorage.getItem('login') !== 'true' && (
                <div className='btn ml-4 text-white w-180' onClick={run}>Connect Wallet</div>
            )} 
            {localStorage.getItem('login') === 'true' && (
                <div>
                    <div className='btn ml-4 text-white w-180 position-relative' onClick={OpenMenu}>{ localStorage.getItem('address').substr(0,7)+'...'+localStorage.getItem('address').substr(-7,7)}</div>
                    {openItem == true && (
                        <div className='connect-btn-part ml-4 position-absolute'>
                            <div>Balance : {localStorage.getItem('balance')}</div>
                            <div onClick={LogOut}>Log Out</div>
                        </div>
                    )}                    
                </div>
            )} 
            <MyModal isOpen={openModal} action={setAction} propPharse={setPharse}/>                   
        </div>
    )
}

export default Connect;
