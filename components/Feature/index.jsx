import React from "react";
import Link from "next/link";

export const Feature = () => {
  return (
    <div className=" bg-whitecredis flex-col flex gap-16 md:gap-10 md:px-32">
      {/* Feature 1 */}
      <div className=" flex flex-col text-bluecredis md:flex-row">
        <div className="container flex justify-center mb-3">
          <img src="img/credit scoring.png" alt="" className="w-64 md:w-96" />
        </div>
        <div className="container flex flex-col items-center md:items-start px-10">
          <h1 className="text-2xl md:text-3xl font-semibold md:font-bold my-5 md:mb-10 text-center md:text-left">
            Credit Scoring
          </h1>
          <p className="mb-8 md:text-lg font-light text-justify md:font-normal">
            Pelayanan untuk mengecek tingkat kelayakan kredit untuk mendapatkan
            produk seperti Kredit Tanpa Agunan (KTA), Kredit Pemilikan Rumah
            (KPR), kartu kredit, dan lain-lain.
          </p>
          <Link href="/fitur/CreditScoring">
            <button className="bg-green-400 hover:bg-green-500 text-lg rounded px-4 py-2 text-whitecredis">
              Selengkapnya
            </button>
          </Link>
        </div>
      </div>
      {/* Feature 2 */}
      <div className=" flex flex-col text-bluecredis md:flex-row">
        <div className="container flex justify-center mb-3 md:hidden">
          <img src="img/mobile banking.png" alt="" className="w-64 md:w-96" />
        </div>
        <div className="container flex flex-col items-center md:items-start px-10">
          <h1 className="text-2xl md:text-3xl font-semibold md:font-bold my-5 md:mb-10 text-center md:text-left">
            Mobile Banking
          </h1>
          <p className="mb-8 font-light text-justify md:font-normal md:text-lg">
            Cek saldo rekening, transfer dana, dan bayar tagihan Anda dengan
            lebih mudah dan nyaman melalui M-Banking CREDIS.
          </p>
          <Link href="/fitur/Mbanking">
            <button className="bg-green-400 hover:bg-green-500 text-lg rounded px-4 py-2 text-whitecredis">
              Selengkapnya
            </button>
          </Link>
        </div>
        <div className="container justify-center mb-3 hidden md:flex">
          <img src="img/mobile banking.png" alt="" className="w-64 md:w-96" />
        </div>
      </div>
      {/* Feature 3 */}
      <div className=" flex flex-col text-bluecredis md:flex-row">
        <div className="container flex justify-center mb-3">
          <img src="img/kyc.png" alt="" className="w-64 md:w-96" />
        </div>
        <div className="container flex flex-col items-center md:items-start px-10">
          <h1 className="text-2xl md:text-3xl font-semibold md:font-bold my-5 md:mb-10 text-center md:text-left">
            Verifikasi KYC
          </h1>
          <p className="mb-8 font-light md:text-lg text-justify md:font-normal">
            Identifikasi, verifikasi, dan pemantauan transaksi nasabah demi
            melindungi keamanan data dan kenyamanan layanan finansial Anda.
          </p>
          <Link href="/fitur/KYC">
            <button className="bg-green-400 hover:bg-green-500 text-lg rounded px-4 py-2 text-whitecredis">
              Selengkapnya
            </button>
          </Link>
        </div>
      </div>
      {/* Feature 4 */}
      <div className=" flex flex-col text-bluecredis md:flex-row">
        <div className="container flex justify-center mb-3 md:hidden">
          <img
            src="img/laporan terperinci.png"
            alt=""
            className="w-64 md:w-96"
          />
        </div>
        <div className="container flex flex-col items-center md:items-start px-10">
          <h1 className="text-2xl md:text-3xl font-semibold md:font-bold my-5 md:mb-10 text-center md:text-left">
            Laporan Terperinci
          </h1>
          <p className="mb-8 font-light md:text-lg text-justify md:font-normal">
            Semua riwayat transfer, mutasi, dan sistem keuangan Anda direkap
            secara terperinci dan bisa di unduh.
          </p>
          <Link href="/fitur/LaporanTerperinci">
            <button className="bg-green-400 hover:bg-green-500 text-lg rounded px-4 py-2 text-whitecredis">
              Selengkapnya
            </button>
          </Link>
        </div>
        <div className="container  justify-center mb-3 hidden md:flex">
          <img
            src="img/laporan terperinci.png"
            alt=""
            className="w-64 md:w-96"
          />
        </div>
      </div>
    </div>
  );
};
