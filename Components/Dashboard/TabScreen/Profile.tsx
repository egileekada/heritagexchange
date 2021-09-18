import React from 'react'
import PersonalInformatio from '../Components/PersonalInformatio';
import WalletAndBank from '../Components/WalletAndBank';

export default function Profile() { 

    const [tab, setTab] = React.useState(0);

    return (
        <div className='w-full h-screen pt-16 px-10 overflow-auto'  >
            <div className='w-full flex flex-row' >
                <div className='flex flex-col' >
                    <p className='font-Inter-Bold text-xl'>Profile</p>
                    <p style={{color:'#02142FA6'}} className='font-Inter-Regular text-xs'>Manage Your Heritage Xchange Profile Here</p>
                </div>  
            </div>    
            <div className='w-full bg-white flex flex-col my-8 rounded-md' >
                <div className='w-full relative ' style={{height:'252px'}} > 
                    <img src='/assets/images/ProfileBg.png' className=' absolute w-full h-full z-10 rounded-t-md' />
                    <div className='absolute w-full h-full z-20 rounded-t-md' style={{backgroundColor:'#0D0D0DD5'}} />
                    <div className=' absolute z-30 h-full px-12  w-full flex flex-row text-white justify-center items-center rounded-t-md' > 
                        {/* <div className='w-28 h-28 rounded-full' > */}
                            <img className='w-28 h-28 rounded-full' src='/assets/images/Profile.png' />  
                        {/* </div> */}
                        <div className='ml-4' >
                            <p className='text-2xl font-Inter-Bold '>Kelechi Onye-Highway</p>
                            <p className='text-xs font-Inter-Regular' >kessi@heritage.xchange</p>
                        </div>
                        <div className='w-full flex flex-1' />
                        <div className=' p-4 border rounded mr-8' >
                            <p className='font-Inter-SemiBold text-sm' >Referral Code</p>
                            <p className='font-Inter-Bold text-lg' >263278</p>
                            <p className='font-Inter-Regular text-xs'>Refer new user to join using your <br/>code</p>
                        </div>
                    </div>
                </div> 
                <div className='w-full flex flex-row border-b px-10' >
                    <div onClick={()=> setTab(0)} className={tab === 0 ? 'py-5 mr-4 w-40 px-2 flex justify-center border-b-3 text-heritagebutton border-heritagebutton cursor-pointer':'py-5 w-40 px-2 flex justify-center text-transinactive cursor-pointer'} >
                        <p className='font-Inter-SemiBold text-xs' >Personal Information</p>
                    </div> 
                    <div onClick={()=> setTab(1)} className={tab === 1 ? 'py-5 ml-4 w-40 px-2 flex justify-center border-b-3 text-heritagebutton border-heritagebutton cursor-pointer':'py-5 w-40 px-2 flex justify-center text-transinactive cursor-pointer'}  >
                        <p className='font-Inter-SemiBold text-xs ' >Wallets & Bank</p>
                    </div>
                </div> 
                <div className='w-full px-10 py-5' >
                    {
                        tab === 1 ? <WalletAndBank /> : <PersonalInformatio/>
                    }
                </div>
            </div> 
        </div>
    )
}
