import { Input, Link } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react' 
import { motion } from 'framer-motion'; 
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { IUser, UserContext } from '../context/UserContext';
import Router from 'next/router'

export default function login() {

    const [showpassword, setShowpass] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [modal, setShowModal] = React.useState(0) 

    const handleShowpassword = () => {
        setShowpass(prev => !prev);
    } 

    // React.useEffect(() => { 
    //     const token = localStorage.getItem('token')
    //     if(token ){
    //         Router.push('/dashboard')
    //     }
    // });

    const loginSchema = yup.object({ 
        email: yup.string().email('This email is not valid').required('Your email is required'),
        password: yup.string().required('Your password is required').min(8, 'A minimium of 8 characters')
    }) 

    // formik
    const formik = useFormik({
        initialValues: {email: '', password: ''},
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
            const request = await fetch(`https://heritage-server.herokuapp.com/auth/login`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formik.values),
            });
    
            const json = await request.json();
    
            if (request.status === 200) {   
                localStorage.setItem('token', json.data.token); 
                localStorage.setItem('id', json.data.user._id); 
                localStorage.setItem('details', JSON.stringify(json.data.user))
                // console.log(json) 
                setShowModal(1)
                const t1 = setTimeout(() => { 
                    setShowModal(0)
                    Router.push('/dashboard'); 
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
                <title>HX - Login</title>
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
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Medium' >Login Successful</p>
                    </div>
                </motion.div>
            :null}
            {modal === 2 ?  
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-red-500 px-4 py-2 flex justify-center items-center ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Bold' >Incorrect Email or Password</p>
                    </div>
                </motion.div>
            :null}
            {modal === 3 ?  
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-red-500 px-4 py-2 flex justify-center items-center ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Bold' >Please Enter Your Email And Password</p>
                    </div>
                </motion.div>
            :null}
            <div className='w-full h-screen flex flex-row bg-white' >
                <div className=' bg-heritagecolor w-full h-screen lg:flex text-white flex-col pt-20 px-10  hidden' >
                    <div className='flex items-center' >
                        <svg onClick={()=> Router.push('/')} className='mr-4 cursor-pointer' width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1L1 8L8 15" stroke="#FFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className='font-Inter-ExtraBold text-3xl'>HX</p>
                    </div>
                    <p className='font-Inter-ExtraBold text-3xl mt-8' >Buy, Sell And Save <span style={{color: '#617DEA'}} >Crypto</span></p>
                    <p className='font-Inter-Regular text-xs my-3 '>Heritage Exchange offers you a seamless, simple and secure way to buy, sell and<br/> save cryptocurrency</p>
                    <div className='w-full flex justify-center items-center' >
                        <img src='/assets/images/LoginBg.png' alt='login' style={{width: '450px'}} className=' h-auto  ' />
                    </div>
                </div>
                <div className='w-full h-full flex justify-center items-center ' >
                    <div className='bg-white w-full h-full flex justify-center flex-col py-14 px-6 lg:px-40 rounded-lg' >
                        <div className='flex items-center mb-8' >
                            <svg onClick={()=> Router.push('/')} className='mr-4 cursor-pointer flex lg:hidden' width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1L1 8L8 15" stroke="#192F5D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className='font-Inter-ExtraBold text-2xl text-esdiac_text flex lg:hidden'>HX</p>
                        </div>
                        <p className='font-Inter-SemiBold text-xl text-esdiac_text' >Glad To See You Back</p>
                        <p className='font-Inter-Regular my-2 text-xs text-esdiac_text' >Sign In To Your Account To Continue</p>
                        <div className='w-full flex flex-col py-4' >  
                            <div className='relative w-full flex font-Inter-Regular flex-col py-2 ' > 
                                <p className='font-Inter-Medium text-xs' >Email Address</p>
                                <Input 
                                    name="email"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("email", true, true)
                                    }  
                                    placeholder="John@gmail.com" size="lg" className=' mt-2 bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='xs' borderColor="#F6F6F6" color="#200E32"/>
                           
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
                            <div className=' relative w-full flex font-Inter-Regular flex-col py-2 ' > 
                                <p className='font-Inter-Medium text-xs' >Password</p>
                                <Input
                                    name="password"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("password", true, true)
                                    } 
                                    type={showpassword ? "text" : "password"} placeholder="Password" size="lg" className=' mt-2 bg-gray_bg  border-gray_bg text-primary'  bg="#F6F6F6" focusBorderColor='white' fontSize='xs' borderColor="#F6F6F6" color="#200E32"/>
                                <p onClick={()=> handleShowpassword()} style={{color: '#00191AA6', marginTop: '39px'}} className=' font-Inter-Medium cursor-pointer z-10 absolute lg:ml-70 right-4 text-sm ' >SHOW</p>
                             
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.password && formik.errors.password && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Inter-Regular text-errorRed"
                                        >
                                            {formik.errors.password}
                                        </motion.p>
                                    )}
                                </div>
                            </div> 
                            <Link href='/recovery'>
                                <p className='font-Heebo-Regular text-xs text-right cursor-pointer' >Forgot Password?</p>
                            </Link> 
                        </div>  
                        
                        <button onClick={()=> submit()} className='w-full py-3 flex justify-center items-center text-white font-Inter-Bold text-xs mr-2 mt-4 bg-heritagebutton rounded-md' >
                            {!loading ? 
                                <div className='py-1' >
                                    SIGN IN
                                </div>:
                                <>
                                    <div className="animate-spin rounded-full h-6 w-6 mr-4 border-t-2 border-b-2 border-white"></div>
                                    LOADING
                                </>
                            } 
                        </button>
                        
                        <div className='w-full flex justify-center items-center mt-10' >
                            <p className='font-Heebo-Regular text-xs flex ' >Don't Have An Account? <Link href='/register'><p className='cursor-pointer ml-1 font-Heebo-Regular text-xs' style={{color:'#0E20BE'}} >Create an Account</p></Link></p>
                        </div>
                    </div>
                </div> 
            </div>      
        </div> 
    )
}
