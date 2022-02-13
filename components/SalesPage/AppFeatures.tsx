import React from 'react'
import Router from 'next/router'

export default function AppFeature() {

    const OnchangeHandler =(e: any)=> {
        localStorage.setItem('email', e.target.value)
    }

    return (
        <div  className='w-full h-full flex flex-col ' >  
            <div className='w-full flex flex-col lg:justify-center lg:items-center lg:px-0 px-6 mt-48' >
                <p className='font-Inter-Bold lg:text-4xl text-xl text-white' >Buy, Sell And Save <span style={{color: '#617DEA'}}>Crypto</span></p>
                <p className=' lg:w-500px font-Inter-Regular text-xs text-white lg:text-center my-4'>Heritage Exchange offers you a seamless, simple and secure way to buy, sell and save cryptocurrency</p>
                <div className='w-full flex lg:flex-row flex-col lg:justify-center lg:items-center mt-8 mb-16' >
                    <input onChange={(e)=> OnchangeHandler(e)} style={{backgroundColor:'#495696'}} placeholder='Enter your email' className='bg-black lg:w-64 w-full h-12 lg:mx-2 pl-5 flex justify-center items-center px-2 rounded font-Inter-Regular text-sm text-white' />
                    <button onClick={()=> Router.push('/register')} style={{backgroundColor:'#1526A7'}} className='h-12 lg:mt-0 mt-4 w-28 lg:w-auto lg:mx-2 font-Inter-SemiBold text-sm rounded px-4 text-white' >Get Started</button>
                </div>
            </div>
            <div className='w-full h-auto relative' > 
                <img src='/assets/images/Exchange.png' className='lg:w-56 w-36 h-auto -top-8 absolute right-2 lg:right-10 z-20 ' />
                <img src='/assets/images/DashboardImage.png' className='w-full h-auto hidden lg:flex ' />
                <img src='/assets/images/DashboardImageMobile.png' className='w-full h-auto lg:hidden ' />
            </div>
        </div>
    )
}
