import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { Input } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IoIosArrowBack } from 'react-icons/io';
import Router from 'next/router'

export default function ChangePassoword() {

    const [tab, setTab] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [modal, setShowModal] = React.useState(0)  
    const [otp, setOtp] = React.useState('')  

    const [showpassword, setShowpass] = React.useState(false); 
    const [showpassword2, setShowpass2] = React.useState(false); 

    const handleShowpassword = () => {
        setShowpass(prev => !prev);
    } 

    const OnChangeHandler = (item: any) => {
        setOtp(item)
    } 

    const handleShowpassword2 = () => {
        setShowpass2(prev => !prev);
    } 

    const loginSchema = yup.object({
        newpassword: yup.string().required('Required'), 
        confirmpassword: yup.string().required('Required'),
    }) 

    // formik
    const formik = useFormik({
        initialValues: {
            newpassword: "",
            confirmpassword: ""},
        validationSchema: loginSchema,
        onSubmit: () => {},
    }); 

    const submit = async () => {

        if (!formik.dirty) { 
            setShowModal(3)
            const t1 = setTimeout(() => {  
                clearTimeout(t1);
                setShowModal(0)
            }, 1000); 
            setLoading(false);
            return;
        }else if (!formik.isValid) { 
            setShowModal(3)
            const t1 = setTimeout(() => {  
                clearTimeout(t1);
                setShowModal(0)
            }, 1000); 
            setLoading(false);
            return;
        }else {
            setLoading(true);
            const request = await fetch(`https://heritage-server.herokuapp.com/auth/resetpassword/${otp}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formik.values),
            }); 
    
            if (request.status === 200) {    
                // console.log(json) 
                setShowModal(1)
                const t1 = setTimeout(() => { 
                    setShowModal(0)
                    Router.push('/login'); 
                    clearTimeout(t1);
                }, 3000);  
            }else {
                setShowModal(2)
                const t1 = setTimeout(() => { 
                    setShowModal(0) 
                    clearTimeout(t1);
                }, 3000);  
                setLoading(false);
            } 
        }
    }

    return ( 
        <div className='bg-white w-full h-full flex justify-center flex-col py-24 px-6 lg:px-40 rounded-lg' > 
            {modal === 1 ? 
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-green-400 px-4 py-2 flex justify-center items-center ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Medium' >Password Changed Successful</p>
                    </div>
                </motion.div>
            :null}
            {modal === 2 ?  
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-red-500 px-4 py-2 flex justify-center items-center ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Bold' >Error Changing Password</p>
                    </div>
                </motion.div>
            :null}
            {modal === 3 ?  
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-red-500 px-4 py-2 flex justify-center items-center ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Bold' >Please Enter Your Password</p>
                    </div>
                </motion.div>
            :null}
            <p className='font-Inter-ExtraBold text-2xl text-esdiac_text flex lg:hidden mb-8'>HX</p> 
            {!tab && (
                <> 
                    <div className=' flex items-center ' > 
                        <div className=' ' > 
                            <p className='font-Inter-SemiBold text-xl text-esdiac_text' >Forgot Password</p>
                            <p className='font-Inter-Regular my-2 text-xs text-esdiac_text' >We’ll send you a link to reset your password via email</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col py-4' > 
                        <div className='relative w-full flex flex-col py-4 ' > 
                            <p className='Inter-Medium text-xs' >OTP</p>
                            <Input 
                                name="email"
                                onChange={(e)=> OnChangeHandler(e.target.value)} 
                                placeholder="Enter OTP" size="lg" className=' mt-2 bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='sm' borderColor="#F6F6F6" color="#200E32"/> 
                            {/* <div className="w-full h-auto pt-2">
                                {formik.touched. && formik.errors.email && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.email}
                                    </motion.p>
                                )}
                            </div> */}
                        </div>  
                    </div> 
                    <button disabled={otp.length === 4 ? false: true} onClick={()=> setTab(true)}  className='w-full h-12 flex justify-center items-center text-white font-Inter-Bold text-xs mr-2 mt-4 bg-heritagebutton rounded-md' > 
                        <div className='py-1' >
                            Submit OTP
                        </div> 
                    </button> 
                </>
            )}
            {tab && (
                <>  
                    <div className=' flex items-center -ml-11 ' >
                        <button onClick={()=> setTab(false)} ><IoIosArrowBack size={30} /></button>
                        <div className=' ml-3 ' > 
                            <p className='font-Inter-SemiBold text-xl text-esdiac_text' >Change Password</p>
                            {/* <p className='font-Inter-Regular my-2 text-xs text-esdiac_text' >We’ll send you a link to reset your password via email</p> */}
                        </div>
                    </div>
                    <div className='w-full flex flex-col py-4' >  
                        <div className='relative w-full flex font-Inter-Regular flex-col py-2 ' > 
                            <p className='font-Inter-Medium text-xs' >New Password</p>
                            <Input
                                name="newpassword"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("newpassword", true, true)
                                } 
                                type={showpassword ? "text" : "password"} placeholder="New Password" size="lg" className=' mt-2 bg-gray_bg  border-gray_bg text-primary'  bg="#F6F6F6" focusBorderColor='white' fontSize='xs' borderColor="#F6F6F6" color="#200E32"/>
                            <p onClick={()=> handleShowpassword()} style={{color: '#00191AA6', marginTop: '39px'}} className=' font-Inter-Medium cursor-pointer z-10 absolute lg:ml-70 right-4 text-sm ' >SHOW</p>
                            
                            <div className="w-full h-auto pt-2">
                                {formik.touched.newpassword && formik.errors.newpassword && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.newpassword}
                                    </motion.p>
                                )}
                            </div>
                        </div> 
                        <div className=' relative w-full flex font-Inter-Regular flex-col py-2 ' > 
                            <p className='font-Inter-Medium text-xs' >Confirm Password</p>
                            <Input
                                name="confirmpassword"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("confirmpassword", true, true)
                                } 
                                type={showpassword2 ? "text" : "password"} placeholder="Confirm Password" size="lg" className=' mt-2 bg-gray_bg  border-gray_bg text-primary'  bg="#F6F6F6" focusBorderColor='white' fontSize='xs' borderColor="#F6F6F6" color="#200E32"/>
                            <p onClick={()=> handleShowpassword2()} style={{color: '#00191AA6', marginTop: '39px'}} className=' font-Inter-Medium cursor-pointer z-10 absolute lg:ml-70 right-4 text-sm ' >SHOW</p>
                            
                            <div className="w-full h-auto pt-2">
                                {formik.touched.confirmpassword && formik.errors.confirmpassword && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.confirmpassword}
                                    </motion.p>
                                )}
                            </div>
                        </div> 
                    </div>
                    <button onClick={()=> submit()}  className='w-full h-12 flex justify-center items-center text-white font-Inter-Bold text-xs mr-2 mt-4 bg-heritagebutton rounded-md' >
                        {!loading ? 
                            <div className='py-1' >
                                Change Password
                            </div>:
                            <>
                                <div className="animate-spin rounded-full h-6 w-6 mr-4 border-t-2 border-b-2 border-white"></div>
                                LOADING
                            </>
                        } 
                    </button> 
                </>
            )}
        </div>
    )
}
