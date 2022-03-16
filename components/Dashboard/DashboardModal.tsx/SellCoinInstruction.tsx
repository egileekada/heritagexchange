import React from 'react'
import { IoIosArrowDropleft, IoIosCloseCircleOutline, IoIosCopy } from 'react-icons/io'
import QRCode from "react-qr-code";
import { useQuery } from 'react-query'

export default function SellCoinInstruction(props: any) {
    
    const [coinType, setCoinType] = React.useState('BTC') 
    const [NaireBtc, setNaireBtc] = React.useState(0) 
    const [NaireEth, setNaireEth] = React.useState(0) 
    const [NaireUsd, setNaireUsd] = React.useState(0) 
    // const NaireBtc = props.nairabtc * props.rate
    // const NaireEth = props.NairaEthereum * props.rate
    // const NaireUsd = props.nairausd * props.rate 

    React.useEffect(() => {
        setCoinType(props.type)
        setNaireBtc(props.nairabtc * props.rate)
        setNaireEth(props.NairaEthereum * props.rate)
        setNaireUsd(props.nairausd * props.rate)
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

    const [copySuccess, setCopySuccess] = React.useState('');

    // your function to copy here
    
      const copyToClipBoard = async (copyMe: any) => {
        try {
          await navigator.clipboard.writeText(copyMe);
          setCopySuccess('Copied!');
        } catch (err) {
          setCopySuccess('Failed to copy!');
        }
      };
     
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
                <div className='w-auto flex flex-row justify-center items-center my-6' >
                    {coinType === 'BTC' 
                        ?
                            <img src='/assets/images/BTC.png' className='w-14 h-14' /> :
                        coinType === 'ETH' ?
                            <img src='/assets/images/ethereum.png' className='w-14 h-14' />
                        :
                            <img src='/assets/images/tether.png' className='w-14 h-14' /> 
                    }
                    <div className='ml-4' >
                        <p className='w-auto font-Inter-Bold lg:text-2xl' >{props.type === 'BTC' ? props.amount/props.nairabtc  :props.type === 'ETH' ? props.amount/props.NairaEthereum: props.amount/props.nairausd} {props.type === 'BTC' ? 'BTC':props.type === 'ETH' ? 'ETH':'USDT'}</p>
                        <p className='font-Inter-SemiBold text-xs ml-2'>USD: <span className='font-Inter-Regular'>{props.amount.toLocaleString('en', {useGrouping:true})}</span><span className='ml-3'>NGN: </span> <span className='font-Inter-Regular'>{(props.amount*props.rate).toLocaleString('en', {useGrouping:true})}</span></p>
                    </div>
                </div>
                <div className='w-full flex flex-col ' >
                    <p className='font-Inter-SemiBold text-xs mt-4 mb-2'>Payment Instructions</p>  
                    <p className=' w-full lg:w-84 font-Inter-Regular my-2 text-xs'>Send crypto by scanning or copying the wallet address below</p>  
                    <div className='w-full flex justify-center items-center my-2' >
                        <QRCode width='300px' height='300px' value={props.type === 'BTC' ? data.data.bitcoin_wallet :props.type === 'ETH' ? data.data.bitcoin_wallet :  data.data.bitcoin_wallet} />
                    </div>
                    <p className='font-Inter-SemiBold text-xs mt-2 mb-2'>Address</p>   
                    {!isLoading ?  
                        <p className=' w-full lg:w-84 flex font-Inter-Regular my-2 text-xs'>{props.type === 'BTC' ? data.data.bitcoin_wallet :props.type === 'ETH' ? data.data.etheruem_wallet :  data.data.usdt_wallet}<span><IoIosCopy onClick={() => copyToClipBoard(props.type === 'BTC' ? data.data.bitcoin_wallet :props.type === 'ETH' ? data.data.etheruem_wallet :  data.data.usdt_wallet)} style={{color: '#1526A7'}} className=' ml-2 cursor-pointer w-4 h-4' /></span>
                        {copySuccess}</p> 
                    :null}
                    <button onClick={()=> NextPage()} style={{backgroundColor:'#1526A7'}} className='w-full py-4 my-6 font-Inter-Medium rounded text-xs text-white' >Upload Payment Proof</button>
                </div>
            </div>
        </div>
    )
}
