import React, { useState } from "react";
import { MdGroupAdd, MdOutlineArrowDropDown } from "react-icons/md";

const PostSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div>
      <div className="w-[1296px] mx-auto mt-8 flex justify-between items-center ">
        <ul className="flex space-x-2 cursor-pointer">
          <li
            className={
              selectedItem === 0
                ? `py-3 px-4 rounded-lg text-black font-bold relative`
                : `py-3 px-4 rounded-lg text-gray-500`
            }
            onClick={() => handleItemClick(0)}
          >
            <p>All Posts(32)</p>
            {selectedItem === 0 && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>
            )}
          </li>
          <li
            className={
              selectedItem === 1
                ? `py-3 px-4 rounded-lg text-black font-bold relative`
                : `py-3 px-4 rounded-lg text-gray-500`
            }
            onClick={() => handleItemClick(1)}
          >
            <p>Article</p>
            {selectedItem === 1 && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>
            )}
          </li>
          <li
            className={
              selectedItem === 2
                ? `py-3 px-4 rounded-lg text-black font-bold relative`
                : `py-3 px-4 rounded-lg text-gray-500`
            }
            onClick={() => handleItemClick(2)}
          >
            <p>Event</p>
            {selectedItem === 2 && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>
            )}
          </li>
          <li
            className={
              selectedItem === 3
                ? `py-3 px-4 rounded-lg text-black font-bold relative`
                : `py-3 px-4 rounded-lg text-gray-500`
            }
            onClick={() => handleItemClick(3)}
          >
            <p>Education</p>
            {selectedItem === 3 && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>
            )}
          </li>
          <li
            className={
              selectedItem === 4
                ? `py-3 px-4 rounded-lg text-black font-bold relative`
                : `py-3 px-4 rounded-lg text-gray-500`
            }
            onClick={() => handleItemClick(4)}
          >
            <p>Job</p>
            {selectedItem === 4 && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>
            )}
          </li>
        </ul>
        <div className="flex space-x-2">
          <button className="flex items-center gap-2 bg-slate-300 text-black p-2 px-3 rounded">
            Write a Post <MdOutlineArrowDropDown />
          </button>
          <button className="flex items-center gap-2 bg-blue-500 text-white p-2 px-3 rounded">
            <div className="flex items-center gap-2">
              <MdGroupAdd /> Join Group
            </div>
          </button>
        </div>
      </div>
      <div className="border border-gray-400 w-[1296px] mx-auto "></div>
    </div>
  );
};

export default PostSection;
