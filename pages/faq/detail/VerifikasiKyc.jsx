import React from "react";
import { Accordion } from "../../../components/AccordionFaq";
import { Footer } from "../../../components/Footer";
import { Subs } from "../../../components/Subs";
import { faqVerifikasiKyc } from "../../../Data";

export default function VerifikasiKyc() {
  return (
    <div>
      <div className=" bg-white flex flex-col items-center">
        <h1 className=" text-black text-3xl font-bold my-10">Verifikasi KYC</h1>
        <div className=" mb-10">
          {faqVerifikasiKyc.map((v) => (
            <Accordion title={v.title} subtitle={v.subtitle} />
          ))}
        </div>
      </div>
      <Subs />
      <Footer />
    </div>
  );
}
