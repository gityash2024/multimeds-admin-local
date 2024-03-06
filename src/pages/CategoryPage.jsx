import React, { useRef, useState } from "react";
import SearchIcon from "../assets/searchIcon.svg";
import CategoryCard from "../components/CategoryCard";
import ToggleButton from "../components/ToggleButton";

export default function CategoryPage() {
  const dateRef = useRef(null);
  const [discountValidity, setDiscountValidity] = useState(true);
  return (
    <div className="flex flex-col gap-[48px] p-[48px] w-full bg-white">
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] font-HelveticaNeueBold">Painkillers</h1>
        <div className="flex gap-[24px]">
          <div className="flex items-center md:w-[314px] rounded border border-[#CBD5E1] bg-white px-2">
            <div className="md:p-2 p-1 flex gap-2 items-center w-full">
              <img src={SearchIcon} alt="search icon" className="w-6 h-6" />
              <input
                type="text"
                placeholder="Search for products"
                className="placeholder:text-[#94A3B8] md:text-sm text-xs focus:outline-none w-full"
              />
            </div>
          </div>
          <div className="flex gap-[8px]">
            <button
              className="text-white text-[16px] font-[500] leading-[20px] w-[248px] bg-[#031B89] px-[16px] py-[12px] rounded-[4px]"
              onClick={() => setSaveModal(true)}
            >
              + Add New Product
            </button>
            <button
              className="text-[#EF4444] text-[16px] font-[500] leading-[20px] w-[172px] border-[2px] border-[#EF4444] px-[16px] py-[12px] rounded-[4px]"
              onClick={() => setShowDeletePopUp("customer")}
            >
              Delete Category
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-[18px] font-HelveticaNeueBold leading-[22.5px] mb-[24px]">General Information</h2>
        <div className="grid md:grid-cols-2 gap-[24px]">
          <div>
            <p className='flex gap-[4px] text-[10px] font-[300] leading-[12.5px] italic mb-[4px]'><p className="text-[#64748B] ">Category Name</p><span className="text-red-500">*</span></p>
            <input className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full' type='text' placeholder='Category'/>
          </div>
          <div>
            <p className='flex gap-[4px] text-[10px] font-[300] leading-[12.5px] italic mb-[4px]'><p className="text-[#64748B] ">Category Segments</p><span className="text-red-500">*</span></p>
            <select className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full'>
              <option>Category segment</option>
              </select>
          </div>
          <div>
            <p className='text-[#64748B] text-[10px] font-[300] leading-[12.5px] italic mb-[4px]'>Add Category Description</p>
            <input className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full' type='text' placeholder='Painkillers'/>
          </div>
        </div>
      </div>
      <div>
      <div className="flex justify-between mb-[24px]"><h2 className="text-[18px] font-HelveticaNeueBold leading-[22.5px]">Enable Discount for Category</h2><ToggleButton permission={discountValidity} setPermission={setDiscountValidity} /></div>
      <div className="grid md:grid-cols-2 gap-[24px] mb-[24px]">
            <div>
                  <p className='flex gap-[4px] text-[10px] font-[300] leading-[12.5px] italic mb-[4px]'><p className="text-[#64748B] ">Select Discount coupon</p><span className="text-red-500">*</span></p>
                  <select className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full'><option>ABCDEFJGI30%039%</option></select>
                </div>
                <div>
                <p className='flex gap-[4px] text-[10px] font-[300] leading-[12.5px] italic mb-[4px]'><p className="text-[#64748B] ">Discount Expiry</p><span className="text-red-500">*</span></p>
                  <input className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full' type='date' placeholder='12/11/2023, 11:59 PM' disabled={!discountValidity}/>
                </div>
        </div>
      </div>
      <div>
      <div className="mb-[24px]">
            <p className='mb-[8px]'>Filters</p>
            <div className='flex gap-[32px]'>
                <div className='flex items-center gap-[8px]'>
                    <p className="text-slate-500 font-helvetica-neue text-[12px] font-normal leading-3">Sort by alphabet: </p>
                    <div className='text-[#7487FF] bg-[#F8FAFC] px-[12px] py-[8px] rounded-3xl'>
                        <select className='bg-transparent outline-none'>
                            <option>All</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>...</option>
                            <option>Z</option>
                        </select>
                    </div>
                </div>
                <div className='flex items-center gap-[8px]'>
                    <p className="text-slate-500 font-helvetica-neue text-[12px] font-normal leading-3">Sort by manufacturer: </p>
                    <div className='text-[#CBD5E1] bg-[#F8FAFC] px-[12px] py-[8px] rounded-3xl'>
                        <select className='bg-transparent outline-none'>
                            <option>Select</option>
                            <option>M1</option>
                        </select>
                    </div>
                </div>
                <div className='flex items-center gap-[8px]'>
                    <p className="text-slate-500 font-helvetica-neue text-[12px] font-normal leading-3">Date Created:</p>
                    <div className='text-[#7487FF] bg-[#F8FAFC] px-[12px] py-[8px] rounded-3xl'>
                        {/* <select className='bg-transparent outline-none' onClick={()=>{dateRef.current.click()}}>
                            <option>9 September 2023</option>
                        </select> */}
                      <input type="date" className="bg-transparent outline-none" />
                    </div>
                </div>
                <div className='flex items-center gap-[8px]'>
                    <p className="text-slate-500 font-helvetica-neue text-[12px] font-normal leading-3">View: </p>
                    <div className='text-[#7487FF] bg-[#F8FAFC] px-[12px] py-[8px] rounded-3xl'>
                        <select className='bg-transparent outline-none'>
                            <option>Active</option>
                            <option>Draft</option>
                            <option>Archived</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-y-[24px] gap-x-[16px]">
            <CategoryCard enableDiscount={discountValidity}/>
            <CategoryCard sellingFast={true} enableDiscount={discountValidity}/>
            <CategoryCard type={1} enableDiscount={discountValidity}/>
            <CategoryCard type={2} enableDiscount={discountValidity}/>
            <CategoryCard enableDiscount={discountValidity} />
            <CategoryCard enableDiscount={discountValidity} />
        </div>
      </div>
    </div>
  );
}
