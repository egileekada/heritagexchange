import React from 'react' 
import { IoIosNotificationsOutline } from 'react-icons/io';
import BuyCoin from '../DashboardModal.tsx/BuyCoin';
import CoinInstruction from '../DashboardModal.tsx/CoinInstruction';
import PaymentProof from '../DashboardModal.tsx/PaymentProof';
import SellCoin from '../DashboardModal.tsx/SellCoin';
import SellCoinInstruction from '../DashboardModal.tsx/SellCoinInstruction';
import SellPaymentProof from '../DashboardModal.tsx/SellPaymentProof';
import Transaction from '../DashboardModal.tsx/Transaction';

export default function DashboardTab(props: any) {

    const [tab, setTab] = React.useState(0);
    const [coinType, setCoinType] = React.useState('BTC')
    const [sellCoinModal, setSellCoinModal] = React.useState(false); 
    const [buyCoinModal, setBuyCoinModal] = React.useState(false); 
    const [instructionModal, setInstructionModal] = React.useState(false); 
    const [sellInstructionModal, setSellInstructionModal] = React.useState(false); 
    const [paymentModal, setPaymentModal] = React.useState(false); 
    const [sellPaymentModal, setSellPaymentModal] = React.useState(false); 
    const [transactionModal, setTransactionModal] = React.useState(false); 

    const activeTab = 'w-full flex items-center justify-center flex-col lg:flex-row mt-2 py-4'
    const inactiveTab = 'w-full hidden items-center justify-center lg:flex flex-col lg:flex-row mt-2 py-4'

    const ClickHandlerBC =(type: any)=> {
        setBuyCoinModal(true);
        setCoinType(type);
    } 

    const ClickHandlerSC =(type: any)=> {
        setSellCoinModal(true);
        setCoinType(type);
    } 


    return ( 
    <div className='w-full h-screen overflow-y-auto overflow-x-hidden'> 
        <div className='w-full h-screen pt-8 lg:pt-16 px-4 lg:px-10 '  >
            <div className='w-full flex flex-row items-center' >
                <div className='flex flex-col' >
                    <p className='font-Inter-Bold text-xl'>Dashboard</p>
                    <p style={{color:'#02142FA6'}} className='font-Inter-Regular text-xs'>Hi Michael, Welcome Back</p>
                </div> 
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.tab('Notify')} style={{backgroundColor:'#FFF'}}  className='w-auto hidden lg:flex mr-2 relative cursor-pointer h-auto p-3 rounded-full' >
                    <IoIosNotificationsOutline style={{color:'#3B4FE6D5'}} className='w-7 h-6' />
                </div>
            </div>
            <div className='lg:w-full dashboardslide w-auto flex overflow-x-auto flex-row lg:overflow-x-hidden py-10' >
                <div style={{backgroundColor:'#1526A7'}} className=' lg:w-full flex flex-col p-6 rounded-md text-white ' >
                    <p className='font-Inter-Medium text-sm w-48' >Today’s Rate</p>
                    <p className='font-Inter-Bold text-2xl py-2'>₦500/$</p>
                    <p className='font-Inter-Regular text-xs '>Rates are updated daily</p>
                </div>
                <div style={{backgroundColor:'#111E7E'}} className='w-full flex flex-col ml-4 lg:ml-8 p-6 rounded-md text-white ' >
                    <p className='font-Inter-Medium text-sm w-48' >BTC Value</p>
                    <p className='font-Inter-Bold text-2xl py-2'>$34,002</p>
                    <p className='font-Inter-Regular text-xs '>NGN: N12,293,299</p>
                </div>
                <div style={{backgroundColor:'#1B2364'}} className='w-full flex flex-col ml-4 lg:ml-8 p-6 rounded-md text-white ' >
                    <p className='font-Inter-Medium text-sm w-48' >Ethereum Value</p>
                    <p className='font-Inter-Bold text-2xl py-2'>$192,923</p>
                    <p className='font-Inter-Regular text-xs '>NGN: N12,293,299</p>
                </div>
            </div>
            <div className='w-auto h-auto dashboardslide flex flex-row pt-8 px-2 pb-48 lg:pb-6' >
                <div className='w-full items-center justify-center flex flex-col pr-0 lg:pr-14' >
                    <p className='font-Inter-SemiBold hidden text-sm lg:flex  ' >Buy Cryptocurrency</p>
                    <div className='w-full rounded flex flex-row lg:hidden justify-center items-center' >
                        <div onClick={()=> setTab(0)} className={tab === 0 ? 'w-full  flex justify-center items-center rounded bg-heritagebutton text-white':'w-full h-full flex justify-center items-center rounded bg-white'} >
                            <p className='font-Inter-SemiBold text-xs md:text-sm  py-4' >Buy Cryptocurrency</p>
                        </div>
                        <div onClick={()=> setTab(1)} className={tab === 1 ? 'w-full flex justify-center items-center rounded bg-heritagebutton text-white':'w-full h-full flex justify-center items-center rounded bg-white'}>
                            <p className='font-Inter-SemiBold py-4 text-xs md:text-sm  ' >Sell Cryptocurrency</p>
                        </div>
                    </div>
                    <div className={tab === 0 ? activeTab : inactiveTab} >
                        <div onClick={()=> ClickHandlerBC('BTC')} className=' w-full cursor-pointer bg-white flex lg:flex-col py-4 px-4 lg:px-10 my-2 lg:my-0 rounded-md items-center' >
                            <img src='/assets/images/BTC.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Bitcoin</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Buy BTC</p>
                        </div>
                        <div onClick={()=> ClickHandlerBC('ETH')} className='w-full cursor-pointer bg-white flex lg:flex-col py-4 lg:ml-8 my-2 lg:my-0 px-4 lg:px-10 rounded-md items-center' >
                            <img src='/assets/images/ethereum.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Ethereum</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Buy ETH</p>
                        </div>
                        <div onClick={()=> ClickHandlerBC('USDT')} className='w-full cursor-pointer bg-white flex lg:flex-col py-4 lg:ml-8 my-2 lg:my-0 px-4 lg:px-10 rounded-md items-center' >
                            <img src='/assets/images/tether.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Tether</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Buy USDT</p>
                        </div>
                    </div> 
                    <p className='font-Inter-SemiBold hidden text-sm mt-12 lg:flex' >Sell Cryptocurrency</p>
                    <div className={tab === 1 ? activeTab : inactiveTab} >
                        <div onClick={()=> ClickHandlerSC('BTC')}  className='w-full cursor-pointer bg-white flex lg:flex-col py-4 my-2 lg:my-0 px-4 lg:px-10 rounded-md items-center' >
                            <img src='/assets/images/BTC.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Bitcoin</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Sell BTC</p>
                        </div>
                        <div onClick={()=> ClickHandlerSC('ETH')}  className='w-full cursor-pointer bg-white flex lg:flex-col py-4 lg:ml-8 my-2 lg:my-0 px-4 lg:px-10 rounded-md items-center' >
                            <img src='/assets/images/ethereum.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Ethereum</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Sell ETH</p>
                        </div>
                        <div onClick={()=> ClickHandlerSC('USDT')} className='w-full cursor-pointer bg-white flex lg:flex-col py-4 lg:ml-8 my-2 lg:my-0 px-4 lg:px-10 rounded-md items-center' >
                            <img src='/assets/images/tether.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Tether</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Sell USDT</p>
                        </div>
                    </div>
                </div> 
                <div className=' w-full h-auto flex hidden lg:flex px-4 rounded-md bg-white ' >
                    <img src='/assets/images/DashBg.png' className='mx-4 w-96 object-cover rounded-md' /> 
                </div>
            </div>
        </div>

        {sellCoinModal ? 
            (
                <>
                    <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                        <SellCoin type={coinType} set={setCoinType} next={setSellInstructionModal} close={setSellCoinModal} />
                    </div> 
                    <div className="opacity-75 fixed flex flex-1 inset-0 z-40 bg-black"/>
                </>
            ) : null} 
        
        {buyCoinModal ? 
            (
                <>
                    <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                        <BuyCoin type={coinType} set={setCoinType} next={setInstructionModal} close={setBuyCoinModal} />
                    </div> 
                    <div className="opacity-75 fixed flex flex-1 inset-0 z-40 bg-black"/>
                </>
            ) : null} 
        
        {sellInstructionModal ? 
            (
                <>
                    <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                        <SellCoinInstruction type={coinType} next={setSellPaymentModal} back={setSellCoinModal} close={setSellInstructionModal} />
                    </div> 
                    <div className="opacity-75 fixed flex flex-1 inset-0 z-40 bg-black"/>
                </>
            ) : null}  
        
        {instructionModal ? 
            (
                <>
                    <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                        <CoinInstruction type={coinType} next={setPaymentModal} back={setBuyCoinModal} close={setInstructionModal} />
                    </div> 
                    <div className="opacity-75 fixed flex flex-1 inset-0 z-40 bg-black"/>
                </>
            ) : null} 
        
        {paymentModal ? 
            (
                <>
                    <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                        <PaymentProof close={setPaymentModal} next={setTransactionModal} back={setInstructionModal} />
                    </div> 
                    <div className="opacity-75 fixed flex flex-1 inset-0 z-40 bg-black"/>
                </>
            ) : null} 
        
        {sellPaymentModal ? 
            (
                <>
                    <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                        <SellPaymentProof close={setSellPaymentModal} next={setTransactionModal} back={setSellInstructionModal} />
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
