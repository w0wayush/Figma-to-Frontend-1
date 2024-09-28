import React, { useState } from "react";

const GroupItem = ({ imgSrc, groupName }) => {
  const [follow, setFollow] = useState(false);

  const handleFollow = () => {
    setFollow(!follow);
  };

  return (
    <div className="flex justify-between items-center  pb-2">
      <div className="flex items-center gap-3">
        <img
          src={imgSrc}
          alt={`${groupName} image`}
          className="w-10 h-10 rounded-full"
        />
        <p className="text-md">{groupName}</p>
      </div>
      <button
        className={` ${
          follow ? "bg-black text-white" : "bg-[#EDEEF0]"
        }  py-1 px-3 rounded-full text-sm font-medium hover:bg-[#DDE0E3] transition-colors`}
        onClick={handleFollow}
      >
        {follow ? "Followed" : "Follow"}
      </button>
    </div>
  );
};

export default GroupItem;
