import React from "react";

export const Feature = () => {
  return (
    <div className=" bg-white flex-col flex gap-16 md:gap-10 md:px-32">
      <div className=" flex flex-col text-black md:flex-row">
        <div className="container flex justify-center mb-3">
          <img src="img/credit scoring.png" alt="" className=" w-96" />
        </div>
        <div className="container px-10">
          <h1 className="text-2xl mb-5 md:mb-10">Credit Scoring</h1>
          <p className="mb-10 font-light text-justify md:font-normal">
            Pelayanan untuk mengecek tingkat kelayakan kredit untuk mendapatkan
            produk seperti Kredit Tanpa Agunan (KTA), Kredit Pemilikan Rumah
            (KPR), kartu kredit, dan lain-lain.
          </p>
          <button className="bg-green-400 rounded px-4 py-2 text-xs text-white">
            Selengkapnya
          </button>
        </div>
      </div>
      <div className=" flex flex-col text-black md:flex-row">
        <div className="container flex justify-center mb-3 md:hidden">
          <img src="img/mobile banking.png" alt="" className=" w-96" />
        </div>
        <div className="container px-10">
          <h1 className="text-2xl mb-5 md:mb-10">Mobile Banking</h1>
          <p className="mb-10 font-light text-justify md:font-normal">
            Cek saldo rekening, transfer dana, dan bayar tagihan Anda dengan
            lebih mudah dan nyaman melalui M-Banking CREDIS.
          </p>
          <button className="bg-green-400 rounded px-4 py-2 text-xs text-white">
            Selengkapnya
          </button>
        </div>
        <div className="container justify-center mb-3 hidden md:flex">
          <img src="img/mobile banking.png" alt="" className=" w-96" />
        </div>
      </div>
      <div className=" flex flex-col text-black md:flex-row">
        <div className="container flex justify-center mb-3">
          <img src="img/kyc.png" alt="" className=" w-96" />
        </div>
        <div className="container px-10">
          <h1 className="text-2xl mb-5 md:mb-10">Verifikasi KYC</h1>
          <p className="mb-10 font-light text-justify md:font-normal">
            Identifikasi, verifikasi, dan pemantauan transaksi nasabah demi
            melindungi keamanan data dan kenyamanan layanan finansial Anda.
          </p>
          <button className="bg-green-400 rounded px-4 py-2 text-xs text-white">
            Selengkapnya
          </button>
        </div>
      </div>
      <div className=" flex flex-col text-black md:flex-row">
        <div className="container flex justify-center mb-3 md:hidden">
          <img src="img/laporan terperinci.png" alt="" className=" w-96" />
        </div>
        <div className="container px-10">
          <h1 className="text-2xl mb-5 md:mb-10">Laporan Terperinci</h1>
          <p className="mb-10 font-light text-justify md:font-normal">
            Semua riwayat transfer, mutasi, dan sistem keuangan Anda direkap
            secara terperinci dan bisa di unduh.
          </p>
          <button className="bg-green-400 rounded px-4 py-2 text-xs text-white">
            Selengkapnya
          </button>
        </div>
        <div className="container  justify-center mb-3 hidden md:flex">
          <img src="img/laporan terperinci.png" alt="" className=" w-96" />
        </div>
      </div>
    </div>
  );
};
