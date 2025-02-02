import React from "react";
import { useState } from "react";
import { Fitur } from "../Fitur";
import Link from "next/link";

export const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-bluecredis shadow fixed z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-16">
        {/* Logo */}
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <img src="/img/Logo.png" className="mr-3 h-7" alt="Credis Logo" />
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-200 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* End Logo */}
        {/* Menu */}
        <div>
          <div
            className={`flex-1 pb-3 mt-8 md:pr-64 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="place-items-center justify-center space-y-8 md:flex md:space-x-16 md:space-y-0">
              <li className="text-gray-200 hover:text-green-400">
                <Link href="/">Home</Link>
              </li>
              <li className="text-gray-200 hover:text-green-400 flex flex-row">
                <Fitur />
              </li>
              <li className="text-gray-200 hover:text-green-400">
                <Link href="/blog/Blogpage">Blog</Link>
              </li>
              <li className="text-gray-200 hover:text-green-400">
                <Link href="/faq/FAQ">FAQ</Link>
              </li>
              <li className="text-gray-200 hover:text-green-400">
                <Link href="/kontak/Kontak">Kontak</Link>
              </li>
            </ul>
            <div className="absolute bottom-3 items-center md:right-32 right-8 border border-green-400 text-green-400 py-2 px-7 rounded-lg hover:bg-green-400 hover:text-whitecredis inline-block">
              <button>Daftar</button>
            </div>
          </div>
          {/* End Menu */}
        </div>
      </div>
      {/* <style jsx global>
        {`
          .hmm:hover {
            box-shadow: 0 13 4px green;
          }
        `}
      </style> */}
    </nav>
  );
};
