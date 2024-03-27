import React, { useContext, useRef, useState } from 'react'
import Picture from '../assets/ProfilePicture.png';
import RemovedPP from "../assets/removedPP.png";
import Context from '../context/AppContext';
import { useLocation } from 'react-router-dom';
export default function Profile() {
  const location=useLocation();
  const userDetails=JSON.parse(localStorage.getItem('userDetails'));
  console.log(userDetails,'userDetails')
  const[fullName, setFullName]=useState(userDetails?.fullName||"");
  const[email, setEmail]=useState(userDetails?.email||"");
  const[phone, setPhone]=useState(userDetails?.contactNumber||"");

  const fileRef = useRef(null);
  const {showAddressPopUp, setShowAddressPopUp, showDeletePopUp, setShowDeletePopUp} = useContext(Context);
  const [editAddress, setEditAddress]=useState(false);
  const [profileImage, setProfileImage] = useState(Picture);
  return (
    <div className='flex flex-col gap-[48px]'>
        <div className='flex flex-col gap-[16px]'>
            <div className='text-[18px] font-[500] leading-[22.5px] tracking-[0.414px]'>Profile</div>
            <div>
              <p className='text-[#94A3B8] text-[10px] font-[500] leading-[12.5px] mb-[8px]'>PROFILE PICTURE</p>
              <div className='flex gap-[24px]'>
                <img className='border-[3px] border-[#031B89] w-[72px] h-[72px] rounded-[50%]' src={userDetails?.profilePicture||profileImage} alt=''/>
                {/* <button className='text-[12px] font-[500] leading-[15px] text-[#031B89]' onClick={()=>{fileRef.current.click()}}>EDIT</button> */}
                {/* <input type="file" ref={fileRef} className='hidden' /> */}
                {/* <button className='text-[12px] font-[500] leading-[15px] text-[#031B89]' onClick={()=>{setProfileImage(RemovedPP)}}>REMOVE</button> */}
              </div>
            </div>
            <div>
              <p className='text-[#94A3B8] text-[10px] font-[500] leading-[12.5px] mb-[8px]'>DETAILS</p>
              <div className='flex flex-wrap gap-[24px]'>
                <div>
                  <p className='text-[#64748B] text-[10px] font-[300] leading-[12.5px] italic mb-[4px]'>Name</p>
                  <input disabled  className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm min-w-[314px]' type='text' placeholder='Enter name' value={fullName} onChange={(e)=>{setFullName(e.target.value)}}/>
                </div>
                <div>
                  <p className='text-[#64748B] text-[10px] font-[300] leading-[12.5px] italic mb-[4px]'>Email</p>
                  <input  disabled className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm min-w-[314px]' type='email' placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div>
                  <p className='text-[#64748B] text-[10px] font-[300] leading-[12.5px] italic mb-[4px]'>Phone</p>
                  <input disabled  className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm min-w-[314px]' type='text' placeholder='Enter Contact Number' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                </div>
              </div>
            </div>
        </div>
      
        <div>
            <div className='flex justify-between'>
                <div>Saved Address</div>
                <button className='text-white text-[16px] font-[500] leading-[20px] bg-[#7487FF] px-[16px] py-[8px] rounded-[4px]' onClick={()=>{setShowAddressPopUp(true)}}>+ Add New </button>
            </div>
            {/* Saved address */}
            <div className='flex justify-between'>
              <div className='px-[12px] py-[16px]'>
                <div className='flex gap-[4px] items-center'><p className='text-[14px] font-[400] leading-[17.5px]'>Other | Lajo Lakshman</p><div className='text-[12px] font-[500] leading-[15px] text-[#65A30D] bg-[#F7FEE7]'>Default</div></div>
                <h1 className='text-[14px] font-[400] leading-[17.5px] mb-[4px]'>9606014618</h1>
                <p className='text-[12px] font-[400] leading-[15px]'>123, Sapphire Street, Kormaghala 5th Block, 560095</p>
              </div>
              <div className='relative'>
                <div className='cursor-pointer' onClick={()=>{setEditAddress(prev => !prev)}}>...</div>
                {editAddress && <div className='absolute top-[20px] right-[0px] p-[8px] border-2 border-[#F8FAFC] bg-white rounded-[8px] shadow-md'>
                  <button onClick={()=>{setEditAddress(false); setShowAddressPopUp(true)}}>Edit</button>
                  <button onClick={()=>{setEditAddress(false); setShowDeletePopUp('address')}}>Delete</button>
                </div>}
              </div>
            </div>
        </div>
    </div>
  )
}
