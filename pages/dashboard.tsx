import React from 'react'
import DashboardTab from '../Components/Dashboard/TabScreen/DashboardTab'
import SideBar from '../Components/Dashboard/Components/SideBar'
import TranscationTab from '../Components/Dashboard/TabScreen/TranscationTab'
import CryptoSaving from '../Components/Dashboard/TabScreen/CryptoSaving'
import Profile from '../Components/Dashboard/TabScreen/Profile'
import Settings from '../Components/Dashboard/TabScreen/Settings'

export default function dashboard() {

    const [tab, setTab] = React.useState(0)

    return ( 
        <div className='w-full flex flex-col h-screen overflow-hidden' style={{backgroundColor:'#EFF7FF'}}  >
            <div className='flex flex-1 overflow-hidden' >
                <div className='w-full h-full overflow-hidden flex flex-row' >
                    <div className='flex w-80 overflow-y-auto ' style={{backgroundColor:'#1123AB'}} >
                        <SideBar tab={setTab} />
                    </div>
                    <div className='w-full h-full'>
                        {tab === 0 ?
                            <DashboardTab />  :
                        tab === 1 ?
                            <TranscationTab /> :
                        tab === 2 ?
                            <CryptoSaving /> : 
                        tab === 3 ?
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
