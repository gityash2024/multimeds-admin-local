import React, { useState } from "react";

import Checkmark from "../assets/checkmark.svg";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <button
      onClick={() => setIsChecked(!isChecked)}
      className={` ${
        isChecked
          ? "bg-[#031B89] border-[#031B89]"
          : "border border-slate-100 checkbox-shadow hover:shadow-none hover:border-[#CBD5E1] hover:bg-[#E2E8F0]"
      } w-6 h-6 rounded flex  items-center justify-center`}
    >
      {isChecked && <img src={Checkmark} alt="checkmark" />}
    </button>
  );
};

export default Checkbox;
