import React, {useState} from 'react'

export default function CouponCard(props) {
    const [openMenu, setOpenMenu] = useState(false);
    const item = props.item;
  return (
    <>
      <div className='flex justify-between'>
            <div className='flex gap-[8px] items-center'><h1 className='text-[18px] font-[500] leading-[22.5px]'>{item.id}</h1><button className={`text-white text-[12px] font-[500] leading-[15px] px-[8px] py-[4px] rounded-[4px] ${item.activeStatus ? 'bg-[#7487FF]':'bg-[#64748B]'}`}>{item.activeStatus ? 'Active':'Expired'}</button></div>
            <div className='relative'>
                <p className="cursor-pointer" onClick={()=>{props.setMenuController(item.id); setOpenMenu(prev => !prev)}}>...</p>
                {props.menuController === item.id && openMenu && <div className='absolute top-[24px] right-[0px] flex flex-col gap-[4px] w-[131px] text-[14px] font-[400] leading-[17.5px] bg-white p-2 border border-[#E2E8F0] rounded-[4px] shadow-md'>
                    <p className='px-[6px] py-[8px] cursor-pointer hover:bg-[#F8FAFC] ' onClick={()=>{props.setEditModal(true); setOpenMenu(false)}}>Edit</p>
                    <p className='px-[6px] py-[8px] cursor-pointer hover:bg-[#F8FAFC] ' onClick={()=>{props.setDeleteItem('Coupon'); setOpenMenu(false)}}>Delete</p>
                </div>}
            </div>
        </div>
        <div className='h-[20px]'>
            
        </div>
        <div>
            <p className='text-[#475569] text-[14px] font-[400] leading-[17.5px]'>Type: {item.type} &nbsp; Expiry : {item.expiryDate}</p>
        </div>
    </>
  )
}
