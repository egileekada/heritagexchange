import React from 'react'

export default function AboutPage() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center my-4 py-12 px-8' >
            <p className='text-4xl font-Inter-Bold py-4'>What people say about <span style={{color:'#091BAAF2'}} className='font-Inter-Medium'>our platform</span></p>
            <div className='w-full flex flex-row py-12' >
                <div className='w-full mx-2' >
                    <div className='w-full h-64 rounded-lg bg-green-100' >

                    </div>
                    <div className=' w-full flex flex-row pt-10' >
                        <img src='/assets/images/Amazon.png' className='w-24 h-8' />
                        <div className=' w-auto flex flex-col ml-8' >
                            <p className=' w-84 font-Inter-Medium text-xs' >I have used this exchange to buy and sell cryptocurrency and it has been the best experience ever. I totally recommend you use this</p>
                            <p className='font-Inter-SemiBold text-sm mt-2'>Johnson Agu</p>
                        </div>
                    </div>
                </div>
                <div className='w-full mx-2' >
                    <div className='w-full h-64 rounded-lg bg-green-100' >

                    </div>
                    <div className=' w-full flex flex-row pt-10' >
                        <img src='/assets/images/Amazon.png' className='w-24 h-8' />
                        <div className=' w-auto flex flex-col ml-8' >
                            <p className=' w-84 font-Inter-Medium text-xs' >I have used this exchange to buy and sell cryptocurrency and it has been the best experience ever. I totally recommend you use this</p>
                            <p className='font-Inter-SemiBold text-sm mt-2'>Johnson Agu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
