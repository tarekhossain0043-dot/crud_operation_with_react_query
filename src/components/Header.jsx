import React from "react";
import { BsBell } from "react-icons/bs";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div className="flex items-center justify-between text-[14px] font-normal text-primary py-3 border-b border-slate-100">
      <button className="hover:text-secondary transition-all duration-300 ease-in-out text-primary w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center cursor-pointer">
        <IoIosArrowDropleft className="w-5 h-5 cursor-pointer transition-all duration-500 ease-in-out" />
      </button>
      {/* right */}
      <div className="flex items-center gap-7.5">
        <form className="relative cursor-pointer transition-all duration-300 ease-in-out">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search any.."
            className="py-2.5 rounded-md border-slate-100 px-4 cursor-pointer pr-8 outline-none border-slate-200 border focus:ring-1 ring-amber-200 text-black"
          />
          <label
            htmlFor="search"
            className="absolute top-1/2 cursor-pointer right-3 -translate-y-1/2 hover:text-secondary transition-all duration-300 ease-in-out"
          >
            <IoSearchOutline className="w-4 h-4 text-primary" />
          </label>
        </form>
        <BsBell className="w-4 h-4 text-primary" />
      </div>
    </div>
  );
}
