
import React from 'react'
import { Select } from "@chakra-ui/react" 
import { IoIosNotificationsOutline } from 'react-icons/io';

export default function TranscationTab(props: any) {

    const [tab, setTab] = React.useState(0);

    const ItemArray = ['Cancelled', 'Pending', 'Completed', 'Cancelled' ]


    React.useEffect(() => { 
        fetch(`https://heritage-server.herokuapp.com/transaction/all/${localStorage.getItem('id')}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => { 
            console.log(data)
        })
        .catch((error) => {
            console.error('Error:', error);
        }); 

// empty dependency array means this effect will only run once (like componentDidMount in classes)
},);  

    return (
        <div className='w-screen lg:w-full h-screen pt-8 lg:pt-16 px-4 lg:pb-0 pb-28 lg:px-10 overflow-auto'  >
            <div className='w-full flex flex-row items-center' >
                <div className=' flex flex-col' >
                    <p className='font-Inter-Bold text-xl'>Transaction History</p>
                    <p style={{color:'#02142FA6'}} className='font-Inter-Regular text-xs'>Here’s your transaction history</p>
                </div>
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.tab('Notify')} style={{backgroundColor:'#FFF'}}  className='w-auto hidden lg:flex mr-2 relative cursor-pointer h-auto p-3 rounded-full' >
                    <IoIosNotificationsOutline style={{color:'#3B4FE6D5'}} className='w-7 h-6 ' />
                </div>
            </div>
            <div className='w-full h-auto flex flex-col bg-white rounded-md my-8' >
                <div className='w-full flex flex-row border-b px-10' >
                    <div onClick={()=> setTab(0)} className={tab === 0 ? 'py-5 mr-4 w-40 px-2 flex justify-center border-b-3 text-heritagebutton border-heritagebutton cursor-pointer':'py-5 w-40 px-2 flex justify-center text-transinactive cursor-pointer'} >
                        <p className='font-Inter-SemiBold text-sm' >Cryptocurrency</p>
                    </div> 
                    <div onClick={()=> setTab(1)} className={tab === 1 ? 'py-5 ml-4 w-40 px-2 flex justify-center border-b-3 text-heritagebutton border-heritagebutton cursor-pointer':'py-5 w-40 px-2 flex justify-center text-transinactive cursor-pointer'}  >
                        <p className='font-Inter-SemiBold text-sm ' >FIAT</p>
                    </div>
                </div>
                <div className='py-10 px-4 lg:px-8' > 
                    <div className='flex flex-col lg:flex-row pb-4' >
                        <Select variant="filled" backgroundColor='#F9FAFA' className='font-Inter-Regular text-sm' size='lg' fontSize='xs' placeholder="All Transactions">
                            <option>Days</option>
                            <option>Weeks</option>
                        </Select>
                        <div className='flex flex-row lg:w-72 justify-center items-center lg:ml-8 lg:py-0 lg:my-0 px-2 py-3 my-2  rounded-md' style={{backgroundColor:'#F9FAFA'}}  >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="18.167" viewBox="0 0 16.5 18.167">
                                <g transform="translate(0.75 0.75)">
                                    <path style={{stroke:'#200e32', strokeLinecap:'round', strokeLinejoin: 'round', fill:'none', strokeWidth:'1.5px',}} d="M0,.473H14.853" transform="translate(0.077 5.697)"/>
                                    <path style={{stroke:'#200e32', strokeLinecap:'round', strokeLinejoin: 'round', fill:'none', strokeWidth:'1.5px',}} d="M.459.473H.466" transform="translate(10.743 8.952)"/>
                                    <path style={{stroke:'#200e32', strokeLinecap:'round', strokeLinejoin: 'round', fill:'none', strokeWidth:'1.5px',}} d="M.459.473H.466" transform="translate(7.045 8.952)"/>
                                    <path style={{stroke:'#200e32', strokeLinecap:'round', strokeLinejoin: 'round', fill:'none', strokeWidth:'1.5px',}} d="M.459.473H.466" transform="translate(3.34 8.952)"/>
                                    <path style={{stroke:'#200e32', strokeLinecap:'round', strokeLinejoin: 'round', fill:'none', strokeWidth:'1.5px',}} d="M.459.473H.466" transform="translate(10.743 12.191)"/>
                                    <path style={{stroke:'#200e32', strokeLinecap:'round', strokeLinejoin: 'round', fill:'none', strokeWidth:'1.5px',}} d="M.459.473H.466" transform="translate(7.045 12.191)"/>
                                    <path style={{stroke:'#200e32', strokeLinecap:'round', strokeLinejoin: 'round', fill:'none', strokeWidth:'1.5px',}} d="M.459.473H.466" transform="translate(3.34 12.191)"/>
                                    <path style={{stroke:'#200e32', strokeLinecap:'round', strokeLinejoin: 'round', fill:'none', strokeWidth:'1.5px',}} d="M.463,0V2.742" transform="translate(10.407)"/>
                                    <path style={{stroke:'#200e32', strokeLinecap:'round', strokeLinejoin: 'round', fill:'none', strokeWidth:'1.5px',}} d="M.463,0V2.742" transform="translate(3.675)"/>
                                    <path style={{stroke:'#200e32', strokeLinecap:'round', strokeLinejoin: 'round', fill:'none', strokeWidth:'1.5px',}} d="M11.032,0H3.976C1.529,0,0,1.363,0,3.869v7.541a3.62,3.62,0,0,0,3.976,3.94h7.048c2.455,0,3.976-1.371,3.976-3.877v-7.6C15.008,1.363,13.487,0,11.032,0Z" transform="translate(0 1.316)"/>
                                </g>
                            </svg>
                            <p className='ml-2 font-Inter-Regular text-xs mt-1' >19/06/2021 - 21/06/2021</p>
                        </div> 
                    </div> 
                    {tab === 0 ? 
                        <>
                            {ItemArray.map((item:any, index: any)=> {
                                return( 
                                    <div key={index} className='w-full my-4 flex text-sm flex-row items-center rounded-md p-5' style={{backgroundColor:'#F9FAFA'}} >
                                        <div className='flex flex-col' >
                                            <p className='font-Inter-SemiBold text-sm' >0.05 ETH</p>
                                            <p className='font-Inter-Regular text-xs mt-1' >June 21, 2021 : 7.00 AM</p>
                                        </div>
                                        <div className='w-full flex flex-1' />
                                        <div className={item === 'Completed' ? 'border border-completecolor rounded w-24 flex justify-center cursor-pointer py-1 text-completecolor': item === 'Pending' ? 'border border-pendingcolor rounded w-24 flex justify-center cursor-pointer py-1 text-pendingcolor': 'border border-cancelcolor rounded w-24 flex justify-center cursor-pointer py-1 text-cancelcolor'} >
                                            <p>{item}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </> :
                        <>
                            {ItemArray.map((item:any, index: any)=> {
                                return( 
                                    <div key={index} className='w-full my-4 flex text-sm flex-row items-center rounded-md p-5' style={{backgroundColor:'#F9FAFA'}} >
                                        <div className='flex flex-col' >
                                            <p className='font-Inter-SemiBold text-sm' >N70,000 TO ACCESS BANK</p>
                                            <p className='font-Inter-Regular text-xs mt-1' >June 21, 2021 : 7.00 AM</p>
                                        </div>
                                        <div className='w-full flex flex-1' />
                                        <div className={item === 'Completed' ? 'border border-completecolor rounded w-24 flex justify-center cursor-pointer py-1 text-completecolor': item === 'Pending' ? 'border border-pendingcolor rounded w-24 flex justify-center cursor-pointer py-1 text-pendingcolor': 'border border-cancelcolor rounded w-24 flex justify-center cursor-pointer py-1 text-cancelcolor'} >
                                            <p>{item}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </> 
                    }
                </div>
            </div>
        </div>
    )
}
