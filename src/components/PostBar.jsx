import React, { useState } from "react";
import { IoMdExit } from "react-icons/io";
import { MdGroupAdd, MdOutlineArrowDropDown } from "react-icons/md";

const PostBar = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [group, setGroup] = useState(false);

  const handleGroup = () => {
    setGroup(!group);
  };

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-300 hidden lg:block">
      <div className="w-full max-w-[1296px] mx-auto py-4 flex flex-wrap justify-between items-center px-4 sm:px-8">
        <ul className="flex space-x-2 cursor-pointer overflow-x-auto">
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
        <div className="flex space-x-2 mt-4 lg:mt-0">
          <button className="flex items-center gap-2 bg-slate-300 text-black p-2 px-3 rounded">
            Write a Post <MdOutlineArrowDropDown />
          </button>
          <button
            className={`flex items-center gap-2 p-2 px-3 rounded ${
              !group
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-800 border border-[#989899]"
            }`}
            onClick={handleGroup}
          >
            {!group ? (
              <span className="flex items-center gap-2">
                <MdGroupAdd /> Join Group
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <IoMdExit size={24} style={{ color: "gray" }} /> Leave Group
              </span>
            )}
          </button>
        </div>
      </div>
      <div className="border border-gray-400 w-full max-w-[1296px] mx-auto"></div>
    </div>
  );
};

export default PostBar;
