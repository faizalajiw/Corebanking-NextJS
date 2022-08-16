import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";
import { TestimoniCard } from "../components/TestimoniCard";
import { Subs } from "../components/Subs";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className=" bg-bluecredis ">
        <Navbar />
        <Banner />
        <TestimoniCard />
        <Subs />
        <Footer />
      </div>
    </>
  );
}
