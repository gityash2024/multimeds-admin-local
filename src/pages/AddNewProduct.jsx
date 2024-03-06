import React, { useContext, useRef, useState } from "react";

import ProfileInput from "../components/ProfileInput";

import WhiteDropdownArrow from "../assets/whiteDropdownArrow.svg";
import DeleteIcon from "../assets/delete.svg";
import Checkbox from "../components/Checkbox";
import ToggleButton from "../components/ToggleButton";
import SearchIcon from "../assets/searchIcon.svg";
import MenuAddPlus from "../assets/menu-add-plus.svg";
import MenuAddPlusWhite from "../assets/menu-add-plus-white.svg";
import Warning from "../components/Warning";
import ImageIcon from "../assets/image-icon.svg";
import Star from "../assets/star.svg";
import ContentManagement from "../components/ContentManagement";
import PublishProductDropDown from "../components/PublishProductDropDown";
import Context from "../context/AppContext";
import AddNewStock from "../components/AddNewStock";


const AddNewProduct = () => {
  const fileRef = useRef(null);
  const [option, setOption] = useState(undefined);
  const [newStockModal, setNewStockModal] = useState(undefined);
  const [sortBy, setSortBy] = useState("All");
  const {productAddType} = useContext(Context);

  return (
    <div className="w-full p-12 flex flex-col gap-12 bg-white">
      {/* header */}
      <div className="flex flex-col gap-4">
        {/* your inventory */}
        <div className="flex justify-between">
          {/* heading */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-HelveticaNeueBold text-[#0F172A]">
              Dolonex DT
            </h1>

            <h2 className="text-[#64748B] text-xs font-HelveticaNeueItalic">
              Created by Sanjay R (You) on 09th December 2023
            </h2>
          </div>

          {/* buttons */}
          <div className="flex gap-1 items-center h-12">
            {/* <button className="flex justify-between py-3 px-4 w-[15.5rem] bg-[#031B89] rounded items-center h-full">
              <h1 className=" font-HelveticaNeueMedium text-white">
                Publish this product
              </h1>
              <img
                src={WhiteDropdownArrow}
                alt="dropdown arrow"
                className="w-6 h-6"
              />
            </button> */}
            {/* <div className="flex justify-between py-3 px-4 w-[15.5rem] bg-[#031B89] rounded items-center h-full">
                <select className="font-HelveticaNeueMedium text-white bg-transparent outline-none h-full w-full">
                  <option value="Publish this product">Publish this product</option>
                  <option value="Add draft">Add draft</option>
                </select>
            </div> */}
            <PublishProductDropDown setOption={setOption}/>

            <button className="text-sm font-HelveticaNeueMedium text-[#031B89] flex justify-between py-3 px-4 w-fit bg-white border border-[#031B89] rounded items-center h-full">
              Archive this product
            </button>

            <button className="p-2">
              <img src={DeleteIcon} alt="delete icon" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* general info */}
      <div className="flex flex-col gap-6">
        <h1 className="text-lg font-HelveticaNeueBold text-[#0F172A]">
          General Information
        </h1>

        {/* inputs */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-6 items-center">
            <ProfileInput
              title="Product name"
              // value="Dolonex DT"
              important
              big
              wide
            />

            {/* checkbox */}
            <div className="flex gap-2 items-center">
              <Checkbox />
              <h1>Needs Prescription</h1>
            </div>
          </div>

          <div className="flex gap-6">
            <ProfileInput
              title="Assign Product Category"
              value="Painkillers"
              important
              big
              wide
              dropdownField
              disabled
            />

            <ProfileInput
              title="Product Composition"
              // value="Piroxicam (20mg)"
              important
              big
              wide
            />
          </div>

          <div className="flex gap-6">
            <ProfileInput
              title="Storage Instructions?"
              // value="PainkillersStore below 30C"
              big
              wide
            />

            <ProfileInput
              title="Country of Origin"
              // value="India"
              big
              wide
            />
          </div>
        </div>
      </div>

      {/* discount management */}
      <div className="flex flex-col gap-6">
        <h1 className="text-lg font-HelveticaNeueBold text-[#0F172A]">
          Discount Management
        </h1>

        <div className="flex justify-between">
          <h1 className="font-HelveticaNeueBold text-[#000000]">
            Enable Discount for Product
          </h1>

          <ToggleButton />
        </div>
      </div>

      {/* stock management */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-HelveticaNeueBold text-[#0F172A]">
            Stock management
          </h1>

          <div className="flex gap-4 ">
            {/* searchbar */}
            <div className="w-[19.625rem] rounded border border-[#CBD5E1] bg-white py-0.5 px-2">
              <div className="p-2 flex gap-2 items-center">
                <img src={SearchIcon} alt="search icon" className="w-6 h-6" />

                <input
                  type="text"
                  placeholder="Search for manufacturers"
                  className="placeholder:text-[#94A3B8] text-sm focus:outline-none"
                />
              </div>
            </div>

            <button className="flex gap-2 items-center py-2 px-3 rounded border border-[#031B89] bg-white" onClick={()=>setNewStockModal(true)}>
              <img src={MenuAddPlus} alt="plus" className="w-6 h-6" />

              <h1 className="text-sm font-HelveticaNeueMedium text-[#031B89]">
                Add Product Stock
              </h1>
            </button>
          </div>
        </div>

        {/* no products */}
        <Warning warning="No Products available" />
      </div>

      {/* product images */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-HelveticaNeueBold text-[#0F172A]">
              Product Images
            </h1>

            <h2 className="text-sm text-[#0F172A]">
              Star the primary Image for the product. Select upto 10 images
              (jpg, gif, mp4)
            </h2>
          </div>

          <button className="h-12 text-sm font-HelveticaNeueMedium text-[#031B89] flex gap-2 items-center py-2 px-3 rounded border border-[#031B89] bg-white" onClick={()=>{fileRef.current.click()}}>
            Upload Product Images
          </button>
          <input type="file" className="hidden" ref={fileRef} />
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative w-[14.125rem] h-[13.938rem] flex items-center justify-center bg-[#F1F5F9] rounded p-2">
            <img src={ImageIcon} alt="image icon" className="w-6 h-6" />

            <div className="absolute top-2 right-2 p-1 bg-white rounded">
              <img src={ImageIcon} alt="image icon" className="w-6 h-6" />
            </div>
          </div>

          <button className="rounded-full bg-[#7487FF] p-3 w-12 h-12" onClick={()=>{fileRef.current.click()}}>
            <img src={MenuAddPlusWhite} alt="plus" />
          </button>
        </div>
      </div>

      {/* content management */}
      <ContentManagement />
      {newStockModal && <AddNewStock setNewStockModal={setNewStockModal}/> }
    </div>
  );
};

export default AddNewProduct;
