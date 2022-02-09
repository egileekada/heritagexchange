import React from 'react'
import { IoIosArrowDropleft, IoIosCloseCircleOutline, IoIosCopy } from 'react-icons/io'
import { useQuery } from 'react-query'

export default function SellCoinInstruction(props: any) {
    
    const [coinType, setCoinType] = React.useState('BTC') 

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
 
    const { isLoading, data } = useQuery('details', () =>
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
                <p className='font-Inter-SemiBold text-xs' >Sell 
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
                        <p className='font-Inter-Bold text-2xl' >{props.type === 'BTC' ? props.amount/props.nairabtc: props.amount/props.NairaEthereum} {props.type === 'BTC' ? 'BTC':'ETH'}</p>
                        <p className='font-Inter-SemiBold text-xs ml-2'>NGN:<span className='font-Inter-Regular'> 13,002,382</span></p>
                    </div>
                </div>
                <div className='w-full flex flex-col ' >
                    <p className='font-Inter-SemiBold text-xs mt-4 mb-2'>Payment Instructions</p>  
                    <p className=' w-full lg:w-84 font-Inter-Regular my-2 text-xs'>Send crypto by scanning or copying the wallet address below</p>  
                    <div className='w-full flex justify-center items-center my-2' >
                        <div className='w-28 h-28 bg-gray-300' />
                    </div>
                    <p className='font-Inter-SemiBold text-xs mt-2 mb-2'>Address</p>  
                    {!isLoading ?  
                        <p className=' w-full lg:w-84 flex font-Inter-Regular my-2 text-xs'>{props.type === 'BTC' ? data.data.bitcoin_wallet :props.type === 'ETH' ? data.data.bitcoin_wallet :  data.data.bitcoin_wallet}<span><IoIosCopy style={{color: '#1526A7'}} className=' ml-2 cursor-pointer w-4 h-4' /></span></p> 
                    :null}
                    <button onClick={()=> NextPage()} style={{backgroundColor:'#1526A7'}} className='w-full py-4 my-6 font-Inter-Medium rounded text-xs text-white' >Upload Payment Proof</button>
                </div>
            </div>
        </div>
    )
}
