import React from 'react'
import { FaStar } from 'react-icons/fa'
export const TestimoniCard = () => {
    const testimoni =[
        {
            id:1,
            image:"img/user testi 1.png",
            name: "Martin Sinahaan",
            job:"Pekerja Lepas",
            review:"Ini adalah fenomenal, pembayaran yang terintegerasi, sistem pembelian pulsa dan PPOB yang lengkap",
            star:5
        },
        {
            id:2,
            image:"img/user testi 2.png",
            name: "Martin Sin",
            job:"Pekerja Lepas",
            review:"Saya Tidak dapat menjelaskan lagi bagaimana aplikasi ini sangat baik",
            star:4
        },
        {
            id:3,
            image:"img/user testi 3.png",
            name: "Martin Sintak",
            job:"Pekerja Lepas",
            review:"Semua telah terdigitalisasi dan cashless saya sangat suka itu semoga dimasa depan lebih simple lagi",
            star:3
        }
    ]
  return (
    <div className="bg-grey w-80 h-auto rounded flex-row px-6 py-5">
        <div className="container flex items-center mb-6">
            <img src="img/user testi 1.png" className=" pr-4"/>
            <div className="container">
                <h4 className="text-black text-lg font-bold">Martin Sinahaan</h4>
                <p className="text-black text-xs">Pekerja Lepas</p>
            </div>
        </div>
        <div className="container text-black text-base leading-7 mb-6">
            <p>Ini adalah fenomenal, pembayaran yang terintegerasi, sistem pembelian pulsa dan PPOB yang lengkap</p>
        </div>
        <div className="container flex gap-1">
            <FaStar className=" text-yellow-400 text-2xl"/>
            <FaStar className=" text-yellow-400 text-2xl"/>
            <FaStar className=" text-yellow-400 text-2xl"/>
            <FaStar className=" text-yellow-400 text-2xl"/>
            <FaStar className=" text-yellow-400 text-2xl"/>
        </div>
    </div>
  )
}
