import React from "react";
import { Button, Navbar } from "flowbite-react";
import Fitur from "../Fitur"

export const Header = () => {
  return (
    <div className=" container xl:px-10">
      <Navbar color="red" fluid={true} rounded={true}>

        <Navbar.Brand href="/">
          <img src="/img/Logo.png" className="mr-3 h-6 sm:h-9" alt="Credis Logo" />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Core Banking
          </span> */}
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

          <Navbar.Link href="/blog/Blogpage">
            Blog
          </Navbar.Link>
          <Navbar.Link href="/faq">
            Faq
          </Navbar.Link>
          <Navbar.Link href="/kontak">
            Kontak
          </Navbar.Link>
        </Navbar.Collapse>

      </Navbar>
    </div>
  );
}
