import React from 'react'

export default function Footer() {
    return (
        <div style={{backgroundColor: '#030938F2'}} className='w-full h-auto flex flex-col justify-center items-center py-16 ' >
            <p className='text-4xl font-Inter-ExtraBold text-white' >HX</p>
            <div className='flex flex-row justify-between font-Inter-Regular text-sm text-white my-10' >
                <p className='mx-2 lg:mx-8' >Terms of Service</p>
                <p className='mx-2 lg:mx-8' >Privacy policy</p>
                <p className='mx-2 lg:mx-8' >Support</p>
            </div>
            <p className='font-Inter-Regular text-xs text-white mt-16 mb-4' >Copyright © 2021</p>
        </div>
    )
}
