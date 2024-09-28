import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { IoEyeOutline } from "react-icons/io5";
import fbLogo from "../assets/fbLogo.png";
import GoogleLogo from "../assets/GoogleLogo.png";
import SignupImg from "../assets/SignupImg.png";
import { AiOutlineClose } from "react-icons/ai";

const SignupModal = ({ show, handleClose }) => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleShowSignin = () => {
    setIsSignIn(true);
  };

  const handleShowSignup = () => {
    setIsSignIn(false);
  };

  const handleSigninModalClose = () => {
    setIsSignIn(false);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <div
        className={`${
          isSignIn
            ? "lg:w-[736px] lg:h-[457px] sm:w-[490px]"
            : "lg:w-[750px] lg:h-[490px] sm:w-[490px]"
        } lg:block bg-white border rounded-lg overflow-hidden relative `}
      >
        <div
          className={`w-full h-12 lg:bg-[#EFFFF4]  rounded-t-lg flex items-center justify-center relative`}
        >
          <p className="text-[#008A45] font-semibold text-sm hidden lg:block">
            Let's learn, share & inspire each other with our passion for
            computer engineering. {isSignIn ? "Sign in" : "Sign up"} now 🤘🏼
          </p>
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            onClick={handleClose}
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
        <div className="flex bg-white">
          <div className="lg:w-[50%] w-[100%] p-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl font-bold">
                {isSignIn ? "Sign In" : "Create Account"}
              </p>
            </div>
            <div className="flex flex-col space-y-0">
              {!isSignIn && (
                <div className="flex">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border border-gray-800 text-gray-800 w-full p-2 bg-[#F7F8FA]"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border border-gray-800 text-gray-800 w-full p-2 bg-[#F7F8FA]"
                  />
                </div>
              )}
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-800 text-gray-800 w-full p-2 bg-[#F7F8FA]"
              />
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-800 text-gray-800 w-full p-2 bg-[#F7F8FA]"
                />
                <IoEyeOutline className="absolute top-3 right-2 text-gray-500" />
              </div>
              {!isSignIn && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-gray-800 text-gray-800 w-full p-2 bg-[#F7F8FA]"
                />
              )}
            </div>
            <div className="flex items-center justify-between">
              <button className="lg:w-full w-[50%] mt-4 py-2 bg-blue-600 text-white rounded-full font-semibold">
                {isSignIn ? "Sign In" : "Create Account"}
              </button>
              <p
                className="mt-4 hover:underline lg:hidden"
                onClick={isSignIn ? handleShowSignup : handleShowSignin}
              >
                {isSignIn ? "or, Sign In" : "or, Create Account"}
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 mt-4">
              <div className="flex items-center justify-center font-medium border border-gray-300 p-2 rounded w-full">
                <img src={fbLogo} alt="FB Logo" className="w-5 h-5 mr-2" />
                <p className="text-sm">Sign up with Facebook</p>
              </div>
              <div className="flex items-center justify-center font-medium border border-gray-300 p-2 rounded w-full">
                <img
                  src={GoogleLogo}
                  alt="Google Logo"
                  className="w-5 h-5 mr-2"
                />
                <p className="text-sm">Sign up with Google</p>
              </div>
              {!isSignIn && (
                <div className="text-[15px] leading-[16px] mt-4 text-center text-gray-500 lg:hidden mx-5 ">
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </div>
              )}
            </div>

            {isSignIn && (
              <div className="text-sm flex justify-center font-medium p-2 mt-2">
                {" "}
                Forgot Password?
              </div>
            )}
          </div>
          <div className="lg:w-[50%] sm:w-[0%] lg:flex-col items-center justify-center p-6 font-medium hidden  lg:block">
            <p className="text-sm w-full flex justify-end gap-1">
              {isSignIn
                ? "Don't have an account yet?"
                : "Already have an account?"}{" "}
              <span
                className="text-blue-700 cursor-pointer"
                onClick={isSignIn ? handleShowSignup : handleShowSignin}
              >
                {" "}
                {isSignIn ? "Create new for free" : "Sign In"}
              </span>
            </p>
            <div>
              <img
                src={SignupImg}
                alt="Signup"
                className="h-full w-full object-cover rounded-r-lg"
              />
            </div>
            {!isSignIn && (
              <div className="mt-2 text-[10px] leading-[16px] text-gray-500">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignupModal;
