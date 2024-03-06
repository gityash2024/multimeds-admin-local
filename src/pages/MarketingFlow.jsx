import React, { useEffect, useRef, useState } from 'react'
import uploadFile from '../assets/uploadFile.svg'
import CreateBannerModal from '../components/CreateBannerModal';
import EditBannerModal from '../components/EditBannerModal';

import BannerImage from '../components/BannerImage';
export default function MarketingFlow() {
    const [openCreateBannerModal, setOpenCreateBannerModal] = useState(false);
    const [openEditBannerModal, setOpenEditBannerModal] = useState(false);
    const fileRef = useRef(null);
    const [images, setImages] = useState([{id: 1, file: 'image 1'},{id: 2, file: 'image 2'}]);
    const [count, setCount] = useState(0);
    const [globalFlag, setGlobalFlag] = useState(undefined);
    useEffect(()=>{ setCount(images.length)},[images]);
  return (
    <div className='flex flex-col gap-[48px] p-[48px] w-full'>
        <div className='flex items-center justify-between w-full'>
            <div>
                <h1 className='text-[24px] font-[700] leading-[30px]'>Banner Management</h1>
                <p className='text-[14px] font-[400] leading-[17.5px]'>Star the first image to appear on the website. Select upto 5 images(jpg,gif,mp4)</p>
            </div>
            <button className='px-[16px] py-[12px] w-[210px] text-[#031B89] text-[14px] font-[500] leading-[17.5px] border-2 border-[#031B89] rounded-[4px]' onClick={()=>{setOpenCreateBannerModal(true)}}>
                Create Banner
            </button>
        </div>
        <div className='grid md:grid-cols-2 gap-[16px]'>
            {images.map(item =>(
                <div key={item.id} className='flex flex-col gap-[16px] px-[24px] py-[16px] rounded-[8px] shadow-md'>
                    <BannerImage item={item} setImages={setImages} globalFlag={globalFlag} setGlobalFlag={setGlobalFlag} editImage={setOpenEditBannerModal} />
                </div>
                ))}
            {count < 5 && <div className='flex flex-col gap-[16px] px-[24px] py-[16px] rounded-[8px] shadow-md'>
                <div className='flex justify-between items-center'><p className='text-[14px] font-[700] leading-[17.5px]'>image {count+1}</p><p className='cursor-pointer' onClick={()=>{}}>...</p></div>
                <div className='flex justify-center items-center h-[223px] bg-[#F1F5F9] rounded-[4px]'>
                    <div className='cursor-pointer flex flex-col gap-[8px] justify-center items-center' onClick={()=>{fileRef.current.click();}}>
                        <img src={uploadFile} alt="upload file" globalFlag={globalFlag} setGlobalFlag={setGlobalFlag} />
                        <p className='text-[#64748B] text-[14px] font-[500] leading-[17.5px]'>Upload image</p>
                    </div>
                </div>
            </div>}
        </div>
        <input ref={fileRef} type='file' className='hidden'  />
        {openCreateBannerModal && <CreateBannerModal setOpenCreateBannerModal={setOpenCreateBannerModal} />}
        {openEditBannerModal && <EditBannerModal setOpenEditBannerModal={setOpenEditBannerModal} />}
    </div>
  )
}
