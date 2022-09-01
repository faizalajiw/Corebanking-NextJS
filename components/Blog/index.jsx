import React from "react";
import Link from "next/link";

export const Blog = ({ image, header, content, date }) => {
  return (
    <div className=" bg-whitecredis">
      <div className=" w-80 h-auto flex-row px-6 py-5">
        <div className="container mb-5">
          <img src={image} alt="" className=" rounded" />
        </div>
        <div>
          <h1 className=" font-bold text-lg mb-3 text-blackcredis">{header}</h1>
          <h2 className=" mb-3 text-xs text-blackcredis font-light md:font-normal">
            {date}
          </h2>
          <p
            className=" text-blackcredis font-light md:font-normal"
            dangerouslySetInnerHTML={{
              __html: content?.substring(0, 150) + "...",
            }}
          />
        </div>
      </div>
    </div>
  );
};
