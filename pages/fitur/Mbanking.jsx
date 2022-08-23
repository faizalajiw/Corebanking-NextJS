import { fitur } from "../Data";
import { Navbar } from "../components/Navbar";
import { Subs } from "../components/Subs";
import { Footer } from "../components/Footer";
import { UilCheckCircle } from '@iconscout/react-unicons'

export default function Mbanking() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="py-24">
          <div className="font-semibold text-center text-bluecredis text-4xl">
            {fitur[2].title}
          </div>
        </div>

        <div className="grid grid-cols-2 justify-items-center mx-32">
          {/* Col 1 */}
          <div>
            <div className="text-2xl font-medium text-[#1E1E1E] mb-14">
              {fitur[2].subtitle}
            </div>

            <div className="text-[#5C6978] mb-56">
              {fitur[2].content.map((val, index) => {
                return (
                  <div className="flex space-x-2 my-5" key={index}>
                    <UilCheckCircle color="#47BE7D" size="28" />
                    <div className="text-xl">{val}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <img src={fitur[2].image} alt="Credit Score" srcset="" />
          </div>
        </div>
      </div>
      <Subs />
      <Footer />
    </>
  )
}