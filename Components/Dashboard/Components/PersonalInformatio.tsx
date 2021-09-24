import { Input } from '@chakra-ui/react'
import React from 'react'

export default function PersonalInformatio() {
    return (
        <div className='w-full h-auto' > 
            <div className='w-full flex flex-col lg:flex-row mt-4 py-2' >
                <div className='w-full flex flex-col mr-4 ' >  
                    <div className='w-full flex flex-col py-3 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >First Name</p>
                        <Input variant="filled" fontSize='sm' size="lg" /> 
                    </div> 
                    <div className='w-full flex flex-col py-3 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >Email Address</p>
                        <Input variant="filled" fontSize='sm' size="lg" />
                    </div> 
                </div>  
                <div className='w-full flex flex-col lg:ml-4 ' >  
                    <div className='w-full flex flex-col py-3 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >Last Name</p>
                        <Input placeholder='' variant="filled" fontSize='sm' size="lg" /> 
                    </div> 
                    <div className='w-full flex flex-col py-3 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >Phone Number</p>
                        <Input variant="filled" fontSize='sm' size="lg" />
                    </div> 
                </div>  
            </div>     
            <button className='font-Inter-SemiBold text-xs h-10 text-white mt-8 bg-heritagebutton rounded px-6' >Update</button>
        </div>
    )
}
