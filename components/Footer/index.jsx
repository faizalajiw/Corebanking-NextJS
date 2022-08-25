import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className=" bg-bluecredis">
      <div className="bg-bluecredis flex pt-16 flex-col px-10 gap-6 mb-5 md:flex-row md:px-32 ">
        <div className="container text-gray-400 flex flex-col content-center">
          <div className=" container flex justify-start content-center">
            <img src="../../img/Logo.png" alt="" className="mb-4 w-40 md:w-58" />
          </div>
          <p className="hover:text-gray-300 text-sm mb-7 text-left">
            Jalan Waru 4 No 25, Purwokerto Selatan, Banyumas - Jawa Tengah
          </p>
          <div className="container flex content-center justify-start text-2xl gap-5 md:flex-row ">
            <FaWhatsapp className="hover:text-gray-300" />
            <FaFacebook className="hover:text-gray-300" />
            <FaInstagram className="hover:text-gray-300" />
            <FaLinkedin className="hover:text-gray-300" />
          </div>
        </div>
        <div className="container text-left md:px-10">
          <h6 className=" pb-6 text-white">Fitur</h6>
          <ul className="text-sm text-gray-400 flex flex-col gap-2 md:gap-4">
            <li className="hover:text-gray-300">Credit Scoring</li>
            <li className="hover:text-gray-300">Mobile Banking</li>
            <li className="hover:text-gray-300">Verifikasi KYC</li>
            <li className="hover:text-gray-300">Laporan Terperinci</li>
          </ul>
        </div>
        <div className="container text-left md:px-10">
          <h6 className=" pb-6 text-white">Lainnya</h6>
          <ul className="text-sm text-gray-400 flex flex-col gap-2 md:gap-4">
            <li className="hover:text-gray-300">Syarat & Ketentuan</li>
            <li className="hover:text-gray-300">Kebijakan & Privasi</li>
            <li className="hover:text-gray-300">Testimoni</li>
            <li className="hover:text-gray-300">Kontak Kami</li>
          </ul>
        </div>
        <div className="container text-sm flex-col justify-center text-left">
          <h6 className=" pb-6 text-white">Get In</h6>
          <div className="container flex content-center justify-center gap-3 flex-col">
            <img src="/img/App Store.png" alt="" className=" w-36" />
            <img src="/img/Google Play.png" alt="" className=" w-36" />
          </div>
        </div>
      </div>
      <hr className=" border-dashed border-gray-400 border-[0.1]" />
      <div className="flex justify-center text-xs text-gray-400 py-5">
        <p>2022. All Right Reserved. Created by PT Cazh Teknologi Inovasi.</p>
      </div>
    </div>
  );
};