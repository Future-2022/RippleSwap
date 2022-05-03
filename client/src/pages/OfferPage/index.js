import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowDown, FaExchangeAlt, FaKey, FaQuestionCircle, FaSearch } from 'react-icons/fa';
import MultiSlider, { Progress } from 'react-multi-bar-slider';
import ReactStars from "react-rating-stars-component";
import './index.css';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import $ from 'jquery';
import StarRatings from 'react-star-ratings';

const addingItem = [
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 3.4},
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 5},
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 4.7},
    {rating:'2343.23', ratio: 3},
    {rating:'3645.42', ratio: 3},
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 3},
    {rating:'1830.23', ratio: 2.3},
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 3},
    {rating:'2343.23', ratio: 3},
];

const urlItem = [
    {name:'simpleswap', url: 'https://simpleswap.io'},
    {name:'simpleswap', url: 'https://simpleswap.io'},
    {name:'stealthex', url: 'https://stealthex.io'},
    {name:'stealthex', url: 'https://stealthex.io'},
    {name:'godex', url: 'https://godex.io'},
    {name:'changenow', url:'https://changenow.io'},
    {name:'changenow', url:'https://changenow.io'},
    {name:'changelly', url: 'https://changelly.com/'},
    {name:'changelly', url: 'https://changelly.com/'},
    {name:'instaswap', url: 'https://instaswap.io/'},
    {name:'exolix', url: 'https://exolix.com/'},
    {name:'exolix', url: 'https://exolix.com/'},
    {name:'fixedfloat', url: 'https://fixedfloat.com/en/'},
    {name:'switchain', url: 'https://www.switchain.com/'},
    {name:'changehero', url: 'https://changehero.io/'},
    {name:'changehero', url: 'https://changehero.io/'},
    {name:'binance', url: 2.3},
    {name:'letsexchange', url: 3},
    {name:'letsexchange', url: 3},
    {name:'mercuryo', url: 3},
    {name:'alfacash', url: 3},
    {name:'swapuz', url: 3},
    {name:'swapuz', url: 3},
    {name:'kucoin', url: 3},
    {name:'quickex', url: 3},
];

const OfferPage = (props) => {
    const history = useHistory();
    const [itemOpen, setItemOpen] = useState(false);
    const [xrpValue, setXRPValue] = useState(0.1);
    const [tokenValue, setTokenValue] = useState(0.1);
    const [coinList, setCoinList] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [allCoin, setAllCoin] = useState([]);
    const [swapList, setSwapList] = useState([]);

    const OpenItem = () => {
        if(itemOpen == false) {
            setItemOpen(true);
        } else {
            setItemOpen(false);
        }
    }

    const ItemSelect = (key) => {        
        setSelectedItem(coinList[key]['symbol']);
        console.log(coinList[key]['symbol']);
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
                    console.log('xrpPrice---', xrpPrice);
                    console.log('tokenPrice---', tokenPrice);
                    setTokenValue(xrpValue * xrpPrice / tokenPrice);
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
        if(selectedItem) {
            window.setTimeout(function() {
                $.ajax({
                    url: `https://api.swapspace.co/api/v2/amounts?fromCurrency=${selectedItem}&toCurrency=xrp&fromNetwork=${selectedItem}&toNetwork=xrp&amount=${xrpValue}`,                
                    headers: { 
                        'content-type': 'application/json',
                        'Authorization': 'bbe87887b031fa553dae003686840d47a85fb3a4ed6913149a5f97a655963e8dabd12b2d1405c33181'
                    },
                    dataType:'json',
                    method: "GET",
                    success: function(response) {
                        
                        const temp = [];
                        response.map(item => {
                            if(item['exists'] == true)
                                temp.push(item);
                        })
                        console.log('-----------------', temp);
                        setSwapList(temp);
                    }
                });
            }, 3000);
        }
    }, [selectedItem]);
    useEffect(() => {
        var tokenPrice = 0;
        var xrpPrice = 0;
        if(selectedItem) {
            window.setTimeout(function() {
                $.ajax({
                    url: `https://api.binance.com/api/v3/avgPrice?symbol=${selectedItem.toUpperCase()}USDT`,
                    dataType:'json',
                    method: "GET",
                    success: function(response) {
                        tokenPrice = response['price'];
                    }
                });
            }, 100);
            console.log("e");
            window.setTimeout(function() {
                $.ajax({
                    url: "https://api.binance.com/api/v3/avgPrice?symbol=XRPUSDT",  
                    dataType:'json',
                    method: "GET",
                    success: function(response) {
                        xrpPrice = response['price'];
                        setTokenValue(xrpValue * xrpPrice / tokenPrice);
                    }
                });
            }, 100);
        }
    }, [selectedItem, xrpValue]);

    const sendExchange = (name) => {

    }

    return (
        <>
            <Header />
                <div className='d-flex main-body text-white p-main'>
                    <div className='w-400'>
                        <div className='swap-card h-240'>
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
                            </div>
                        </div>
                        <div>
                            <p className='text-gray pt-5'>SwapSpace provides you with exchange options from the swap services and exchanges we partner with. If our partners’ rules contain extra requirements, such as KYC procedure or floating rate, we obey them. Be careful and read the selected partner's terms before you start an exchange.</p>
                        </div>
                    </div>
                    <div className='w-75 pl-5 text-center'>
                        <div className='d-flex justify-content-center text-grey'>
                            <div className='w-250 border-bottom text-center c-border-bottom pb-3 d-flex nav-active justify-content-center'><div>Sort by rate</div> <FaQuestionCircle className='align-self-center ml-3'/></div>
                            <div className='w-250 border-bottom text-center c-border-bottom pb-3 d-flex justify-content-center'><div>Sort by ETA</div> <FaQuestionCircle className='align-self-center ml-3' /></div>
                        </div>
                        {swapList && swapList.map((item, key)=> {
                            if (key == 0) {
                                return <div className='d-flex justify-content-center text-center pt-4'>
                                    <div className='w-125 text-center'>
                                        <div>
                                            <p className='text-gray fs-12 mb-2 font-OpenSansRegular'>Rate</p>
                                            <h5 className='text-yellow text-left font-OpenSansSemiBold'>{addingItem[key]['rating']}</h5>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-gray fs-12 mb-2 font-OpenSansRegular'>Type</p>
                                            {item['fixed'] == true ? (<div className='d-flex font-OpenSansRegular'><FaKey className='mr-3'/> fixed</div>):(<div className='d-flex font-OpenSansRegular'>~ floating</div>)}
                                        </div>
                                    </div>
                                    <div className='w-125 text-center'>
                                        <div>
                                            <p className='text-gray fs-12 mb-2 font-OpenSansRegular'>ETA</p>
                                            <h6 className='text-left font-OpenSansSemiBold'>{item['duration']}min</h6>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-gray fs-12 mb-2 font-OpenSansRegular'>Support Rate</p>
                                            <div className='pt-3 pr-4'>
                                                <MultiSlider height={8}>
                                                    <Progress color="brown" progress={item['supportRate'] * 100 / 3} />
                                                </MultiSlider>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-125 text-center'>
                                        <div>
                                            <p className='text-gray fs-12 mb-2 font-OpenSansRegular'>Partner</p>
                                            <h6 className='text-left font-OpenSansSemiBold d-flex'><img src={`https://storage.swapspace.co/static/${item['partner']}-icon.png`} width={20} /><span className='pl-2'>{item['partner']}</span></h6>
                                        </div>
                                        <div className='pt-2 text-left'>
                                            <p className='text-gray fs-12 mb-2 font-OpenSansRegular'>Trust Score</p>

                                            <StarRatings
                                                rating={addingItem[key]['ratio']}
                                                starDimension="22px"
                                                starRatedColor="yellow"
                                                // changeRating={this.changeRating}
                                                numberOfStars={5}
                                                starSpacing="2px"
                                                name='rating'
                                            />

                                        </div>
                                    </div>
                                    <div className='w-125 text-center d-flex flex-column justify-content-end'>
                                        <div className='rate-badge align-self-end'><h6 className='font-OpenSansRegular fs-14 mb-0'>Best Rate</h6></div>
                                        <div className='btn btn-best-exchange mt-2 mb-2' onClick={() => sendExchange(item['partner'])}>Exchange</div>
                                    </div>                            
                                </div>
                            }
                            else {                         
                                    return <div className='d-flex justify-content-center text-center pt-4'>
                                        <div className='w-125 text-center'>
                                            <div>
                                                <p className='text-gray fs-12 mb-2 font-OpenSansRegular'>Rate</p>
                                                <h5 className='text-white text-left font-OpenSansSemiBold'>{addingItem[key]['rating']}</h5>
                                            </div>
                                            <div className='pt-2'>
                                                <p className='text-gray fs-12 mb-2 font-OpenSansRegular'>Type</p>
                                                <h6 className='text-white text-left font-OpenSansRegular'>
                                                    {item['fixed'] == true ? (<div className='d-flex font-OpenSansRegular'><FaKey className='mr-3'/> fixed</div>):(<div className='d-flex font-OpenSansRegular'>~ floating</div>)}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className='w-125 text-center'>
                                            <div>
                                                <p className='text-gray fs-12 mb-2 font-OpenSansRegular'>ETA</p>
                                                <h6 className='text-left font-OpenSansSemiBold'>
                                                    {item['duration']}min
                                                </h6>
                                            </div>
                                            <div className='pt-2'>
                                                <p className='text-gray fs-12 mb-2 font-OpenSansRegular'>Support Rate</p>
                                                <div className='pt-3 pr-4'>
                                                    <MultiSlider height={8}>
                                                    <Progress color="brown" progress={item['supportRate'] * 100 / 3} />
                                                    </MultiSlider>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-125 text-center'>
                                            <div>
                                                <p className='text-gray fs-12 mb-2 font-OpenSansRegular'>Partner</p>
                                                <h6 className='text-left font-OpenSansSemiBold d-flex'><img src={`https://storage.swapspace.co/static/${item['partner']}-icon.png`} width={20} /><span className='pl-2'>{item['partner']}</span></h6>
                                            </div>
                                            <div className='pt-2 text-left'>
                                                <p className='text-gray fs-12 mb-2 font-OpenSansRegular'>Trust Score</p>

                                                <StarRatings
                                                    rating={addingItem[key]['ratio']}
                                                    starDimension="22px"
                                                    starRatedColor="yellow"
                                                    // changeRating={this.changeRating}
                                                    numberOfStars={5}
                                                    starSpacing="2px"
                                                    name='rating'
                                                />

                                            </div>
                                        </div>
                                        <div className='w-125 text-center d-flex flex-column justify-content-end'>
                                            <div className='btn btn-exchange mt-2 mb-2' onClick={() => sendExchange(item['partner'])}>Exchange</div>
                                        </div>                            
                                    </div>
                                }
                            })}
                        
                        
                        <hr className='grey w-600 inline-block'/>
                    </div>
                </div>
            <Footer /> 
        </>
    )
}

export default OfferPage;
