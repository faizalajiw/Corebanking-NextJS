import React from "react";
import { Footer } from "../../components/Footer";
import { Subs } from "../../components/Subs";
import { GoMail, GoLocation } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";
import { Map } from "../../components/Map";
import Header from "../../components/Header";

export default function Kontak() {
  return (
    <div className="bg-white">
      <Header />
      <div className=" md:flex">
        <div className="my-3 px-3 flex flex-col gap-3 md:flex-1 md:pl-32">
          <div className="container flex flex-col md:flex-none md:w-[700px]">
            <h1 className=" font-bold text-black text-3xl">Kontak Kami</h1>
            <p className=" text-gray-600">
              Anda dapat mengirim pesan kepada tim kami dengan menulis pesan
              anda di bawah
            </p>
          </div>
          <div className=" container flex flex-row gap-3 justify-center ">
            <input
              type="text"
              placeholder="Nama Depan"
              className="border-none bg-grey px-3 text-gray-400 text-sm h-12 w-full"
            />
            <input
              type="text"
              placeholder="Nama Belakang"
              className="border-none bg-grey px-3 text-gray-400 text-sm h-12 w-full "
            />
          </div>
          <div className="container flex flex-col justify-center gap-3">
            <input
              type="text"
              className=" border-none bg-grey px-3 text-gray-400 text-sm h-12 "
              placeholder="Email"
            />
            <input
              type="text"
              className=" border-none bg-grey px-3 text-gray-400 text-sm h-12"
              placeholder="No Telp"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="8"
              className=" border-none bg-grey px-3 text-gray-400 text-sm "
              placeholder="Tulis Pesan Anda"
            ></textarea>
          </div>
          <div className="container flex justify-center">
            <button className="bg-green-400 rounded px-5 py-3 w-32 text-xs text-white md:text-sm md:py-2 md:w-38">
              Kirim Pesan
            </button>
          </div>
        </div>
        <div className="mb-3 px-3 md:pr-32 md:mt-3 md:self-center">
          <div className=" flex flex-col gap-5">
            <div className="container text-gray-500 gap-2 border-2 rounded border-dashed w-full h-32 flex flex-col justify-center content-center px-10 md:px-5 ">
              <h2 className="font-bold text-xl md:text-lg">
                Kirimkan pesan anda pada kami
              </h2>
              <div className="flex items-center gap-2 md:gap-1">
                <GoMail />
                <p className=" md:text-sm">cazhero@gmail.com</p>
              </div>
            </div>
            <div className="container text-gray-500 gap-2 border-2 rounded border-dashed w-full h-32 flex flex-col justify-center content-center px-10 md:px-5 ">
              <h2 className="font-bold text-xl md:text-lg">
                Kontak yang dapat dihubungi
              </h2>
              <div className="flex items-center gap-2 md:gap-1">
                <AiOutlinePhone />
                <p className=" md:text-sm">0821654221</p>
              </div>
            </div>
            <div className="container text-gray-500 gap-2 border-2 rounded border-dashed w-full h-32 flex flex-col justify-center content-center px-10 md:px-5 ">
              <h2 className="font-bold text-xl md:text-lg">
                Tempat kantor kami
              </h2>
              <div className="flex items-center gap-2 md:gap-2">
                <GoLocation className="md:text-xl" />
                <p className=" md:text-sm">
                  Jalan Waru 4 No 25, Purwokerto Selatan, Banyumas - Jawa Tengah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex my-20">
        <Map />
      </div>
      <Subs />
      <Footer />
    </div>
  );
}
