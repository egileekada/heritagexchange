import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'

export default function NavbarTop(props: any) { 

    return (
        <div style={{backgroundColor: '#1123AB'}} className='w-full flex items-center justify-center text-white flex-row py-8 px-4' >
            <p className='font-Inter-Bold text-lg ' >Heritage <span className='font-Inter-Regular' >Exchange</span></p>
            <div className='w-full flex flex-1' />
            <div onClick={()=>props.tab('Profile')} className='w-10 h-10 rounded-full mr-2 bg-red-300' >

            </div>
            <div style={{backgroundColor:'#FFFFFF17'}}  className='w-auto relative h-auto p-3 rounded-full' >
                <div style={{backgroundColor:'#EB982A'}} className=' fixed w-3 h-3 rounded-full right-4 top-9' />
                <IoIosNotificationsOutline className='w-8 h-7 ' />
            </div>
        </div>
    )
}
