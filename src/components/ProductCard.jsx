import { Delete, Remove } from '@mui/icons-material'
import { set } from 'date-fns';
import React, { useContext } from 'react'

export default function ProductCard({setStockDetails,stockData,removeManufacturer,setdataToUpdate}) {

  return (
    <div className='flex flex-col justify-between h-[159px] p-[16px] rounded-[8px] shadow-sm border border-[#DBEAFE]' onClick={()=>{setStockDetails(true); setdataToUpdate(stockData)}}>
        <div>
            <div className='flex justify-between mb-[4px]'><h1 className='text-[#475569] text-[18px] leading-[22.5px] font-HelveticaNeueMedium'>{stockData?.manufacturer||"NA"}</h1><p>...</p></div>
            <h2 className='text-[#64748B] text-[12px] leading-[17.5px] font-[400px] italic'></h2>
        </div>
      
        <div>
            <p className='text-[#475569] text-[14px] leading-[17.5px] font-[400px] italic mb-[4px]'>Batch No : {stockData?.batchNumber||"NA"}</p>
            <p className='text-[#475569] text-[14px] leading-[17.5px] font-[400px] italic'>Exp Date : {stockData?.expiryDate||"NA"}</p>
        </div>
      <div className='flex justify-end gap-[8px]' style={{cursor:"pointer"}} title='Remove Manufacturer' onClick={()=>removeManufacturer(stockData?.manufacturer)}><Delete/></div>
    </div>
  )
}
