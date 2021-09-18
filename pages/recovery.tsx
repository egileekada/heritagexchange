import { Input, Link } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

export default function recovery() {
    return (
        <div className=' w-full h-full flex flex-col flex-1' >
            <Head>
                <title>HX - Recovery</title>
            </Head>
            {/* <div className='w-full h-auto bg-white' >
                <Navbar />
            </div> */}
            <div className='w-full h-screen flex flex-row bg-white' >
                <div className=' bg-heritagecolor w-full h-screen lg:flex text-white flex-col pt-20 px-10  hidden' >
                    <p className='font-Inter-ExtraBold text-3xl'>HX</p>
                    <p className='font-Inter-ExtraBold text-3xl mt-8' >Buy, Sell And Save <span style={{color: '#617DEA'}} >Crypto</span></p>
                    <p className='font-Inter-Regular text-xs my-3 '>Heritage Exchange offers you a seamless, simple and secure way to buy, sell and<br/> save cryptocurrency</p>
                    <img src='/assets/images/LoginBg.png' alt='login' style={{width: '446px'}} className=' h-auto  ' />
                </div>
                <div className='w-full h-full flex justify-center items-center ' >
                    <div className='bg-white w-full h-full flex justify-center flex-col py-24  py-14 px-6 lg:px-40 rounded-lg' >
                        <p className='font-Inter-SemiBold text-xl text-esdiac_text' >Forgot Password</p>
                        <p className='font-Inter-Regular my-2 text-xs text-esdiac_text' >We’ll send you a link to reset your password via email</p>
                        <div className='w-full flex flex-col py-4' > 
                            <div className='relative w-full flex flex-col py-4 ' > 
                                <p className='Inter-Medium text-xs' >Email Address</p>
                                <Input placeholder="John@gmail.com" size="lg" className=' mt-2 bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='sm' borderColor="#F6F6F6" color="#200E32"/>
                            </div>  
                        </div> 
                        <Link href='/dashboard'>
                            <button className='w-full h-12 text-white font-Inter-Bold text-xs mr-2 mt-4 bg-heritagebutton rounded-md' >Send Reset Link</button>
                        </Link> 

                        <div className='w-full flex justify-center items-center mt-10' >
                            <p className='font-Heebo-Regular text-xs ' >Don't Have An Account?<a href='/register' className='cursor-pointer ml-1 font-Heebo-Regular text-xs' style={{color:'#0E20BE'}} >Create an Account</a></p>
                        </div>
                    </div>
                </div> 
            </div>      
        </div> 
    )
}
