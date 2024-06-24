import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegEye, FaThumbsUp } from "react-icons/fa";
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
import DropDownMenu from "../smallComponents/DropDownMenu";
import ThumbsUp from "../assets/ThumbsUp.png";
import Group1 from "../assets/group1.png";
import Group2 from "../assets/group2.png";
import Group3 from "../assets/group3.png";
import Group4 from "../assets/group4.png";
import GroupItem from "../smallComponents/GroupItem";
import { RxCross2 } from "react-icons/rx";
import CustomButton from "../smallComponents/CustomButton";
import SignupModal from "./SignupModal";

const ProjectSection = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isEdit, setEdit] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleSignupModalClose = () => {
    setShowSignupModal(false);
  };

  const handleFocus = () => {
    setEdit(true);
  };

  const handleBlur = () => {
    setEdit(false);
  };

  const handleOptionsClick = (postId) => {
    setSelectedPost(postId);
    setShowOptions(!showOptions);
  };

  return (
    <div className="container mt-4 relative">
      <div className="row">
        {/* Posts */}
        <div className="col-md-8 md:col-md-12">
          {/* Post 1 */}
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
                  {showOptions && selectedPost === 1 && <DropDownMenu />}
                </div>
              </div>
              <div className="mt-3 w-full text-[1.4rem] text-[#5C5C5C]">
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex items-center gap-3">
                  <img src={Profile1} alt="Profile" />
                  <div>
                    <span className="font-bold text-[18px]">Sarthak Kamra</span>
                    <p className="lg:hidden font-semibold">1.4k views</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-[#525252]">
                  <p className="hidden lg:block ">
                    <div className="flex gap-2 items-center ">
                      <FaRegEye />
                      1.4k views
                    </div>
                  </p>
                  <div className="bg-[#EDEEF0] lg:p-2 px-3 py-2 cursor-pointer">
                    <div className="flex gap-2 ">
                      <IoMdShare size={20} />
                      <p className="block lg:hidden">Share</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Post 2 */}
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
                  {showOptions && selectedPost === 2 && <DropDownMenu />}
                </div>
              </div>

              <div className="mt-3 w-full text-[1.4rem] text-[#5C5C5C]">
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex items-center gap-3">
                  <img src={Profile2}></img>{" "}
                  <div>
                    <span className="font-bold text-[18px]">Sarah West</span>
                    <p className="lg:hidden font-semibold">4.8k views</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-[#525252]">
                  <p className="hidden lg:block ">
                    <div className="flex gap-2 items-center ">
                      <FaRegEye />
                      4.8k views
                    </div>
                  </p>
                  <div className="bg-[#EDEEF0] lg:p-2 px-3 py-2 cursor-pointer">
                    <div className="flex gap-2 ">
                      <IoMdShare size={20} />
                      <p className="block lg:hidden">Share</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Post 3 */}
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
                  {showOptions && selectedPost === 3 && <DropDownMenu />}
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

              <div className="mt-4">
                <button className="border w-full border-[#A9AEB8] text-red-600 p-3 rounded-xl">
                  Visit Website
                </button>
              </div>

              <div className="flex justify-between mt-4">
                <div className="flex items-center gap-3">
                  <img src={Profile3}></img>{" "}
                  <div>
                    <span className="font-bold text-[18px]">Sarah West</span>
                    <p className="lg:hidden font-semibold">800 views</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-[#525252]">
                  <p className="hidden lg:block ">
                    <div className="flex gap-2 items-center ">
                      <FaRegEye />
                      800 views
                    </div>
                  </p>
                  <div className="bg-[#EDEEF0] lg:p-2 px-3 py-2 cursor-pointer">
                    <div className="flex gap-2 ">
                      <IoMdShare size={20} />
                      <p className="block lg:hidden">Share</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Post 4 */}
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
                  {showOptions && selectedPost === 4 && <DropDownMenu />}
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
                <button className="border w-full border-[#A9AEB8] text-green-600 p-3 rounded-xl">
                  Apply For Timesjobs
                </button>
              </div>

              <div className="flex justify-between mt-4">
                <div className="flex items-center gap-3">
                  <img src={Profile4}></img>{" "}
                  <div>
                    <span className="font-bold text-[18px]">Joseph Gray</span>
                    <p className="lg:hidden font-semibold">1.7k views</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-[#525252]">
                  <p className="hidden lg:block ">
                    <div className="flex gap-2 items-center ">
                      <FaRegEye />
                      1.7k views
                    </div>
                  </p>
                  <div className="bg-[#EDEEF0] lg:p-2 px-3 py-2 cursor-pointer">
                    <div className="flex gap-2 ">
                      <IoMdShare size={20} />
                      <p className="block lg:hidden">Share</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Stuff */}
        <div className="col-md-4 hidden lg:block">
          <div className="ml-12 mr-8 mt-8 lg:ml-4 lg:mr-4">
            <div className="card-body">
              {/* Location Text Field  */}
              <div className="mb-3 d-flex align-items-center justify-around">
                <MdLocationOn className="me-2" size={24} />
                <input
                  type="text"
                  placeholder="Enter Your Location"
                  className="border-none outline-none flex-grow-1"
                  style={{ maxWidth: "calc(100% - 40px)" }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                {!isEdit ? (
                  <MdEdit className="ms-2" size={24} />
                ) : (
                  <RxCross2 className="ms-2" size={24} />
                )}
              </div>
              <div className="border w-[90%] flex mx-auto"></div>
              {/* Recommended Group Field */}
              <div className="flex flex-col mt-3 bg-white p-4 rounded-lg">
                <div className="flex gap-2 items-center mb-4">
                  <img src={ThumbsUp} className="text-gray-500 w-5 h-5" />
                  <p className="text-lg uppercase font-semibold lg:text-base">
                    Recommended Groups
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <GroupItem imgSrc={Group1} groupName="Leisure" />
                  <GroupItem imgSrc={Group2} groupName="Activism" />
                  <GroupItem imgSrc={Group3} groupName="MBA" />
                  <GroupItem imgSrc={Group4} groupName="Philosophy" />
                </div>
                <p className="text-blue-600 mt-4 cursor-pointer hover:underline text-right lg:text-md">
                  See More...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden fixed bottom-8 right-8 z-50">
        <CustomButton />
      </div>
      <SignupModal
        show={showSignupModal}
        handleClose={handleSignupModalClose}
      />
    </div>
  );
};

export default ProjectSection;
