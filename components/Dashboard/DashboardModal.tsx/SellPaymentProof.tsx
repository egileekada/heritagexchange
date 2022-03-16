import { Input, Select } from '@chakra-ui/react';
import React from 'react'
import * as axios from 'axios'   
import { IoIosArrowDropleft, IoIosCloseCircleOutline, IoIosClose } from 'react-icons/io';
import { IUser, UserContext } from '../../../context/UserContext';

export default function SellPaymentProof(props:any) {

    // const [coinType, setCoinType] = React.useState('BTC') 
    const [ selectedFiles, setSelectedFiles ] = React.useState([]);
    const [ imageFiles, setImageFiles ] = React.useState([]  as Array<string>);
    const [show, setShow] = React.useState(false)
    const [loading, setLoading] = React.useState(false);
    const userContext: IUser = React.useContext(UserContext); 
    let formData = new FormData() 

    const PreviousPage =()=> {
        props.close(false);
        props.back(true);
    }

    const NextPage =()=> {
        props.close(false);
        props.next(true);
    }
    
    const handleImageChange = (e:any) => {  

		if (e.target.files) {
			const filesArray: any = Array.from(e.target.files).map((file) => URL.createObjectURL(file)); 
            const fileName = Array.from(e.target.files).map((file) => file);  

            setImageFiles((prevImages: any) => prevImages.concat(fileName));
			setSelectedFiles((prevImages: any) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file : any) => URL.revokeObjectURL(file) // avoid memory leak
			);
        }
        setShow(prev => !prev); 
    }; 
 
    const submit = async () => {   

        imageFiles.map((item: any) => 
            formData.append('paymentproof', item)
        );
        
        setLoading(true) 
            await axios.default.post(`https://heritage-server.herokuapp.com/transaction/uploadfiles/${localStorage.getItem('tid')}`, formData,{
                headers: { 'content-type': 'application/json'}
            });

            // const json = await request.json(); 

            setLoading(false)
            props.close(false);
            props.next(true);
    }  

    const handleImage = (e:any) => {  

        const files = e.target.files

        for (var i = 0; i < files.length; i++) {
            const clone = [...imageFiles, files[i]];
            setImageFiles(clone); 
        }
		if (e.target.files[0]) {
			const filesArray: any = Array.from(e.target.files).map((file) => URL.createObjectURL(file)); 
            
			setSelectedFiles((prevImages: any) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file : any) => URL.revokeObjectURL(file) // avoid memory leak
			);
        }
    };

    function handleRemove(id: any, file: any) {
        const newList = selectedFiles.filter((item: any) => item !== id);
        const clone = [...imageFiles];
        const index = clone.indexOf(file); 
        clone.splice(index, 1); 
        setImageFiles(clone); 
        if(Object.keys(newList).length === 0){                   
            setShow(prev => !prev);
        }
            setSelectedFiles(newList); 
      }

    // React.useEffect(() => {
    //     setCoinType(props.type)
    // },)

    return (
        <div className='lg:w-auto w-full h-auto px-6 py-3 rounded bg-white' >
            <div className='w-full flex flex-row' >
                <IoIosArrowDropleft onClick={()=> PreviousPage()} className='w-6 h-6 rounded-md cursor-pointer' />
                <div className='w-full flex flex-1' />
                <IoIosCloseCircleOutline onClick={()=> props.close(false)} className='w-6 h-6 rounded-md cursor-pointer'  />
            </div>
            <div className='w-full flex flex-col justify-center items-center py-1' >
                <p className='font-Inter-SemiBold text-xs' >Upload Payment Proof</p> 
                {selectedFiles.length === 0 ? 
                    <label className='w-72 border-dashed h-64 flex flex-col border cursor-pointer justify-center items-center mx-4 my-6 rounded'>
                        <input style={{display:'none'}} type="file" onChange={handleImageChange} multiple accept="image/*" id="input" />
                        <img src='/assets/images/upload.png' className='w-14 h-14 my-1' />
                        <p className='text-sm font-Inter-SemiBold my-1' >Tap to upload a file here</p>
                        <p className='text-xs font-Inter-Medium text-gray-300 my-1' >Supports JPG, PNG. PDF</p>
                    </label>
                :
                    <div className='w-full py-6' >
                        {selectedFiles.map((item: any, index: any)=> {
                            return(
                                <div className='w-full flex flex-row items-center py-4 px-4 rounded' style={{backgroundColor:'#8F9BB321'}} >
                                    <img src={item} className='w-6 h-6 ' />
                                    <p className='font-Inter-SemiBold text-xs ml-4' >TranactionReceipt{index}</p>
                                    <div className='w-full flex flex-1' /> 
                                    <IoIosClose onClick={()=> handleRemove(item, imageFiles[index])} style={{backgroundColor: '#EA15362F', color:'#EA1536'}} className='w-6 h-6 m-1 cursor-pointer rounded-full' />
                                </div>  
                            ) })
                        } 
                        <label >
                            <input style={{display:'none'}} type="file" onChange={handleImage} accept="image/*" id="input" />
                            <p className=' text-heritagebutton cursor-pointer font-Inter-SemiBold text-xs text-right mt-2' >+ Add Another Screenshot</p>
                        </label>
                        <p className='font-Inter-SemiBold mt-10 text-xs' >Receiving Address</p>
                        <Input value={userContext.userData.bank_name+' - '+userContext.userData.account_number} placeholder='Wema Bank - 18209102929' fontSize='xs' className='my-2 ' />
                        <p className='font-Inter-Bold my-2 text-xs' >Account Name :<span className='font-Inter-Regular'>{userContext.userData.account_name}</span></p>
                        <div style={{backgroundColor:'#1526A717'}} className='rounded p-3 mt-10  '  >
                            <p className=' lg:w-72 font-Inter-Regular text-xs'>To add another bank account to your account please go to Profile{' > '}Banks</p>
                        </div>
                        <button onClick={()=> submit()} className='w-full py-3 flex justify-center items-center text-white font-Inter-Bold text-xs mr-2 mt-4 bg-heritagebutton rounded-md' >
                            {!loading ? 
                                <div className='py-1' >
                                    Submit
                                </div>:
                                <>
                                    <div className="animate-spin rounded-full h-6 w-6 mr-4 border-t-2 border-b-2 border-white"></div>
                                    LOADING
                                </>
                            } 
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}
