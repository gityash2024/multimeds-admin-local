import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const CouponCard = ({ item, setEditModal, setDeleteItem }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-HelveticaNeueBold text-[16px] leading-[20px]">{item.code}</p>
          <p className="font-HelveticaNeueMedium text-[14px] leading-[17.5px]">{item.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <EditIcon className="cursor-pointer text-blue-500" onClick={() => setEditModal(item)} /> 
          <DeleteIcon className="cursor-pointer text-red-500" onClick={() => setDeleteItem(item?.id)} /> 
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-HelveticaNeueMedium text-[14px] leading-[17.5px]">{item.percentage}% off</p>
        <p className={`font-HelveticaNeueMedium text-[14px] leading-[17.5px] ${item.status === 'ACTIVE' ? 'text-green-500' : 'text-red-500'}`}>{item.status}</p>
      </div>
    </>
  );
};

export default CouponCard;
