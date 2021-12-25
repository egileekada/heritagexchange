import React from 'react'
import Link from 'next/link' 
import { FiMenu } from 'react-icons/fi'; 
import { IoMdClose } from 'react-icons/io';

export default function Navbar() { 

    const [menu, setMenu] = React.useState(false);

    return (
        <nav className='bg-heritagecolor relative w-full h-auto px-12 py-6 flex lg:flex-row xl:flex-row items-center justify-center flex-col' >
            <div className='w-full flex flex-1' >
                <p className='text-3xl text-white mt-1 font-Inter-ExtraBold' >HX</p>
            </div>
            <div className=' mt-2 hidden lg:flex xl:flex flex-row text-white  text-sm font-Inter-Medium mx-2' >
                <Link href='#' >
                    <p className='mx-6 cursor-pointer ' >Home</p> 
                </Link>
                <Link href='#' >
                    <p className='mx-6 cursor-pointer ' >Features</p> 
                </Link>
                <Link href='#' >
                    <p className='mx-6 cursor-pointer ' >Testimonials</p> 
                </Link>
                <Link href='#' >
                    <p className='mx-6 cursor-pointer ' >Get The App</p> 
                </Link>
                <Link href='#' >
                    <p className='mx-6 cursor-pointer ' >Support</p> 
                </Link> 
            </div>
            <div className='ml-12 hidden lg:flex text-white text-xs mt-2 font-Inter-SemiBold' >
                <Link href='/register' >
                    <button style={{width: '158px' }} className=' h-12 bg-heritagebutton mx-2 rounded-md' >Create Account</button>
                </Link>
                <Link href='/login' >
                    <button style={{width: '158px' }} className=' h-12 border border-white mx-2 rounded-md' >Log In</button>
                </Link>
            </div>
            <div className='w-full absolute top-9 flex pr-12 justify-end'> 
                {!menu 
                    ?
                        <button onClick={()=> setMenu(true)} className="xl:hidden lg:hidden sm:flex sm:justify-end sm:w-auto sm:h-auto  text-center my-auto font-Heebo-Regular">
                            <FiMenu size={24} color="white" />
                        </button>
                    :
                        <button onClick={()=> setMenu(false)} className="xl:hidden lg:hidden sm:flex sm:justify-end sm:w-auto sm:h-auto text-center font-Heebo-Regular"> 
                            <IoMdClose  size={24} color="white"/>
                        </button>
                }
            </div>
            {menu 
                ?
                    <div className=' w-full h-full text-white xl:hidden flex flex-col items-center mt-4'  > 
                        <Link href='#' >
                            <p className='py-2 cursor-pointer ' >Home</p> 
                        </Link>
                        <Link href='#' >
                            <p className='py-2 cursor-pointer ' >Features</p> 
                        </Link>
                        <Link href='#' >
                            <p className='py-2 cursor-pointer ' >Testimonials</p> 
                        </Link>
                        <Link href='#' >
                            <p className='py-2 cursor-pointer ' >Get The App</p> 
                        </Link>
                        <Link href='#' >
                            <p className='py-2 cursor-pointer ' >Support</p> 
                        </Link>
                        <Link href='/register' >
                                <a  className='py-2 cursor-pointer ' >Create Account</a> 
                        </Link>
                        <Link href='/login'>
                            <p className='py-2 cursor-pointer ' >Log In</p> 
                        </Link>
                        {/* <Link href="/">
                            <p onClick={()=>setMenu(false)} className="text-sm py-2 cursor-pointer ">Home</p>
                        </Link>
                        <Link href="/#HowItWorks">
                            <p onClick={()=>setMenu(false)}  className="text-sm py-2  cursor-pointer ">How It Works</p>
                        </Link>
                        <Link href="/#BuyCredits">
                            <p onClick={()=>setMenu(false)}  className="text-sm py-2  cursor-pointer ">Buy Credits</p>
                        </Link>
                        <Link href="/#CallRates" >
                            <p onClick={()=>setMenu(false)}  className="text-sm py-2  cursor-pointer">Call Rates</p>
                        </Link>
                        <Link href="/#Support">
                            <p onClick={()=>setMenu(false)}  className="text-sm py-2  cursor-pointer ">Supports</p>
                        </Link>
                        <Link href="/login">
                            <p onClick={()=>setMenu(false)}  className="text-sm py-2  cursor-pointer ">My Account</p>
                        </Link> */}
                    </div>
            :null}
        </nav>
    )
}
