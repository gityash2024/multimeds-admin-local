import React, { useState } from 'react'

export default function AddNewStock(props) {
    const [type, setType] = useState('Boxes');
  return ( 
    <div className="fixed top-0 left-0 right-0 bottom-0">
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/30" onClick={()=>props.setNewStockModal(false)}></div>
    <div className="fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[724px] bg-white rounded-[8px]">
      <div className="flex justify-between w-full px-[16px] py-[8px]">
          <h1 className='text-[16px] font-HelveticaNeueMedium leading-[20px]'>Add New Stock</h1>
          <button className="text-[24px]" onClick={()=>props.setNewStockModal(false)}>&times;</button>
      </div>
      <div className="px-[48px] py-[16px]">
          <div>
              <p className='flex gap-[4px] text-[10px] font-HelveticaNeueThin leading-[12.5px] italic mb-[4px]'><p className="text-[#64748B] ">Select manufacturer</p><span className="text-red-500">*</span></p>
              <select className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full' disabled><option>Pfizer</option></select>
          </div>   
          <div>
              <h1 className="text-[16px] font-[700] leading-[20px] mt-[12px]">{type}</h1>
              <div className="flex flex-col gap-[4px] py-[12px]">
                  <h2 className="text-[#64748B] text-[10px] font-[700] leading-[12.5px] mb-[12px]">GROUP 1</h2>
                  <div>
                    <p className='flex gap-[4px] text-[10px] font-HelveticaNeueThin leading-[12.5px] italic mb-[4px]'><p className="text-[#64748B] ">Select stock type</p><span className="text-red-500">*</span></p>
                    <select className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full' onChange={(e)=>{setType(e.target.value)}}>
                        <option value="Boxes">Box</option>
                        <option value="Units">Unit</option>
                        <option value="Grams">Grams</option>
                        <option value="Kilograms">Kgs</option>
                    </select>
                </div> 
                  <div className="flex gap-[12px] w-full">
                    {type === 'Boxes' && <>
                      <div className="flex-1">
                          <p className='flex gap-[4px] text-[10px] font-[300] leading-[12.5px] mb-[4px]'>Boxes:</p>
                          <select className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full'>
                            <option>1</option>  
                            <option>2</option>
                            <option>3</option>
                            <option>...</option>
                        </select>
                      </div> 
                      <div className="flex-1">
                          <p className='flex gap-[4px] text-[10px] font-[300] leading-[12.5px] mb-[4px]'>Sheets:</p>
                          <select className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full'>
                            <option>1</option>  
                            <option>2</option>
                            <option>3</option>
                            <option>...</option>
                        </select>
                      </div> 
                      <div className="flex-1">
                          <p className='flex gap-[4px] text-[10px] font-[300] leading-[12.5px] mb-[4px]'>No. of tablets per sheet:</p>
                          <select className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>...</option>
                        </select>
                      </div> 
                    </>}
                    {type === 'Units' && <>
                    <div className="flex-1">
                          <p className='flex gap-[4px] text-[10px] font-[300] leading-[12.5px] mb-[4px]'>No. of Units</p>
                          <select className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full'>
                            <option>1</option> 
                            <option>2</option>
                            <option>3</option>
                            <option>...</option>
                        </select>
                      </div> 
                    <div className="flex-1">
                          <p className='flex gap-[4px] text-[10px] font-[300] leading-[12.5px] mb-[4px]'>Enter weight per unit</p>
                          <select className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full'>
                            <option>1</option> 
                            <option>2</option>
                            <option>3</option>
                            <option>...</option>
                        </select>
                      </div> 
                    </>}

                    {type === 'Grams' && <>
                    <div className="flex-1">
                          <p className='flex gap-[4px] text-[10px] font-[300] leading-[12.5px] mb-[4px]'>No. of grams</p>
                          <select className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>...</option>
                        </select>
                      </div> 
                    </>}
                    {type === 'Kilograms'&& <>
                    <div className="flex-1">
                          <p className='flex gap-[4px] text-[10px] font-[300] leading-[12.5px] mb-[4px]'>No. of Kgs</p>
                          <select className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>...</option>
                        </select>
                      </div> 
                    </>}
                  </div>
                      <div>
                          <p className='flex gap-[4px] text-[10px] font-HelveticaNeueThin leading-[12.5px] italic mb-[4px]'><p className="text-[#64748B] ">Enter MRP per sheet</p><span className="text-red-500">*</span></p>
                          <input type="text" className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full' placeholder="Enter MRP (in Rs)" />
                      </div> 
                      <div>
                          <p className='flex gap-[4px] text-[10px] font-HelveticaNeueThin leading-[12.5px] italic mb-[4px]'><p className="text-[#64748B] ">Box MRP</p><span className="text-red-500">*</span></p>
                          <input type="text" className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full' placeholder="Box MRP will be shown here" disabled/>
                      </div> 
                      <div>
                          <p className='flex gap-[4px] text-[10px] font-HelveticaNeueThin leading-[12.5px] italic mb-[4px]'><p className="text-[#64748B] ">Assign Batch number</p><span className="text-red-500">*</span></p>
                          <select className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full'><option>BTCH11928X39</option></select>
                      </div> 
                  <div className="flex gap-[4px]">
                      <div className="flex-1">
                          <p className='flex gap-[4px] text-[10px] font-HelveticaNeueThin leading-[12.5px] italic mb-[4px]'><p className="text-[#64748B] ">Manufacturer Date</p><span className="text-red-500">*</span></p>
                          <input type="text" className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full' placeholder="02/02/2023" disabled/>
                      </div> 
                      <div className="flex-1">
                          <p className='flex gap-[4px] text-[10px] font-HelveticaNeueThin leading-[12.5px] italic mb-[4px]'><p className="text-[#64748B] ">Expiry Date</p><span className="text-red-500">*</span></p>
                          <input type="text" className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-full' placeholder="02/02/2028" />
                      </div> 
                  </div>
              </div>
              <div>
                  <button className="text-[#7487FF] text-[16px] font-[700] leading-[20px]">Add new</button>
              </div>
          </div>   
      </div>
      <div className="flex justify-end gap-[16px] px-[16px] py-[12px]">
          <button className="text-[#031B89] text-[16px] font-HelveticaNeueMedium leading-[20px] w-[77px]" onClick={()=>props.setNewStockModal(false)}>Cancel</button>
          <button className="text-white text-[16px] font-HelveticaNeueMedium leading-[20px] px-[16px] py-[12px] bg-[#031B89] w-[134px] rounded-[4px]" onClick={()=>props.setNewStockModal(false)}>Save</button>
      </div>
    </div>
    </div>
  )
}
