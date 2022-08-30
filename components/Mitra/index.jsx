import React from "react";
import { mitra } from "../../Data";

export default function Mitra() {
  return (
    <div className="flex flex-row px-4 gap-x-5 place-items-center md:px-20 md:gap-x-12">
      <div>
        <img src={mitra[0].image} alt="" />
      </div>
      <div>
        <img src={mitra[1].image} alt="" />
      </div>
      <div>
        <img src={mitra[2].image} alt="" />
      </div>
      <div>
        <img src={mitra[3].image} alt="" />
      </div>
      <div>
        <img src={mitra[4].image} alt="" />
      </div>
    </div>
  );
};
