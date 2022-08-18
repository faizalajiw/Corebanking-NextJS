import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";
import { TestimoniCard } from "../components/TestimoniCard";
import { Subs } from "../components/Subs";
import { Footer } from "../components/Footer";
import Blog from "../components/Blog/Index";
import { testimoni } from "../Data";
import { useState } from "react";
import { Feature } from "../components/Feature";

export default function Home() {
  return (
    <>
      <div className=" bg-bluecredis ">
            <Navbar />
            <Banner />
            <Feature/>
            <Blog />
            <div className="flex justify-center gap-10">
              {testimoni.map((t) => (
                <TestimoniCard 
                  name ={t.name}
                  image={t.image}
                  job={t.job}
                  review={t.review}
                  star={t.star}
                />
              ))}
            </div>
            <Subs />
            <Footer />
      </div>
    </>
  );
}