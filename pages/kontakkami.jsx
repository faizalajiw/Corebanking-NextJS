import React from 'react'
import { Navbar } from '../components/Navbar'
import { Subs } from '../components/Subs'
import { Footer } from '../components/Footer'

export default function () {
  return (
    <div className="bg-white">
        {/* <Navbar/> */}
        <div className="container">
            <div>
                <div className=" container flex flex-row gap-3 justify-center mb-3 px-3">
                    <input type="text" placeholder="Nama Depan" className="border-none bg-grey px-3 text-gray-400 text-sm h-12 w-full" />
                    <input type="text" placeholder="Nama Belakang" className="border-none bg-grey px-3 text-gray-400 text-sm h-12 w-full " />
                </div>
                <div className="container flex flex-col justify-center gap-3 px-3 mb-3">
                    <input type="text" className=" border-none bg-grey px-3 text-gray-400 text-sm h-12 " placeholder="Email" />
                    <input type="text" className=" border-none bg-grey px-3 text-gray-400 text-sm h-12" placeholder="No Telp" />
                    <textarea name="" id="" cols="30" rows="8" className=" border-none bg-grey px-3 text-gray-400 text-sm " placeholder="Tulis Pesan Anda" ></textarea>
                </div>
            </div>
            <div>
                <div>
                    <div className="container"></div>
                    <div className="container"></div>
                    <div className="container"></div>
                </div>
                <div></div>
            </div>
        </div>
        <Subs/>
        <Footer/>
    </div>
  )
}
