import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io';
import PersonalInformatio from '../Components/PersonalInformatio';
import WalletAndBank from '../Components/WalletAndBank';

export default function Profile(props: any) { 

    const [tab, setTab] = React.useState(0);

    return (
        <div className='w-full h-screen pt-8 lg:pt-16 px-0 lg:px-10 overflow-auto'  >
            <div className='w-full items-center lg:flex hidden flex-row' >
                <div className='flex flex-col' >
                    <p className='font-Inter-Bold text-xl'>Profile</p>
                    <p style={{color:'#02142FA6'}} className='font-Inter-Regular text-xs'>Manage Your Heritage Xchange Profile Here</p>
                </div> 
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.tab('Notify')} style={{backgroundColor:'#FFF'}}  className='w-auto hidden lg:flex mr-2 relative cursor-pointer h-auto p-3 rounded-full' >
                    <IoIosNotificationsOutline style={{color:'#3B4FE6D5'}} className='w-7 h-6' />
                </div>
            </div>    
            <div className='w-full bg-white flex flex-col lg:my-8 lg:rounded-md' >
                <div className='w-full h-72 lg:h-252px relative ' > 
                    <img src='/assets/images/ProfileBg.png' className=' absolute w-full h-full z-10 object-cover lg:rounded-t-md' />
                    <div className='absolute w-full h-full z-20 lg:rounded-t-md' style={{backgroundColor:'#0D0D0DD5'}} />
                    <div className=' absolute z-30 h-full px-4 lg:px-12  w-full flex flex-col lg:flex-row text-white justify-center items-center rounded-t-md' > 
                        
                        <div className='w-full flex flex-row items-center' >
                            <img className=' w-16 h-16 lg:w-28 lg:h-28 lg:rounded-full' src='/assets/images/Profile.png' /> 
                            <div className='ml-4' >
                                <p className='w-56 text-base lg:text-2xl font-Inter-Bold '>Kelechi Onye-Highway</p>
                                <p className='text-xs font-Inter-Regular' >kessi@heritage.xchange</p>
                            </div>
                        </div>
                        <div className='w-full flex lg:flex-1' />
                        <div className=' lg:w-auto w-full p-4 border rounded lg:mt-0 mt-8 lg:mr-8' >
                            <p className='font-Inter-SemiBold text-sm' >Referral Code</p>
                            <p className='font-Inter-Bold text-lg' >263278</p>
                            <p className=' w-full lg:w-48 font-Inter-Regular text-xs'>Refer new user to join using your code</p>
                        </div>
                    </div>
                </div> 
                <div className='w-full flex flex-row border-b px-4 lg:px-10' >
                    <div onClick={()=> setTab(0)} className={tab === 0 ? 'py-5 mr-4 w-40 px-2 flex justify-center border-b-3 text-heritagebutton border-heritagebutton cursor-pointer':'py-5 w-40 px-2 flex justify-center text-transinactive cursor-pointer'} >
                        <p className='font-Inter-SemiBold text-xs' >Personal Information</p>
                    </div> 
                    <div onClick={()=> setTab(1)} className={tab === 1 ? 'py-5 ml-4 w-40 px-2 flex justify-center border-b-3 text-heritagebutton border-heritagebutton cursor-pointer':'py-5 w-40 px-2 flex justify-center text-transinactive cursor-pointer'}  >
                        <p className='font-Inter-SemiBold text-xs ' >Wallets & Bank</p>
                    </div>
                </div> 
                <div className='w-full px-4 lg:px-10 py-5 lg:pb-6 pb-56' >
                    {
                        tab === 1 ? <WalletAndBank /> : <PersonalInformatio/>
                    }
                </div>
            </div> 
        </div>
    )
}
