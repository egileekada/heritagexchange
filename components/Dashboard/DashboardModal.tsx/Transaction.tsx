import { Input, Select } from '@chakra-ui/react'
import React from 'react'
import { IoIosCheckmarkCircle, IoIosCloseCircleOutline } from 'react-icons/io'

export default function Transaction(props: any) {
    const NaireBtc = props.nairabtc * props.rate
    const NaireEth = props.NairaEthereum * props.rate
    const NaireUsd = props.nairausd * props.rate
    return (
        <div className='lg:w-auto w-full h-auto px-6 py-3 rounded bg-white' >
            <div className='w-full flex flex-row' >
                <div className='w-full flex flex-1' />
                <IoIosCloseCircleOutline onClick={()=> props.close(false)} className='w-6 h-6 rounded-md cursor-pointer'  />
            </div>
            <div className='w-full flex flex-col justify-center items-center py-1' >
                <p className='font-Inter-SemiBold text-xs' >Transaction Processing</p>  
                <IoIosCheckmarkCircle className='w-20 h-28 text-heritagebutton my-3' />
                {/* <img src='/assets/images/BTC.png' className='w-14 h-14 my-3' />  */} 
                <p className='lg:w-84 text-center font-Inter-Regular text-xs mb-7'>Thank your for your transaction. Your transaction is being processed. {props.sell ? 'You Successfully Sold':'You would receive'} {props.coinType === 'BTC' ? props.amount/NaireBtc: props.coinType === 'ETH' ? props.amount/NaireEth: props.amount/NaireUsd} {props.coinType === 'BTC' ? 'BTC': props.coinType === 'ETH' ? 'ETH':'USDT'} {props.sell ? '': 'once processing is complete'}. This typically takes a couple of minutes</p> 
            </div>
        </div>
    )
}
