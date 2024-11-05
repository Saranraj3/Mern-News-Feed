import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Logo from "../Assets/News.png";

const Signup = ({ onsignup }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    onsignup();
    navigate("/home");
  };

  return (
    <div className="justify-center justify-items-center min-h-screen bg-black text-white ">
      <div className="pt-[2rem] cursor-defualt">
        <img
          className="cursor-pointer mt-1 h-[2rem] size-[3rem]"
          src={Logo}
          alt="Logo"
        />
      </div>
      <h1 className="mt-3 font-bold text-2xl cursor-default">
        Create a new account
      </h1>
      <form className="mt-[2rem]" onSubmit={handleSubmit}>
        <div className="mt-[-1rem]">
          <input
            className="cursor-pointer w-[19rem] h-[2.3rem] pl-3 rounded-[5px] outline-none border border-black text-black"
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Full Name"
            required
          />
        </div>
        <div className="mt-3">
          <input
            className="cursor-pointer w-[19rem] h-[2.3rem] pl-3 rounded-[5px] outline-none border border-black text-black"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="mt-3">
          <input
            className="cursor-pointer w-[19rem] h-[2.3rem] pl-3 rounded-[5px] outline-none border border-black text-black"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div className="mt-3">
          <PhoneInput
            country={"in"}
            value={phonenumber}
            onChange={setPhonenumber}
            placeholder="Phone Number"
            containerClass="cursor-pointer"
            className="rounded-[5px] outline-none border border-black text-black"
          />
        </div>
        <ReactFlagsSelect
          className="mt-3 bg-white text-black"
          selected={nationality}
          onSelect={(code) => setNationality(code)}
          searchable
        />
        <div className="mt-3 accent-red-500 flex font-bold">
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
            required
            name="choose"
          />
          <h1 className="ml-1 cursor-default">Male</h1>
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
            required
            name="choose"
            className="ml-3"
          />
          <h1 className="ml-1 cursor-default">Female</h1>
        </div>
        <button
          className="mt-3 w-[19rem] h-[2.3rem] rounded-[5px] font-bold hover:bg-green-600 bg-green-500 "
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="flex mt-2 cursor-pointer">
        <p>You Already Have an Account Then ?</p>
        <p className="ml-2 text-red-500" onClick={() => navigate("/login")}>
          Login
        </p>
      </div>
    </div>
  );
};

export default Signup;
