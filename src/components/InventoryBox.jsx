import React, { useState } from "react";

import ArrowUp from "../assets/arrowUp.svg";
import ArrowDown from "../assets/arrowDown.svg";
import MedicinesCard from "./MedicinesCard";

const InventoryBox = (props) => {
  const {segment,categories}=props;
  console.log(segment,categories,'+++++++++++++======+++==++++=====+====++++')
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* heading */}
      <div className="border-b border-[#CBD5E1] flex justify-between py-2 items-center">
        <h1 className="text-2xl font-HelveticaNeueBold">
          {segment?.segmentName} ({categories?.length||0})
        </h1>

        <button className="outline-none bg-transparent" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={isOpen ? ArrowUp : ArrowDown}
            alt="arrow up"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* categories */}
      {isOpen && (
        <>
          <div className="flex justify-between items-center">
            {/* info */}
            <div className="flex gap-1 items-center">
              <h1 className="md:text-sm text-xs text-[#64748B]">
                {segment?.totalCategories||0} categories
              </h1>

              <div className="h-1.5 w-1.5 rounded-full bg-[#E2E8F0]" />

              <h2 className="md:text-sm text-xs text-[#64748B]">
                {segment?.totalProducts||0} products
              </h2>
            </div>

            {/* delete button */}
            <button className="md:w-[10.75rem] w-full text-sm font-HelveticaNeueMedium bg-white text-[#EF4444] border border-[#EF4444] md:py-3 py-2 px-4 rounded">
              Delete Segment
            </button>
          </div>

          {/* cards */}
          <div className="grid grid-cols-2 gap-4">
          {categories?.map((item)=>{
            return(

              <MedicinesCard
              title={item?.categoryName}
              description={item?.categoryDescription}
              products={item?.totalProducts||0}
              manufacturers={item?.totalManufacturers||0}
            />
            )
          })  
           }
          </div>
        </>
      )}
    </div>
  );
};

export default InventoryBox;
