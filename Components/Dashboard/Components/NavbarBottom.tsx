import React from 'react'
import NavBarIcons from '../../Icons/NavBarIcons' 

export default function Navbar(props: any) {

    const TabArray = [ 'Dashboard', 'Transactions', 'Crypto Savings', 'Settings', ]  
    const [tabName,setTabName] = React.useState('Dashboard')
    const ClickHandler =(item: any)=> {
        setTabName(item)
        props.tab(item)
    }

    React.useEffect(() => {
        setTabName(props.check)
    },)

    return (
        <div className='w-full flex pt-4 pb-2 px-2 flex-row fixed bottom-0 bg-white border-t border' >
            {TabArray.map((item: any, index: any) => {
                return(
                    <div onClick={()=> ClickHandler(item)} className='w-full flex flex-col justify-center items-center lg:hidden  ' key={index} >
                        <div className='mb-3' > 
                            <NavBarIcons name={item} tab={tabName} />
                        </div>
                        <p style={{fontSize:'10px'}} className='text-heritagebutton font-Inter-SemiBold' >{item === 'Crypto Savings' ? 'Savings' : item}</p>
                    </div>
                )
            })}
        </div>
    )
}
