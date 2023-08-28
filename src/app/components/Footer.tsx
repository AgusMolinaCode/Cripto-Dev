import Link from "next/link";
import React from "react";
import { SiRaspberrypi } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-black dark:border-gray-200">
      <div className=" mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <div className="flex items-center ">
                <div className="text-5xl text-black dark:text-red-500 duration-200">
                  <SiRaspberrypi />
                </div>
                <h1 className="text-3xl md:text-4xl text-black dark:text-red-500 duration-200">
                  Dolar-Dev
                </h1>
              </div>
            </Link>
          </div>

          <div className="flex items-center">
            <Link
              href="#MainContent"
              className="inline-block rounded-full dark:bg-red-600 bg-gray-600 hover:bg-black p-2 text-white shadow transition dark:hover:bg-red-500 sm:p-3 lg:p-4"
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between mt-12">
          <p className=" md:max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
            Aplicacion desarrollada para visualizar las ultimas cotizaciones del
            Dolar y Criptomonedas en Argentina,desarrollado por Agustin Molina.
          </p>

          <p className="text-center text-sm text-gray-500 pt-8 sm:pt-0">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
