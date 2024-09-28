import React from "react";

const DropDownMenu = () => {
  return (
    <div>
      <div className="absolute bg-white border rounded-lg shadow-lg p-2 top-[25px] right-0 z-50 w-[150px] hover:bg-slate-500">
        <button className="block mb-1">Edit</button>
        <button className="block mb-1">Report</button>
        <button className="block">Option 3</button>
      </div>
    </div>
  );
};

export default DropDownMenu;
