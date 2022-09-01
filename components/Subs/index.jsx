import React from "react";

export const Subs = () => {
  return (
    <div className="bg-bluecredis flex px-10 pt-5 md:px-32">
      <div className="container flex-[160%] text-center md:text-left">
        <h1 className="text-2xl font-bold mb-3 md:text-3xl py-2 text-whitecredis">
          Berlangganan kepada kami
        </h1>
        <p className="pb-4 text-lg md:text-xl text-whitecredis">
          Dapatkan berbagai promosi dan informasi lainnya
        </p>
        <form
          action=""
          className="flex justify-center content-center gap-3 md:relative md:justify-start md:content-start"
        >
          <input
            type="text"
            placeholder="Ketikan emailmu di sini"
            className="font-semibold text-gray-400 bg-[#F1F1F1] px-5 text-sm rounded h-12 w-72 md:absolute md:w-[460px]"
          />
          <button className="font-semibold px-5 py-3 md:py-2 rounded bg-green-400 hover:bg-green-500 top-[6px] left-[158px] text-whitecredis text-sm md:absolute md:left-[320px]">
            Berlangganan
          </button>
        </form>
      </div>
      <div className="container hidden md:flex">
        <img src="../../img/subscribe.png" alt="" className=" w-80" />
      </div>
    </div>
  );
};
