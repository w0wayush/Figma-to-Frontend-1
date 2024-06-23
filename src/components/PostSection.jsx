import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { MdDateRange, MdEdit, MdLocationOn } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Post1 from "../assets/post1.png";
import Post2 from "../assets/post2.png";
import Post3 from "../assets/post3.png";
import Profile1 from "../assets/profile1.png";
import Profile2 from "../assets/profile2.png";
import Profile3 from "../assets/profile3.png";
import Profile4 from "../assets/profile4.png";

const ProjectSection = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOptionsClick = (postId) => {
    setSelectedPost(postId);
    setShowOptions(!showOptions);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4">
            <img src={Post1} className="card-img-top" alt="Post 1" />
            <div className="card-body">
              <h5 className="card-title font-bold text-[18px]">✍️ Article</h5>
              <div className="flex justify-between items-center">
                <p className="card-text font-bold text-2xl mt-2">
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </p>
                <div className="relative cursor-pointer">
                  <div onClick={() => handleOptionsClick(1)}>
                    <BsThreeDots size={24} />
                  </div>
                  {showOptions && selectedPost === 1 && (
                    <div className="absolute bg-white border rounded-lg shadow-lg p-2 top-[25px] right-0 z-50 w-[150px] hover:bg-slate-500">
                      <button className="block mb-1">Edit</button>
                      <button className="block mb-1">Report</button>
                      <button className="block">Option 3</button>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-3 w-full text-[1.4rem] text-[#5C5C5C]">
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex items-center gap-3">
                  <img src={Profile1} alt="Profile" />
                  <span className="font-bold text-[18px]">Sarthak Kamra</span>
                </div>
                <div className="flex items-center gap-5 text-[#525252]">
                  <p className="flex gap-2 items-center">
                    <FaRegEye />
                    1.4k views
                  </p>
                  <div className="bg-[#EDEEF0] p-2  cursor-pointer">
                    <IoMdShare size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <img src={Post2} className="card-img-top" alt="Post 2" />
            <div className="card-body">
              <h5 className="card-title font-bold text-[18px]">
                🔬️ Education
              </h5>
              <div className="flex justify-between">
                <p className="card-text font-bold text-2xl mt-2">
                  Tax Benefits for Investment under National Pension Scheme
                  launched by Government
                </p>
                <div className="relative cursor-pointer">
                  <div onClick={() => handleOptionsClick(2)}>
                    <BsThreeDots size={24} />
                  </div>
                  {showOptions && selectedPost === 2 && (
                    <div className="absolute bg-white border rounded-lg shadow-lg p-2 top-[25px] right-0 z-50 w-[150px] hover:bg-slate-500">
                      <button className="block mb-1">Edit</button>
                      <button className="block mb-1">Report</button>
                      <button className="block">Option 3</button>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-3 w-full text-[1.4rem] text-[#5C5C5C]">
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex items-center gap-3">
                  <img src={Profile2}></img>{" "}
                  <span className="font-bold text-[18px]">Sarah West</span>
                </div>
                <div className="flex items-center gap-5 text-[#525252]">
                  <p className="flex gap-2 items-center">
                    <FaRegEye />
                    1.4k views
                  </p>
                  <div className="bg-[#EDEEF0] p-2  cursor-pointer">
                    <IoMdShare size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <img src={Post3} className="card-img-top" alt="Post 2" />
            <div className="card-body">
              <h5 className="card-title font-bold text-[18px]">🗓️ Meetup</h5>
              <div className="flex justify-between">
                <p className="card-text font-bold text-2xl mt-2">
                  Finance & Investment Elite Social Mixer @Lujiazui
                </p>
                <div className="relative cursor-pointer">
                  <div onClick={() => handleOptionsClick(3)}>
                    <BsThreeDots size={24} />
                  </div>
                  {showOptions && selectedPost === 3 && (
                    <div className="absolute bg-white border rounded-lg shadow-lg p-2 top-[25px] right-0 z-50 w-[150px] hover:bg-slate-500">
                      <button className="block mb-1">Edit</button>
                      <button className="block mb-1">Report</button>
                      <button className="block">Option 3</button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center mt-3 gap-28">
                <div className="flex items-center gap-2 text-[15px] font-bold">
                  <MdDateRange size={20} />
                  Fri, 12 Oct, 2018
                </div>
                <div className="flex items-center gap-2 text-[15px] font-semibold">
                  <MdLocationOn size={20} />
                  Ahmedabad, India
                </div>
              </div>

              <div className="mt-4 ">
                <button className="border w-[800px]  border-[#A9AEB8] text-red-600 p-3 rounded-xl">
                  Visit Website
                </button>
              </div>

              <div className="flex justify-between mt-4">
                <div className="flex items-center gap-3">
                  <img src={Profile3}></img>{" "}
                  <span className="font-bold text-[18px]">Sarah West</span>
                </div>
                <div className="flex items-center gap-5 text-[#525252]">
                  <p className="flex gap-2 items-center">
                    <FaRegEye />
                    1.4k views
                  </p>
                  <div className="bg-[#EDEEF0] p-2  cursor-pointer">
                    <IoMdShare size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title font-bold text-[18px]">💼️ Job</h5>
              <div className="flex justify-between">
                <p className="card-text font-bold text-2xl mt-2">
                  Software Developer
                </p>
                <div className="relative cursor-pointer">
                  <div onClick={() => handleOptionsClick(4)}>
                    <BsThreeDots size={24} />
                  </div>
                  {showOptions && selectedPost === 4 && (
                    <div className="absolute bg-white border rounded-lg shadow-lg p-2 top-[25px] right-0 z-50 w-[150px] hover:bg-slate-500">
                      <button className="block mb-1">Edit</button>
                      <button className="block mb-1">Report</button>
                      <button className="block">Option 3</button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center mt-2 gap-28">
                <div className="flex items-center gap-2 text-[15px] font-bold">
                  <IoBagOutline size={20} />
                  Innovaccer Analytics Private Ltd.
                </div>
                <div className="flex items-center gap-2 text-[15px] font-semibold ">
                  <MdLocationOn size={20} />
                  Noida, India
                </div>
              </div>

              <div className="mt-4">
                <button className="border w-[800px]  border-[#A9AEB8] text-red-600 p-3 rounded-xl mt-1">
                  Apply For Timesjobs
                </button>
              </div>

              <div className="flex justify-between mt-4">
                <div className="flex items-center gap-3">
                  <img src={Profile4}></img>{" "}
                  <span className="font-bold text-[18px]">Joseph Gray</span>
                </div>
                <div className="flex items-center gap-5 text-[#525252]">
                  <p className="flex gap-2 items-center">
                    <FaRegEye />
                    1.4k views
                  </p>
                  <div className="bg-[#EDEEF0] p-2  cursor-pointer">
                    <IoMdShare size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="mb-3 d-flex align-items-center justify-around ">
                <MdLocationOn className="me-2" size={24} />
                <input
                  type="text"
                  placeholder="Enter Your Location"
                  className="border-none outline-none flex-grow-1"
                  style={{ maxWidth: "calc(100% - 40px)" }}
                />
                <MdEdit className="ms-2" size={24} />
              </div>
              <div className="border w-[90%] flex mx-auto"></div>
              <div className="text-muted flex gap-2 mt-4">
                <AiOutlineExclamationCircle size={28} />
                <div>
                  Your location will help us serve better and extend a
                  personalized experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
