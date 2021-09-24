
import React from 'react'
import { Select } from "@chakra-ui/react" 

export default function TranscationTab() {

    const [tab, setTab] = React.useState(0);

    const ItemArray = ['Cancelled', 'Pending', 'Completed', 'Cancelled' ]

    return (
        <div className='w-full h-screen pt-8 lg:pt-16 px-4 pb-40 lg:px-10 overflow-auto'  >
            <div className='w-full flex flex-row' >
                <div className=' flex flex-col' >
                    <p className='font-Inter-Bold text-xl'>Transaction History</p>
                    <p style={{color:'#02142FA6'}} className='font-Inter-Regular text-xs'>Here’s your transaction history</p>
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
                    <div className='flex flex-row pb-4' >
                        <Select variant="filled" backgroundColor='#F9FAFA' className='font-Inter-Regular text-sm' size='md' placeholder="All Transactions" />
                        <div className='flex flex-row w-72 justify-center items-center ml-8 px-2  rounded-md' style={{backgroundColor:'#F9FAFA'}}  >
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
                </div>
            </div>
        </div>
    )
}
