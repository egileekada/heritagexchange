import React from 'react'

export default function AppStore() {
    return (
        <div style={{backgroundColor:'#F4F5FC'}} className='w-full h-auto flex flex-row pt-8' >
            <div className=' w-full text-left h-auto flex flex-col justify-center items-center' >
                <div>
                    <p className='text-4xl font-Inter-Bold'>Download our <span style={{color:'#091BAAF2'}} className='font-Inter-Medium' >mobile app</span></p>
                    <p className='w-98 text-xs my-6' style={{color:'#001A33'}}>Our app is available for iOS on Apple App Store and for Android on Google Play Store</p>
                    <div className='flex flex-row' >
                        <div style={{backgroundColor:'#0F1542'}} className='w-44 flex justify-center items-center mr-2 flex-row py-1 px-8 rounded-md' >
                            <div className=' flex flex-col text-white ' >
                                <p className='font-Inter-Regular text-xs' >Download on the</p>
                                <p className='font-Inter-SemiBold text-base'>App Store</p>
                            </div>
                        </div>
                        <div style={{backgroundColor:'#0F1542'}} className='w-44 flex justify-center items-center mx-2 flex-row py-1 px-8 rounded-md' >
                            <div className='flex flex-col text-white ' >
                                <p className='font-Inter-Regular text-xs' >Get it on</p>
                                <p className='font-Inter-SemiBold text-base'>Google Play</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div className='w-full flex justify-center items-center' >
                <img src='/assets/images/MobileApp.png' className='w-84'  />
            </div>
        </div>
    )
}
