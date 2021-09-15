import React from 'react'

export default function ThirdFeatures() {
    return (
        <div style={{backgroundColor:'#F4F5FC'}} className='w-full h-full flex flex-row justify-center items-center py-20 my-4 px-20' >
            <div className='w-full flex flex-col' >
                <p className='text-3xl font-Inter-Bold' >Start Buying, Selling and Saving <span style={{color:'#091BAAF2'}} className='font-Inter-Medium'>Crypto</span></p>
                <p className='text-xs mt-2 font-Inter-Regular'>Heritage Exchange offers you a seamless, simple and secure way to buy, sell and save cryptocurrency</p>
            </div> 
            <div className='w-full flex flex-row justify-end' >
                <button style={{backgroundColor:'#1526A7'}} className=' w-40 h-10 mx-2 font-Inter-SemiBold text-sm rounded-sm px-4 text-white' >Create Account</button>
                <button style={{borderColor:'#1526A7', border:'1px solid' }} className='w-40 h-10 mx-2 font-Inter-SemiBold text-sm rounded-sm px-4' >Get Started</button>
            </div>
        </div>
    )
}
