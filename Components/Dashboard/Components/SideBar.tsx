import React from 'react'
import SideBarIcons from '../../Icons/SideBarIcons';

export default function SideBar(props: any) {

    const [tab, setTab] = React.useState(0)
    const [section, setSection] = React.useState(0)
    const [tabName,setTabName] = React.useState('Dashboard')

    const ClickHandler =(index: any, subindex: any, tab: any, name: any)=> {
        setTab(subindex);
        setSection(index);
        setTabName(name);
        console.log(tab)
        props.tab(tab)
    }

    const TabArray = [
        {
            title: 'MENU',
            tabs: [ 
                    {
                        name: 'Dashboard',
                        img: '',
                        index: 0
                    }, 
                    {
                        name: 'Transactions',
                        img: '',
                        index: 1
                    }, 
                    {
                        name: 'Crypto Savings',
                        img: '',
                        index: 2
                    }
                ]
        },
        {
            title: 'SHORTCUTS',
            tabs: [ 
                    {
                        name: 'Profile',
                        img: '',
                        index: 3
                    }, 
                    {
                        name: 'Settings',
                        img: '',
                        index: 4
                    } 
                ]
        }   
    ] 


    return (
        <div className='w-full h-screen flex flex-1 flex-col pt-20' style={{backgroundColor:'#1123AB'}}>
            <div className='w-full pl-12 h-auto' style={{backgroundColor:'#1123AB'}} >
                <p className='text-base text-white font-Inter-Bold pb-10 ' >Heritage Exchange</p> 
                <div className='w-full h-full flex  flex-col ' >
                    {TabArray.map((item: any, index: any)=> {
                            return( 
                                <div key={index}  className='w-auto h-auto py-5' >
                                        <p className='text-sm text-white font-Inter-SemiBold' >{item.title}</p>
                                        {item.tabs.map((item: any, subindex: any)=> {
                                            return( 
                                                    <div key={subindex} onClick={()=> ClickHandler(index, subindex, item.index, item.name)}  className=' w-full h-5 my-8 items-center flex flex-row text-xs cursor-pointer' >
                                                        <SideBarIcons  name={item.name} tab={tabName} />
                                                        <p className={subindex === tab && index === section ? 'w-full flex flex-1 text-activetabtext font-Inter-SemiBold ml-4 ':'w-full flex flex-1 font-Inter-Regular text-tabtext ml-4'} >{item.name}</p>
                                                        <div style={{width:'1.7px'}} className={subindex === tab && index === section ? 'h-full bg-white mr-1':'bg-transparent'} />
                                                    </div> 
                                                ) 
                                            })
                                        } 
                                </div>
                            )
                        })
                    } 
                </div>
            </div>
            <div className='w-full h-full flex items-end ' >  
            {/* <button>Log out</button> */}
                <div className=' w-full h-auto py-6 pl-12 items-center flex flex-row text-xs cursor-pointer' style={{backgroundColor:'#0A198E'}} >
                    <SideBarIcons  name='LogIn' />
                    <p className='w-full flex flex-1 text-activetabtext ml-4 ' >Log out</p>
                    <div style={{width:'1.7px'}} className='h-full bg-white mr-1'/>
                </div> 
            </div>
        </div>
    )
}
