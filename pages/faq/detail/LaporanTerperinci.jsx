import React from "react";
import { Accordion } from "../../../components/AccordionFaq";
import { Footer } from "../../../components/Footer";
import { Subs } from "../../../components/Subs";
import { faqLaporanTerperinci } from "../../../Data";

export default function LaporanTerperinci() {
  return (
    <div>
      <div className=" bg-white flex flex-col items-center">
        <h1 className=" text-black text-3xl font-bold my-10">
          Laporan Terperinci
        </h1>
        <div className=" mb-20">
          {faqLaporanTerperinci.map((val) => (
            <Accordion title={val.title} subtitle={val.subtitle} />
          ))}
        </div>
      </div>
      <Subs />
      <Footer />
    </div>
  );
}
