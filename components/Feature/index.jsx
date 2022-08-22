import React from 'react'

export const Feature = ({id, image, header, title}) => {
  return (
    <div className="container flex flex-col gap-10 px-10 md:px-32">
        <div className="container flex flex-col md:flex-row">
            <div className="container flex justify-center md:justify-start">
                <img src="img/credit scoring.png" alt="" className="max-w-xs md:w-96" />
            </div>
            <div className="container px-10 text-center md:text-left">
                <h1 className="text-2xl mb-10">Credit Scoring</h1>
                <p className="mb-10 font-light">
                Pelayanan untuk mengecek tingkat kelayakan kredit untuk mendapatkan produk seperti Kredit Tanpa Agunan (KTA), Kredit Pemilikan Rumah (KPR), kartu kredit, dan lain-lain.
                </p>
                <button className="bg-green-400 rounded px-4 py-2 text-xs">Selengkapnya</button>
            </div>
        </div>
        <div className="container flex flex-col md:flex-row">
            <div className="container flex justify-center md:justify-start md:hidden">
                <img src="img/credit scoring.png" alt="" className="max-w-xs md:w-96" />
            </div>
            <div className="container px-10 text-center md:text-left">
                <h1 className="text-2xl mb-10">Credit Scoring</h1>
                <p className="mb-10 font-light">
                Pelayanan untuk mengecek tingkat kelayakan kredit untuk mendapatkan produk seperti Kredit Tanpa Agunan (KTA), Kredit Pemilikan Rumah (KPR), kartu kredit, dan lain-lain.
                </p>
                <button className="bg-green-400 rounded px-4 py-2 text-xs">Selengkapnya</button>
            </div>
            <div className="container hidden md:flex">
                <img src="img/credit scoring.png" alt="" className="max-w-xs md:w-96" />
            </div>
        </div>
    </div>
  )
}
