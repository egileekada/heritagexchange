import { Input } from '@chakra-ui/react'
import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import Router from 'next/router'
import { motion } from 'framer-motion';

export default function Settings(props: any) {

    // const handleShowpassword = () => {
    //     setShowpass(prev => !prev);
    // } 
    const [showpassword, setShowpass] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [shownewpassword, setShowNewpass] = React.useState(false);
    const [showconfirmpassword, setShowConfirmpass] = React.useState(false);
 
    const loginSchema = yup.object({ 
        password: yup.string().required('Your password is required').min(8, 'A minimium of 8 characters'),
        newpassword: yup.string().required('Your password is required').min(8, 'A minimium of 8 characters')
    }) 

    // formik
    const formik = useFormik({
        initialValues: {newpassword: '', password: '', confirmpassword: ''},
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
            setLoading(true);
            const request = await fetch(`https://heritage-server.herokuapp.com/auth/changepassword/${localStorage.getItem('id')}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        newpassword: formik.values.newpassword,
                        confirmpassword: formik.values.newpassword
                    }
                ),
            });
            
            // setLoading(false)
            // Router.reload()
        }
    }
    return (
        <div className='w-screen lg:w-full h-screen pt-8 lg:pt-16 px-4 lg:pb-0 pb-48 lg:px-10 overflow-auto'  >
            <div className='w-full flex pb-8 flex-row items-center' >
                <div className='flex flex-col' >
                    <p className='font-Inter-Bold text-xl'>Settings</p>
                    <p style={{color:'#02142FA6'}} className='font-Inter-Regular text-xs'>Account Settings</p>
                </div>  
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.tab('Notify')} style={{backgroundColor:'#FFF'}}  className='w-auto hidden lg:flex mr-2 relative cursor-pointer h-auto p-3 rounded-full' >
                    <IoIosNotificationsOutline style={{color:'#3B4FE6D5'}} className='w-7 h-6' />
                </div>
            </div>  
            <div className='w-full h-auto bg-white flex flex-col py-8 rounded-md px-4 lg:px-10 py-5' >
                <p className='font-Inter-Bold text-base py-2' >Change Password</p>
                <div className='w-full flex flex-col lg:flex-row mt-4 py-2' >
                    <div className='w-full flex flex-col mr-4 ' >  
                        <div className='w-full flex flex-col py-3 ' > 
                            <p className='font-Inter-SemiBold text-xs pb-2' >Old Password</p>
                            <div className='w-full flex flex-col mt-2 justify-center relative ' >
                                <Input
                                    name="password"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("password", true, true)
                                    } 
                                    type={showpassword ? "text" : "password"} placeholder="Old Password" size="lg" className='  bg-gray_bg  border-gray_bg text-primary'  bg="#F6F6F6" focusBorderColor='white' fontSize='xs' borderColor="#F6F6F6" color="#200E32"/>
                                <p onClick={()=> setShowpass(prev => !prev)} style={{color: '#00191AA6'}} className=' font-Inter-Medium cursor-pointer z-10 absolute lg:ml-70 right-4 text-sm ' >SHOW</p>
                            </div>
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
                        <div className='w-full flex flex-col py-3 ' > 
                            <p className='font-Inter-SemiBold text-xs pb-2' >New Password</p>
                            <div className='w-full flex flex-col mt-2 justify-center relative ' >
                                <Input
                                    name="newpassword"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("newpassword", true, true)
                                    } 
                                    type={shownewpassword ? "text" : "password"} placeholder="New Password" size="lg" className='  bg-gray_bg  border-gray_bg text-primary'  bg="#F6F6F6" focusBorderColor='white' fontSize='xs' borderColor="#F6F6F6" color="#200E32"/>
                                <p onClick={()=> setShowNewpass(prev => !prev)} style={{color: '#00191AA6'}} className=' font-Inter-Medium cursor-pointer z-10 absolute lg:ml-70 right-4 text-sm ' >SHOW</p>
                            </div>
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
                    </div>
                    <div className='w-full flex flex-col py-3 lg:ml-4 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >Confirm New Password</p> 
                        <div className='w-full flex flex-col mt-2 justify-center relative ' >
                            <Input
                                name="confirmpassword"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("confirmpassword", true, true)
                                } 
                                type={showconfirmpassword ? "text" : "password"} placeholder="Confirm Password" size="lg" className='  bg-gray_bg  border-gray_bg text-primary'  bg="#F6F6F6" focusBorderColor='white' fontSize='xs' borderColor="#F6F6F6" color="#200E32"/>
                            <p onClick={()=> setShowConfirmpass(prev => !prev)} style={{color: '#00191AA6'}} className=' font-Inter-Medium cursor-pointer z-10 absolute lg:ml-70 right-4 text-sm ' >SHOW</p>
                        </div>
                             
                        <div className="w-full h-auto pt-2">
                            {formik.touched.confirmpassword && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.values.newpassword === formik.values.confirmpassword ? '': 'Password not valid'}
                                </motion.p>
                            )}
                        </div>
                    </div>
                </div> 
                <div className='w-auto' >
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
            </div>  
        </div>
    )
}
