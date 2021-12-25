import React from 'react'
import { IoIosMenu, IoIosNotificationsOutline, IoMdContact } from 'react-icons/io'
import Router from 'next/router'

export default function NavbarTop(props: any) { 

    const [show, setShow] = React.useState(false)
    const [tabName,setTabName] = React.useState('Dashboard')

    const activebghigh = 'fill-current text-activenavicon' 
    const activebglow = 'fill-current text-activenavicon opacity-fixed'
    const inactivebghigh = 'fill-current text-inactivenavicon' 
    const inactivebglow = 'fill-current text-inactivenavicon opacity-fixed'
 
    React.useEffect(() => {
        setTabName(props.check)
    },) 

    const LogOut =()=> {
        Router.push('/login'); 
        localStorage.setItem('token', '')
    }

    const ClickHandler =()=> {
        {show ? 
            setShow(false):
            setShow(true)
        }
    }

    const TabClick =()=> {
        props.tab('Profile')
        setShow(false)
    }

    return (
        <div style={{backgroundColor: '#1123AB'}} className='w-full fixed top-0 z-50 flex items-center justify-center text-white flex-row py-8 px-4' >
            <p className='font-Inter-Bold text-lg ' >Heritage <span className='font-Inter-Regular' >Exchange</span></p>
            <div className='w-full flex flex-1' />
            <IoIosMenu onClick={()=> ClickHandler()} className='w-8 h-10 rounded-full mr-2' />
            {show ? 
                <div className=' fixed top-20 rounded py-4 px-4 right-8 bg-white' >
                    <div onClick={()=> TabClick()} className='flex items-center mb-4' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            {/* <defs><style>.a,.b{fill:rgba(240,240,240,0.6);}.b{opacity:0.4;}</style></defs> */}
                            <g transform="translate(3.333 1.666)">
                                <path className={tabName === 'Profile' ? activebghigh : inactivebghigh} d="M6.664,0C3.07,0,0,.567,0,2.833S3.051,5.687,6.664,5.687c3.594,0,6.664-.566,6.664-2.833S10.278,0,6.664,0" transform="translate(0 10.979)"/>
                                <path className={tabName === 'Profile' ? activebglow : inactivebglow} d="M4.41,8.82A4.41,4.41,0,1,0,0,4.41,4.394,4.394,0,0,0,4.41,8.82" transform="translate(2.254)"/></g>
                        </svg>
                        <p className='font-Inter-Medium text-xs text-heritagecolor ml-2 ' >Profile</p> 
                    </div>
                    <div onClick={()=> LogOut()} className='flex items-center cursor-pointer  mt-4' > 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            {/* <defs><style>.a,.b{fill:rgba(240,240,240,0.94);}.a{opacity:0.4;}</style></defs> */}
                            <g transform="translate(2.5 2)">
                                <path className={tabName === 'LogOut' ? activebglow : inactivebglow} d="M0,4.446A4.526,4.526,0,0,1,4.591,0H9.624A4.515,4.515,0,0,1,14.2,4.436V15.552A4.526,4.526,0,0,1,9.613,20H4.581A4.517,4.517,0,0,1,0,15.562V4.446Z" transform="translate(4.796)"/>
                                <path className={tabName === 'LogOut' ? activebghigh : inactivebghigh}  d="M13.537,3.134,10.569.225a.79.79,0,0,0-1.106,0,.762.762,0,0,0,0,1.089l1.625,1.593H.782a.77.77,0,1,0,0,1.54H11.091L9.465,6.043a.762.762,0,0,0,0,1.089.79.79,0,0,0,1.106,0l2.968-2.909a.761.761,0,0,0,0-1.091" transform="translate(0 6.32)"/>
                            </g>
                        </svg>
                        <p className='font-Inter-Medium text-xs text-heritagecolor ml-2 ' >LogOut</p> 
                    </div>
                </div>
            :null}
            {/* </div> */}
            <div style={{backgroundColor:'#FFFFFF17'}} onClick={()=> props.tab('Notify')}  className='w-auto relative h-auto p-2 rounded-full' >
                <div style={{backgroundColor:'#EB982A'}} className=' absolute w-3 h-3 rounded-full right-1 top-0' />
                <IoIosNotificationsOutline className='w-7 h-7 ' />
            </div>
        </div>
    )
}
