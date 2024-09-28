import React, { useState } from "react";
import ATGLogo from "../assets/whole.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
import SignupModal from "./SignupModal";

export const Navbar = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleSignupModalClose = () => {
    setShowSignupModal(false);
  };

  return (
    <div className="hidden lg:flex w-full h-[72px] items-center justify-between px-8 sm:px-10 lg:px-20 bg-white shadow">
      {/* ATG Logo */}
      <div className="w-[100px] sm:w-[130px] md:w-[150px] lg:w-[162.57px]">
        <img src={ATGLogo} alt="Logo" className="w-full" />
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center w-[150px] sm:w-[250px] md:w-[350px] lg:w-[380px] gap-3 h-[42px] border rounded-full bg-[#F2F2F2] px-2 sm:px-4">
        <button type="submit" className="flex items-center justify-center">
          <img
            alt="Search"
            src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-search-24px'%20clip-path='url(%23clip0_1_1172)'%3e%3cpath%20id='Vector'%20d='M14.2083%2012.8333H13.4842L13.2275%2012.5858C14.1258%2011.5408%2014.6667%2010.1842%2014.6667%208.70833C14.6667%205.4175%2011.9992%202.75%208.70833%202.75C5.4175%202.75%202.75%205.4175%202.75%208.70833C2.75%2011.9992%205.4175%2014.6667%208.70833%2014.6667C10.1842%2014.6667%2011.5408%2014.1258%2012.5858%2013.2275L12.8333%2013.4842V14.2083L17.4167%2018.7825L18.7825%2017.4167L14.2083%2012.8333ZM8.70833%2012.8333C6.42583%2012.8333%204.58333%2010.9908%204.58333%208.70833C4.58333%206.42583%206.42583%204.58333%208.70833%204.58333C10.9908%204.58333%2012.8333%206.42583%2012.8333%208.70833C12.8333%2010.9908%2010.9908%2012.8333%208.70833%2012.8333Z'%20fill='%237A7A7A'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1172'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
            width="22"
            height="22"
          />
        </button>
        <input
          className="w-[100px] sm:w-[200px] md:w-[300px] h-full bg-[#F2F2F2] border-none outline-none placeholder-gray-500 md-1"
          type="search"
          placeholder="Search for your favorite groups in ATG"
          aria-label="Search"
        />
      </div>

      {/* Create Account   */}
      <div className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[21px] flex items-center justify-end">
        <button
          type="button"
          className="flex items-center justify-center gap-1"
          onClick={() => setShowSignupModal(true)}
        >
          Create account.
          <span className="flex items-center text-blue-600 font-bold">
            It's Free!{" "}
          </span>
          <MdOutlineArrowDropDown size={28} />
        </button>
        <SignupModal
          show={showSignupModal}
          handleClose={handleSignupModalClose}
        />
      </div>
    </div>
  );
};

export default Navbar;
