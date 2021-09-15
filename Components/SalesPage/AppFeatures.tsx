import React from 'react'

export default function AppFeature() {
    return (
        <div  className='w-full h-full flex flex-col ' >  
            <div className='w-full flex flex-col justify-center items-center mt-48' >
                <p className='font-Inter-Bold text-4xl text-white' >Buy, Sell And Save <span style={{color: '#617DEA'}}>Crypto</span></p>
                <p style={{width:'500px'}} className='font-Inter-Regular text-xs text-white text-center my-4'>Heritage Exchange offers you a seamless, simple and secure way to buy, sell and save cryptocurrency</p>
                <div className='w-full flex justify-center items-center mt-8 mb-16' >
                    <input style={{backgroundColor:'#495696'}} placeholder='Enter your email' className='bg-black w-64 h-12 mx-2 flex justify-center items-center px-2 rounded-sm font-Inter-Regular text-sm text-white' />
                    <button style={{backgroundColor:'#1526A7'}} className='h-12 mx-2 font-Inter-SemiBold text-sm rounded-sm px-4 text-white' >Get Started</button>
                </div>
            </div>
            <div className='w-full h-auto' > 
                <img src='/assets/images/Exchange.png' className='w-56 h-auto absolute right-10 z-20 ' />
                <img src='/assets/images/DashboardImage.png' className='w-full h-auto ' />
            </div>
        </div>
    )
}
