import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Blog } from "../../components/Blog";
import { blog } from "../../Data";

export default function Blogpage() {
  return (
    <div>
      <Header />
      <section className="container p-3">
        <div className="flex justify-center text-black font-semibold md:text-3xl text-2xl pt-4">
          Blog
        </div>
        <div className="flex justify-center text-black text pt-3 text-center px-16  font-light md:font-normal">
          Perkembangan Sistem Mengenai Core Banking System
        </div>
        <div className="flex flex-col md:flex-row px-10 space-x-1">
          <div className="flex container w-718px pt-10 pb-5 md:pl-10">
            <img src="/img/image blog 4.png" alt="Bank" />
          </div>
          <div className="flex container px-1 md:p-8 flex-col">
            <div className="flex font-semibold text-xl md:text-2xl md:pr-56">
              Sejumlah Bank Swasta Tingkatkan &quot;Core Banking System&quot;
            </div>
            <div className=" container text-bases font-light pt-2 md:pr-24">
              <p>
                Sejumlah bank umum swasta nasional (BUSN) berupaya meningkatkan
                core banking system mereka untuk meningkatkan pelayanan kepada
                nasabah dan memperkuat komptensi di bidang digital. Presiden
                Direktur PT Bank CIMB Niaga Tbk (CIMB Niaga) Tigor M Siahaan
                mengatakan, saat ini bank yang ia pimpin secara resmi
                menggunakan core banking system bernama 1Platform (1P).
              </p>
              <p className=" text-sm font-medium pt-2">Di Publish 24 Februari 2022</p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-5 justify-center items-center md:items-start md:flex-row md:flex-wrap md:gap-14 md:px-32 pt-10">
          {blog.slice(0, 6).map((b) => (
            <Blog
              image={b.image}
              header={b.header}
              content={b.content}
              date={b.date}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
