import { Input, Link } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion'; 
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import Router from 'next/router'

export default function register() { 

    const [showpassword, setShowpass] = React.useState(false); 
    const [loading, setLoading] = React.useState(false);
    const [modal, setShowModal] = React.useState(0) 
    const [value, setValue] = React.useState('') 
    const [newvalue, setNewValue] = React.useState('') 

    const handleShowpassword = () => {
        setShowpass(prev => !prev);
    } 

    React.useEffect(() => { 
        const token = localStorage.getItem('token')
            // localStorage.setItem('email', formik.values.email)
        if(token){
            Router.push('/dashboard')
        }

        if(sessionStorage.getItem('email')){
            setValue(sessionStorage.getItem('email')+'') 
            formik.setFieldValue('email', value)
        }else {
            setValue('')
        } 
    },[value]);

    console.log()

    const loginSchema = yup.object({
        first_name: yup.string().required('Your FirstName is required'),
        last_name: yup.string().required('Your LastName is required'),
        email: yup.string().email('This email is not valid').required('Your email is required'),
        password: yup.string().required('Your password is required').min(8, 'A minimium of 8 characters')
    }) 

    // formik
    const formik = useFormik({
        initialValues: {first_name: '', last_name: '', email: '', password: ''},
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
            const request = await fetch(`https://heritage-server.herokuapp.com/auth/signup`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({first_name: formik.values.first_name, last_name: formik.values.last_name, email: value, password: formik.values.password}),
            });
    
            const json = await request.json();
    
            if (request.status === 200) {   
                localStorage.setItem('token', json.data.token); 
                localStorage.setItem('id', json.data.user._id); 
                localStorage.setItem('details', JSON.stringify(json.data.user))
                setLoading(false); 
                setShowModal(1)
                const t1 = setTimeout(() => { 
                    setShowModal(0)
                    Router.push('/verify'); 
                    clearTimeout(t1);
                }, 3000); 
  
                setLoading(false);


                await fetch(`https://heritage-server.herokuapp.com/auth/verify/${json.data.user._id}`, {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    }, 
                });

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

    const OnchangeHandler =(e: any)=> {
        localStorage.setItem('email', e.target.value)
        // formik.handleChange(e)
    } 

    return (
        <div className=' w-full h-full overflow-x-hidden flex flex-col flex-1' >
            <Head>
                <title>HX - Register</title>
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
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Medium' >Login Successfull</p>
                    </div>
                </motion.div>
            :null}
            {modal === 2 ?  
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-red-500 px-4 py-2 flex justify-center items-center ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Bold' >Email Already Exist</p>
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
            {modal === 4 ? 
                <> 
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="h-auto flex items-center justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className=' w-auto bg-white px-4 py-8 flex flex-col justify-center items-center ' > 
                            <p style={{  fontSize: '16px'}} className='font-Inter-Bold' >Will You Like To Continue With This {newvalue}</p>
                            <div className='flex items-center' >
                                <button onClick={()=> setShowModal(0)}  className='w-24 py-3 flex justify-center items-center border border-black text-black font-Inter-Bold text-xs mr-2 mt-4 bg-white rounded-md' >No</button>
                                <button onClick={()=> submit()}  className='w-24 py-3 flex justify-center items-center text-white font-Inter-Bold text-xs ml-2 mt-4 bg-heritagebutton rounded-md' >Yes</button>
                            </div>
                        </div>
                    </motion.div>
                    <div className="opacity-25 fixed flex flex-1 inset-0 z-40 bg-black"/>
                </>
            :null}
            <div className='w-screen lg:h-screen flex flex-row bg-white' >
                <div className=' bg-heritagecolor w-full h-full lg:flex text-white flex-col pt-20 px-10  hidden' >
                    <div className='flex items-center' >
                        <svg onClick={()=> Router.push('/')} className='mr-4 cursor-pointer' width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1L1 8L8 15" stroke="#FFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className='font-Inter-ExtraBold text-3xl'>HX</p>
                    </div>
                    <p className='font-Inter-ExtraBold text-3xl mt-8' >Buy, Sell And Save <span style={{color: '#617DEA'}} >Crypto</span></p>
                    <p className='font-Inter-Regular text-xs my-3 '>Heritage Exchange offers you a seamless, simple and secure way to buy, sell and<br/> save cryptocurrency</p>
                    <img src='/assets/images/LoginBg.png' alt='login' style={{width: '450px'}} />
                </div>
                <div className='w-full h-auto overflow-y-auto ' >
                    <div className='bg-white w-full h-auto flex justify-center flex-col py-14 px-6 lg:px-40 rounded-lg' >
                        <div className='flex items-center mb-8' >
                            <svg onClick={()=> Router.push('/')} className='mr-4 cursor-pointer flex lg:hidden' width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1L1 8L8 15" stroke="#192F5D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className='font-Inter-ExtraBold text-2xl text-esdiac_text flex lg:hidden'>HX</p>
                        </div>
                        <p className='font-Inter-SemiBold text-xl text-esdiac_text' >Create Your Account</p>
                        <p className='font-Inter-Regular my-2 text-xs text-esdiac_text' >Sign In To Your Account To Continue</p>
                        <div className='w-full flex flex-col py-4 ' > 

                            <div className='relative w-full flex font-Inter-Regular flex-col py-2 ' > 
                                <p className='font-Inter-Medium text-xs' >First Name</p>
                                <Input 
                                    name="first_name"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("first_name", true, true)
                                    }  
                                    placeholder="First Name" size="lg" className=' mt-2 bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='xs' borderColor="#F6F6F6" color="#200E32"/>
                                
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.first_name && formik.errors.first_name && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Inter-Regular text-errorRed"
                                        >
                                            {formik.errors.first_name}
                                        </motion.p>
                                    )}
                                </div>
                            </div> 

                            <div className='relative w-full flex font-Inter-Regular flex-col py-2 ' > 
                                <p className='font-Inter-Medium text-xs' >Last Name</p>
                                <Input 
                                    name="last_name"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("last_name", true, true)
                                    }  
                                    placeholder="Last Name" size="lg" className=' mt-2 bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='xs' borderColor="#F6F6F6" color="#200E32"/>
                                
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.last_name && formik.errors.last_name && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Inter-Regular text-errorRed"
                                        >
                                            {formik.errors.last_name}
                                        </motion.p>
                                    )}
                                </div>
                            </div> 
                            <div className='relative w-full font-Inter-Regular flex flex-col py-2 ' > 
                                <p className='font-Inter-Medium text-xs' >Email Address</p>
                                <Input 
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
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
                            <div className=' relative w-full font-Inter-Regular flex flex-col py-2 ' > 
                                <p className='font-Inter-Medium text-xs' >Password</p>
                                <Input
                                    name="password"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("password", true, true)
                                    } 
                                    type={showpassword ? "text" : "password"} placeholder="Password" size="lg" className=' mt-2 bg-gray_bg  border-gray_bg text-primary'  bg="#F6F6F6" focusBorderColor='white' fontSize='xs' borderColor="#F6F6F6" color="#200E32"/>
                                <p onClick={()=> handleShowpassword()} style={{color: '#00191AA6', marginTop: '38px'}} className=' font-Inter-Medium cursor-pointer z-10 absolute lg:ml-70 right-4 text-sm ' >SHOW</p>
                             
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
                        </div>  

                        <button onClick={()=> submit()}  className='w-full py-3 flex justify-center items-center text-white font-Inter-Bold text-xs mr-2 mt-4 bg-heritagebutton rounded-md' >
                            {!loading ? 
                                <div className='py-1' >
                                    SIGN UP
                                </div>:
                                <>
                                    <div className="animate-spin rounded-full h-6 w-6 mr-4 border-t-2 border-b-2 border-white"></div>
                                    LOADING
                                </>
                            } 
                        </button>
                         
                        <div className='w-full flex justify-center items-center mb-8 mt-10' >
                            <p className='font-Inter-Regular text-xs flex ' >Already Have An Account? <Link href='/login'><p className='cursor-pointer ml-1 font-Heebo-Regular text-xs' style={{color:'#0E20BE'}} >Sign In</p></Link></p>
                        </div>
                    </div>
                </div> 
            </div>      
        </div> 
    )
}
