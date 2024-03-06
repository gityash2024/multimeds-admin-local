import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowUp from "../assets/arrowUp.svg";
import ArrowDown from "../assets/arrowDown.svg";
import SearchIcon from "../assets/searchIcon.svg";
import InventoryBox from "../components/InventoryBox";
import AddNewDropdown from "../components/AddNewDropdown";

const sortByList = [
  { id: 0, name: "All" },
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
  { id: 4, name: "D" },
  { id: 5, name: "E" },
  { id: 6, name: "F" },
  { id: 7, name: "G" },
  { id: 8, name: "H" },
  { id: 9, name: "I" },
  { id: 10, name: "J" },
  { id: 11, name: "K" },
  { id: 12, name: "L" },
  { id: 13, name: "M" },
  { id: 14, name: "N" },
  { id: 15, name: "O" },
  { id: 16, name: "P" },
  { id: 17, name: "Q" },
  { id: 18, name: "R" },
  { id: 19, name: "S" },
  { id: 20, name: "T" },
  { id: 21, name: "U" },
  { id: 22, name: "V" },
  { id: 23, name: "W" },
  { id: 24, name: "X" },
  { id: 25, name: "Y" },
  { id: 26, name: "Z" },
];

const Inventory = () => {
  const [sortBy, setSortBy] = useState("All");
  // const [isOpen, setIsOpen] = useState(false);
  const [isAddNewDropdown, setIsAddNewDropdown] = useState(false);
  const [isAddSegment, setIsAddSegment] = useState(false);

  return (
    <div className="w-full p-12 flex flex-col gap-12 bg-white">
      {/* header */}
      <div className="flex flex-col gap-4">
        {/* your inventory */}
        <div className="flex justify-between">
          <h1 className="text-2xl font-HelveticaNeueBold text-[#0F172A]">
            Your inventory
          </h1>

          <div className="flex gap-4 ">
            {/* searchbar */}
            <div className="flex items-center w-[19.625rem] rounded border border-[#CBD5E1] bg-white py-0.5 px-2">
              <div className="p-2 flex gap-1 items-center">
                <img src={SearchIcon} alt="search icon" className="w-[24px]" />

                <input
                  type="text"
                  placeholder="Search for Segments"
                  className="placeholder:text-[#94A3B8] text-[14px] focus:outline-none"
                />
              </div>
            </div>

            {/* add button dropdown */}
            <AddNewDropdown setIsAddSegment={setIsAddSegment} />
          </div>
        </div>

        {/* sort by */}
        <div className="flex flex-col gap-2">
          <h1 className="text-xs">Sort by:</h1>

          {/* list */}
          <div className="flex justify-between font-medium text-[#334155]">
            {sortByList.map((item) => {
              return (
                <button
                  className={sortBy === item.name && "text-[#7487FF]"}
                  onClick={() => setSortBy(item.name)}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* prescription medicines */}
      <InventoryBox />
      <InventoryBox />

      {/* add segment */}
      {isAddSegment && 
      <div className="flex justify-between items-center border-b border-[#CBD5E1] pb-[8px]">
        <div className="flex gap-[8px] items-cente">
          <input className="px-[16px] py-[8px] rounded-[4px] outline-none border-2 border-[#031B89] w-[337px]" type="text" placeholder="New segment name" />
          <button className="text-[#7487FF] text-[14px] leading-[17.5px] font-HelvetiaNeueMedium" onClick={()=>setIsAddSegment(false)}>save</button>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <img
            src={isAddSegment ? ArrowUp : ArrowDown}
            alt="arrow up"
            className="w-6 h-6"
            onClick={()=>setIsAddSegment(false)}
          />
        </button>
        </div>}
    </div>
  );
};

export default Inventory;
