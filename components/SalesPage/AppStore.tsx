import React from 'react'

export default function AppStore() {
    return (
        <div style={{backgroundColor:'#F4F5FC'}} className='w-full h-auto flex flex-col lg:flex-row pt-8' >
            <div className=' w-full lg:text-left h-auto flex flex-col justify-center items-center px-6' >
                {/* <div> */}
                    <p className='lg:text-4xl text-xl font-Inter-Bold'>Download our <span style={{color:'#091BAAF2'}} className='font-Inter-Medium' >mobile app</span></p>
                    <p className='lg:w-98 w-full text-xs my-6' style={{color:'#001A33'}}>Our app is available for iOS on Apple App Store and for Android on Google Play Store</p>
                    <div className='w-full flex flex-row justify-center items-center' >
                        <div style={{backgroundColor:'#0F1542'}} className='lg:w-40 w-full py-1 flex justify-center items-center cursor-pointer mr-2 flex-row rounded-md' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className='mr-2' viewBox="0 0 32 32">
                                {/* <defs><style>.a{fill:none;}.b{fill:#fff;}</style></defs> */}
                                <rect className='fill-current text-transparent' width="32" height="32"/>
                                <path className='fill-current text-white' d="M2.742,23.249c-2.228-3.058-3.964-8.616-1.637-12.4A6.453,6.453,0,0,1,6.483,7.769c1.708-.032,3.292,1.082,4.34,1.082,1.028,0,2.987-1.334,5.006-1.135a6.24,6.24,0,0,1,4.8,2.438,5.577,5.577,0,0,0-2.834,4.69,5.468,5.468,0,0,0,3.511,4.969,12.033,12.033,0,0,1-1.826,3.493c-1.075,1.511-2.2,2.988-3.994,3.014-1.739.038-2.323-.961-4.318-.961-2.014,0-2.636.935-4.3,1l-.087,0C5.115,26.361,3.837,24.721,2.742,23.249ZM9.86,5.671a5.043,5.043,0,0,1,1.375-3.8A6.107,6.107,0,0,1,15.093,0a5.282,5.282,0,0,1-1.34,3.942A5.151,5.151,0,0,1,10.115,5.68Q9.988,5.68,9.86,5.671Z" transform="translate(5.333 1.333)"/>
                            </svg>
                            <div className=' flex flex-col text-white ' >
                                <p className='font-Inter-Regular text-xs' >Download on the</p>
                                <p className='font-Inter-SemiBold text-sm'>App Store</p>
                            </div>
                        </div>
                        <a href='https://play.google.com/store/apps/details?id=com.dandolla98.theheritageexchange' style={{backgroundColor:'#0F1542'}} className='flex justify-center items-center cursor-pointer mx-2 flex-row lg:w-40 w-full py-1 rounded-md' >     
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className='mr-2' viewBox="0 0 32 32">
                                <rect className='fill-current text-transparent' width="32" height="32"/>
                                <path className='fill-current text-white' d="M1.723,26.664v0L13.742,13.9l3.632,3.805L2.052,26.5A2.666,2.666,0,0,1,1.723,26.664Zm-1.044,0h0a1.693,1.693,0,0,1-.564-1.454c0-.65-.029-6.1-.056-11.618C.031,8.01,0,2.369,0,1.585A1.522,1.522,0,0,1,.618.158l12.6,13.194L.68,26.662Zm17.374-9.344h0l-3.789-3.969L18.049,9.33l5.214,2.983c.489.28.737.606.737.969a1.347,1.347,0,0,1-.737,1.045l-5.209,2.991ZM13.739,12.8h0L1.517,0a1.485,1.485,0,0,1,.535.176l15.32,8.766L13.74,12.8Z" transform="translate(5.333 2.667)"/>
                            </svg>
                            <div className='flex flex-col text-white ' >
                                <p className='font-Inter-Regular text-xs' >Get it on</p>
                                <p className='font-Inter-SemiBold text-sm'>Google Play</p>
                            </div>
                        </a>
                    </div> 
                {/* </div> */}
            </div>
            <div className='w-full flex justify-center items-center mt-8 lg:mt-0' >
                <img src='/assets/images/MobileApp.png' className='lg:w-84 w-64'  />
            </div>
        </div>
    )
}
