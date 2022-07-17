import { Input, Link } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion'; 
import ChangePassoword from '../components/RecoveryComponent/ChangePassoword';
import SendOtp from '../components/RecoveryComponent/SendOtp';
import Router from 'next/router'

export default function recovery() {

    const [tab, setTab] = React.useState(false); 
    const [modal, setShowModal] = React.useState(0)   

    return (
        <div className=' w-full h-full flex flex-col flex-1' >
            <Head>
                <title>HX - Recovery</title>
            </Head>
            {/* <div className='w-full h-auto bg-white' >
                <Navbar />
            </div> */}
            {modal === 1 ? 
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-green-400 px-4 py-2 flex justify-center items-center ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Medium' >Link Sent Successful</p>
                    </div>
                </motion.div>
            :null}
            {modal === 2 ?  
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-red-500 px-4 py-2 flex justify-center items-center ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Bold' >Error Sending Link</p>
                    </div>
                </motion.div>
            :null}
            {modal === 3 ?  
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-red-500 px-4 py-2 flex justify-center items-center ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Bold' >Please Enter Your Email</p>
                    </div>
                </motion.div>
            :null}
            <div className='w-full h-screen flex flex-row bg-white' >
                <div className=' bg-heritagecolor w-full h-screen lg:flex text-white flex-col pt-20 px-10  hidden' >
                    <div className='flex items-center' >
                        <svg onClick={()=> Router.push('/login')} className='mr-4 cursor-pointer' width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1L1 8L8 15" stroke="#FFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className='font-Inter-ExtraBold text-3xl'>Heritage Exchange</p>
                    </div>
                    <p className='font-Inter-ExtraBold text-3xl mt-8' >Buy, Sell And Save <span style={{color: '#617DEA'}} >Crypto</span></p>
                    <p className='font-Inter-Regular text-xs my-3 '>Heritage Exchange offers you a seamless, simple and secure way to buy, sell and<br/> save cryptocurrency</p>
                    <div className='w-full flex justify-center items-center' >
                        <img src='/assets/images/LoginBg.png' alt='login' style={{width: '450px'}} className=' h-auto  ' />
                    </div>
                </div>
                {/* <div className=' bg-heritagecolor w-full h-screen lg:flex text-white flex-col pt-20 px-10  hidden' >
                    <p className='font-Inter-ExtraBold text-3xl'>HX</p>
                    <p className='font-Inter-ExtraBold text-3xl mt-8' >Buy, Sell And Save <span style={{color: '#617DEA'}} >Crypto</span></p>
                    <p className='font-Inter-Regular text-xs my-3 '>Heritage Exchange offers you a seamless, simple and secure way to buy, sell and<br/> save cryptocurrency</p>
                    <img src='/assets/images/LoginBg.png' alt='login' style={{width: '446px'}} className=' h-auto  ' />
                </div>  */}
                {!tab && ( 
                    <SendOtp close={setTab} />
                )}
                {tab && ( 
                    <ChangePassoword />
                )}
            </div>      
        </div> 
    )
}
