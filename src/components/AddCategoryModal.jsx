import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import Cross from "../assets/cross.svg";

import ProfileInput from "../components/ProfileInput";
import ProfileInputBox from "../components/ProfileInputBox";

const AddCategoryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [defValue, setDefValue] = useState("Dolonex DT");

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="border-b-[0.5px] border-[#E2E8F0] bg-white py-2 px-1.5">
        <button
          type="button"
          onClick={openModal}
          className="font-HelveticaNeueMedium text-left"
        >
          Category
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[45.25rem] flex flex-col rounded-lg bg-white border border-[#CBD5E1] gap-3 transition-all">
                  {/* header */}
                  <div className="flex justify-between items-center py-2 px-4">
                    <h1 className="font-HelveticaNeueMedium">
                      Add New Category
                    </h1>

                    <button>
                      <img src={Cross} alt="cross" className="w-6 h-6" />
                    </button>
                  </div>

                  {/* inputs */}
                  <div className="h-[19.875rem] py-4 px-12 flex flex-col gap-3">
                    <ProfileInput
                      title="Assign name to category"
                      important
                      value={defValue}
                      big
                      wide
                    />

                    <ProfileInput
                      title="Assign segment"
                      important
                      value={defValue}
                      big
                      wide
                      dropdownField
                    />

                    <ProfileInputBox
                      title="Add category description"
                      important
                      value={defValue}
                      big
                      wide
                    />
                  </div>

                  {/* buttons */}
                  <div className="bg-[#F8FAFC] w-full py-3 px-4 flex gap-4 justify-end rounded-b-lg">
                    <button className="md:w-[8.375rem] w-full text-sm font-HelveticaNeueMedium bg-transparent text-[#031B89] md:py-3 py-2 px-4 rounded">
                      Cancel
                    </button>

                    <button className="md:w-[8.375rem] w-full text-sm font-HelveticaNeueMedium bg-[#031B89] text-white md:py-3 py-2 px-4 rounded">
                      Save
                    </button>

                    {/* {isDeleteModal && (
          <DeleteUserModal setIsDeleteModal={setIsDeleteModal} />
        )} */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddCategoryModal;
