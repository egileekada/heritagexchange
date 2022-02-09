import React from 'react'
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";

export default function SecondFeature() {
    return (
        <div className='w-full flex flex-col justify-center items-center pt-32 py-14' >
            <p style={{color:'#050505'}} className='font-Inter-Bold lg:text-3xl text-xl' >Features we’ve built just <span style={{color:'#091BAAF2'}} className='font-Inter-Medium' >for you</span></p>
            <div className='w-full flex flex-col py-8 justify-center items-center' >
                <div className='w-full flex flex-col lg:flex-row justify-center items-center' >
                    <div style={{backgroundColor:'#F8F9FF'}} className='lg:w-72 w-full py-8 px-4 rounded-md m-2' >
                        <div style={{backgroundColor:'#1D6BD5', width:'52px', height:'52px'}} className='rounded-full p-2' >
                            <IoMdArrowDown className='w-full h-full text-white ' />
                        </div>
                        <p style={{color:'#050505'}} className='font-Inter-SemiBold text-sm mt-4' >Buy Crypto</p>
                        <p style={{color:'#8187B4'}} className='font-Inter-Regular text-xs mt-1'>You can buy BTC, USDT and ETH with FIAT Currency</p>
                    </div>
                    <div style={{backgroundColor:'#F8F9FF'}} className='lg:w-72 w-full py-8 px-4 rounded-md m-2' > 
                        <div style={{backgroundColor:'#68D649', width:'52px', height:'52px'}} className='rounded-full p-2' >
                            <IoMdArrowUp className='w-full h-full text-white ' />
                        </div>
                        <p style={{color:'#050505'}} className='font-Inter-SemiBold text-sm mt-4' >Sell Crypto</p>
                        <p style={{color:'#8187B4'}} className='font-Inter-Regular text-xs mt-1'>You sell BTC, USDT and ETH then get paid in FIAT</p>
                    </div>
                    <div style={{backgroundColor:'#F8F9FF'}} className='lg:w-72 w-full py-8 px-4 rounded-md m-2' >
                        <img src='/assets/images/Purse.png' className='w-12' />
                        <p style={{color:'#050505'}} className='font-Inter-SemiBold text-sm mt-4' >Save Crypto</p>
                        <p style={{color:'#8187B4'}} className='font-Inter-Regular text-xs mt-1'>You save BTC, USDT and ETH. Withdraw anytime</p>
                    </div>
                </div>
                <div className='w-full flex flex-col lg:flex-row justify-center items-cente' >
                    <div style={{backgroundColor:'#F8F9FF'}} className='lg:w-72 w-full py-8 px-4 rounded-md m-2' >
                        <img src='/assets/images/Surface.png' className='w-12' />
                        <p style={{color:'#050505'}} className='font-Inter-SemiBold text-sm mt-4' >Secure Transactions</p>
                        <p style={{color:'#8187B4'}} className='font-Inter-Regular text-xs mt-1'>We make sure your transactions are safe and secure</p>
                    </div>
                    <div style={{backgroundColor:'#F8F9FF'}} className='lg:w-72 w-full py-8 px-4 rounded-md m-2' >
                        <img src='/assets/images/CustomerService.png' className='w-12' />
                        <p style={{color:'#050505'}} className='font-Inter-SemiBold text-sm mt-4' >Fast Support</p>
                        <p style={{color:'#8187B4'}} className='font-Inter-Regular text-xs mt-1'>Our Support team is always available to provide help</p>
                    </div>
                    <div style={{backgroundColor:'#F8F9FF'}} className='lg:w-72 w-full py-8 px-4 rounded-md m-2' >
                        <img src='/assets/images/Reward.png' className='w-12' />
                        <p style={{color:'#050505'}} className='font-Inter-SemiBold text-sm mt-4' >Earn Rewards</p>
                        <p style={{color:'#8187B4'}} className='font-Inter-Regular text-xs mt-1'>Earn rewards for referring friends to join Heritage Exchange</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
