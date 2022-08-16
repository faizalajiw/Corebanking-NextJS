import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <>
       <div className=" bg-bluecredis">
      <Navbar />
        <div className="flex bg-bluecredis flex-col pt-20 items-start justify-start md:flex-row 
          md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-40 md:space-y-5 ">
        <div className="flex flex-wrap justify-center">
            <img src="img/mockup laptop & iphone.png" class="p-1  max-w-sm" alt=" Cards Technology"/>
        </div>
        </div>
        <div className="max-w-md">
          <p className=" text-xl font-bold leading-normal md:text-2xl  text-center">
            Credis
          </p>
          <p className="text-center px-14 py-4">
            CREDIS adalah aplikasi core banking system bagi bank umum, BPR, koperasi dan finance. Kami menyediakan fitur seperti Credit Scoring, Verifikasi KYC, Mobile Banking, Laporan Terperinci, dan lainnya.
          </p>
       
        </div>
        </div>
      </div>
      <div className="bg-bluecredis pb-20 rounded-b-namikaze"></div>

      <div className="bg-bluecredis pb-20 rounded-b-namikaze"></div>

        </>
    )
}