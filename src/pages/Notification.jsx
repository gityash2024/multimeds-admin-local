import React, { useState } from 'react'
import notificationImage from '../assets/notificationI1.svg'
import alertImage from '../assets/alertNotification.svg';
import { useNavigate } from 'react-router-dom';
export default function Notification() {
    const navigate = useNavigate()
    // const data = [
    //     {
    //         id: 1,
    //         title: 'Your banner is live',
    //         text: 'Your marketing banner IMGwhsifjdsof.jpg is live now!',
    //         timeStemp: 'Oct 20 2023, 07:45 am',
    //         type: 'Notification',
    //         status: 'unread',
    //     },
    //     {
    //         id: 2,
    //         title: 'Your banner is live',
    //         text: 'Your marketing banner IMGwhsifjdsof.jpg is live now!',
    //         timeStemp: 'Oct 20 2023, 07:45 am',
    //         type: 'Alert',
    //         status: 'unread',
    //     },
    //     {
    //         id: 3,
    //         title: 'Stock Expiry alert!',
    //         text: 'Your marketing banner IMGwhsifjdsof.jpg is live now!',
    //         timeStemp: 'Oct 20 2023, 07:45 am',
    //         type: 'Alert',
    //         status: 'unread',
    //     },
    //     {
    //         id: 4,
    //         title: 'Stock Expiry alert!',
    //         text: 'Your marketing banner IMGwhsifjdsof.jpg is live now!',
    //         timeStemp: 'Oct 20 2023, 07:45 am',
    //         type: 'Alert',
    //         status: 'read',
    //     },
    //     {
    //         id: 5,
    //         title: 'Your banner is live',
    //         text: 'Your marketing banner IMGwhsifjdsof.jpg is live now!',
    //         timeStemp: 'Oct 20 2023, 07:45 am',
    //         type: 'Notification',
    //         status: 'read',
    //     },
    //     {
    //         id: 6,
    //         title: 'Your banner is live',
    //         text: 'Your marketing banner IMGwhsifjdsof.jpg is live now!',
    //         timeStemp: 'Oct 20 2023, 07:45 am',
    //         type: 'Notification',
    //         status: 'read',
    //     },
    // ]
    const data=[]
    const [notifications, setNotifications] = useState(data);
  return (
    <div className='flex flex-col gap-[48px] p-[48px] w-full'>
      <div className='flex justify-between items-center'>
        <h1 className='text-[24px] font-[700] leading-[30px]'>Notifications</h1>
       { notifications?.length ? <button className='text-[16px] font-[500] leading-[20px] text-[#7487FF]' onClick={()=>{setNotifications(notifications.map(i=>{ i.status='read'; return i;}))}}>Mark all as Read</button>:null}
      </div>
      <div className='flex flex-col gap-[8px] w-full'>
        {notifications.map(item=>(
            <div key={item.id} className={`flex justify-between items-center w-full px-[12px] py-[16px] ${item.status ==='read' ? 'border-l-2 border-[#94A3B8]':item.type === 'Alert' ? 'border-l-2 border-[#F87171] bg-[#FEF2F2]' :'border-l-2 border-[#84CC16] bg-[#F7FEE7]' }`}>
                <div className='flex gap-[12px] items-center'>
                    <img className={`p-[12px] rounded-[50%] ${item.type === 'Alert' ? 'bg-[#F87171]':'bg-[#7487FF]'}`} src={item.type === 'Alert' ? alertImage:notificationImage} alt='notification' />
                    <div className='flex flex-col gap-[4px]'>
                        <p className='text-[12px] font-[400] leading-[15px]'>{item.timeStemp}</p>
                        <h1 className='text-[16px] font-[500] leading-[20px]'>{item.title}</h1>
                        <h2 className='text-[14px] font-[400] leading-[17.5px]'>{item.text}</h2>
                        {item.title === 'Stock Expiry alert!' && <span className='cursor-pointer text-[#7487FF] text-[16px] font-[700] leading-[20px]' onClick={()=>{navigate('/home/product')}}>Got to Product</span>}
                    </div>
                </div>
                <button className='text-[24px]' onClick={()=>{setNotifications(notifications.filter(e=>e.id!==item.id))}}>&times;</button>
            </div>
        ))}
        {!notifications.length && <p className='text-[14px] font-[400] leading-[17.5px] text-[#94A3B8] italic text-center py-[16px]'>No Notifications</p>}
      </div>
    </div>
  )
}
