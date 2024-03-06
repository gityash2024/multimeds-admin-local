import { Menu } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";
import AddCategoryModal from "./AddCategoryModal";

const AddNewDropdown = ({ setIsAddSegment }) => {
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="align-middle text-center w-[15.5rem] h-full rounded py-3 px-4 bg-[#031B89] text-white">
        + Add new
      </Menu.Button>

      <Menu.Items className="absolute right-0 mt-2 w-[15.5rem] bg-white border border-[#E2E8F0] p-2 flex flex-col gap-2 rounded">
        <Menu.Item className="border-b-[0.5px] border-[#E2E8F0] bg-white py-2 px-1.5">
          {({ active }) => (
            <button className="font-HelveticaNeueMedium text-left" onClick={()=>{setIsAddSegment(true)}}>
              Segment
            </button>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            // <button
            //   className="font-HelveticaNeueMedium text-left"
            // >
            //   Category
            // </button>
            <AddCategoryModal />
          )}
        </Menu.Item>

        <Menu.Item className="border-b-[0.5px] border-[#E2E8F0] bg-white py-2 px-1.5">
          {({ active }) => (
            <Link
              to="/home/add-product"
              className="font-HelveticaNeueMedium text-left"
            >
              Product
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default AddNewDropdown;
