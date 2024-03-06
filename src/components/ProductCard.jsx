import React, { useContext } from 'react'

export default function ProductCard({setStockDetails}) {

  return (
    <div className='flex flex-col justify-between h-[159px] p-[16px] rounded-[8px] shadow-sm border border-[#DBEAFE]' onClick={()=>{setStockDetails(true)}}>
        <div>
            <div className='flex justify-between mb-[4px]'><h1 className='text-[#475569] text-[18px] leading-[22.5px] font-HelveticaNeueMedium'>Pfizer</h1><p>...</p></div>
            <h2 className='text-[#64748B] text-[12px] leading-[17.5px] font-[400px] italic'>Created by Sanjay R (You) on 09th December 2023</h2>
        </div>
        <div>
            <p className='text-[#475569] text-[14px] leading-[17.5px] font-[400px] italic mb-[4px]'>Batch No : PPHARMA2023-456</p>
            <p className='text-[#475569] text-[14px] leading-[17.5px] font-[400px] italic'>Exp Date : 03 Nov 2024</p>
        </div>
    </div>
  )
}
