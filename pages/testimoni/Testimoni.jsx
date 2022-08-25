import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Subs } from "../../components/Subs";

export default function Testimoni() {
  return (
    <div>
      <Header />
      <div className=" text-center px-7 my-20 text-black md:py-5 md:px-32">
        <h1 className=" text-3xl font-semibold mb-3 md:font-bold">Testimoni</h1>
        <p className=" font-light md:font-normal">
          Apa yang dikatakan pelanggan mengenai kami
        </p>
      </div>
      <Subs />
      <Footer />
    </div>
  );
}
