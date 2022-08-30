import React from "react";
import { mitra } from "../../Data";

export const Mitra = () => {
  return (
    <div className="bg-white">
      {mitra.map((val, index) => {
        return (
          <div key={index}>
            <div className="flex flex-col space-x-2 px-32">
              {val.image}
            </div>
          </div>
        );
      })}
    </div>
  );
};
