import { Input } from '@chakra-ui/react'
import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'

export default function Settings(props: any) {
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
                            <Input variant="filled" fontSize='sm' size="lg" /> 
                        </div> 
                        <div className='w-full flex flex-col py-3 ' > 
                            <p className='font-Inter-SemiBold text-xs pb-2' >New Password</p>
                            <Input variant="filled" fontSize='sm' size="lg" />
                        </div> 
                    </div>
                    <div className='w-full flex flex-col py-3 lg:ml-4 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >Confirm New Password</p>
                        <Input variant="filled" fontSize='sm' size="lg" />
                    </div>
                </div> 
                <button className='font-Inter-SemiBold text-xs h-10 text-white mt-8 bg-heritagebutton rounded w-32' >Update</button>
            </div>  
        </div>
    )
}
