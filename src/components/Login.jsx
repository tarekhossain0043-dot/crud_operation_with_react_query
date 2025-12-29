import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="login-page h-screen w-full">
      <div className="max-w-118.75 w-full overflow-hidden py-10 px-7.5 text-center bg-white rounded-sm shadow-sm">
        <form className="w-full h-full">
          <h4 className="realtive text-black pl-3 border-l-2 border-l-amber-400 border-amber-200 font-bold text-[32px] uppercase mb-10.75 ">
            CRUD OPERATIONS
          </h4>
          {/* sign in / signup */}
          <button
            onClick={() => setLoggedIn((prev) => !prev)}
            className="font-semibold text-black text-center uppercase mb-2.5"
          >
            {loggedIn ? "Login/Signup" : "Sign up"}
          </button>
          <p className="mb-12.5 font-normal text-[14px]">
            Enter your credentials to access your account
          </p>
          <div className="flex flex-col gap-5 items-start w-full max-h-50 overflow-y-scroll">
            {!loggedIn ? (
              <div className="flex flex-col items-start gap-2.5 w-full">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter your fullName"
                  required
                  className="w-full p-3.75 border border-slate-100 rounded-sm outline-none focus:ring-1 ring-amber-200"
                />
              </div>
            ) : null}
            <div className="flex flex-col items-start gap-2.5 w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full p-3.75 border border-slate-100 rounded-sm outline-none focus:ring-1 ring-amber-200"
              />
            </div>
            <div className="flex flex-col items-start gap-2.5 w-full">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                className="w-full p-3.75 border border-slate-100 rounded-sm outline-none focus:ring-1 ring-amber-200"
              />
            </div>
            <button className="bg-linear-to-r from-amber-200 to-amber-400 w-full cursor-pointer transition-all duration-600 ease-in-out hover:bg-amber-400 text-black hover:text-transparent hover:text-clip hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 cursor-pointer hover:text-white uppercase text-center py-3.5 rounded-sm">
              SIGN IN
            </button>
            <div className="mx-auto">
              Forgot your password?{" "}
              <Link
                to="/reset-password"
                className="text-amber-300 cursor-pointer transition-all duration-500 ease-in-out"
              >
                Reset Password
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
