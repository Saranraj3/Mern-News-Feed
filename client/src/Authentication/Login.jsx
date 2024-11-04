import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/News.png";

const Login = ({ onlogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    onlogin();
    navigate("/home");
  };

  return (
    <div className="justify-center justify-items-center min-h-screen bg-black text-white ">
      <div className="pt-[5rem]">
        <img
          className="mt-1 cursor-pointer h-[2rem] size-[3rem]"
          src={Logo}
          alt="Logo"
        />
      </div>
      <h1 className="mt-3 font-bold text-2xl">Let's Get Started</h1>
      <form className="mt-[2rem]" onSubmit={handleSubmit}>
        <div>
          <input
            className="cursor-pointer w-[17rem] h-[2.3rem] pl-3 rounded-[5px] outline-none border border-black text-black"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="mt-4">
          <input
            className="cursor-pointer w-[17rem] h-[2.3rem] pl-3 rounded-[5px] outline-none border border-black text-black"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button
          className="mt-4 w-[17rem] h-[2.3rem] rounded-[5px] font-bold hover:bg-green-600 bg-green-500 "
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="flex mt-5 cursor-pointer">
        <p>You Don't Have an Account Then ?</p>
        <p className="ml-2 text-red-500" onClick={() => navigate("/signup")}>
          Signup
        </p>
      </div>
    </div>
  );
};

export default Login;
