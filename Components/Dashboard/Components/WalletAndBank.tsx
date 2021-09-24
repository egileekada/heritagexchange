import { Input, Select } from '@chakra-ui/react';
import React from 'react';

export default function WalletAndBank() {
    return (
        <div className='w-full h-auto ' >
            <p className='font-Inter-Bold text-base py-2' >My Wallet Addresses</p>
            <div className='w-full flex flex-col lg:flex-row mt-4 py-2' >
                <div className='w-full flex flex-col mr-4 ' >  
                    <div className='w-full flex flex-col py-3 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >BTC Address</p>
                        <Input variant="filled" fontSize='sm' size="lg" /> 
                    </div> 
                    <div className='w-full flex flex-col py-3 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >USDT Address</p>
                        <Input variant="filled" fontSize='sm' size="lg" />
                    </div> 
                </div>
                <div className='w-full flex flex-col py-3 lg:ml-4 ' > 
                    <p className='font-Inter-SemiBold text-xs pb-2' >ETH Address</p>
                    <Input variant="filled" fontSize='sm' size="lg" />
                </div>
            </div> 
            <p className='font-Inter-Bold text-base py-2' >My Bank</p>
            <div className='w-full flex flex-col lg:flex-row mt-4 py-2' >
                <div className='w-full flex flex-col mr-4 ' >  
                    <div className='w-full flex flex-col py-3 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >Select Bank</p>
                        <Select placeholder='Select Bank' fontSize='sm' variant="filled" size="lg" /> 
                    </div> 
                    <div className='w-full flex flex-col py-3 ' > 
                        <p className='font-Inter-SemiBold text-xs pb-2' >Account Number</p>
                        <Input variant="filled" fontSize='sm' size="lg" />
                    </div> 
                </div>
                <div className='w-full flex flex-col py-3 lg:ml-4 ' > 
                    <p className='font-Inter-SemiBold text-xs pb-2' >Name On Account</p>
                    <Input variant="filled" fontSize='sm' size="lg" />
                </div>
            </div> 
            <button className='font-Inter-SemiBold text-xs h-10 text-white mt-8 bg-heritagebutton rounded px-6' >Update</button>
        </div>
    );
}
