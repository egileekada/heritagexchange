import React from 'react'
import { IoIosArrowDropleft, IoIosCloseCircleOutline, IoIosCopy } from 'react-icons/io'

export default function TopUp(props: any) {
    
    const [coinType, setCoinType] = React.useState('BTC') 

    React.useEffect(() => {
        setCoinType(props.type)
    },)

    const PreviousPage =()=> {
        props.close(false);
        props.back(true);
    }

    return (
        <div className='lg:w-auto w-full h-auto px-6 py-3 rounded bg-white' >
            <div className='w-full flex flex-row' >
                {/* <IoIosArrowDropleft onClick={()=> PreviousPage()} className='w-6 h-6 rounded-md cursor-pointer' /> */}
                <div className='w-full flex flex-1' />
                <IoIosCloseCircleOutline onClick={()=> props.close(false)} className='w-6 h-6 rounded-md cursor-pointer'  />
            </div>
            <div className='w-full flex flex-col justify-center items-center py-1' >
                <p className='font-Inter-SemiBold text-xs' >Top Up Savings -
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
                </div>
                <div className='w-full flex flex-col ' >
                    <p className='font-Inter-SemiBold text-xs mt-4 mb-2'>Payment Instructions</p>  
                    <p className=' w-full lg:w-84 font-Inter-Regular my-2 text-xs'>Send any crypto amount into your savings by sending to this crypto address</p>  
                    <div className='w-full flex justify-center items-center my-2' >
                        <div className='w-28 h-28 bg-gray-300' />
                    </div>
                    <p className='font-Inter-SemiBold text-xs mt-2 mb-2'>Address</p>  
                    <p className=' w-full lg:w-84 flex font-Inter-Regular mt-2 mb-8 text-xs'>0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7<span><IoIosCopy style={{color: '#1526A7'}} className=' ml-2 cursor-pointer w-4 h-4' /></span></p> 
                </div>
            </div>
        </div>
    )
}
