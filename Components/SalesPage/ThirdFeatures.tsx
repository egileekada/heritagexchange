import React from 'react'

export default function ThirdFeatures() {
    return (
        <div style={{backgroundColor:'#F4F5FC'}} className='w-full relative h-full flex flex-col lg:flex-row justify-center items-center px-6 py-20 my-4 lg:px-20' >
            <img src='/assets/images/ThirdBg.png' className=' absolute hidden lg:flex w-full h-full z-10' />
            <div className='w-full flex flex-col' >
                <p className='lg:text-3xl text-xl font-Inter-Bold' >Start Buying, Selling and Saving <span style={{color:'#091BAAF2'}} className='font-Inter-Medium'>Crypto</span></p>
                <p className='text-xs lg:mt-2 lg:my-0 my-6 font-Inter-Regular'>Heritage Exchange offers you a seamless, simple and secure way to buy, sell and save cryptocurrency</p>
            </div> 
            <div className='w-full flex flex-row justify-end' >
                <button style={{backgroundColor:'#1526A7'}} className=' lg:w-40 w-full h-10 lg:mx-2  font-Inter-SemiBold text-sm rounded-sm px-4 text-white' >Create Account</button>
                <button style={{borderColor:'#1526A7', border:'1px solid' }} className=' lg:w-40 w-full h-10 lg:mx-2 ml-4 lg:ml-0 font-Inter-SemiBold text-sm rounded-sm px-4' >Get Started</button>
            </div>
        </div>
    )
}
