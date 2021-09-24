import React from 'react'
import DashboardTab from '../Components/Dashboard/TabScreen/DashboardTab'
import SideBar from '../Components/Dashboard/Components/SideBar'
import TranscationTab from '../Components/Dashboard/TabScreen/TranscationTab'
import CryptoSaving from '../Components/Dashboard/TabScreen/CryptoSaving'
import Profile from '../Components/Dashboard/TabScreen/Profile'
import Settings from '../Components/Dashboard/TabScreen/Settings'
import NavbarBottom from '../Components/Dashboard/Components/NavbarBottom'
import NavbarTop from '../Components/Dashboard/Components/NavbarTop'

export default function Dashboard() {

    const [tab, setTab] = React.useState('Dashboard')

    return ( 
        <div className='w-full relative flex flex-col h-screen overflow-hidden' style={{backgroundColor:'#EFF7FF'}}  >
            <div className='w-full lg:hidden h-auto' >
                <NavbarTop tab={setTab} />
            </div>
            <div className='flex flex-1 overflow-hidden' >
                <div className='w-full h-full overflow-hidden flex flex-row' >
                    <div className='lg:flex w-80 overflow-y-auto hidden ' style={{backgroundColor:'#1123AB'}} >
                        <SideBar check={tab} tab={setTab} />
                    </div> 
                    <div className='w-full z-10 lg:hidden h-auto' >
                        <NavbarBottom check={tab} tab={setTab} />
                    </div> 
                    <div className='w-full h-full'>
                        {tab === 'Dashboard' ?
                            <DashboardTab />  :
                        tab === 'Transactions' ?
                            <TranscationTab /> :
                        tab === 'Crypto Savings' || tab === 'Savings' ?
                            <CryptoSaving /> : 
                        tab === 'Profile' ?
                            <Profile /> 
                        :  
                            <Settings />
                        }
                    </div>
                </div>
            </div>
        </div>  
    )
}
