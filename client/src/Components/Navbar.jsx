import React from "react";
import Logo from "../Assets/News.png";

const Navbar = () => {
  return (
    <div>
      <div className="mt-[-0.8rem] h-[3rem] bg-black">
        <img
          className="sm:h-[2rem] sm:size-[3rem] sm:ml-2 mt-3 lg:ml-5 pt-2 lg:h-[2.5rem] lg:size-[4.5rem]"
          src={Logo}
          alt="Logo"
        />
        <h1 className="sm:text-base sm:mt-[-1.4rem] lg:text-2xl lg:mt-[-2rem] font-bold text-white text-center">
          News Time
        </h1>
        <div className="sm:mt-[-1.6rem] lg:mt-[-2rem] mr-2 flex justify-items-end justify-end">
          <button className="sm:h-[2rem] sm:w-[3rem] sm:text-sm font-bold rounded-md hover:bg-blue-600 bg-blue-500 lg:h-[2rem] lg:w-[4rem]">
            Login
          </button>
          <button className="sm:h-[2rem] sm:w-[3rem] sm:text-sm font-bold ml-3 rounded-md hover:bg-blue-600 bg-blue-500 lg:h-[2rem] lg:w-[4rem]">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
