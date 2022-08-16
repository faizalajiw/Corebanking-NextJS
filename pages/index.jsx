
import Image from 'next/image'
import Link from 'next/link'

import Head from "next/head";

import { Navbar } from "../components/Navbar";
import { Subs } from '../components/Subs';
import { TestimoniCard } from '../components/TestimoniCard';

export default function Home() {
  const testimoni =[
    {
        id:1,
        image:"img/user testi 1.png",
        review:"Ini adalah fenomenal, pembayaran yang terintegerasi, sistem pembelian pulsa dan PPOB yang lengkap",
        star:5
    },
    {
        id:2,
        image:"img/user testi 2.png",
        review:"Saya Tidak dapat menjelaskan lagi bagaimana aplikasi ini sangat baik",
        star:4
    },
    {
        id:3,
        image:"img/user testi 3.png",
        review:"Semua telah terdigitalisasi dan cashless saya sangat suka itu semoga dimasa depan lebih simple lagi",
        star:3
    }
]
  return (
    <>
      <div className=" bg-bluecredis ">
        <Navbar />
        <div className="flex bg-bluecredis flex-col pt-20 items-start justify-start  md:flex-row md:items-center md:justify-center md:space-x-6 ">
          <div className="space-x-2 pt-6 pb-8 md:space-y-5">
            <div className="flex flex-wrap justify-center">
              <img
                src="img/mockup laptop & iphone.png"
                className="p-1  max-w-sm"
                alt=" Cards Technology"
              />
            </div>
          </div>
          <div className="max-w-md">
            <p className=" text-xl font-bold leading-normal md:text-2xl  text-center">
              Credis
            </p>
            <p className="text-center px-14 py-4">
              CREDIS adalah aplikasi core banking system bagi bank umum, BPR,
              koperasi dan finance. Kami menyediakan fitur seperti Credit
              Scoring, Verifikasi KYC, Mobile Banking, Laporan Terperinci, dan
              lainnya.
            </p>
          </div>
    
        </div>
      <TestimoniCard/>
      <Subs/>
      </div>
    </>
  );

}