import React from 'react'
import DashboardTab from '../Components/Dashboard/DashboardTab'
import SideBar from '../Components/Dashboard/SideBar'

export default function dashboard() {
    return ( 
        <div className='w-full flex flex-col h-screen overflow-hidden' style={{backgroundColor:'#EFF7FF'}}  >
            <div className='flex flex-1 overflow-hidden' >
                <div className='w-full h-full overflow-hidden flex flex-row' >
                    <div className='flex overflow-y-auto ' style={{backgroundColor:'#1123AB', width: '261px'}} >
                        <SideBar />
                    </div>
                    <div className='w-full h-full'>
                        <DashboardTab />
                    </div>
                </div>
            </div>
        </div>  
    )
}
