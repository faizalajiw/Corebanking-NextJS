import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  const fitur = ["Credit Scoring", "Mobile Banking", "Verifikasi KYC", "Laporan Terperinci"];
  const lainnya = ["Syarat & Ketentuan", "Kebijakan & Privasi", "Testimoni", "Kontak Kami"];
  return (
    <div className=" bg-bluecredis" >
      <div className="bg-bluecredis flex flex-row px-32 pt-16 mb-3">
        <div className="container text-gray-400">
          <img src="img/Logo.png" alt="" className="mb-4"/>
          <p className=" text-sm mb-7">Jalan Waru 4 No 25, Purwokerto Selatan, Banyumas - Jawa Tengah</p>
          <div className="container flex flex-row justify-start text-2xl ">
            <FaWhatsapp className="mr-5" />
            <FaFacebook className="mr-5" />
            <FaInstagram className="mr-5" />
            <FaLinkedin />
          </div>
        </div>
        <div className="container px-10 ">
          <h6 className=" pb-6">Fitur</h6>
          <ul className="text-sm text-gray-400 flex flex-col gap-4">
            <li>Credit Scoring</li>
            <li>Mobile Banking</li>
            <li>Verifikasi KYC</li>
            <li>Laporan Terperinci</li>
          </ul>
        </div>
        <div className="container px-10 text-sm">
          <h6 className=" pb-6">Lainnya</h6>
          <ul className="text-sm text-gray-400 flex flex-col gap-4">
            <li>Syarat & Ketentuan</li>
            <li>Kebijakan & Privasi</li>
            <li>Testimoni</li>
            <li>Kontak Kami</li>
          </ul>
        </div>
        <div className="container text-sm">
          <h6 className=" pb-6">Get In</h6>
          <img src="/img/App Store.png" alt="" className=" w-36 pb-3" />
          <img src="/img/Google Play.png" alt="" className=" w-36" />
        </div>
      </div>
      <hr className=" border-dashed border-gray-400 border-[0.1]" />
      <div className="container flex justify-center text-xs text-gray-400 py-5">
        <p>2022. All Right Reserved. Created by PT Cazh Teknologi Inovasi.</p>
      </div>
    </div>
  )
}
