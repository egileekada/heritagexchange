import React from 'react'
import { IoIosArrowDropleft, IoIosCloseCircleOutline } from 'react-icons/io'
import { useQuery } from 'react-query'

export default function CoinInstruction(props: any) {
    
    const [coinType, setCoinType] = React.useState('BTC') 
    const NaireBtc = props.nairabtc * props.rate
    const NaireEth = props.NairaEthereum * props.rate
    const NaireUsd = props.nairausd * props.rate

    React.useEffect(() => {
        setCoinType(props.type)
    },)

    const PreviousPage =()=> {
        props.close(false);
        props.back(true);
    }

    const NextPage =()=> {
        props.close(false);
        props.next(true);
    }
 
    const { isLoading, data } = useQuery('transcation', () =>
        fetch(`https://heritage-server.herokuapp.com/paypoint`).then(res =>
            res.json()
        )
    )

    console.log(data)

    return (
        <div className='lg:w-auto w-full h-auto px-6 py-3 rounded bg-white' >
            <div className='w-full flex flex-row' >
                <IoIosArrowDropleft onClick={()=> PreviousPage()} className='w-6 h-6 rounded-md cursor-pointer' />
                <div className='w-full flex flex-1' />
                <IoIosCloseCircleOutline onClick={()=> props.close(false)} className='w-6 h-6 rounded-md cursor-pointer'  />
            </div>
            <div className='w-full flex flex-col justify-center items-center py-1' >
                <p className='font-Inter-SemiBold text-xs' >Buy 
                    {coinType === 'BTC' 
                        ?
                            ' Bitcoin':
                        coinType === 'ETH' ?
                            ' Ethereum'
                        :
                            ' Tether'
                    } 
                </p>
                <div className='w-full flex flex-row justify-center items-center my-6' >
                    {coinType === 'BTC' 
                        ?
                            <img src='/assets/images/BTC.png' className='w-14 h-14' /> :
                        coinType === 'ETH' ?
                            <img src='/assets/images/ethereum.png' className='w-14 h-14' />
                        :
                            <img src='/assets/images/tether.png' className='w-14 h-14' /> 
                    }
                    <div className='ml-4' >
                        <p className='font-Inter-Bold text-lg w-auto lg:w-full lg:text-2xl' >{coinType === 'BTC' ? props.amount/props.nairabtc: coinType === 'ETH' ? props.amount/props.NairaEthereum: props.amount/props.nairausd} {coinType === 'BTC' ? 'BTC': coinType === 'ETH' ? 'ETH':'USDT'}</p>
                        <p className='font-Inter-SemiBold text-xs ml-2'>USD: <span className='font-Inter-Regular'>{props.amount.toLocaleString('en', {useGrouping:true})}</span><span className='ml-3'>NGN: </span> <span className='font-Inter-Regular'>{(props.amount*props.rate).toLocaleString('en', {useGrouping:true})}</span></p>
                    </div>
                </div>
                <div className='w-full flex flex-col ' >
                    <p className='font-Inter-SemiBold text-xs mt-4 mb-2'>Payment Instructions</p>  
                    <p className=' w-full lg:w-84 font-Inter-Regular my-2 text-xs'>Send money to the account below and use the transaction reference - <span className='font-Inter-Bold' >DAYYSABS</span></p>  
                    {!isLoading ? 
                        <>
                            <p className='font-Inter-Bold my-2 text-xs' >Account No: <span className='font-Inter-Regular'>{data.data.bank.account_number}</span></p>
                            <p className='font-Inter-Bold my-2 text-xs' >Bank: <span className='font-Inter-Regular'>{data.data.bank.bank_name}</span></p>
                            <p className='font-Inter-Bold my-2 text-xs' >Account Name: <span className='font-Inter-Regular'>{data.data.bank.account_name}</span></p>
                        </>
                    :null}
                    {/* <p className='font-Inter-Bold my-2 text-xs' >Account No: <span className='font-Inter-Regular'>2212043451</span></p>
                    <p className='font-Inter-Bold my-2 text-xs' >Bank: <span className='font-Inter-Regular'>Zenith Bank</span></p>
                    <p className='font-Inter-Bold my-2 text-xs' >Account Name: <span className='font-Inter-Regular'>Uche heritage</span></p> */}
                    <button onClick={()=> NextPage()} style={{backgroundColor:'#1526A7'}} className='w-full py-4 my-6 font-Inter-Medium rounded text-xs text-white' >Upload Payment Proof</button>
                </div>
            </div>
        </div>
    )
}
