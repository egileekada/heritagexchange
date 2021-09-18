import { Input, Link } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

export default function register() {
    return (
        <div className=' w-full h-full flex flex-col flex-1' >
            <Head>
                <title>HX - Register</title>
            </Head>
            {/* <div className='w-full h-auto bg-white' >
                <Navbar />
            </div> */}
            <div className='w-full h-full flex flex-row bg-white' >
                <div className=' bg-heritagecolor w-full h-full lg:flex text-white flex-col pt-20 px-10  hidden' >
                    <p className='font-Inter-ExtraBold text-3xl'>HX</p>
                    <p className='font-Inter-ExtraBold text-3xl mt-8' >Buy, Sell And Save <span style={{color: '#617DEA'}} >Crypto</span></p>
                    <p className='font-Inter-Regular text-xs my-3 '>Heritage Exchange offers you a seamless, simple and secure way to buy, sell and<br/> save cryptocurrency</p>
                    <img src='/assets/images/LoginBg.png' alt='login' className=' w-full h-auto  ' />
                </div>
                <div className='w-full h-full flex justify-center items-center overflow-y-auto ' >
                    <div className='bg-white w-full h-full flex justify-center flex-col py-20  py-14 px-6 lg:px-40 rounded-lg' >
                        <p className='font-Inter-ExtraBold text-2xl text-esdiac_text flex lg:hidden mb-8'>HX</p>
                        <p className='font-Inter-SemiBold text-xl text-esdiac_text' >Create Your Account</p>
                        <p className='font-Inter-Regular my-2 text-xs text-esdiac_text' >Sign In To Your Account To Continue</p>
                        <div className='w-full flex flex-col py-4' > 
                            <div className='relative w-full flex flex-col py-4 ' > 
                                <p className='Inter-Medium text-xs' >First Name</p>
                                <Input placeholder="First Name" size="lg" className=' mt-2 bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='sm' borderColor="#F6F6F6" color="#200E32"/>
                            </div> 
                            <div className='relative w-full flex flex-col py-4 ' > 
                                <p className='Inter-Medium text-xs' >Last Name</p>
                                <Input placeholder="Last Name" size="lg" className=' mt-2 bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='sm' borderColor="#F6F6F6" color="#200E32"/>
                            </div> 
                            <div className='relative w-full flex flex-col py-4 ' > 
                                <p className='Inter-Medium text-xs' >Email Address</p>
                                <Input placeholder="John@gmail.com" size="lg" className=' mt-2 bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='sm' borderColor="#F6F6F6" color="#200E32"/>
                            </div> 
                            <div className=' w-full flex flex-col py-4' > 
                                <p className='Inter-Medium text-xs' >Password</p>
                                <Input placeholder="Password" size="lg" className=' mt-2 bg-gray_bg  border-gray_bg text-primary'  bg="#F6F6F6" focusBorderColor='white' fontSize='sm' borderColor="#F6F6F6" color="#200E32"/>
                            </div> 
                            {/* <a className='font-Heebo-Regular text-xs text-right' href='/recovery' >Forgot Password?</a> */}
                        </div> 
                        <Link href='/dashboard'>
                            <button className='w-full h-12 text-white font-Inter-Bold text-xs mr-2 mt-4 bg-heritagebutton rounded-md' >SIGN UP</button>
                        </Link> 

                        <div className='w-full flex justify-center items-center mt-10' >
                            <p className='font-Heebo-Regular text-xs ' >Already Have An Account?
                            <Link href='/login'><p className='cursor-pointer ml-1 font-Heebo-Regular text-xs' style={{color:'#0E20BE'}} >Sign In</p></Link></p>
                        </div>
                    </div>
                </div> 
            </div>      
        </div> 
    )
}
