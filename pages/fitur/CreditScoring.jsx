import { fitur } from "../../Data";
import { Navbar } from "../../components/Navbar";
import { Subs } from "../../components/Subs";
import { Footer } from "../../components/Footer";
import { HiOutlineCheckCircle } from "react-icons/hi"

export default function CreditScoring() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-white">
        <div className="py-24">
          <div className="mx-6 font-semibold text-center text-bluecredis text-2xl md:text-4xl">
            {fitur[0].title}
          </div>
        </div>

        <div className="flex flex-col-reverse mx-6 md:grid md:grid-cols-2 md:justify-items-center md:mx-32">
          {/* Col 1 */}
          <div>
            <div className="text-[#1E1E1E] text-lg text-justify break-words my-10 font-medium md:text-2xl md:mb-14 md:mt-0">
              {fitur[0].subtitle}
            </div>

            <div className="text-[#5C6978] mb-32 md:mb-56">
              {fitur[0].content.map((val, index) => {
                return (
                  <div className="flex space-x-2 my-5" key={index}>
                    <HiOutlineCheckCircle className="flex-none text-2xl md:text-3xl text-[#47BE7D]" />
                    <div className="flex text-md text-justify md:text-xl">{val}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <img src={fitur[0].image} alt="Credit Score" className="w-auto justify-center lg:w-auto md:justify-items-center" />
          </div>
        </div>
      </div>
      <Subs />
      <Footer />
    </>
  );
}
