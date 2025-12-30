import { PiSignOut } from "react-icons/pi";
import { sideMenu } from "../../assets/assets";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [current, setCurrent] = useState(sideMenu[0].label);
  console.log(current);
  const handleMenu = (label) => {
    setCurrent(label);
    // navigate("/label");
  };
  return (
    <div className="w-67.5 h-screen flex flex-col p-4.5 bg-amber-50 border-r border-slate-300 shadow-sm">
      {/* Title */}
      <h4 className="text-black truncate pl-3 border-l-2 border-l-amber-400 font-bold text-[20px] uppercase mb-10">
        CRUD OPERATIONS
      </h4>

      {/* Profile */}
      <div className="max-w-30 mx-auto rounded-full shadow-md shadow-amber-200 p-4 border border-slate-200">
        <img src="/admin-img.png" alt="admin" className="w-full rounded-full" />
      </div>

      <h4 className="text-[17px] font-bold text-black text-center mt-4">
        Karthi Madesh
      </h4>
      <span className="text-[14px] text-center block font-medium text-main-clr">
        Admin
      </span>

      {/* Menu  */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-3 mt-8 pt-3 pb-5 border-t border-slate-200">
        {sideMenu.map((menu, index) => (
          <Link
            to={menu.to}
            onClick={() => handleMenu(menu.label)}
            key={index}
            className={`flex items-center ${
              current === menu.label ? "bg-secondary" : ""
            } justify-start px-4 mx-auto py-3 cursor-pointer transition-all max-w-45 w-full duration-500 ease-in-out  gap-4 rounded-sm text-black text-[14px] font-medium capitalize transition hover:bg-slate-100`}
          >
            <menu.icon className="w-5 h-5" />
            <span>{menu.label}</span>
          </Link>
        ))}
      </div>

      {/* Logout  */}
      <div className="pt-4 border-t border-slate-200 flex items-center justify-center gap-2 cursor-pointer text-black font-medium hover:text-secondary transition">
        <span>Logout</span>
        <PiSignOut className="w-5 h-5" />
      </div>
    </div>
  );
}
