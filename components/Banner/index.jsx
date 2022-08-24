import React from "react";

export const Banner = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-hero-pattern py-28 md:py-[10.5rem] md:px-[31.5]">
      <div className="justify-items-center grid grid-cols-1 gap-12 md:mx-40 md:grid md:grid-cols-2 md:gap-20">
        <div className="justify-center">
          <img
            src="img/mockup laptop & iphone.png"
            className="px-5 max-w-xs md:max-w-lg"
            alt=" Cards Technology"
          />
        </div>
        <div className="justify-center text-white">
          <p className="text-2xl font-bold leading-normal md:text-4xl text-center">
            Credis
          </p>
          <p className="text-center px-14 pt-6 md:pt-12 md:text-lg">
            CREDIS adalah aplikasi core banking system bagi bank umum, BPR,
            koperasi dan finance. Kami menyediakan fitur seperti Credit Scoring,
            Verifikasi KYC, Mobile Banking, Laporan Terperinci, dan lainnya.
          </p>
        </div>
      </div>
    </div>
  );
};
