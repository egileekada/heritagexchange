import { Input } from '@chakra-ui/react'
import Router from "next/router";
import React from 'react'
import { IUser, UserContext } from '../../../context/UserContext';

export default function PersonalInformation() {
 
    const userContext: IUser = React.useContext(UserContext); 
    const [firstName, setFirstName] = React.useState(userContext.userData.first_name);
    const [lastName, setLastName] = React.useState(userContext.userData.last_name);  
    const [loading, setLoading] = React.useState(false);

    // console.log(firstName)

    const submit = async () => {
        setLoading(true)
        await fetch(`https://heritage-server.herokuapp.com/user/edit/names/${localStorage.getItem('id')}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName 
            }),
        });
        
        setLoading(false)
        Router.reload()
    }

    return (
        <div className='w-full h-auto' > 
            <div className='w-full flex flex-col lg:flex-row mt-4 py-2' >
                <div className='w-full flex flex-col mr-4 ' >  
                    <div className='w-full flex flex-col py-3 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >First Name</p>
                        <Input placeholder={userContext.userData.first_name} onChange={(e)=> setFirstName(e.target.value)} variant="filled" fontSize='sm' size="lg" /> 
                    </div> 
                    <div className='w-full flex flex-col py-3 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >Email Address</p>
                        <Input value={userContext.userData.email} variant="filled" fontSize='sm' size="lg" />
                    </div> 
                </div>  
                <div className='w-full flex flex-col lg:ml-4 ' >  
                    <div className='w-full flex flex-col py-3 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >Last Name</p>
                        <Input placeholder={userContext.userData.last_name} onChange={(e)=> setLastName(e.target.value)} variant="filled" fontSize='sm' size="lg" /> 
                    </div> 
                    {/* <div className='w-full flex flex-col py-3 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >Phone Number</p>
                        <Input variant="filled" fontSize='sm' size="lg" />
                    </div>  */}
                </div>  
            </div>     
            <button onClick={()=> submit()} className='font-Inter-SemiBold flex items-center text-xs h-10 text-white mt-8 bg-heritagebutton rounded px-6' >
                {!loading ? 
                    <div className='py-1' >
                        UPDATE
                    </div>:
                    <>
                        <div className="animate-spin rounded-full h-6 w-6 mr-4 border-t-2 border-b-2 border-white"></div>
                        LOADING
                    </>
                } </button>
        </div>
    )
}
