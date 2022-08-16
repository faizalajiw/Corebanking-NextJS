import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";
import { TestimoniCard } from "../components/TestimoniCard";
import { Subs } from "../components/Subs";
import { Footer } from "../components/Footer";
import Blog from "../components/Blog/Index";

export default function Home() {
  return (
    <>
      <div className=" bg-bluecredis ">
            <Navbar />
            <Banner />
            <Blog />
            <TestimoniCard />
            <Subs />
            <Footer />
      </div>
    </>
  );
}