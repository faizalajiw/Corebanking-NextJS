import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Subs } from "../../components/Subs";
import { FaCreditCard } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { MdFace } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";

export default function FAQ() {
  return (
    <>
      <Navbar />
      <div className="bg-cover bg-center bg-no-repeat bg-hero-pattern py-[10.5rem] px-[31.5]">
        <div className="font-semibold text-4xl text-center text-[#F1F1F1]">
          Hai, Ada Yang Bisa Kami Bantu?
        </div>
      </div>

      <div className="font-semibold text-3xl text-center text-bluecredis my-32">
        Cari Topik Berdasarkan Fitur
      </div>

      <div className="justify-items-center grid grid-cols-4 gap-[12.5rem] mx-36 mb-28 text-bluecredis">
        {/* Credit Score FAQ */}
        <div className="flex flex-row box-border h-[12.5rem] w-[12.5rem] px-0 py-0 border-none content-center justify-center">
          <Link href="/">
            <a>
              <div className="flex box-border text-8xl px-0 py-0 border-none content-center justify-center">
                <FaCreditCard />
              </div>
              <div className="pt-6 text-center font-medium text-xl">
                Credit Scoring
              </div>
            </a>
          </Link>
        </div>

        {/* MBanking FAQ */}
        <div className="flex flex-row box-border h-[12.5rem] w-[12.5rem] px-0 py-0 border-none content-center justify-center">
          <Link href="/">
            <a>
              <div className="flex box-border text-8xl px-0 py-0 border-none content-center justify-center">
                <MdPhoneAndroid />
              </div>
              <div className="pt-6 text-center font-medium text-xl">
                Mobile Banking
              </div>
            </a>
          </Link>
        </div>

        {/* KYC FAQ */}
        <div className="flex flex-row box-border h-[12.5rem] w-[12.5rem] px-0 py-0 border-none content-center justify-center">
          <Link href="/">
            <a>
              <div className="flex box-border text-8xl px-0 py-0 border-none content-center justify-center">
                <MdFace />
              </div>
              <div className="pt-6 text-center font-medium text-xl">
                Verifikasi KYC
              </div>
            </a>
          </Link>
        </div>

        {/* Laporan Terperinci FAQ */}
        <div className="flex flex-row box-border h-[12.5rem] w-[12.5rem] px-0 py-0 border-none content-center justify-center">
          <Link href="/">
            <a>
              <div className="flex box-border text-8xl px-0 py-0 border-none content-center justify-center">
                <IoDocumentText />
              </div>
              <div className="pt-6 text-center font-medium text-xl">
                Laporan Terperinci
              </div>
            </a>
          </Link>
        </div>
      </div>
      <Subs />
      <Footer />
    </>
  );
}
