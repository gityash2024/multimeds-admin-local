import React, { useContext } from 'react'
import MedicineImage from '../assets/MedicineImage.png';
import { useNavigate } from 'react-router-dom';
import Context from '../context/AppContext';
import { gql, useMutation,useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
const DELETE_PRODUCT=gql`
  mutation DeleteProduct($input: ID!) {
    deleteProduct(input: $input) {
      status
      message
    }
  }
`
export default function CategoryCard(props) {
  console.log(props?.productData)
  const data=props?.productData
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
    const navigate = useNavigate();
    const { setProductAddType } = useContext(Context);
    function fun1(){
        navigate('/home/add-product', { state: { productData: data } });
    }
    function formatDate(timestamp) {
      if (!timestamp || isNaN(timestamp)) {
          return "Invalid date";
      }
  
      const date = new Date(parseInt(timestamp));
      if (isNaN(date.getTime())) {
          return "Invalid date";
      }
  
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
  }
  const handleDelete=()=>{
    deleteProduct({
      variables: {
        input: data?.id
      }
    }).then((res) => {
      if (res?.data?.deleteProduct?.status === "SUCCESS") {
        toast.success("Product deleted successfully")
        navigate('/home/inventory')
      } else {
        toast.error(
          res?.data?.deleteProduct?.message ||
            "An error occurred while deleting the product"
        );
      }
    });

  }
    return (
      <div>
        {data && data.stocks.map((item) => (
          <div className={`flex flex-col justify-center items-center gap-[16px] w-full min-h-[170px] px-[24px] py-[16px] rounded-[8px] shadow-md border ${props.type === 1 ? 'bg-[#F1F5F9] border-[#E2E8F0] border-dashed' : props.type === 2 ? 'bg-[#E2E8F0] border-[#94A3B8]' : 'bg-white border-[#E2E8F0]'}`} >
            <div className='flex justify-between min-h-[14px] w-full'>
              <div className='text-[12px]'>{props.type === 1 && 'DRAFT'}{props.type === 2 && 'ARCHIVED'}</div>
              {<p className='text-[10px] leading-[12.5px] font-HelveticaNeueThin italic'>Last updated {formatDate(data?.updatedAt)}</p>}
            </div>
            <div className='flex gap-[8px] w-full'>
              <img className='rounded-[8px]' src={MedicineImage} alt="Category" />
              <div className='flex justify-between w-full'>
                <div className='flex flex-col gap-[4px]'>
                  <div className='flex gap-[8px] items-center'>
                    <h1>{props?.productData?.productName}</h1>
                    {/* {props.sellingFast ? <div className='bg-[#FEF2F2] text-[#EF4444] text-[12px] font-HelveticaNeueMedium leading-[15px] p-[4px] rounded-[4px]'>Selling out soon!</div> : props.type !== 2 && <div className='bg-[#F7FEE7] text-[#65A30D] text-[12px] font-HelveticaNeueMedium leading-[15px] p-[4px] rounded-[4px]'>Newly Added</div>} */}
                  </div>
                  <p className='text-[#64748B] text-[12px] leading-[15px]j italic'>Added on {formatDate(item?.createdAt)} </p>
                  {!(props.type === 2) ? (
                    <div className='flex gap-[4px] items-center text-[#64748B] text-[12px] leading-[15px]'>
                      <p>{data?.composition}</p>
                      <div className='bg-[#94A3B8] w-[6px] h-[6px] rounded-[3px]' />
                      <p>{item?.boxes} boxes left</p>
                      <div className='bg-[#94A3B8] w-[6px] h-[6px] rounded-[3px]' />
                      <p>{item?.noOfTabletsPerSheet} unites per sheets</p>
                    </div>
                  ) : (
                    <div className='flex gap-[4px] items-center text-[#64748B] text-[12px] leading-[15px]'>
                      <p>{props?.productData?.manufacturer}</p>
                      <div className='bg-[#E2E8F0] w-[6px] h-[6px] rounded-[3px]'></div>
                      <p>{item?.boxes} Boxes left</p>
                    </div>
                  )}
                </div>
                <div className='min-w-[120px]'>
                  <h1>Rs {item?.mrpPerSheet || 0}</h1>
                  {data?.discount && <p className='text-[#65A30D] text-[12px] font-HelveticaNeueMedium leading-[15px]'>{data?.discount || 0}% discount active</p>}
                </div>
              </div>
            </div>
            <div className='min-h-[14px] flex justify-end items-center gap-[16px] w-full'>
              {!data?.published && <button className='text-[#031B89] text-[14px] leading-[17.5px] bg-white h-[26px] w-[87px] border-2 border-[#031B89] rounded-[4px]' style={{cursor:"not-allowed"}}>Publish</button>}
              { <button className='text-[#031B89] text-[14px] leading-[17.5px] bg-white h-[26px] w-[65px] rounded-[4px[' onClick={fun1}>Edit</button>}
              {data?.archived&& <button className='text-[#031B89] text-[14px] leading-[17.5px] bg-white h-[26px] w-[87px] border-2 border-[#031B89] rounded-[4px]' style={{cursor:"not-allowed"}}>Restore</button>}
               <button className='text-[#031B89] text-[14px] leading-[17.5px] bg-white h-[26px] w-[65px] rounded-[4px]' onClick={handleDelete}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  
}
  

