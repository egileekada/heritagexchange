import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import React from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export default function BuyCoin(props: any) { 

    const [coinType, setCoinType] = React.useState('BTC')

    const OnChangeHandler =(e: any)=>{
        setCoinType(e.target.value) 
        props.set(e.target.value)
    }

    const NextPage =()=> {
        props.close(false);
        props.next(true);
    }

    React.useEffect(() => {
        setCoinType(props.type)
    },)

    return (
        <div className='lg:w-auto w-full h-auto px-6 py-3 rounded bg-white' >
            <div className='w-full flex flex-row' >
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
                {coinType === 'BTC' 
                    ?
                        <img src='/assets/images/BTC.png' className='w-14 h-14 my-3' /> :
                    coinType === 'ETH' ?
                        <img src='/assets/images/ethereum.png' className='w-14 h-14 my-3' />
                    :
                        <img src='/assets/images/tether.png' className='w-14 h-14 my-3' /> 
                }
                <div className='w-full flex flex-col ' >
                    <p className='font-Inter-SemiBold text-xs mt-4'>Amount</p>
                    <div className='flex flex-row my-2' > 
                        <div className=' w-full lg:w-56 mr-2'>
                            <Input size='md' fontSize='xs' placeholder='1.0000000000' />
                        </div>
                        <div className='w-32 bg-white text-xs ml-2'>
                            <Select value={coinType} onChange={(e)=> OnChangeHandler(e) } size='md' fontSize='xs' >
                                <option>BTC</option>
                                <option>ETH</option>
                                <option>USDT</option>
                            </Select>
                        </div>
                    </div>
                    <div className='w-full py-4 flex flex-row' >
                        <p className='font-Inter-SemiBold text-xs flex'>NGN:<p className='font-Inter-Regular ml-2'> 13,002,382</p></p>
                        <p className='font-Inter-SemiBold text-xs ml-4 flex'>USD:<p className='font-Inter-Regular ml-2'> 34,000</p></p>
                    </div>
                    <button  onClick={()=> NextPage()} style={{backgroundColor:'#1526A7'}} className='w-full py-4 my-6 font-Inter-Medium rounded text-xs text-white' >Buy 1.0
                    {coinType === 'BTC' 
                        ?
                            ' BTC':
                        coinType === 'ETH' ?
                            ' ETH'
                        :
                            ' USDT'
                    }
                    </button>
                </div>
            </div>
        </div>
    )
}
