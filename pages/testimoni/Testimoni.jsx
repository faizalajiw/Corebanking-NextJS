import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Subs } from "../../components/Subs";
import { TestimoniCard } from "../../components/TestimoniCard";
import { testimoni } from "../../Data";

export default function Testimoni() {
  return (
    <div>
      <Header />
      <div className=" text-center px-7 text-blackcredis md:py-5 md:px-32">
        <h1 className=" text-3xl font-semibold mb-3 md:font-bold md:pt-32">Testimoni</h1>
        <p className=" font-light md:font-normal">
          Apa yang dikatakan pelanggan mengenai kami
        </p>
      </div>
      <div className=" flex flex-col items-center justify-center mb-20 gap-5 md:items-start md:flex-wrap md:flex-row">
        {testimoni.slice(0, 9).map((val, index) => (
          <div key={index}>
            <TestimoniCard
              name={val.name}
              image={val.image}
              job={val.job}
              review={val.review}
              star={val.star}
            />
          </div>
        ))}
      </div>
      <Subs />
      <Footer />
    </div>
  );
}
