import React from "react";
import { Button, Navbar } from "flowbite-react";
import Fitur from "../Fitur"

export default function header() {
  return (
    <div className=" bg-bluecredis container xl:px-10">
      <Navbar color="red" fluid={true} rounded={true}>

        <Navbar.Brand href="/">
          <img src="/img/Logo.png" className="mr-3 h-6 sm:h-9" alt="Credis Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Core Banking
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>
            Daftar
          </Button>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link href="#" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link >
            <Fitur />
          </Navbar.Link>

          <Navbar.Link href="#">
            Blog
          </Navbar.Link>
          <Navbar.Link href="#">
            Faq
          </Navbar.Link>
          <Navbar.Link href="#">
            Kontak
          </Navbar.Link>
        </Navbar.Collapse>

      </Navbar>
    </div>

<<<<<<< HEAD
=======
          <Link href="/fitur/CreditScoring">
            <a className="lg:inline-flex lg:w-auto w-full px-4 py-2 rounded-lg text-gray-400 items-center justify-center hover:bg-green-400 hover:text-white ">
              Fitur
            </a>
          </Link>

          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-4 py-2 rounded-lg text-gray-400 items-center justify-center hover:bg-green-400 hover:text-white ">
              Blog
            </a>
          </Link>

          <Link href="/faq/FAQ">
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
>>>>>>> 5658265d17b84c09497a261e54d40fc08aaf95ae
  );
}
