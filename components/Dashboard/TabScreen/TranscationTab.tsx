import { Select } from "@chakra-ui/react" 
import { IoIosArrowBack, IoIosArrowForward, IoIosNotificationsOutline } from 'react-icons/io';
import React from 'react';
import { useQuery } from "react-query";
import moment from "moment";

export default function TranscationTab(props: any) {

    const [tab, setTab] = React.useState(0);
    const [date, setDate] = React.useState(0);
    const [week, setWeek] = React.useState(false);
    const [month, setMonth] = React.useState(false);
    const [year, setYear] = React.useState(true); 
    
    var REFERENCE = moment();
    var A_WEEK_OLD = REFERENCE.clone().subtract(7, 'days').startOf('day');
    const ItemArray = ['Cancelled', 'Pending', 'Completed', 'Cancelled' ] 
      
    const { isLoading, data } = useQuery('trans', () =>
        fetch(`https://heritage-server.herokuapp.com/transaction/all/${localStorage.getItem('id')}`).then(res =>
            res.json()
        )
    )  

    function isWithinAWeek(momentDate: any ){
        return momentDate.isAfter(A_WEEK_OLD);
    }

    const DateFormat =(item: any)=>{ 
        var date = new Date(item);
        let string = date+'' 
        return( 
            <p className=' font-Montserrat-Medium text-xs' >{string.substr(4, 11)}</p>
        )
    }  

    let limit = 10
    const [tabIndex, setTabIndex] = React.useState(1)
    const [from, setFrom] = React.useState(1)
    const [to, setTo] = React.useState(limit)

    const NextPage =()=> {
        setTabIndex(tabIndex+1)
        setFrom(from+limit)
        setTo(to+limit)
    }

    const PrevPage =()=> {
        if(tabIndex <= 1){
        } else {

            setTabIndex(tabIndex-1)

            setFrom(from-limit)
            setTo(to-limit)
        }
    }

    const OnTabPage =(item: any)=> {
        setTabIndex(item)

        setFrom((limit * item) - (limit - 1))
        setTo(limit * item)
    }

    const OnChangeHandler =(item: any)=> { 
        if(item === 'Months'){
            setMonth(true)
            setWeek(false)
            setYear(false)
        } else if(item === 'Weeks'){
            setMonth(false)
            setWeek(true)
            setYear(false)
        } else {
            setMonth(false)
            setWeek(false)
            setYear(true)
        }
    }
     
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
                {/* <div className='w-full flex flex-row border-b px-10' >
                    <div onClick={()=> setTab(0)} className={tab === 0 ? 'py-5 mr-4 w-40 px-2 flex justify-center border-b-3 text-heritagebutton border-heritagebutton cursor-pointer':'py-5 w-40 px-2 flex justify-center text-transinactive cursor-pointer'} >
                        <p className='font-Inter-SemiBold text-sm' >Cryptocurrency</p>
                    </div> 
                    <div onClick={()=> setTab(1)} className={tab === 1 ? 'py-5 ml-4 w-40 px-2 flex justify-center border-b-3 text-heritagebutton border-heritagebutton cursor-pointer':'py-5 w-40 px-2 flex justify-center text-transinactive cursor-pointer'}  >
                        <p className='font-Inter-SemiBold text-sm ' >FIAT</p>
                    </div>
                </div> */}
                <div className='py-10 px-4 lg:px-8' > 
                    <div className='flex flex-col lg:flex-row pb-4' >
                        <Select onChange={(e)=> OnChangeHandler(e.target.value)} variant="filled" backgroundColor='#F9FAFA' className='font-Inter-Regular text-sm' size='lg' fontSize='xs'> 
                            <option>All Transactions</option>
                            <option>Weeks</option>
                            <option>Months</option>
                        </Select>
                        {/* <div className='flex flex-row lg:w-72 justify-center items-center lg:ml-8 lg:py-0 lg:my-0 px-2 py-3 my-2  rounded-md' style={{backgroundColor:'#F9FAFA'}}  >
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
                        </div>  */}
                    </div> 
                    {tab === 0 ? 
                        <>
                            {!isLoading ? 
                                <>
                                    {week && (
                                        <> 
                                            {[...(data.data)].filter((item: any) => isWithinAWeek(moment(new Date(item.createdAt).toISOString()))).reverse().slice(from-1, to).map((item:any, index: any)=> {
                                                if(data.data.length === 0){
                                                    return(
                                                        'You Have No Notification'
                                                    )
                                                } else{ 
                                                    return( 
                                                        <div key={index} className='w-full my-4 flex text-sm flex-row items-center rounded-md p-5' style={{backgroundColor:'#F9FAFA'}} >
                                                            <div className='flex flex-col' >
                                                                <p className='font-Inter-SemiBold text-sm' >{item.coin_type === 3 ? (item.coin_amount).toFixed(2) :(item.coin_amount).toFixed(7)} {item.coin_type === 1 ? 'BTC' : item.coin_type === 2 ? 'ETH' :'USDT'}</p>
                                                                <p className='font-Inter-Regular text-xs mt-1' >{DateFormat(item.createdAt)}</p>
                                                            </div>
                                                            <div className='w-full flex flex-1' />
                                                            <div className={item.status === 2 ? 'border border-completecolor rounded w-24 flex justify-center cursor-pointer py-1 text-completecolor': item.status === 1 ? 'border border-pendingcolor rounded w-24 flex justify-center cursor-pointer py-1 text-pendingcolor': 'border border-cancelcolor rounded w-24 flex justify-center cursor-pointer py-1 text-cancelcolor'} >
                                                                <p>{item.status === 2 ? 'Approved' : item.status === 1 ? 'Pending': 'Declined'}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })}

                                            {!isLoading && (
                                                <>    
                                                    {limit <= data.data.filter((item: any) => isWithinAWeek(moment(new Date(item.createdAt).toISOString()))).length && (

                                                        <div className='flex items-center mt-6' >
                                                            <button onClick={()=> PrevPage()} style={{borderColor: '#C2C2C2'}} className='w-10 h-10 rounded-lg cursor-pointer flex justify-center items-center border' > 
                                                                <IoIosArrowBack color='#878787' />
                                                            </button>
                                                                <div style={{borderColor: '#C2C2C2'}} className='w-auto h-10 font-Graphik-Bold rounded-lg flex border mx-2'> 
                                                                    {[...data.data].reverse().filter((item: any, index: any)=> index % limit === 0).map((item: any, index: any)=> {
                                                                        if(index <= 10){
                                                                            return( 
                                                                                <div onClick={()=> OnTabPage(index+1)} style={tabIndex=== index+1 ? {backgroundColor: '#3E3F41'}:{color: '#202020'}} className='w-10 cursor-pointer h-10 rounded-lg flex text-white justify-center items-center' >
                                                                                    {index+1}
                                                                                </div>
                                                                            )
                                                                        }  
                                                                    })} 
                                                                </div>
                                                            <button disabled={to >= data.data.length ? true: false} onClick={()=> NextPage()} style={{borderColor: '#C2C2C2'}} className='w-10 h-10 rounded-lg cursor-pointer flex justify-center items-center border' >
                                                                <IoIosArrowForward color='#878787' />
                                                            </button>
                                                        </div>
                                                    )}
                                                </>
                                            )} 
                                        </>
                                    )}
                                    {month && (
                                        <> 
                                            {[...(data.data)].filter((item: any) =>  new Date().getMonth() === new Date(item.createdAt).getMonth() ).reverse().slice(from-1, to).map((item:any, index: any)=> {
                                                if(data.data.length === 0){
                                                    return(
                                                        'You Have No Notification'
                                                    )
                                                } else{ 
                                                    return( 
                                                        <div key={index} className='w-full my-4 flex text-sm flex-row items-center rounded-md p-5' style={{backgroundColor:'#F9FAFA'}} >
                                                            <div className='flex flex-col' >
                                                                <p className='font-Inter-SemiBold text-sm' >{item.coin_type === 3 ? (+item.coin_amount).toFixed(2) :(item.coin_amount).toFixed(7)} {item.coin_type === 1 ? 'BTC' : item.coin_type === 2 ? 'ETH' :'USDT'}</p>
                                                                <p className='font-Inter-Regular text-xs mt-1' >{DateFormat(item.createdAt)}</p>
                                                            </div>
                                                            <div className='w-full flex flex-1' />
                                                            <div className={item.status === 2 ? 'border border-completecolor rounded w-24 flex justify-center cursor-pointer py-1 text-completecolor': item.status === 1 ? 'border border-pendingcolor rounded w-24 flex justify-center cursor-pointer py-1 text-pendingcolor': 'border border-cancelcolor rounded w-24 flex justify-center cursor-pointer py-1 text-cancelcolor'} >
                                                                <p>{item.status === 2 ? 'Approved' : item.status === 1 ? 'Pending': 'Declined'}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })}

                                            {!isLoading && (
                                                <>    
                                                    {limit <= data.data.filter((item: any) =>  new Date().getMonth() === new Date(item.createdAt).getMonth() ).length && (

                                                        <div className='flex items-center mt-6' >
                                                            <button onClick={()=> PrevPage()} style={{borderColor: '#C2C2C2'}} className='w-10 h-10 rounded-lg cursor-pointer flex justify-center items-center border' > 
                                                                <IoIosArrowBack color='#878787' />
                                                            </button>
                                                                <div style={{borderColor: '#C2C2C2'}} className='w-auto h-10 font-Graphik-Bold rounded-lg flex border mx-2'> 
                                                                    {[...data.data].reverse().filter((item: any, index: any)=> index % limit === 0).map((item: any, index: any)=> {
                                                                        if(index <= 10){
                                                                            return( 
                                                                                <div onClick={()=> OnTabPage(index+1)} style={tabIndex=== index+1 ? {backgroundColor: '#3E3F41'}:{color: '#202020'}} className='w-10 cursor-pointer h-10 rounded-lg flex text-white justify-center items-center' >
                                                                                    {index+1}
                                                                                </div>
                                                                            )
                                                                        }  
                                                                    })} 
                                                                </div>
                                                            <button disabled={to >= data.data.length ? true: false} onClick={()=> NextPage()} style={{borderColor: '#C2C2C2'}} className='w-10 h-10 rounded-lg cursor-pointer flex justify-center items-center border' >
                                                                <IoIosArrowForward color='#878787' />
                                                            </button>
                                                        </div>
                                                    )}
                                                </>
                                            )} 
                                        </>
                                    )}
                                    {year && (
                                        <> 
                                            {[...(data.data)].reverse().slice(from-1, to).map((item:any, index: any)=> {
                                                if(data.data.length === 0){
                                                    return(
                                                        'You Have No Notification'
                                                    )
                                                } else{ 
                                                    return( 
                                                        <div key={index} className='w-full my-4 flex text-sm flex-row items-center rounded-md p-5' style={{backgroundColor:'#F9FAFA'}} >
                                                            <div className='flex flex-col' >
                                                                <p className='font-Inter-SemiBold text-sm' >$ {item.coin_type === 3 ? (item.coin_amount).toFixed(2) :(item.coin_amount).toFixed(7)} {item.coin_type === 1 ? 'BTC' : item.coin_type === 2 ? 'ETH' :'USDT'}</p>
                                                                <p className='font-Inter-Regular text-xs mt-1' >{DateFormat(item.createdAt)}</p>
                                                            </div>
                                                            <div className='w-full flex flex-1' />
                                                            <div className={item.status === 2 ? 'border border-completecolor rounded w-24 flex justify-center cursor-pointer py-1 text-completecolor': item.status === 1 ? 'border border-pendingcolor rounded w-24 flex justify-center cursor-pointer py-1 text-pendingcolor': 'border border-cancelcolor rounded w-24 flex justify-center cursor-pointer py-1 text-cancelcolor'} >
                                                                <p>{item.status === 2 ? 'Approved' : item.status === 1 ? 'Pending': 'Declined'}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })}

                                            {!isLoading && (
                                                <>    
                                                    {limit <= data.data.length && (

                                                        <div className='flex items-center mt-6' >
                                                            <button onClick={()=> PrevPage()} style={{borderColor: '#C2C2C2'}} className='w-10 h-10 rounded-lg cursor-pointer flex justify-center items-center border' > 
                                                                <IoIosArrowBack color='#878787' />
                                                            </button>
                                                                <div style={{borderColor: '#C2C2C2'}} className='w-auto h-10 font-Graphik-Bold rounded-lg flex border mx-2'> 
                                                                    {[...data.data].reverse().filter((item: any, index: any)=> index % limit === 0).map((item: any, index: any)=> {
                                                                        if(index <= 10){
                                                                            return( 
                                                                                <div onClick={()=> OnTabPage(index+1)} style={tabIndex=== index+1 ? {backgroundColor: '#3E3F41'}:{color: '#202020'}} className='w-10 cursor-pointer h-10 rounded-lg flex text-white justify-center items-center' >
                                                                                    {index+1}
                                                                                </div>
                                                                            )
                                                                        }  
                                                                    })} 
                                                                </div>
                                                            <button disabled={to >= data.data.length ? true: false} onClick={()=> NextPage()} style={{borderColor: '#C2C2C2'}} className='w-10 h-10 rounded-lg cursor-pointer flex justify-center items-center border' >
                                                                <IoIosArrowForward color='#878787' />
                                                            </button>
                                                        </div>
                                                    )}
                                                </>
                                            )} 
                                        </>
                                    )} 
                                </>
                            :<div className="animate-spin rounded-full h-12 w-12 mx-auto border-t-2 border-b-2 border-heritagecolor"></div>}
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

