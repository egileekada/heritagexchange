import { Input, Select } from '@chakra-ui/react' 
import { motion } from 'framer-motion'; 
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import React from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export default function SellCoin(props: any) {

    const [coinType, setCoinType] = React.useState('BTC')
    const [coinIndex, setCoinIndex] = React.useState(1)
    const [coinAmount, setCoinAmount] = React.useState(0)
    const [loading, setLoading] = React.useState(false);
    const NaireBtc = props.nairabtc * props.rate
    const NaireEth = props.NairaEthereum * props.rate
    const NaireUsd = props.nairausd * props.rate

    const OnChangeHandler =(e: any)=>{
        setCoinType(e.target.value) 
        props.set(e.target.value)
    } 

    const loginSchema = yup.object({  
        amount: yup.string().required('Your Amount is required')
    }) 

    // formik
    const formik = useFormik({
        initialValues: {amount: 0},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  

    const submit = async () => { 
        setLoading(true)
        if (!formik.dirty) {
          alert('You have to fill in th form to continue');
          return;
        }else if (!formik.isValid) {
          alert('You have to fill in the form correctly to continue');
          return;
        }else {
            setLoading(true);
            const request = await fetch(`https://heritage-server.herokuapp.com/transaction/create/${localStorage.getItem('id')}`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        amount: formik.values.amount,
                        coin_amount: coinAmount, 
                        type: 2,
                        coin_type: coinIndex,
                        USD: coinIndex === 3 ? formik.values.amount : formik.values.amount/props.rate+'',
                        rate: props.rate
                    }
                ),
            });

            const json = await request.json();
    
            if (request.status === 200) {    
                localStorage.setItem('tid', json.data._id);  
                setLoading(false); 

            }else {
                alert(json.message); 
            }

            setLoading(false)
            props.close(false);
            props.next(true); 
        }
    } 

    React.useEffect(() => {  
        setCoinType(props.type)
        props.amount(formik.values.amount)
        {coinType === 'BTC' ?
            setCoinAmount(formik.values.amount/NaireBtc)
        :coinType === 'ETH' ?
            setCoinAmount(formik.values.amount/NaireEth)
        :
            setCoinAmount(formik.values.amount/NaireUsd)}
        {coinType === 'BTC' ?
            setCoinIndex(1)
        :coinType === 'ETH' ?
            setCoinIndex(2)
        :
            setCoinIndex(3)
        }  
    },)


    return (
        <div className='lg:w-auto w-full h-auto px-6 py-3 rounded bg-white' >
            <div className='w-full flex flex-row' >
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
                {coinType === 'BTC' 
                    ?
                        <img src='/assets/images/BTC.png' className='w-14 h-14 my-3' /> :
                    coinType === 'ETH' ?
                        <img src='/assets/images/ethereum.png' className='w-14 h-14 my-3' />
                    :
                        <img src='/assets/images/tether.png' className='w-14 h-14 my-3' /> 
                }
                <div className='w-full flex flex-col ' >
                    <p className='font-Inter-SemiBold text-xs mt-4'>Amount in dollar</p>
                    <div className='flex flex-row my-2' > 
                        <div className='w-full flex-col lg:w-56 mr-2 flex font-Inter-Regular ' >  
                            <Input 
                                name="amount"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("amount", true, true)
                                }  
                                placeholder="$" size="md" className='bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='xs' borderColor="#F6F6F6" color="#200E32"/>
                    
                            <div className="w-full h-auto pt-2">
                                {formik.touched.amount && formik.errors.amount && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.amount}
                                    </motion.p>
                                )}
                            </div>
                        </div> 
                        {/* <div className=' w-full lg:w-56 mr-2'>
                            <Input size='md' fontSize='xs' placeholder='1.0000000000' />
                        </div> */}
                        <div className='w-32 bg-white text-xs ml-2'>
                            <Select value={coinType} onChange={(e)=> OnChangeHandler(e) } size='md' fontSize='xs' >
                                <option>BTC</option>
                                <option>ETH</option>
                                <option>USDT</option>
                            </Select>
                        </div>
                    </div>
                    <div className='w-full py-4 flex flex-row' >
                        <p className='font-Inter-SemiBold text-xs flex'>NGN:<p className='font-Inter-Regular ml-2'>{coinType === 'BTC' ? NaireBtc.toLocaleString('en', {useGrouping:true}): coinType === 'ETH' ? NaireEth.toLocaleString('en', {useGrouping:true}): NaireUsd.toLocaleString('en', {useGrouping:true})}</p></p>
                        <p className='font-Inter-SemiBold text-xs ml-4 flex'>USD:<p className='font-Inter-Regular ml-2'>{coinType === 'BTC' ? (props.nairabtc).toLocaleString('en', {useGrouping:true}): coinType === 'ETH' ? (props.NairaEthereum).toLocaleString('en', {useGrouping:true}): (props.rate).toLocaleString('en', {useGrouping:true})}</p></p>
                    </div>
                    <button  onClick={()=> submit()} style={{backgroundColor:'#1526A7'}} className='w-full py-4 flex items-center justify-center my-6 font-Inter-Medium rounded text-xs text-white' >
                    {!loading ? 
                        <div className='' >
                            Sell
                            {coinType === 'BTC' 
                                ?
                                    ' BTC':
                                coinType === 'ETH' ?
                                    ' ETH'
                                :
                                    ' USDT'
                            }
                        </div>:
                        <>
                            <div className="animate-spin rounded-full h-6 w-6 mr-4 border-t-2 border-b-2 border-white"></div>
                            LOADING
                        </>
                    } 
                    </button> 
                </div>
            </div>
        </div>
    )
}
