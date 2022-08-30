import Link from "next/link";
import { Banner } from "../components/Banner";
import { TestimoniCard } from "../components/TestimoniCard";
import { Subs } from "../components/Subs";
import { Footer } from "../components/Footer";
import { Blog } from "../components/Blog";
import { testimoni } from "../Data";
import { blog } from "../Data";
import { Section } from "../components/Section";
import { Feature } from "../components/Feature";
import { JangkauanKami } from "../components/JangkauanKami";

import Menu from "../components/Head";
import { Mitra } from "../components/Mitra";

export default function Home() {
  return (
    <>
      <Menu />
      {/* <Header /> */}
      <Banner />
      <div className="bg-white py-20 md:py-40">
        <Section />
        <Feature />
        <JangkauanKami />
      </div>
      {/* Blog Section */}
      <div className="bg-white pb-16">
        <div className="text-center px-7 mb-20 text-bluecredis md:px-32">
          <h1 className="text-3xl font-semibold mb-3 md:font-bold">Blog</h1>
          <p className="font-light md:font-normal">
            Perkembangan artikel mengenai Core Banking System
          </p>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center md:items-start md:flex-row">
          {blog.slice(0, 3).map((val, index) => (
            <div key={index}>
              <Blog
                image={val.image}
                header={val.header}
                content={val.content}
                date={val.date}
              />
            </div>
          ))}
        </div>
        <Link href="blog/Blogpage">
          <div className="flex justify-center mt-10">
            <a className=" text-bluecredis font-bold cursor-pointer">
              Lihat Semua
            </a>
          </div>
        </Link>
      </div>
      {/* End Blog Section */}

      {/* Mitra */}
      <div className="bg-white pb-16 pt-10">
        <div className="text-center px-7 text-bluecredis md:px-24 place-items-center">
          <h1 className="text-xl md:text-3xl mb-10 font-semibold md:font-bold">
            Telah Dipercaya Oleh 50+ Mitra
          </h1>
          <Mitra />
        </div>
      </div>
      {/* End Mitra Section */}

      {/* Testimoni Section */}
      <div className="bg-white pb-16 pt-10">
        <div className="text-center px-7 mb-20 text-bluecredis md:px-32">
          <h1 className="text-3xl font-semibold mb-3 md:font-bold">
            Testimoni
          </h1>
          <p className="font-light md:font-normal">
            Apa yang dikatakan pelanggan mengenai kami
          </p>
        </div>
        <div className="flex justify-center gap-10 flex-wrap">
          {testimoni.slice(0, 3).map((val, index) => (
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
        <Link href="testimoni/Testimoni">
          <div className="flex justify-center mt-10">
            <a className=" text-bluecredis font-bold cursor-pointer">
              Lihat Semua
            </a>
          </div>
        </Link>
      </div>
      {/* End Testimoni Section */}

      <Subs />
      <Footer />
    </>
  );
}
