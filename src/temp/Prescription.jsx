import React, { useContext, useRef, useState } from 'react'
import downloaddIcon from '../assets/download-arrow.svg';
import deleteIcon from '../assets/Trash, Delete, Bin.svg';
import Context from '../context/AppContext';
export default function Prescription() {
  const inputRef = useRef(null);
  function addNewFile(){
    inputRef.current.click();
  }
  const { showDeletePopUp, setShowDeletePopUp } = useContext(Context);
  const [prescriptionList, setPrescriptionList] = useState([{id: 1, filename: 'file1.pdf', remoteAddress: '#', date: '09th Sept2023'}])
  return (
    <div>
        <div className='flex justify-between items-center mb-[16px]'>
          <div className='text-[18px] font-[700] leading-[22.5px] tracking-[0.414px]'>
            Saved Prescription
          </div>
          <button className='text-white text-[16px] font-[500] leading-[20px] bg-[#7487FF] px-[16px] py-[8px] rounded-[4px]' onClick={addNewFile}>+ Add New </button>
          <input className='hidden' ref={inputRef} type="file" />
        </div>
        {prescriptionList.map(item=>{
          return (
            <div className='flex justify-between items-center w-full py-[16px]' key={item.id}>
              <div className='flex justify-between bg-[#F8FAFC] w-[50%] p-[12px]'>
                <p>{item.filename}</p>
                <button className='text-[#7487FF] text-[12px] font-[500] leading-[15px]'>View</button>
              </div>
              <p className='text-[#94A3B8] text-[12px] font-[400] leading-[15px] italic'>Uploaded on {item.date}</p>
              <div className='flex gap-[16px]'>
                <img src={downloaddIcon} alt='download' />
                <img src={deleteIcon} alt='delete' onClick={()=>{setShowDeletePopUp('prescription')}} />
              </div>
            </div>
          )
        })}
    </div>
  )
}
