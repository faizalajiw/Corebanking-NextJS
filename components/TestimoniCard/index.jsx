import React from "react";
import { FaStar } from "react-icons/fa";

export const TestimoniCard = ({ image, name, job, review, star }) => {
  return (
    <div className="bg-whitecredis w-80 h-64 rounded-xl flex-row px-6 py-5">
      <div className="flex items-center">
        <img src={image} className=" pr-4" />
        <div className="container">
          <h4 className="text-blackcredis text-lg font-bold">{name}</h4>
          <p className="text-blackcredis text-xs">{job}</p>
        </div>
      </div>
      <div className="text-blackcredis text-base leading-relaxed my-6">
        <p>{review}</p>
      </div>
      <div className="flex gap-x-1">
        {Array(star)
          .fill(0)
          .map((index) => (
            <div key={index}>
              <FaStar className=" text-yellow-400 text-2xl" />
            </div>
          ))}
      </div>
    </div>
  );
};
