import React from 'react'
import { IoIosNotificationsOutline, IoMdContact } from 'react-icons/io'

export default function NavbarTop(props: any) { 

    return (
        <div style={{backgroundColor: '#1123AB'}} className='w-full fixed top-0 z-50 flex items-center justify-center text-white flex-row py-8 px-4' >
            <p className='font-Inter-Bold text-lg ' >Heritage <span className='font-Inter-Regular' >Exchange</span></p>
            <div className='w-full flex flex-1' />
            <IoMdContact onClick={()=>props.tab('Profile')} className='w-10 h-10 rounded-full mr-2' />

            {/* </div> */}
            <div style={{backgroundColor:'#FFFFFF17'}} onClick={()=> props.tab('Notify')}  className='w-auto relative h-auto p-2 rounded-full' >
                <div style={{backgroundColor:'#EB982A'}} className=' absolute w-3 h-3 rounded-full right-1 top-0' />
                <IoIosNotificationsOutline className='w-7 h-7 ' />
            </div>
        </div>
    )
}
