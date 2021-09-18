import React from 'react'

export default function DashboardTab() {
    return ( 
    <div className='w-full h-screen pt-16 px-10 overflow-auto'  >
        <div className='w-full flex flex-row' >
            <div className='flex flex-col' >
                <p className='font-Inter-Bold text-xl'>Dashboard</p>
                <p style={{color:'#02142FA6'}} className='font-Inter-Regular text-xs'>Hi Michael, Welcome Back</p>
            </div>
        </div>
        <div className='w-full flex flex-row py-10' >
            <div style={{backgroundColor:'#1526A7'}} className='w-full flex flex-col p-6 rounded-md text-white ' >
                <p className='font-Inter-Medium text-sm ' >Today’s Rate</p>
                <p className='font-Inter-Bold text-2xl'>₦500/$</p>
                <p className='font-Inter-Regular text-xs '>Rates are updated daily</p>
            </div>
            <div style={{backgroundColor:'#111E7E'}} className='w-full flex flex-col ml-8 p-6 rounded-md text-white ' >
                <p className='font-Inter-Medium text-sm ' >BTC Value</p>
                <p className='font-Inter-Bold text-2xl'>$34,002</p>
                <p className='font-Inter-Regular text-xs '>NGN: N12,293,299</p>
            </div>
            <div style={{backgroundColor:'#1B2364'}} className='w-full flex flex-col ml-8 p-6 rounded-md text-white ' >
                <p className='font-Inter-Medium text-sm ' >Ethereum Value</p>
                <p className='font-Inter-Bold text-2xl'>$192,923</p>
                <p className='font-Inter-Regular text-xs '>NGN: N12,293,299</p>
            </div>
        </div>
        <div className='w-full h-auto flex flex-row pt-8 pb-6' >
            <div className='w-auto flex flex-col pr-14' >
                <p className='font-Inter-SemiBold text-sm  ' >Buy Cryptocurrency</p>
                <div className='w-auto flex flex-row mt-2 py-4' >
                    <div className='w-auto bg-white flex flex-col py-4 px-10 rounded-md items-center' >
                        <img src='/assets/images/BTC.png' className='w-12 h-12' />
                        <p className='text-xs font-Inter-SemiBold my-2' >Bitcoin</p>
                        <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='text-xs font-Inter-Medium py-1 px-4 rounded-full' >Buy BTC</p>
                    </div>
                    <div className='w-auto bg-white flex flex-col py-4 ml-8 px-10 rounded-md items-center' >
                        <img src='/assets/images/ethereum.png' className='w-12 h-12' />
                        <p className='text-xs font-Inter-SemiBold my-2' >Ethereum</p>
                        <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='text-xs font-Inter-Medium py-1 px-4 rounded-full' >Buy ETH</p>
                    </div>
                    <div className='w-auto bg-white flex flex-col py-4 ml-8 px-10 rounded-md items-center' >
                        <img src='/assets/images/tether.png' className='w-12 h-12' />
                        <p className='text-xs font-Inter-SemiBold my-2' >Tether</p>
                        <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='text-xs font-Inter-Medium py-1 px-4 rounded-full' >Buy USDT</p>
                    </div>
                </div> 
                <p className='font-Inter-SemiBold text-sm mt-12' >Sell Cryptocurrency</p>
                <div className='w-full flex flex-row mt-2 py-4' >
                    <div className='w-auto bg-white flex flex-col py-4 px-10 rounded-md items-center' >
                        <img src='/assets/images/BTC.png' className='w-12 h-12' />
                        <p className='text-xs font-Inter-SemiBold my-2' >Bitcoin</p>
                        <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='text-xs font-Inter-Medium py-1 px-4 rounded-full' >Buy BTC</p>
                    </div>
                    <div className='w-auto bg-white flex flex-col py-4 ml-8 px-10 rounded-md items-center' >
                        <img src='/assets/images/ethereum.png' className='w-12 h-12' />
                        <p className='text-xs font-Inter-SemiBold my-2' >Ethereum</p>
                        <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='text-xs font-Inter-Medium py-1 px-4 rounded-full' >Buy ETH</p>
                    </div>
                    <div className='w-auto bg-white flex flex-col py-4 ml-8 px-10 rounded-md items-center' >
                        <img src='/assets/images/tether.png' className='w-12 h-12' />
                        <p className='text-xs font-Inter-SemiBold my-2' >Tether</p>
                        <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='text-xs font-Inter-Medium py-1 px-4 rounded-full' >Buy USDT</p>
                    </div>
                </div>
            </div> 
            <div className='w-auto h-auto px-4 rounded-md bg-white ' >
                <img src='/assets/images/DashBg.png' style={{width:'305px'}} className='ml-10 mt-4' /> 
            </div>
        </div>
    </div>
    )
}
