import React, { useState, useEffect } from 'react';
import coinBack from '../../img/coin-back.webp';
import { Link, useHistory } from 'react-router-dom';
import $ from 'jquery';
import { FaArrowDown, FaExchangeAlt, FaSearch } from 'react-icons/fa';
import './index.css';

const SwapCard = (props) => {

    const history = useHistory();
    const [itemOpen, setItemOpen] = useState(false);
    const [xrpValue, setXRPValue] = useState(0.1);
    const [tokenValue, setTokenValue] = useState(0.1);
    const [coinList, setCoinList] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [allCoin, setAllCoin] = useState([]);

    const OpenItem = () => {
        if(itemOpen == false) {
            setItemOpen(true);
        } else {
            setItemOpen(false);
        }
    }

    const ItemSelect = (key) => {
        setSelectedItem(coinList[key]['symbol']);
        CalculateTokenValue(key);
        setItemOpen(false);
    }

    const SearchCoin = (e) => {
        console.log(e.target.value);
        const searchItem = allCoin.filter((item) => 
            item['symbol'].indexOf(e.target.value) >= 0 || item['name'].toLowerCase().indexOf(e.target.value) >= 0 
        );
        setCoinList(searchItem);
    }

    const CalculateTokenValue = (key) => {
        var tokenPrice = 0;
        var xrpPrice = 0;
        window.setTimeout(function() {
            $.ajax({
                url: `https://api.binance.com/api/v3/avgPrice?symbol=${coinList[key]['symbol'].toUpperCase()}USDT`,
                dataType:'json',
                method: "GET",
                success: function(response) {
                    tokenPrice = response['price'];
                }
            });
        }, 100);
        window.setTimeout(function() {
            $.ajax({
                url: "https://api.binance.com/api/v3/avgPrice?symbol=XRPUSDT",  
                dataType:'json',
                method: "GET",
                success: function(response) {
                    xrpPrice = response['price'];
                    setTokenValue(xrpValue * tokenPrice / xrpPrice);
                }
            });
        }, 100);
    }

    useEffect(() => {
        window.setTimeout(function() {
            $.ajax({
                url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc",                
                headers: { 
                    'content-type': 'application/json'
                },
                dataType:'json',
                method: "GET",
                success: function(response) {
                    console.log(response);
                    setCoinList(response);
                    setAllCoin(response);
                    setSelectedItem(response[0]['symbol']);
                }
            });
        }, 100);
    }, []);
    useEffect(() => {
        var tokenPrice = 0;
        var xrpPrice = 0;
        window.setTimeout(function() {
            $.ajax({
                url: `https://api.binance.com/api/v3/avgPrice?symbol=${selectedItem.toUpperCase()}USDT`,
                dataType:'json',
                method: "GET",
                success: function(response) {
                    tokenPrice = response['price'];
                }
            });
        }, 300);
        window.setTimeout(function() {
            $.ajax({
                url: "https://api.binance.com/api/v3/avgPrice?symbol=XRPUSDT",  
                dataType:'json',
                method: "GET",
                success: function(response) {
                    xrpPrice = response['price'];
                    console.log('xrpPrice------', xrpPrice);
                    console.log('tokenPrice-----', tokenPrice);
                    setTokenValue( xrpValue * xrpPrice / tokenPrice);
                }
            });
        }, 300);
    }, [xrpValue]);

    const viewOfferPage = () => {
        history.push('/viewOfferPage');
    }

    return (
        <div className='swap-card'>
            <div className='py-3 px-4'>
                <div>
                    <div><p className='mb-1'>You send</p></div>
                    <div className='d-flex'>                    
                        <input type='text' className='input-form' value={xrpValue} onChange={(e) => setXRPValue(e.target.value)}/>
                        <div className='select-form'><span className='line-text'>|</span></div>
                        <div className='select'>
                            <div className='d-flex pt-2 pl-4 justify-content-between cursor-pointer'><div className='align-self-center uppercase text-gray'> XRP </div> </div>                            
                        </div>
                    </div>
                </div>
                <div className='pull-right pt-2'><FaExchangeAlt className='inline-block mr-2'/></div>
                <div>
                    <div><p className='mb-1'>You send</p></div>
                    <div className='d-flex'>                    
                        <input type='text' disabled className='input-form text-gray' value={tokenValue}/>
                        <div className='select-form'><span className='line-text'>|</span></div>
                        <div className='select'>
                            <div className='d-flex pt-2 pl-4 justify-content-between cursor-pointer' onClick={() => OpenItem()}><div className='align-self-center uppercase'> {selectedItem} </div> <FaArrowDown  className='align-self-center pt-1'/></div>
                            {itemOpen && (
                                <div className='select-part'>
                                    <hr className=' hr-grey m-0 pt-0'/>
                                    <div className='text-center pt-1 d-flex'><input type='text' className='search ml-2' onChange={(v) => SearchCoin(v)} /> <FaSearch className='absolute search-icon mt-2' /></div>
                                    <div className='select-main-part'>
                                        {coinList.map((item, key) => {
                                            return <div className='sel-item pl-4 py-2 uppercase d-flex justify-content-between' onClick={() => ItemSelect(key)}> <div>{item['symbol']}</div> <div className='coin-name pr-1 pt-1'>{item['name']}</div></div>
                                        })}
                                    </div>                                   
                                </div>
                            )}


                        </div>
                    </div>
                </div>                
                <div className='pt-4'><div className='offer-btn' onClick={() => viewOfferPage()}>VIEW OFFERS</div></div>
            </div>
        </div>
    )
}

export default SwapCard;
