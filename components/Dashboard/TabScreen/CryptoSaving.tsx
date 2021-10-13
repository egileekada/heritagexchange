import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import TopUp from '../../CryptoSavings/TopUp';
import Withdraw from '../../CryptoSavings/Withdraw';
import Transaction from '../DashboardModal.tsx/Transaction';

export default function CryptoSaving(props: any) {
 
    const ItemArray = ['Completed', 'Completed', 'Completed', 'Completed' ]

    const [coinType, setCoinType] = React.useState('BTC');
    const [topUpModal, setTopUpModal] = React.useState(false); 
    const [withDrawModal, setWithDrawModal] = React.useState(false); 
    const [transactionModal, setTransactionModal] = React.useState(false); 

    const ClickHandlerTU =(type: any)=> {
        setTopUpModal(true);
        setCoinType(type);
    } 
    
    const ClickHandlerWD =(type: any)=> {
        setWithDrawModal(true);
        setCoinType(type);
    } 

    return (
        <div className='w-full h-screen pt-8 lg:pt-16 px-4 lg:px-10 overflow-auto'  >
            <div className='w-full flex flex-row items-center' >
                <div className='flex flex-col' >
                    <p className='font-Inter-Bold text-xl'>Crypto Savings</p>
                    <p style={{color:'#02142FA6'}} className='font-Inter-Regular text-xs'>Save money in cryptocurrency on Heritage Exchange</p>
                </div>
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.tab('Notify')} style={{backgroundColor:'#FFF'}}  className='w-auto hidden lg:flex mr-2 relative cursor-pointer h-auto p-3 rounded-full' >
                    <IoIosNotificationsOutline style={{color:'#3B4FE6D5'}} className='w-7 h-6' />
                </div>
            </div> 
            <div className='w-full h-auto flex flex-col bg-white rounded-md my-8 lg:pb-0 pb-36 px-2 lg:px-6' >
                <div className='lg:w-full dashboardslide w-auto flex overflow-x-auto flex flex-row py-10 ' >
                    <div style={{backgroundColor:'#1526A7'}} className='relative h-44 lg:h-auto w-full rounded-md text-white ' >
                        <img src='/assets/images/CryptoBg.png' style={{width: '106px'}} className=' absolute lg:h-full lg:w-auto w-full object-cover mt-4 z-10 right-0 ' />
                        <div className='w-full flex flex-col px-6 py-3 pb-6 rounded-md' > 
                            <div className='w-full flex flex-row' >
                                <div className='w-full flex flex-1' />
                                <p onClick={()=> ClickHandlerTU('BTC')} style={{backgroundColor:'#404DAF'}} className=' font-Inter-Medium text-12px cursor-pointer px-2 py-1 rounded' >Top Up</p>
                                <p onClick={()=> ClickHandlerWD('BTC')} style={{backgroundColor:'#404DAF'}} className='font-Inter-Medium text-12px cursor-pointer px-2 py-1 rounded z-20 ml-2' >Withdraw</p>
                            </div>
                            <p className=' w-80 lg:w-auto font-Inter-Medium text-sm mt-2 ' >Bitcoin Balance</p>
                            <p className='font-Inter-Bold my-1 text-2xl'>123,301 BTC</p>
                            <p className='font-Inter-Regular text-xs mt-1 '>$5,804,826,128</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#111E7E'}} className='relative h-44 lg:h-auto w-full rounded-md text-white ml-8' >
                        <img src='/assets/images/CryptoBg.png' style={{width: '106px'}} className=' absolute lg:h-full lg:w-auto w-full object-cover mt-4 z-10 right-0' />
                        <div className='w-full flex flex-col px-6 py-3 pb-6 rounded-md' > 
                            <div className='w-full flex flex-row' >
                                <div className='w-full flex flex-1' />
                                <p onClick={()=> ClickHandlerTU('ETH')} style={{backgroundColor:'#404DAF'}} className='font-Inter-Medium text-12px cursor-pointer px-2 py-1 rounded' >Top Up</p>
                                <p onClick={()=> ClickHandlerWD('ETH')} style={{backgroundColor:'#404DAF'}} className='font-Inter-Medium text-12px cursor-pointer px-2 py-1 z-20 rounded ml-2' >Withdraw</p>
                            </div>
                            <p className='w-80 lg:w-auto font-Inter-Medium text-sm mt-2 ' >Ethereum Balance</p>
                            <p className='font-Inter-Bold my-1 text-2xl'>23,301 ETH</p>
                            <p className='font-Inter-Regular text-xs mt-1 '>$75,111,472</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#1B2364'}} className='relative h-44 lg:h-auto w-full rounded-md text-white ml-8' >
                        <img src='/assets/images/CryptoBg.png' style={{width: '106px'}} className=' absolute lg:h-full lg:w-auto w-full object-cover mt-4 z-10 right-0' />
                        <div className='w-full flex flex-col px-6 py-3 pb-6 rounded-md' > 
                            <div className='w-full flex flex-row' >
                                <div className='w-full flex flex-1' />
                                <p onClick={()=> ClickHandlerTU('USDT')}  style={{backgroundColor:'#404DAF'}} className='font-Inter-Medium text-12px cursor-pointer px-2 py-1 rounded' >Top Up</p>
                                <p  onClick={()=> ClickHandlerWD('USDT')} style={{backgroundColor:'#404DAF'}} className='font-Inter-Medium text-12px cursor-pointer px-2 py-1 z-20 rounded ml-2' >Withdraw</p>
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

            {topUpModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                            <TopUp type={coinType} set={setCoinType} close={setTopUpModal} />
                        </div> 
                        <div className="opacity-75 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 

            {withDrawModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                            <Withdraw type={coinType} next={setTransactionModal} set={setCoinType} close={setWithDrawModal} />
                        </div> 
                        <div className="opacity-75 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        
            {transactionModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                            <Transaction close={setTransactionModal} />
                        </div> 
                        <div className="opacity-75 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 

        </div>
    )
}
