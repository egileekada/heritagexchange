import React from 'react'

export default function DashboardTab() {
    return ( 
    <div className='w-full h-screen pt-16 px-10 overflow-auto'  >
        <div className='w-full flex flex-row' >
            <div className='flex flex-col' >
                <p className='font-Inter-Bold text-2xl'>Dashboard</p>
                <p style={{color:'#02142FA6'}} className='font-Inter-Regular text-sm'>Hi Michael, Welcome Back</p>
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
        <div className='w-full h-auto flex flex-row' >
            <div className='w-auto flex flex-col pr-14' >
                <p className='font-Inter-SemiBold text-sm' >Buy Cryptocurrency</p>
                <div className='w-auto flex flex-row py-4' >
                    <div className='w-auto bg-white flex flex-col py-4 px-8 rounded-md items-center' >
                        <div className='w-12 h-12 bg-red-400'  />
                        <p className='text-sm font-Inter-SemiBold my-2' >Bitcoin</p>
                        <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='text-sm font-Inter-Medium py-1 px-4 rounded-full' >Buy BTC</p>
                    </div>
                    <div className='w-auto bg-white flex flex-col py-4 ml-8 px-8 rounded-md items-center' >
                        <div className='w-12 h-12 bg-red-400'  />
                        <p className='text-sm font-Inter-SemiBold my-2' >Ethereum</p>
                        <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='text-sm font-Inter-Medium py-1 px-4 rounded-full' >Buy ETH</p>
                    </div>
                    <div className='w-auto bg-white flex flex-col py-4 ml-8 px-8 rounded-md items-center' >
                        <div className='w-12 h-12 bg-red-400'  />
                        <p className='text-sm font-Inter-SemiBold my-2' >Tether</p>
                        <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='text-sm font-Inter-Medium py-1 px-4 rounded-full' >Buy USDT</p>
                    </div>
                </div> 
                <p className='font-Inter-SemiBold text-sm mt-4' >Sell Cryptocurrency</p>
                <div className='w-full flex flex-row py-4' >
                    <div className='w-auto bg-white flex flex-col py-4 px-8 rounded-md items-center' >
                        <div className='w-12 h-12 bg-red-400'  />
                        <p className='text-sm font-Inter-SemiBold my-2' >Bitcoin</p>
                        <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='text-sm font-Inter-Medium py-1 px-4 rounded-full' >Buy BTC</p>
                    </div>
                    <div className='w-auto bg-white flex flex-col py-4 ml-8 px-8 rounded-md items-center' >
                        <div className='w-12 h-12 bg-red-400'  />
                        <p className='text-sm font-Inter-SemiBold my-2' >Ethereum</p>
                        <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='text-sm font-Inter-Medium py-1 px-4 rounded-full' >Buy ETH</p>
                    </div>
                    <div className='w-auto bg-white flex flex-col py-4 ml-8 px-8 rounded-md items-center' >
                        <div className='w-12 h-12 bg-red-400'  />
                        <p className='text-sm font-Inter-SemiBold my-2' >Tether</p>
                        <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='text-sm font-Inter-Medium py-1 px-4 rounded-full' >Buy USDT</p>
                    </div>
                </div>
            </div>
            <div className='w-auto h-full flex flex-row bg-white' >
                <p w-full >i</p>
            </div>
        </div>
    </div>
    )
}
