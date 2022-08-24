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
      {/* <Navbar /> */}
      <div className="bg-cover bg-center bg-no-repeat bg-banner-pattern py-32 md:py-[10.5rem] px-[31.5]">
        <div className="text-2xl md:text-4xl font-semibold text-center text-[#F1F1F1]">
          Hai, Ada Yang Bisa Kami Bantu?
        </div>
      </div>

      <div className="text-xl my-20 md:text-3xl md:my-32 font-semibold text-center text-bluecredis">
        Cari Topik Berdasarkan Fitur
      </div>

      <div className="grid grid-cols-2 gap-8 mx-6 mb-10 md:grid md:grid-cols-4 md:gap-[12.5rem] md:mx-36 md:mb-28 justify-items-center text-bluecredis">
        {/* Credit Score FAQ */}
        <div className="flex flex-row box-border h-[12.5rem] w-[12.5rem] px-0 py-0 border-none content-center justify-center">
          <Link href="/faq/detail/CreditScoring">
            <a>
              <div className="flex box-border text-6xl md:text-8xl px-0 py-0 border-none content-center justify-center">
                <FaCreditCard />
              </div>
              <div className="pt-6 text-center font-medium text-lg md:text-xl">
                Credit Scoring
              </div>
            </a>
          </Link>
        </div>

        {/* MBanking FAQ */}
        <div className="flex flex-row box-border h-[12.5rem] w-[12.5rem] px-0 py-0 border-none content-center justify-center">
          <Link href="/faq/detail/MobileBanking">
            <a>
              <div className="flex box-border text-6xl md:text-8xl px-0 py-0 border-none content-center justify-center">
                <MdPhoneAndroid />
              </div>
              <div className="pt-6 text-center font-medium text-lg md:text-xl">
                Mobile Banking
              </div>
            </a>
          </Link>
        </div>

        {/* KYC FAQ */}
        <div className="flex flex-row box-border h-[12.5rem] w-[12.5rem] px-0 py-0 border-none content-center justify-center">
          <Link href="/faq/detail/VerifikasiKyc">
            <a>
              <div className="flex box-border text-6xl md:text-8xl px-0 py-0 border-none content-center justify-center">
                <MdFace />
              </div>
              <div className="pt-6 text-center font-medium text-lg md:text-xl">
                Verifikasi KYC
              </div>
            </a>
          </Link>
        </div>

        {/* Laporan Terperinci FAQ */}
        <div className="flex flex-row box-border h-[12.5rem] w-[12.5rem] px-0 py-0 border-none content-center justify-center">
          <Link href="/faq/detail/LaporanTerperinci">
            <a>
              <div className="flex box-border text-6xl md:text-8xl px-0 py-0 border-none content-center justify-center">
                <IoDocumentText />
              </div>
              <div className="pt-6 text-center font-medium text-lg md:text-xl">
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
