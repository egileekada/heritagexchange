import { Input, Link } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { motion } from 'framer-motion'; 

export default function recovery() {

    const [loading, setLoading] = React.useState(false);
    const [modal, setShowModal] = React.useState(0) 

    const loginSchema = yup.object({
        email: yup.string().required('Required'), 
    }) 

    // formik
    const formik = useFormik({
        initialValues: {email: ''},
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
                const request = await fetch(`https://heritage-server.herokuapp.com/auth/resetpassword`, {
                    method: 'POST',
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
                        // Router.push('/dashboard'); 
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
        <div className=' w-full h-full flex flex-col flex-1' >
            <Head>
                <title>HX - Recovery</title>
            </Head>
            {/* <div className='w-full h-auto bg-white' >
                <Navbar />
            </div> */}
            {modal === 1 ? 
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-green-400 px-4 py-2 flex justify-center items-center ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Medium' >Link Sent Successful</p>
                    </div>
                </motion.div>
            :null}
            {modal === 2 ?  
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-red-500 px-4 py-2 flex justify-center items-center ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Bold' >Error Sending Link</p>
                    </div>
                </motion.div>
            :null}
            {modal === 3 ?  
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-red-500 px-4 py-2 flex justify-center items-center ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Bold' >Please Enter Your Email</p>
                    </div>
                </motion.div>
            :null}
            <div className='w-full h-screen flex flex-row bg-white' >
                <div className=' bg-heritagecolor w-full h-screen lg:flex text-white flex-col pt-20 px-10  hidden' >
                    <p className='font-Inter-ExtraBold text-3xl'>HX</p>
                    <p className='font-Inter-ExtraBold text-3xl mt-8' >Buy, Sell And Save <span style={{color: '#617DEA'}} >Crypto</span></p>
                    <p className='font-Inter-Regular text-xs my-3 '>Heritage Exchange offers you a seamless, simple and secure way to buy, sell and<br/> save cryptocurrency</p>
                    <img src='/assets/images/LoginBg.png' alt='login' style={{width: '446px'}} className=' h-auto  ' />
                </div>
                <div className='w-full h-full flex justify-center items-center ' >
                    <div className='bg-white w-full h-full flex justify-center flex-col py-24 px-6 lg:px-40 rounded-lg' >
                        <p className='font-Inter-ExtraBold text-2xl text-esdiac_text flex lg:hidden mb-8'>HX</p>
                        <p className='font-Inter-SemiBold text-xl text-esdiac_text' >Forgot Password</p>
                        <p className='font-Inter-Regular my-2 text-xs text-esdiac_text' >We’ll send you a link to reset your password via email</p>
                        <div className='w-full flex flex-col py-4' > 
                            <div className='relative w-full flex flex-col py-4 ' > 
                                <p className='Inter-Medium text-xs' >Email Address</p>
                                <Input 
                                    name="email"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("email", true, true)
                                    }   placeholder="John@gmail.com" size="lg" className=' mt-2 bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='sm' borderColor="#F6F6F6" color="#200E32"/> 
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.email && formik.errors.email && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Inter-Regular text-errorRed"
                                        >
                                            {formik.errors.email}
                                        </motion.p>
                                    )}
                                </div>
                            </div>  
                        </div> 

                        <button onClick={()=> submit()}  className='w-full h-12 flex justify-center items-center text-white font-Inter-Bold text-xs mr-2 mt-4 bg-heritagebutton rounded-md' >
                            {!loading ? 
                                <div className='py-1' >
                                    Send Reset Link
                                </div>:
                                <>
                                    <div className="animate-spin rounded-full h-6 w-6 mr-4 border-t-2 border-b-2 border-white"></div>
                                    LOADING
                                </>
                            } 
                        </button>
                        {/* <Link href='/dashboard'>
                            <button className='w-full h-12 text-white font-Inter-Bold text-xs mr-2 mt-4 bg-heritagebutton rounded-md' >Send Reset Link</button>
                        </Link>  */}
 
                    </div>
                </div> 
            </div>      
        </div> 
    )
}
