import React from "react";
import { Accordion } from "../../../components/AccordionFaq";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Subs } from "../../../components/Subs";
import { faqVerifikasiKyc } from "../../../Data";

export default function VerifikasiKyc() {
  return (
    <>
      <Header />
      <div className=" bg-white flex flex-col items-center">
        <h1 className=" text-black text-3xl font-bold my-10">Verifikasi KYC</h1>
        <div className=" mb-20">
          {faqVerifikasiKyc.map((val) => (
            <Accordion title={val.title} subtitle={val.subtitle} />
          ))}
        </div>
      </div>
      <Subs />
      <Footer />
    </>
  );
}
