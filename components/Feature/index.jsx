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
                <h1 className="text-2xl mb-10">Credit Scoring</h1>
                <p className="mb-10 font-light">
                Pelayanan untuk mengecek tingkat kelayakan kredit untuk mendapatkan produk seperti Kredit Tanpa Agunan (KTA), Kredit Pemilikan Rumah (KPR), kartu kredit, dan lain-lain.
                </p>
                <button className="bg-green-400 rounded px-4 py-2 text-xs">Selengkapnya</button>
            </div>
            <div className="container">
                <img src="img/credit scoring.png" alt="" className=" w-96" />
            </div>
        </div>
    </div>
  )
}
