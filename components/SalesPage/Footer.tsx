import React from 'react'
import Router from 'next/router'

export default function Footer() {
    return (
        <div style={{backgroundColor: '#030938F2'}} className='w-full h-auto flex flex-col justify-center items-center py-16 ' >
            <p className='lg:text-2xl text-xl font-Inter-ExtraBold text-white' >Heritage Exchange</p>
            <div className='flex flex-row justify-between font-Inter-Regular text-sm text-white my-10' >
                <p onClick={()=> Router.push('/termandcondition')} className='mx-2 lg:mx-8 cursor-pointer' >Terms of Service</p>
                <p className='mx-2 lg:mx-8' >Privacy policy</p>
                <p onClick={()=> Router.push('/support')} className='mx-2 lg:mx-8 cursor-pointer' >Support</p>
            </div>
            <p className='font-Inter-Regular text-xs text-white mt-16 mb-4' >Copyright © 2022</p>
        </div>
    )
}
