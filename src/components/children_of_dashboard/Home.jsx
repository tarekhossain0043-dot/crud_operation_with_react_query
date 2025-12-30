import React from "react";
import { courseUpdate } from "../../assets/assets";

export default function Home() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
      {courseUpdate.map((item, index) => (
        <div
          key={index}
          style={
            item.gradient
              ? { backgroundColor: item.gradient }
              : { backgroundColor: item.bg }
          }
          className="px-5 py-3"
        >
          <div className="flex flex-col gap-4">
            <item.icon className="w-10 h-10" />
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
