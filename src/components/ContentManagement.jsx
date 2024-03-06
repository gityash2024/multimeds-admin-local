import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import gototlast from "../assets/gotolast.svg"
import MenuAddPlusWhite from "../assets/menu-add-plus-white.svg";
const ContentManagement = () => {
  const [tabs, setTabs] = useState(["Product information", "Topic name 2", "Topic name 3"]);
  const [tab, setTab] = useState(0);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-HelveticaNeueBold text-[#0F172A]">
          Content Management
        </h1>

        {/* <button className="w-[6.688rem] h-12 text-sm font-HelveticaNeueMedium text-[#031B89] flex gap-2 items-center justify-center py-2 px-3 rounded border border-[#031B89] bg-white">
          Save
        </button> */}
      </div>

      <div className='flex gap-[2px] text-[12px] font-normal font-[500] leading-[15px] '>
          {tabs.map((item, index)=><p className={`cursor-pointer text-center py-[8px] min-w-[125px] ${tab === index ? 'border-b-[3px] border-[#031B89]' : 'text-[#64748B] bg-[#F8FAFC]'}`} onClick={()=>setTab(index)}>{item}</p>)}
          <p className={`cursor-pointer text-center p-[8px] ${tab === -1 ? 'border-b-[3px] border-[#031B89]' : 'text-[#64748B] bg-[#F8FAFC]'}`} onClick={()=>setTab(-1)}><img src={gototlast} alt="gotolast" /></p>
          <button className="rounded-full bg-[#7487FF] p-1 ml-[24px]" onClick={()=>{setTabs([...tabs, `Topic name ${tabs.length+1}`])}}>
            <img src={MenuAddPlusWhite} alt="plus" />
          </button>
        </div>
      {/* <Tab.Group>
        <Tab.List className="flex gap-2">
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group> */}
 

      {/*  Note:- Implement auto save functionality for below data */}
      <div>
          <p className='flex gap-[4px] text-[10px] font-HelveticaNeueItalic leading-[12.5px] italic mb-[4px]'><p className="text-[#64748B] ">Assign Topic Name</p><span className="text-red-500">*</span></p>
          <input type="text" className='outline-none text-[14px] font-[400] leading-[17.5px] bg-[#FAFAFA] border border-[#E2E8F0] p-[12px] rounded-sm w-1/2' placeholder="Sanjay R" />
      </div>
      <div>
          <p className='flex gap-[4px] text-[10px] font-HelveticaNeueItalic leading-[12.5px] italic mb-[4px]'><p className="text-[#64748B] ">Add Description</p><span className="text-red-500">*</span></p>
          <textarea rows="5" type="text" className='outline-none text-[14px] font-[400] bg-[#FAFAFA] leading-[17.5px] border border-[#E2E8F0] p-[12px] rounded-sm w-1/2' placeholder="Sanjay R" />
      </div>
      <div>
          <p className='flex gap-[4px] text-[10px] font-HelveticaNeueItalic leading-[12.5px] italic mb-[4px]'><p className="text-[#64748B] ">Select Author</p><span className="text-red-500">*</span></p>
          <select className='outline-none text-[14px] font-[400] leading-[17.5px] border border-[#E2E8F0] bg-[#FAFAFA] p-[12px] rounded-sm w-1/2'><option>Sanjay R</option></select>
        </div>
    </div>
  );
};

export default ContentManagement;
