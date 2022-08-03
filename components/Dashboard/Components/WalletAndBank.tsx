import { Input, Select } from '@chakra-ui/react';
import React from 'react';
import { IUser, UserContext } from '../../../context/UserContext';
import Router from "next/router";
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import {BASEURL} from '../../../global/URL'
import { motion } from 'framer-motion'; 
import { useQuery } from 'react-query';

export default function WalletAndBank() {

    const userContext: IUser = React.useContext(UserContext);  
    const [loading, setLoading] = React.useState(false);

    const { isLoading, data } = useQuery('AllBanks', () =>
        fetch(`https://heritage-server.herokuapp.com/bank/all`).then(res =>
            res.json()
        )   
    )

    console.log(data);
    

    const loginSchema = yup.object({  
        account_number: yup.string().required('Your Account Number is required'),
        account_name: yup.string().required('Your Account Name is required').min(3, 'A minimium of 3 characters'),
        bank_name: yup.string().required('Your Bank Name is required').min(3, 'A minimium of 3 characters'),
        bitcoin_wallet: yup.string().required('Your bitcoin Address is required'),
        ethereum_wallet: yup.string().required('Your Ethereum Address is required'),
        usdt_wallet: yup.string().required('Your USDT Address is required')
    }) 
 
    // formik
    const formik = useFormik({
        initialValues: {
            bitcoin_wallet: userContext.userData.bitcoin_wallet,
            ethereum_wallet: userContext.userData.ethereum_wallet,
            usdt_wallet: userContext.userData.usdt_wallet,
            account_name: userContext.userData.account_name,
            account_number: userContext.userData.account_number,
            bank_name: userContext.userData.bank_name
        },
        validationSchema: loginSchema,
        onSubmit: () => {},
    }); 


    const submit = async () => {

        if (!formik.dirty) {
            alert('You have to fill in th form to continue');
            return;
        }else if (!formik.isValid) {
            alert('You have to fill in the form correctly to continue');
            return;
        }else {
            setLoading(true)
            await fetch(`${BASEURL.URL}/user/edit/details/${localStorage.getItem('id')}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    bitcoin_wallet: formik.values.bitcoin_wallet,
                    ethereum_wallet: formik.values.ethereum_wallet,
                    usdt_wallet: formik.values.usdt_wallet,
                    account_name: formik.values.account_name,
                    account_number: formik.values.account_number,
                    bank_name: formik.values.bank_name 
                }),
            });
            
            setLoading(false)
            Router.reload()
        }
    }

    return (
        <div className='w-full h-auto ' >
            <p className='font-Inter-Bold text-base py-2' >My Wallet Addresses</p>
            <div className='w-full flex flex-col lg:flex-row mt-4 py-2' >
                <div className='w-full flex flex-col mr-4 ' >  
                    <div className='w-full flex flex-col py-3 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >BTC Address</p>
                        <Input 
                            name="bitcoin_wallet"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("bitcoin_wallet", true, true)
                            }  
                            variant="filled" fontSize='sm' size="lg" placeholder={userContext.userData.bitcoin_wallet} />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.bitcoin_wallet && formik.errors.bitcoin_wallet && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.bitcoin_wallet}
                                </motion.p>
                            )}
                        </div> 
                    </div> 
                    <div className='w-full flex flex-col py-3 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >USDT Address</p>
                        <Input  
                            name="usdt_wallet"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("usdt_wallet", true, true)
                            }  
                            variant="filled" fontSize='sm' size="lg" placeholder={userContext.userData.usdt_wallet} />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.usdt_wallet && formik.errors.usdt_wallet && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.usdt_wallet}
                                </motion.p>
                            )}
                        </div> 
                    </div> 
                </div>
                <div className='w-full flex flex-col py-3 lg:ml-4 ' > 
                    <p className='font-Inter-SemiBold text-xs pb-2' >ETH Address</p>
                    <Input  
                        name="ethereum_wallet"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("ethereum_wallet", true, true)
                        }  
                        variant="filled" fontSize='sm' size="lg" placeholder={userContext.userData.ethereum_wallet} />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.ethereum_wallet && formik.errors.ethereum_wallet && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.ethereum_wallet}
                            </motion.p>
                        )}
                    </div> 
                </div>
            </div> 
            <p className='font-Inter-Bold text-base py-2' >My Bank</p>
            <div className='w-full flex flex-col lg:flex-row mt-4 py-2' >
                <div className='w-full flex flex-col mr-4 ' >  
                    <div className='w-full flex flex-col py-3 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >Enter Bank Name</p>
                        <Select  
                            name="bank_name"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("bank_name", true, true)
                            }  
                            variant="filled" fontSize='sm' size="lg" placeholder={userContext.userData.bank_name} >
                            {!isLoading && (
                                <>
                                    {data.data.map((item: any)=> {
                                        return(
                                            <option>{item.name}</option>
                                        )
                                    })}
                                </>
                            )}
                        </Select>
                        <div className="w-full h-auto pt-2">
                            {formik.touched.bank_name && formik.errors.bank_name && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.bank_name}
                                </motion.p>
                            )}
                        </div> 
                    </div> 
                    <div className='w-full flex flex-col py-3 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >Account Number</p>
                        <Input  
                            name="account_number" 
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("account_number", true, true)
                            }   
                            variant="filled" fontSize='sm' size="lg" placeholder={userContext.userData.account_number} />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.account_number && formik.errors.account_number && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.account_number}
                                </motion.p>
                            )}
                        </div> 
                    </div> 
                </div>
                <div className='w-full flex flex-col py-3 lg:ml-4 ' > 
                    <p className='font-Inter-SemiBold text-xs pb-2' >Name On Account</p>
                    <Input  
                        name="account_name"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("account_name", true, true)
                        }  
                        variant="filled" fontSize='sm' size="lg" placeholder={userContext.userData.account_name} />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.account_name && formik.errors.account_name && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.account_name}
                            </motion.p>
                        )}
                    </div> 
                </div>
            </div> 
            <button onClick={()=> submit()} className='font-Inter-SemiBold flex items-center text-xs h-10 text-white mt-8 bg-heritagebutton rounded px-6' >
                {!loading ? 
                    <div className='py-1' >
                        UPDATE
                    </div>:
                    <>
                        <div className="animate-spin rounded-full h-6 w-6 mr-4 border-t-2 border-b-2 border-white"></div>
                        LOADING
                    </>
                } 
            </button>
        </div>
    );
}
