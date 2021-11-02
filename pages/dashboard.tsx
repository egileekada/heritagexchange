import React from 'react'
import DashboardTab from '../components/Dashboard/TabScreen/DashboardTab'
import SideBar from '../components/Dashboard/Components/SideBar'
import TranscationTab from '../components/Dashboard/TabScreen/TranscationTab'
import CryptoSaving from '../components/Dashboard/TabScreen/CryptoSaving'
import Profile from '../components/Dashboard/TabScreen/Profile'
import Settings from '../components/Dashboard/TabScreen/Settings'
import NavbarBottom from '../components/Dashboard/Components/NavbarBottom'
import NavbarTop from '../components/Dashboard/Components/NavbarTop'
import Notification from '../components/Dashboard/TabScreen/Notification'
import { IUser, UserContext } from '../context/UserContext';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Router from 'next/router' 

export default function Dashboard() {

    const [tab, setTab] = React.useState('Dashboard') 
    const userContext: IUser = React.useContext(UserContext);  
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch(`https://heritage-server.herokuapp.com/user/${localStorage.getItem('id')}`).then(res =>
        res.json()
        )
    )

    React.useEffect(() => { 
        const token = localStorage.getItem('token') 
        const details = JSON.parse(localStorage.getItem('details') as string) 

        // {isLoading ?   
            userContext.setUserData(details)
        //     userContext.setUserData(data.data.user)
        // }

        if(!token ){
            Router.push('/login')
        }
    });   


    return ( 
        <div className='w-full relative flex flex-col h-screen overflow-hidden' style={{backgroundColor:'#EFF7FF'}}  >
            <div className='w-full pb-8 lg:hidden h-auto' >
                <NavbarTop check={tab} tab={setTab} />
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
                            <DashboardTab tab={setTab} />  :
                        tab === 'Transactions' ?
                            <TranscationTab tab={setTab} /> :
                        tab === 'Crypto Savings' || tab === 'Savings' ?
                            <CryptoSaving tab={setTab} /> : 
                        tab === 'Profile' ?
                            <Profile tab={setTab} /> :
                        tab === 'Settings' ? 
                            <Settings tab={setTab} />
                        :
                           <Notification /> 
                        }
                    </div>
                </div>
            </div>
        </div>  
    )
}
