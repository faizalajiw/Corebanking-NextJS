import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <div className="flex flex-row items-center mx-24 pt-3 space-x-48 font-medium">
        {/* Logo */}
        <div>
          <Link href="/">
            <img alt="Logo" src="img/Logo.png" className="w-36" />
          </Link>
        </div>

        {/* Menu */}
        <div className="flex-1 space-x-10">
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-4 py-2 rounded-lg text-gray-400 items-center justify-center hover:bg-green-400 hover:text-white ">
              Home
            </a>
          </Link>

          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-4 py-2 rounded-lg text-gray-400 items-center justify-center hover:bg-green-400 hover:text-white ">
              Fitur
            </a>
          </Link>

          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-4 py-2 rounded-lg text-gray-400 items-center justify-center hover:bg-green-400 hover:text-white ">
              Blog
            </a>
          </Link>

          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-4 py-2 rounded-lg text-gray-400 items-center justify-center hover:bg-green-400 hover:text-white ">
              FAQ
            </a>
          </Link>

          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-4 py-2 rounded-lg text-gray-400 items-center justify-center hover:bg-green-400 hover:text-white ">
              Kontak
            </a>
          </Link>
        </div>

        {/* Button Daftar */}
        <div>
          <Link href="/">
            <button className="border border-green-400 text-green-400 py-2 px-7 rounded-lg hover:bg-green-400 hover:text-white">
              Daftar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
