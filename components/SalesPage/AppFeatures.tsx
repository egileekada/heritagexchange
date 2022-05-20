import React from 'react'
import Router from 'next/router'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { motion } from 'framer-motion';

export default function AppFeature() {
 
    const loginSchema = yup.object({ 
        email: yup.string().email('This email is not valid').required('Your email is required'), 
    }) 

    const [modal, setShowModal] = React.useState(0) 
    // formik
    const formik = useFormik({
        initialValues: {email: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    }); 

    React.useEffect(() => { 
    }, [])

    const ClickHandler =()=> { 
        if (!formik.dirty) {   
            setShowModal(3)
            const t1 = setTimeout(() => {  
                clearTimeout(t1);
                setShowModal(0)
            }, 1000);  
          return;
        }else if (!formik.isValid) { 
            setShowModal(3)
            const t1 = setTimeout(() => {  
                clearTimeout(t1);
                setShowModal(0)
            }, 1000);  
          return;
        }else {
            sessionStorage.setItem('email', formik.values.email)
            Router.push('/register')
        }
    }
    
    return (
        <div  className='w-full h-full flex flex-col ' > 
        {modal === 3 ?  
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                <div className=' w-full bg-red-500 px-4 py-2 flex justify-center items-center ' > 
                    <p style={{color: '#FFF', fontSize: '16px'}} className='font-Inter-Bold' >Enter A valid Email</p>
                </div>
            </motion.div>
        :null} 
            <div className='w-full flex flex-col lg:justify-center lg:items-center lg:px-0 px-6 mt-48' >
                <p className='font-Inter-Bold lg:text-4xl text-xl text-white' >Buy, Sell And Save <span style={{color: '#617DEA'}}>Crypto</span></p>
                <p className=' lg:w-500px font-Inter-Regular text-xs text-white lg:text-center my-4'>Heritage Exchange offers you a seamless, simple and secure way to buy, sell and save cryptocurrency</p>
                <div className='w-full flex lg:flex-row flex-col lg:justify-center lg:items-center mt-8 mb-16' >
                    <input 
                        name="email"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("email", true, true)
                        } style={{backgroundColor:'#495696'}} placeholder='Enter your email' className='bg-black lg:w-64 w-full h-12 lg:mx-2 pl-5 flex justify-center items-center px-2 rounded font-Inter-Regular text-sm text-white' />
                    <button onClick={()=> ClickHandler()} style={{backgroundColor:'#1526A7'}} className='h-12 lg:mt-0 mt-4 w-28 lg:w-auto lg:mx-2 font-Inter-SemiBold text-sm rounded px-4 text-white' >Get Started</button>
                </div>
            </div>
            <div className='w-full h-auto relative' > 
                <img src='/assets/images/Exchange.png' className='lg:w-56 w-36 h-auto -top-8 absolute right-2 lg:right-10 z-20 ' />
                <img src='/assets/images/DashboardImage.png' className='w-full h-auto hidden lg:flex ' />
                <img src='/assets/images/DashboardImageMobile.png' className='w-full h-auto lg:hidden ' />
            </div>
        </div>
    )
}
