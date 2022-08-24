import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Accordion = ({ title, subtitle }) => {
  return (
    <div className=" px-3 md:px-32">
      <div className=" relative w-full overflow-hidden rounded border border-slate-200">
        <input
          type="checkbox"
          className=" absolute top-0 inset-x-0 w-full h-12 opacity-0 cursor-pointer z-10 peer"
        />
        <div className="bg-grey flex h-12 w-full items-center px-5">
          <h2 className=" text-base font-semibold text-black md:font-bold">
            {title}
          </h2>
        </div>
        <div className=" absolute top-4 right-3 text-lg text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180">
          <IoIosArrowDown />
        </div>
        <div className=" bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-96">
          <div className="p-4 h-auto">
            <p className=" text-justify text-sm text-black">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
