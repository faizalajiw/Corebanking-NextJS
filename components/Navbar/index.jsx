import Link from "next/link";

export const Navbar = () => {
  const menu = ["About", "Features", "Pricing", "Testimonials", "Help"];
  return (
    <>
      <div className="container max-w-6xl mx-auto flex flex-row items-center pt-9 space-x-36 text-base">
        <div>
          <img alt="Logo" src="img/Logo.png" className="w-36" />
        </div>
        <div className="flex-1 font-normal">
          <ul className="flex flex-row space-x-10">
            {menu.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div className="space-x-7 font-medium">
          <button className="border border-red-500 text-red-500 py-2 px-7 rounded-full">
            Daftar
          </button>
        </div>
      </div>
    </>
  );
};
