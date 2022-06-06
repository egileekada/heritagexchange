import React from 'react'

export default function AboutPage() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center my-4 py-12 px-8' >
            <p className='lg:text-4xl text-xl font-Inter-Bold py-4'>What people say about <span style={{color:'#091BAAF2'}} className='font-Inter-Medium'>our platform</span></p>
            <div className='w-full flex flex-col lg:flex-row py-12' >
                <div className='w-full lg:mx-2' >
                    <div className='w-full h-64 rounded-lg' > 
                        <img src='/assets/images/Platform1.png' className='w-full h-full object-cover rounded-lg ' />
                    </div>
                    <div className=' w-full flex flex-col lg:flex-row pt-10' >
                            <p className='font-Inter-ExtraBold text-2xl text-esdiac_text flex'>HX</p>
                        <div className=' w-auto flex flex-col mt-4 lg:mt-0 lg:ml-8' >
                            <p className=' lg:w-84 w-full  font-Inter-Medium text-xs' >I have used this exchange to buy and sell cryptocurrency and it has been the best experience ever. I totally recommend you use this</p>
                            <p className='font-Inter-SemiBold text-sm mt-2'>Khadija Nadia</p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:mx-2 lg:mt-0 mt-8' >
                    <div className='w-full h-64 rounded-lg' >
                        <img src='/assets/images/Platform.png' className='w-full h-full object-cover rounded-lg ' />
                    </div>
                    <div className=' w-full flex flex-col lg:flex-row pt-10' >
                            <p className='font-Inter-ExtraBold text-2xl text-esdiac_text flex'>HX</p>
                        <div className=' w-auto flex flex-col mt-4 lg:mt-0 lg:ml-8' >
                            <p className=' lg:w-84 w-full font-Inter-Medium text-xs' >I have used this exchange to buy and sell cryptocurrency and it has been the best experience ever. I totally recommend you use this</p>
                            <p className='font-Inter-SemiBold text-sm mt-2'>Laura Madueke</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
