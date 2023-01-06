import { Input } from '@chakra-ui/input'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react' 
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import Footer from '../components/SalesPage/Footer'
import Navbar from '../components/SalesPage/Navbar'
import { Textarea } from '@chakra-ui/textarea'
import Router from 'next/router'
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BASEURL } from '../global/URL'

export default function support() { 
 
    const [modal, setShowModal] = React.useState(0) 
    const loginSchema = yup.object({ 
        email: yup.string().email('This email is not valid').required('Your email is required'),
        fullname: yup.string().required('Required'),
        message: yup.string().required('Required')
    }) 
    const [loading, setLoading] = React.useState(false);

    // formik
    const formik = useFormik({
        initialValues: {email: '', fullname: '', message: ''},
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
            const request = await fetch(`${BASEURL.URL}/support`, {
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
                    setLoading(false);
                    Router.push('/'); 
                    clearTimeout(t1);
                }, 2000);  
            }else {
                setShowModal(2)
                const t1 = setTimeout(() => { 
                    setShowModal(0) 
                    clearTimeout(t1);
                }, 2000);  
                setLoading(false);
            } 
        }
    }

  return (
    <div className='w-full h-full overflow-x-hidden ' >
        <Head>
        <title>HX-Support</title>
        <meta name="description" content="Heritage Exchange" />
        <link rel="icon" href="/favicon.ico" />
        </Head> 
        {modal === 1 ? 
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="h-12 flex justify-center top-0 overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                <div className=' w-full bg-green-400 px-4 py-2 flex justify-center items-center ' > 
                    <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Medium' >Message Sent</p>
                </div>
            </motion.div>
        :null}
        {modal === 2 ?  
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                <div className=' w-full bg-red-500 px-4 py-2 flex justify-center items-center ' > 
                    <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Bold' >Message Not Sent</p>
                </div>
            </motion.div>
        :null}
        <div className='w-full h-auto flex flex-col bg-heritagecolor' >  
            <div className='w-full h-auto fixed z-40' >
                <Navbar/>
            </div> 
        </div>
        <div className='w-full h-98 bg-heritagecolor flex items-center justify-center' >
            <p className='font-Inter-ExtraBold text-white text-5xl' >Support</p>
        </div>
        <div className='w-full flex lg:flex-row flex-col px-5 py-10 lg:px-20 lg:py-12' >
            <div className='w-full lg:pr-14' >
                <p className='font-Inter-Bold text-xl mb-4' >Leave Us A Message</p>
                <div className='relative w-full flex font-Inter-Regular flex-col py-2 ' > 
                    <p className='font-Inter-Medium text-xs' >Name</p>
                    <Input 
                        name="fullname"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("fullname", true, true)
                        }  
                        placeholder="Enter your name" size="lg" className=' mt-2 bg-gray_bg border-gray_bg text-primary '  bg="#4594C014" focusBorderColor='white' fontSize='xs' borderColor="#4594C014" color="#200E32"/>
                
                    <div className="w-full h-auto pt-2">
                        {formik.touched.fullname && formik.errors.fullname && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.fullname}
                            </motion.p>
                        )}
                    </div>
                </div> 
                <div className=' relative w-full flex font-Inter-Regular flex-col py-2 ' > 
                    <p className='font-Inter-Medium text-xs' >Email</p>
                    <Input 
                        name="email"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("email", true, true)
                        }  
                        placeholder="Enter your email" size="lg" className=' mt-2 bg-supportcolor border-supportcolor text-primary '  bg="#4594C014" focusBorderColor='white' fontSize='xs' borderColor="#4594C014" color="#200E32"/>
                
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
                    <p className='font-Inter-Medium text-xs' >Message</p>
                    <Textarea height='132px' 
                        name="message"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("message", true, true)
                        }  
                        placeholder="Let us know" size="lg" className=' mt-2 bg-supportcolor border-supportcolor text-primary '  bg="#4594C014" focusBorderColor='white' fontSize='xs' borderColor="#4594C014" color="#200E32"/>
                
                    <div className="w-full h-auto pt-2">
                        {formik.touched.message && formik.errors.message && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.message}
                            </motion.p>
                        )}
                    </div>
                </div> 
                <button onClick={()=> submit()} className='w-full py-3 flex justify-center items-center text-white font-Inter-Bold text-xs mr-2 mt-4 bg-heritagebutton rounded-md' >
                    {!loading ? 
                        <div className='py-1' >
                            Send
                        </div>:
                        <>
                            <div className="animate-spin rounded-full h-6 w-6 mr-4 border-t-2 border-b-2 border-white"></div>
                            LOADING
                        </>
                    } 
                </button>
            </div>
            <div className='w-full pt-14 pb-36 lg:pb-0 lg:pl-14 lg:pt-20 ' >
                <p className='font-Inter-Bold text-lg' >You can also reach us here</p>
                <div style={{backgroundColor: '#F8F9FF'}} className='mt-5 flex items-center py-8 rounded-md px-8' >
                    <HiOutlineMail size={30} className="mr-3"  />
                    <p className='font-Inter-Medium text-sm ' >Support@heritagexchange.com</p>
                </div>
                <div style={{backgroundColor: '#F8F9FF'}} className='mt-3 flex items-center py-8 rounded-md px-8' >
                <BsWhatsapp size={30} className="mr-3" />
                    <p className='font-Inter-Medium text-sm ' >+234 913 414 9633</p>
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}
