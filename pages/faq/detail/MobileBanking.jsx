import React from "react";
import { Accordion } from "../../../components/AccordionFaq";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Subs } from "../../../components/Subs";
import { faqMobileBanking } from "../../../Data";

export default function MobileBanking() {
  return (
    <>
      <Header />
      <div className="pt-28 bg-whitecredis flex flex-col items-center">
        <h1 className=" text-blackcredis text-3xl font-bold my-10">Mobile Banking</h1>
        <div className=" mb-20">
          {faqMobileBanking.map((val, index) => (
            <div key={index}>
              <Accordion title={val.title} subtitle={val.subtitle} />
            </div>
          ))}
        </div>
      </div>
      <Subs />
      <Footer />
    </>
  );
}
