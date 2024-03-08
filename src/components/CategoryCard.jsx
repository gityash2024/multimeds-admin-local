import React, { useContext } from 'react'
import MedicineImage from '../assets/MedicineImage.png';
import { useNavigate } from 'react-router-dom';
import Context from '../context/AppContext';

export default function CategoryCard(props) {
    const navigate = useNavigate();
    const { setProductAddType } = useContext(Context);
    function fun1(){
        if(props.type === 1) setProductAddType(1); else if(props.type === 2) setProductAddType(2); else setProductAddType(undefined);
        navigate('/home/product');
    }
  return (
    <div className={`flex flex-col justify-center items-center gap-[16px] w-full min-h-[170px] px-[24px] py-[16px] rounded-[8px] shadow-md border ${props.type===1 ? 'bg-[#F1F5F9] border-[#E2E8F0] border-dashed': props.type===2 ? 'bg-[#E2E8F0] border-[#94A3B8]':'bg-white border-[#E2E8F0]'}`} onClick={fun1}>
      <div className='flex justify-between min-h-[14px] w-full'>
        <div className='text-[12px]'>{props.type===1 && 'DRAFT'}{props.type===2&&'ARCHIVED'}</div>
        {props.type===1 && <p className='text-[10px] leading-[12.5px] font-HelveticaNeueThin italic'>Last updated on 09 Oct 2023 by Sanjay R</p>}
      </div>
      <div className='flex gap-[8px] w-full'>
        <img className='rounded-[8px]' src={MedicineImage} alt="Category" />
        <div className='flex justify-between w-full'>
            <div className='flex flex-col gap-[4px]'>
                <div className='flex gap-[8px] items-center'><h1>Dolonext DT</h1> {props.sellingFast ? <div className='bg-[#FEF2F2] text-[#EF4444] text-[12px] font-HelveticaNeueMedium leading-[15px] p-[4px] rounded-[4px]'>Selling out soon!</div> :props.type !== 2 &&  <div className='bg-[#F7FEE7] text-[#65A30D] text-[12px] font-HelveticaNeueMedium leading-[15px] p-[4px] rounded-[4px]'>Newly Added</div>}</div>
                <p className='text-[#64748B] text-[12px] leading-[15px]j italic'>Added on 9th December 2023 by Sanjay R</p>
                {props.type === 2 ? <div className='flex gap-[4px] items-center text-[#64748B] text-[12px] leading-[15px]'><p>Pfizer</p><div className='bg-[#94A3B8] w-[6px] h-[6px] rounded-[3px]'/><p>13 boxes left</p><div className='bg-[#94A3B8] w-[6px] h-[6px] rounded-[3px]'/><p>400 sheets</p></div>
                 : <div className='flex gap-[4px] items-center text-[#64748B] text-[12px] leading-[15px]'><p>2 Manufacturers</p><div className='bg-[#E2E8F0] w-[6px] h-[6px] rounded-[3px]'></div><p>50 Boxes left</p></div>}
            </div>
            <div className='min-w-[120px]'>
                <h1>Rs 1243</h1>
                {/* Also check if the discount is expired or not, if expired don't show */}
                {props.enableDiscount &&<p className='text-[#65A30D] text-[12px] font-HelveticaNeueMedium leading-[15px]'>30% discount active</p>}
            </div>
        </div>
      </div>
      <div className='min-h-[14px] flex justify-end items-center gap-[16px] w-full'>
        {props.type===1 && <button className='text-[#031B89] text-[14px] leading-[17.5px] bg-white h-[26px] w-[87px] border-2 border-[#031B89] rounded-[4px]'>Publish</button>}
        {props.type===1 &&  <button className='text-[#031B89] text-[14px] leading-[17.5px] bg-white h-[26px] w-[65px] rounded-[4px['>Edit</button>}
        {props.type===2 && <button className='text-[#031B89] text-[14px] leading-[17.5px] bg-white h-[26px] w-[87px] border-2 border-[#031B89] rounded-[4px]'>Restore</button>}
        {props.type===2 &&  <button className='text-[#031B89] text-[14px] leading-[17.5px] bg-white h-[26px] w-[65px] rounded-[4px]'>Delete</button>}
      </div>
    </div>
  )
}
