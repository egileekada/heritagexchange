import React from 'react'

export default function CryptoSaving() {
 
    const ItemArray = ['Completed', 'Completed', 'Completed', 'Completed' ]

    return (
        <div className='w-full h-screen pt-16 px-4 lg:px-10 overflow-auto'  >
            <div className='w-full flex flex-row' >
                <div className='flex flex-col' >
                    <p className='font-Inter-Bold text-xl'>Crypto Savings</p>
                    <p style={{color:'#02142FA6'}} className='font-Inter-Regular text-xs'>Save money in cryptocurrency on Heritage Exchange</p>
                </div>
            </div> 
            <div className='w-full h-auto flex flex-col bg-white rounded-md my-8 lg:pb-0 pb-32 px-2 lg:px-6' >
                <div className='lg:w-full dashboardslide w-auto flex overflow-x-auto flex flex-row py-10 ' >
                    <div style={{backgroundColor:'#1526A7'}} className='relative h-44 lg:h-auto w-full rounded-md text-white ' >
                        <img src='/assets/images/CryptoBg.png' style={{width: '106px'}} className=' absolute lg:h-full w-full object-cover mt-4  z-20  right-0 ' />
                        <div className='w-full flex flex-col px-6 py-3 pb-6 rounded-md' > 
                            <div className='w-full flex flex-row' >
                                <div className='w-full flex flex-1' />
                                <p style={{backgroundColor:'#404DAF'}} className=' font-Inter-Medium text-12px cursor-pointer px-2 py-1 rounded' >Top Up</p>
                                <p style={{backgroundColor:'#404DAF'}} className='font-Inter-Medium text-12px cursor-pointer px-2 py-1 rounded ml-2' >Withdraw</p>
                            </div>
                            <p className=' w-80 lg:w-auto font-Inter-Medium text-sm mt-2 ' >Bitcoin Balance</p>
                            <p className='font-Inter-Bold my-1 text-2xl'>123,301 BTC</p>
                            <p className='font-Inter-Regular text-xs mt-1 '>$5,804,826,128</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#111E7E'}} className='relative h-44 lg:h-auto w-full rounded-md text-white ml-8' >
                        <img src='/assets/images/CryptoBg.png' style={{width: '106px'}} className=' absolute lg:h-full w-full object-cover mt-4  z-20 right-0 ' />
                        <div className='w-full flex flex-col px-6 py-3 pb-6 rounded-md' > 
                            <div className='w-full flex flex-row' >
                                <div className='w-full flex flex-1' />
                                <p style={{backgroundColor:'#404DAF'}} className='font-Inter-Medium text-12px cursor-pointer px-2 py-1 rounded' >Top Up</p>
                                <p style={{backgroundColor:'#404DAF'}} className='font-Inter-Medium text-12px cursor-pointer px-2 py-1 rounded ml-2' >Withdraw</p>
                            </div>
                            <p className='w-80 lg:w-auto font-Inter-Medium text-sm mt-2 ' >Ethereum Balance</p>
                            <p className='font-Inter-Bold my-1 text-2xl'>23,301 ETH</p>
                            <p className='font-Inter-Regular text-xs mt-1 '>$75,111,472</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#1B2364'}} className='relative h-44 lg:h-auto w-full rounded-md text-white ml-8' >
                        <img src='/assets/images/CryptoBg.png' style={{width: '106px'}} className=' absolute lg:h-full w-full object-cover mt-4 z-20 right-0 ' />
                        <div className='w-full flex flex-col px-6 py-3 pb-6 rounded-md' > 
                            <div className='w-full flex flex-row' >
                                <div className='w-full flex flex-1' />
                                <p style={{backgroundColor:'#404DAF'}} className='font-Inter-Medium text-12px cursor-pointer px-2 py-1 rounded' >Top Up</p>
                                <p style={{backgroundColor:'#404DAF'}} className='font-Inter-Medium text-12px cursor-pointer px-2 py-1 rounded ml-2' >Withdraw</p>
                            </div>
                            <p className=' w-80 lg:w-auto font-Inter-Medium text-sm mt-2 ' >USDT Balance</p>
                            <p className='font-Inter-Bold my-1 text-2xl'>192,923 USDT</p>
                            <p className='font-Inter-Regular text-xs mt-1 '>$192,923</p>
                        </div>
                    </div>
                </div>
                <div className='pb-6' > 
                    <p className='font-Inter-SemiBold text-lg' >History</p> 
                    {ItemArray.map((item:any, index: any)=> {
                        return( 
                            <div key={index} className='w-full my-4 flex text-sm flex-row items-center rounded-md p-5' style={{backgroundColor:'#F9FAFA'}} >
                                <div className='flex flex-col' >
                                    <p className='font-Inter-SemiBold text-sm' >Withdrawal 0.005 ETH</p>
                                    <p className='font-Inter-Regular text-xs mt-1' >June 21, 2021 : 7.00 AM</p>
                                </div>
                                <div className='w-full flex flex-1' />
                                <div className={item === 'Completed' ? 'border border-completecolor rounded w-24 flex justify-center cursor-pointer py-1 text-completecolor': item === 'Pending' ? 'border border-pendingcolor rounded w-24 flex justify-center cursor-pointer py-1 text-pendingcolor': 'border border-cancelcolor rounded w-24 flex justify-center cursor-pointer py-1 text-cancelcolor'} >
                                    <p>{item}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
