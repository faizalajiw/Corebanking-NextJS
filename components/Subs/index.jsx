import React from 'react'

export const Subs = () => {
  return (
    <div className="bg-bluecredis flex px-32 pt-5 ">
        <div className="container flex-[160%]">
            <h1 className="font-bold text-3xl pb-1">Berlangganan kepada kami</h1>
            <p className="pb-6">Dapatkan berbagai promosi dan informasi lainnya</p>
            <form action="" className="relative">
                <input type="text" placeholder="Email" className=" absolute text-gray-400 bg-white px-5 text-sm rounded w-[460px] h-12"/>
                <button className="px-5 py-2 rounded bg-bluecredis absolute left-[330px] top-[5px] text-sm">Berlangganan</button>
            </form>
        </div>
        <div className="container ">
            <img src="img/subscribe.png" alt="" className=" w-80"/>
        </div>
    </div>
  )
}
