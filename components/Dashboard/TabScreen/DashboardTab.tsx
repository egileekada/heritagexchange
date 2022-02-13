import React from 'react' 
import { IoIosNotificationsOutline } from 'react-icons/io';
import BuyCoin from '../DashboardModal.tsx/BuyCoin';
import CoinInstruction from '../DashboardModal.tsx/CoinInstruction';
import PaymentProof from '../DashboardModal.tsx/PaymentProof';
import SellCoin from '../DashboardModal.tsx/SellCoin';
import SellCoinInstruction from '../DashboardModal.tsx/SellCoinInstruction';
import SellPaymentProof from '../DashboardModal.tsx/SellPaymentProof';
import Transaction from '../DashboardModal.tsx/Transaction';
import { IUser, UserContext } from '../../../context/UserContext';
import { useQuery } from 'react-query';
// import { CyptoRate } from '../../../connections/CyptoRate';

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
    const [selltransactionModal, setSellTransactionModal] = React.useState(false); 
    const userContext: IUser = React.useContext(UserContext); 



    const activeTab = 'w-full flex items-center justify-center flex-col lg:flex-row mt-2 py-4'
    const inactiveTab = 'w-full hidden items-center justify-center lg:flex flex-col lg:flex-row mt-2 py-4'
    const [amount, setAmount] = React.useState()
    const [btc, setBtc] = React.useState('' as any)
    const [usd, setUsd] = React.useState('' as any)
    const [ethereum, setEthereum] = React.useState('' as any)
    // const [NairaBtc, setNairaBtc] = React.useState('' as any)
    // const [NairaEthereum, setNairaEthereum] = React.useState('' as any)
    // const [NairaUsd, setNairaUsd] = React.useState('' as any)

    // const DataInfo =(data: any)=> { 
    //     setNairaBtc(btc * data.data.rate)
    //     setNairaEthereum(ethereum * data.data.rate)
    //     setNairaUsd(usd * data.data.rate) 
    // }

    const { isLoading, data } = useQuery('details', () =>
        fetch(`https://heritage-server.herokuapp.com/paypoint`).then(res =>
            res.json()
        )   
    )

    const ClickHandlerBC =(type: any)=> {
        setBuyCoinModal(true);
        setCoinType(type);
    } 

    const ClickHandlerSC =(type: any)=> {
        setSellCoinModal(true);
        setCoinType(type);
    } 

    React.useEffect(() => { 
            fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', {
                method: 'GET', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => {
                setBtc(data[0].current_price)  
                setEthereum(data[1].current_price)  
                setUsd(data[4].current_price) 
            })
            .catch((error) => {
                console.error('Error:', error);
            });  

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    },[btc, ethereum, data]);    

    return ( 
    <div className='w-screen lg:w-full h-screen overflow-y-auto overflow-x-hidden'> 
        <div className='w-full h-screen pt-8 lg:pt-16 px-4 lg:px-10 '  >
            <div className='w-full flex flex-row items-center' >
                <div className='flex flex-col' >
                    <p className='font-Inter-Bold text-xl'>Dashboard</p>
                    <p style={{color:'#02142FA6'}} className='font-Inter-Regular text-xs'>Hi {userContext.userData.first_name}, Welcome Back</p>
                </div> 
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.tab('Notify')} style={{backgroundColor:'#FFF'}}  className='w-auto hidden lg:flex mr-2 relative cursor-pointer h-auto p-3 rounded-full' >
                    <IoIosNotificationsOutline style={{color:'#3B4FE6D5'}} className='w-7 h-6' />
                </div>
            </div>
            <div className='lg:w-full dashboardslide w-auto flex overflow-x-auto flex-row lg:overflow-x-hidden py-10' >
                <div style={{backgroundColor:'#1526A7'}} className=' lg:w-full flex flex-col p-6 rounded-md text-white ' >
                    <p className='font-Inter-Medium text-sm w-48' >Today’s Rate</p>
                    {!isLoading ?
                        <p className='font-Inter-Bold text-2xl py-2'>₦{data.data.rate}/$</p>
                    :null}
                    <p className='font-Inter-Regular text-xs '>Rates are updated daily</p>
                </div>
                <div style={{backgroundColor:'#111E7E'}} className='w-full flex flex-col ml-4 lg:ml-8 p-6 rounded-md text-white ' >
                    <p className='font-Inter-Medium text-sm w-48' >BTC Value</p>
                    <p className='font-Inter-Bold text-2xl py-2'>${btc.toLocaleString('en', {useGrouping:true})}</p>
                    {!isLoading ?
                        <p className='font-Inter-Regular text-xs '>NGN: N{(btc* data.data.rate).toLocaleString('en', {useGrouping:true})}</p>
                    :null}
                </div>
                <div style={{backgroundColor:'#1B2364'}} className='w-full flex flex-col ml-4 lg:ml-8 p-6 rounded-md text-white ' >
                    <p className='font-Inter-Medium text-sm w-48' >Ethereum Value</p>
                    <p className='font-Inter-Bold text-2xl py-2'>${ethereum.toLocaleString('en', {useGrouping:true})}</p>
                    {!isLoading ?
                        <p className='font-Inter-Regular text-xs '>NGN: N{(ethereum* data.data.rate).toLocaleString('en', {useGrouping:true})}</p>
                    :null}
                </div>
            </div>
            <div className='w-auto h-auto dashboardslide flex flex-row pt-8 px-2 pb-28 lg:pb-6' >
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
                        <div className=' w-full bg-white flex lg:flex-col py-4 px-4 lg:px-10 my-2 lg:my-0 rounded-md items-center' >
                            <img src='/assets/images/BTC.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Bitcoin</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p onClick={()=> ClickHandlerBC('BTC')} style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 cursor-pointer items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Buy BTC</p>
                        </div>
                        <div className='w-full bg-white flex lg:flex-col py-4 lg:ml-8 my-2 lg:my-0 px-4 lg:px-10 rounded-md items-center' >
                            <img src='/assets/images/ethereum.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Ethereum</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p onClick={()=> ClickHandlerBC('ETH')} style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 cursor-pointer items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Buy ETH</p>
                        </div>
                        <div className='w-full bg-white flex lg:flex-col py-4 lg:ml-8 my-2 lg:my-0 px-4 lg:px-10 rounded-md items-center' >
                            <img src='/assets/images/tether.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Tether</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p onClick={()=> ClickHandlerBC('USDT')} style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 cursor-pointer  items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Buy USDT</p>
                        </div>
                    </div> 
                    <p className='font-Inter-SemiBold hidden text-sm mt-12 lg:flex' >Sell Cryptocurrency</p>
                    <div className={tab === 1 ? activeTab : inactiveTab} >
                        <div className='w-full bg-white flex lg:flex-col py-4 my-2 lg:my-0 px-4 lg:px-10 rounded-md items-center' >
                            <img src='/assets/images/BTC.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Bitcoin</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p onClick={()=> ClickHandlerSC('BTC')}  style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 cursor-pointer items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Sell BTC</p>
                        </div>
                        <div className='w-full bg-white flex lg:flex-col py-4 lg:ml-8 my-2 lg:my-0 px-4 lg:px-10 rounded-md items-center' >
                            <img src='/assets/images/ethereum.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Ethereum</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p onClick={()=> ClickHandlerSC('ETH')}  style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 cursor-pointer items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Sell ETH</p>
                        </div>
                        <div className='w-full bg-white flex lg:flex-col py-4 lg:ml-8 my-2 lg:my-0 px-4 lg:px-10 rounded-md items-center' >
                            <img src='/assets/images/tether.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Tether</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p onClick={()=> ClickHandlerSC('USDT')} style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 cursor-pointer cursor-pointer items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Sell USDT</p>
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
                        <SellCoin nairausd={usd} nairabtc={btc} rate={data.data.rate} NairaEthereum={ethereum} amount={setAmount} type={coinType} set={setCoinType} next={setSellInstructionModal} close={setSellCoinModal} />
                    </div> 
                    <div className="opacity-75 fixed flex flex-1 inset-0 z-40 bg-black"/>
                </>
            ) : null} 
        
        {buyCoinModal ? 
            (
                <>
                    <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                        <BuyCoin nairausd={usd} nairabtc={btc} rate={data.data.rate} NairaEthereum={ethereum} amount={setAmount} type={coinType} set={setCoinType} next={setInstructionModal} close={setBuyCoinModal} />
                    </div> 
                    <div className="opacity-75 fixed flex flex-1 inset-0 z-40 bg-black"/>
                </>
            ) : null} 
        
        {sellInstructionModal ? 
            (
                <>
                    <div className="h-full lg:w-98 mx-auto overflow-x-hidden overflow-y-auto fixed pb-4 px-4 pt-4 inset-0 z-50 outline-none focus:outline-none"> 
                        <SellCoinInstruction nairausd={usd} nairabtc={btc}  rate={data.data.rate} type={coinType}  NairaEthereum={ethereum} next={setSellPaymentModal} back={setSellCoinModal} amount={amount} close={setSellInstructionModal} />
                    </div> 
                    <div className="opacity-75 fixed flex flex-1 inset-0 z-40 bg-black"/>
                </>
            ) : null}  
        
        {instructionModal ? 
            (
                <>
                    <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                        <CoinInstruction nairausd={usd}  nairabtc={btc}  rate={data.data.rate} NairaEthereum={ethereum}  type={coinType} next={setPaymentModal}  amount={amount} back={setBuyCoinModal} close={setInstructionModal} />
                    </div> 
                    <div className="opacity-75 fixed flex flex-1 inset-0 z-40 bg-black"/>
                </>
            ) : null} 
        
        {paymentModal ? 
            (
                <>
                    <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                        <PaymentProof type={coinType} close={setPaymentModal} next={setTransactionModal} back={setInstructionModal} />
                    </div> 
                    <div className="opacity-75 fixed flex flex-1 inset-0 z-40 bg-black"/>
                </>
            ) : null} 
        
        {sellPaymentModal ? 
            (
                <>
                    <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                        <SellPaymentProof type={coinType} close={setSellPaymentModal}  next={setSellTransactionModal} back={setSellInstructionModal} />
                    </div> 
                    <div className="opacity-75 fixed flex flex-1 inset-0 z-40 bg-black"/>
                </>
            ) : null}
        
        {transactionModal ? 
            (
                <>
                    <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                        <Transaction rate={data.data.rate} close={setTransactionModal} amount={amount} nairabtc={btc} NairaEthereum={ethereum}  nairausd={usd}  coinType={coinType} />
                    </div> 
                    <div className="opacity-75 fixed flex flex-1 inset-0 z-40 bg-black"/>
                </>
            ) : null} 
        
        {selltransactionModal ? 
            (
                <>
                    <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                        <Transaction rate={data.data.rate} close={setSellTransactionModal} sell={true} amount={amount} nairabtc={btc} NairaEthereum={ethereum}  nairausd={usd}  coinType={coinType} />
                    </div> 
                    <div className="opacity-75 fixed flex flex-1 inset-0 z-40 bg-black"/>
                </>
            ) : null} 
    </div>
    )
}
