import React from "react";

export const Subs = () => {
  return (
    <div className="bg-bluecredis flex px-10 pt-5 md:px-32">
      <div className="container flex-[160%] text-center md:text-left">
        <h1 className="font-bold text-3xl pb-1 text-white">
          Berlangganan kepada kami
        </h1>
        <p className="pb-6  text-white">
          Dapatkan berbagai promosi dan informasi lainnya
        </p>
        <form
          action=""
          className=" flex justify-center content-center gap-3 md:relative md:justify-start md:content-start"
        >
          <input
            type="text"
            placeholder="Email"
            className="text-gray-400 bg-white px-5 text-sm rounded h-12 w-72 md:absolute md:w-[460px]"
          />
          <button className="px-5 py-3 md:py-2 rounded bg-green-400  top-[6px] left-[158px] text-white text-sm md:absolute md:left-[330px]">
            Berlangganan
          </button>
        </form>
      </div>
      <div className="container hidden md:flex">
        <img src="img/subscribe.png" alt="" className=" w-80" />
      </div>
      <div className="container flex-[160%] text-center md:text-left">
        <h1 className="font-bold text-3xl pb-1 text-gray-400">
          Berlangganan kepada kami
        </h1>
        <p className="pb-6 text-gray-400">
          Dapatkan berbagai promosi dan informasi lainnya
        </p>
        <form
          action=""
          className="flex justify-center content-center gap-3 md:relative md:justify-start md:content-start"
        >
          <input
            type="text"
            placeholder="Email"
            className="text-gray-400 bg-white px-5 text-sm rounded h-12 w-72 md:absolute md:w-[460px]"
          />
          <button className="px-5 py-3 md:py-2 rounded text-white bg-green-400  top-[6px] left-[158px] text-sm md:absolute md:left-[330px]">
            Berlangganan
          </button>
        </form>
      </div>
      <div className="container hidden md:flex">
        <img src="img/subscribe.png" alt="" className=" w-80" />
      </div>
    </div>
  );
};
