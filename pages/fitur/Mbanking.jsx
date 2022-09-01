import { fitur } from "../../Data";
import { Subs } from "../../components/Subs";
import { Footer } from "../../components/Footer";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { Header } from "../../components/Header";

export default function Mbanking() {
  return (
    <>
      <Header />
      <div className="bg-whitecredis">
        <div className="py-24">
          <div className="mx-6 font-semibold text-center text-bluecredis text-2xl md:text-4xl">
            {fitur[2].title}
          </div>
        </div>

        <div className="flex flex-col-reverse mx-6 md:grid md:grid-cols-2 md:justify-items-center md:mx-32">
          {/* Col 1 */}
          <div>
            <div className="text-blackcredis text-lg text-justify break-words my-10 font-medium md:text-2xl md:mb-14 md:mt-2">
              {fitur[2].subtitle}
            </div>

            <div className="text-[#5C6978] mb-32 md:mb-56">
              {fitur[2].content.map((val, index) => {
                return (
                  <div className="flex space-x-2 my-5" key={index}>
                    <HiOutlineCheckCircle className="flex-none text-2xl md:text-3xl text-[#47BE7D]" />
                    <div className="flex text-md text-justify md:text-xl">
                      {val}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <img
              src={fitur[2].image}
              alt="Credit Score"
              className="w-auto justify-center lg:w-auto md:justify-items-center"
            />
          </div>
        </div>
      </div>
      <Subs />
      <Footer />
    </>
  );
}
