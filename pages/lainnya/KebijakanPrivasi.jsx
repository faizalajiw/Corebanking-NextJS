import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Subs } from "../../components/Subs";
import { kebijakan } from "../../Data";

export default function KebijakanPrivasi() {
  return (
    <>
      <Header />
      <div className="bg-cover bg-center bg-no-repeat bg-banner-pattern space-y-10 py-32 px-[31.5]">
        <div className="text-2xl md:text-4xl font-semibold text-center text-[#F1F1F1]">
          Kebijakan Privasi
        </div>
        <p className="text-sm md:text-lg text-center text-[#F1F1F1] text-opacity-70">
          Revisi Terakhir : 25 Agustus 2022
        </p>
      </div>

      <div className="box-border border-1 shadow-lg shadow-gray-200 rounded-lg h-auto w-auto mx-32 my-24">
        <div className="text-[#1E1E1E]">
          {kebijakan.map((val, index) => (
            <div className="space-y-5 px-14 py-10" key={index}>
              <div className="font-medium text-2xl">{val.title}</div>
              <p className="text-lg">{val.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Subs />
      <Footer />
    </>
  );
}
