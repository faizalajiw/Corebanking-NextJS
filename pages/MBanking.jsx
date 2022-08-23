import { fitur } from "../Data";
import { Navbar } from "../components/Navbar";
import { Subs } from "../components/Subs";
import { Footer } from "../components/Footer";
import { UilCheckCircle } from '@iconscout/react-unicons'

export default function MBanking() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="py-24">
          <div className="font-semibold text-center text-bluecredis text-4xl">
            {fitur[1].title}
          </div>
        </div>

        <div className="grid grid-cols-2 justify-items-center mx-32">
          {/* Col 1 */}
          <div>
            <div className="text-2xl font-medium text-bluecredis mb-14">
              {fitur[1].subtitle}
            </div>

            <div className="text-bluecredis mb-56">
              {fitur[1].content.map((val, index) => {
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
          <div className="">
            <img src={fitur[1].image} alt="Credit Score" srcset="" />
          </div>
        </div>
      </div>
      <Subs />
      <Footer />
    </>
  )
}