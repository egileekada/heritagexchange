import React from 'react' 

export default function DashboardTab() {

    const [tab, setTab] = React.useState(0);

    const activeTab = 'w-full flex items-center justify-center flex-col lg:flex-row mt-2 py-4'
    const inactiveTab = 'w-full hidden items-center justify-center lg:flex flex-col lg:flex-row mt-2 py-4'

    return ( 
    <div className='w-full h-screen overflow-y-auto overflow-x-hidden'> 
        <div className='w-full h-screen pt-8 px-4 lg:px-10 '  >
            <div className='w-full flex flex-row' >
                <div className='flex flex-col' >
                    <p className='font-Inter-Bold text-xl'>Dashboard</p>
                    <p style={{color:'#02142FA6'}} className='font-Inter-Regular text-xs'>Hi Michael, Welcome Back</p>
                </div>
            </div>
            <div className='lg:w-full dashboardslide w-auto flex overflow-x-auto flex-row lg:overflow-x-hidden py-10' >
                <div style={{backgroundColor:'#1526A7'}} className=' lg:w-full flex flex-col p-6 rounded-md text-white ' >
                    <p className='font-Inter-Medium text-sm w-48' >Today’s Rate</p>
                    <p className='font-Inter-Bold text-2xl'>₦500/$</p>
                    <p className='font-Inter-Regular text-xs '>Rates are updated daily</p>
                </div>
                <div style={{backgroundColor:'#111E7E'}} className='w-full flex flex-col ml-4 lg:ml-8 p-6 rounded-md text-white ' >
                    <p className='font-Inter-Medium text-sm w-48' >BTC Value</p>
                    <p className='font-Inter-Bold text-2xl'>$34,002</p>
                    <p className='font-Inter-Regular text-xs '>NGN: N12,293,299</p>
                </div>
                <div style={{backgroundColor:'#1B2364'}} className='w-full flex flex-col ml-4 lg:ml-8 p-6 rounded-md text-white ' >
                    <p className='font-Inter-Medium text-sm w-48' >Ethereum Value</p>
                    <p className='font-Inter-Bold text-2xl'>$192,923</p>
                    <p className='font-Inter-Regular text-xs '>NGN: N12,293,299</p>
                </div>
            </div>
            <div className='w-auto h-auto dashboardslide flex flex-row pt-8 px-2 pb-44 lg:pb-6' >
                <div className='w-full items-center justify-center flex flex-col pr-0 lg:pr-14' >
                    <p className='font-Inter-SemiBold hidden text-sm lg:flex  ' >Buy Cryptocurrency</p>
                    <div className='w-full rounded flex flex-row lg:hidden justify-center items-center' >
                        <div onClick={()=> setTab(0)} className={tab === 0 ? 'w-full  flex justify-center items-center rounded bg-heritagebutton text-white':'w-full h-full flex justify-center items-center rounded bg-white'} >
                            <p className='font-Inter-SemiBold text-xs md:text-sm  py-4' >Buy Cryptocurrency</p>
                        </div>
                        <div onClick={()=> setTab(1)} className={tab === 1 ? 'w-full flex justify-center items-center rounded bg-heritagebutton text-white':'w-full h-full flex justify-center items-center rounded bg-white'}>
                            <p className='font-Inter-SemiBold py-4 text-xs md:text-sm  ' >Sell Cryptocurrency</p>
                        </div>
                    </div>
                    <div className={tab === 0 ? activeTab : inactiveTab} >
                        <div className=' w-full bg-white flex lg:flex-col py-4 px-4 lg:px-10 my-2 lg:my-0 rounded-md items-center' >
                            <img src='/assets/images/BTC.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Bitcoin</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Buy BTC</p>
                        </div>
                        <div className='w-full bg-white flex lg:flex-col py-4 lg:ml-8 my-2 lg:my-0 px-4 lg:px-10 rounded-md items-center' >
                            <img src='/assets/images/ethereum.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Ethereum</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Buy ETH</p>
                        </div>
                        <div className='w-full bg-white flex lg:flex-col py-4 lg:ml-8 my-2 lg:my-0 px-4 lg:px-10 rounded-md items-center' >
                            <img src='/assets/images/tether.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Tether</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Buy USDT</p>
                        </div>
                    </div> 
                    <p className='font-Inter-SemiBold hidden text-sm mt-12 lg:flex' >Sell Cryptocurrency</p>
                    <div className={tab === 1 ? activeTab : inactiveTab} >
                        <div className='w-full bg-white flex lg:flex-col py-4 my-2 lg:my-0 px-4 lg:px-10 rounded-md items-center' >
                            <img src='/assets/images/BTC.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Bitcoin</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Sell BTC</p>
                        </div>
                        <div className='w-full bg-white flex lg:flex-col py-4 lg:ml-8 my-2 lg:my-0 px-4 lg:px-10 rounded-md items-center' >
                            <img src='/assets/images/ethereum.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Ethereum</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Sell ETH</p>
                        </div>
                        <div className='w-full bg-white flex lg:flex-col py-4 lg:ml-8 my-2 lg:my-0 px-4 lg:px-10 rounded-md items-center' >
                            <img src='/assets/images/tether.png' className='w-12 h-12' />
                            <p className='text-xs font-Inter-SemiBold my-2 ml-4 lg:ml-0' >Tether</p>
                            <div className='w-full lg:w-auto flex flex-1' />
                            <p style={{color:'#1526A7', backgroundColor: '#1526A70D'}} className='lg:w-24 items-center justify-center text-xs font-Inter-Medium py-1 px-4 rounded-full' >Sell USDT</p>
                        </div>
                    </div>
                </div> 
                <div className=' w-full h-auto flex hidden lg:flex px-4 rounded-md bg-white ' >
                    <img src='/assets/images/DashBg.png' className='mx-4 w-96 object-cover rounded-md' /> 
                </div>
            </div>
        </div>
    </div>
    )
}
