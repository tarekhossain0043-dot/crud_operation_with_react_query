import React from "react";

export default function CreateStudent() {
  return (
    <div className="flex items-center justify-between">
      <h4 className="font-bold text-black mb-0 text-[22px] capitalize">
        Students List
      </h4>
      <button className="p-2.5 uppercase bg-secondary cursor-pointer transition-all duration-300 ease-in-out text-white rounded-sm">
        ADD NEW STUDENT
      </button>
    </div>
  );
}
