import React from 'react'

export const Feature = () => {
  return (
    <div className="container px-32 flex flex-col gap-10">
        <div className="container flex ">
            <div className="container">
                <img src="img/credit scoring.png" alt="" className=" w-96" />
            </div>
            <div className="container px-10">
                <h1 className="text-2xl mb-10">Credit Scoring</h1>
                <p className="mb-10 font-light">
                Pelayanan untuk mengecek tingkat kelayakan kredit untuk mendapatkan produk seperti Kredit Tanpa Agunan (KTA), Kredit Pemilikan Rumah (KPR), kartu kredit, dan lain-lain.
                </p>
                <button className="bg-green-400 rounded px-4 py-2 text-xs">Selengkapnya</button>
            </div>
        </div>
        <div className="container flex ">
            <div className="container px-10">
                <h1 className="text-2xl mb-10">Mobile Banking</h1>
                <p className="mb-10 font-light">
                Cek saldo rekening, transfer dana, dan bayar tagihan Anda dengan lebih mudah dan nyaman melalui 
                M-Banking CREDIS.
                </p>
                <button className="bg-green-400 rounded px-4 py-2 text-xs">Selengkapnya</button>
            </div>
            <div className="container">
                <img src="img/mobile banking.png" alt="" className=" w-96" />
            </div>
        </div>
        <div className="container flex ">
            <div className="container flex">
                <img src="img/kyc.png" alt="" className=" w-96" />
            </div>
            <div className="container px-10">
                <h1 className="text-2xl mb-10">Verifikasi KYC</h1>
                <p className="mb-10 font-light">
                Identifikasi, verifikasi, dan pemantauan transaksi nasabah demi melindungi keamanan data dan kenyamanan layanan finansial Anda.
                </p>
                <button className="bg-green-400 rounded px-4 py-2 text-xs">Selengkapnya</button>
            </div>
        </div>
        <div className="container flex ">
            <div className="container px-10">
                <h1 className="text-2xl mb-10">Laporan Terperinci</h1>
                <p className="mb-10 font-light">
                Semua riwayat transfer, mutasi, dan sistem keuangan Anda direkap secara terperinci dan bisa 
                di unduh.
                </p>
                <button className="bg-green-400 rounded px-4 py-2 text-xs">Selengkapnya</button>
            </div>
            <div className="container">
                <img src="img/laporan terperinci.png" alt="" className=" w-96" />
            </div>
        </div>
    </div>
  )
}
