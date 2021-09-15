import React from 'react'

export default function Navbar() {
    return (
        <nav className='bg-heritagecolor w-full h-auto px-12 py-6 flex flex-row' >
            <div className='w-full flex flex-1' >
                <p className='text-3xl text-white mt-1 font-Inter-ExtraBold' >HX</p>
            </div>
            <div className=' mt-4 flex flex-row text-white text-sm font-Inter-Regular mx-2' >
                <a href='#' className='mx-6' >Home</a>
                <a href='#' className='mx-6' >Features</a>
                <a href='#' className='mx-6' >Testimonials</a>
                <a href='#' className='mx-6' >Get The App</a>
                <a href='#' className='mx-6' >Support</a>   
            </div>
            <div className='ml-12 flex text-white text-sm font-Inter-SemiBold' >
                <button style={{width: '158px', height: '48px'}} className='bg-heritagebutton mx-2 rounded-md' >Create Account</button>
                <button style={{width: '158px', height: '48px'}} className='border border-white mx-2 rounded-md' >Log In</button>
            </div>
        </nav>
    )
}
