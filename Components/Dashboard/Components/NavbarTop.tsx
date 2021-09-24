import React from 'react'

export default function NavbarTop(props: any) { 

    return (
        <div style={{backgroundColor: '#1123AB'}} className='w-full flex items-center justify-center text-white flex-row py-8 px-4' >
            <p className='font-Inter-Bold text-lg ' >Heritage <span className='font-Inter-Regular' >Exchange</span></p>
            <div className='w-full flex flex-1' />
            <div className='w-10 h-10 rounded-full bg-red-300' >

            </div>
        </div>
    )
}
