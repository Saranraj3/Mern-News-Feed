import React from "react";
import Logo from "../Assets/News.png";

const Navbar = () => {
  return (
    <div>
      <div className="mt-[-0.8rem] h-[3rem] bg-black">
        <img
          className="mt-3 ml-5 pt-2 h-[2.5rem] size-[4.5rem]"
          src={Logo}
          alt="Logo"
        />
        <h1 className="mt-[-2rem] text-2xl font-bold text-white text-center">
          News Time
        </h1>
        <div className="mt-[-2rem] mr-5 flex justify-items-end justify-end">
          <button className="rounded-md hover:bg-blue-600 bg-blue-500 h-[2rem] w-[4rem]">
            Login
          </button>
          <button className="ml-3 rounded-md hover:bg-blue-600 bg-blue-500 h-[2rem] w-[4rem]">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
