import React, {useEffect, useState} from 'react'
import bannerImage from '../assets/bannerImage.png';
export default function BannerImage({item, globalFlag, setGlobalFlag, editImage}) {
    const [flag, setFlag] = useState(false);
  return (
    <>
        <div className='relative flex justify-between items-center'><p className='text-[14px] font-[700] leading-[17.5px]'>{item.file}</p><p className='cursor-pointer' onClick={()=>{setFlag(prev => !prev); setGlobalFlag(item.id)}}>...</p>{(flag&&globalFlag===item.id) && <div className='absolute top-5 right-1 bg-white rounded p-2'><p className='cursor-pointer border-b border-[#F1F5F9] text-[12px] font-[400]' onClick={()=>{editImage(true);setFlag(false);setGlobalFlag(undefined)}}>Edit</p><p className='cursor-pointer border-b border-[#F1F5F9] text-[12px] font-[400]' onClick={()=>{setFlag(false); setGlobalFlag(undefined);}}>Delete</p></div>}</div>
        <img className='h-[223px] w-full object-cover rounded-[4px]' src={bannerImage} alt="medicine" />

    </>
  )
}
