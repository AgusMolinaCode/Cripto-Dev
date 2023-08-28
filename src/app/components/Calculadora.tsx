"use client";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Link from "next/link";

const Calculadora = () => {
  const [pesos, setPesos] = useState<string>();
  const [dolares, setDolares] = useState<string>();

  const { isLoading, error, data } = useQuery(
    ["dolarBlue"],
    async () => {
      const response = await fetch("https://criptoya.com/api/dolar");
      const data = await response.json();
      return data;
    },
    {
      refetchInterval: 5000,
    }
  );

const handlePesosChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = parseFloat(event.target.value);
  if (!isNaN(value)) {
    setPesos(parseFloat(value.toFixed(2)).toString());
    setDolares(parseFloat((value / data.blue).toFixed(2)).toString());
  } else {
    setPesos("");
    setDolares("");
  }
  if (event.target.value === "") {
    setDolares("");
  }
};

const handleDolaresChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = parseFloat(event.target.value);
  if (!isNaN(value)) {
    setDolares(parseFloat(value.toFixed(2)).toString());
    setPesos(parseFloat((value * data.blue).toFixed(2)).toString());
  } else {
    setDolares("");
    setPesos("");
  }
  if (event.target.value === "") {
    setPesos("");
  }
};

  if (isLoading) {
    return (
      <div className="">
        <div className=" max-w-[900px] max-h-[249px] animate-pulse rounded-lg bg-gray-400 dark:bg-gray-800" />
      </div>
    );
  }

  if (error) {
    return <div>Error al cargar los datos</div>;
  }

  return (
    <div className="px-2 p-2 rounded-lg border  duration-200  dark:bg-gray-900 bg-gray-300 dark:borderborder-gray-500 shadow-lg shadow-gray-700  max-w-[900px]">
      <div className="flex flex-wrap gap-3 justify-start px-2 items-center">
        <h1 className="dark:text-gray-600 text-gray-800 my-2 md:my-5 text-2xl md:text-4xl font-bold">
          Calculadora dolar blue
        </h1>
        <p>
          <span className="dark:text-gray-300 text-gray-600 text-2xl md:text-4xl font-bold">
            1 USD = {data.blue} ARS
          </span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center mx-auto items-center gap-5">
        <div className="w-72 relative">
          <label className="dark:text-gray-200 text-gray-700 text-lg ml-2 font-bold">
            Dolar Estadounidense
            <input
              type="number"
              className="w-full border-2 border-gray-200 dark:text-white rounded-md px-3 py-2 outline-none focus:border-blue-100 text-black text-4xl placeholder:text-xl"
              placeholder="Ingresa el monto"
              value={dolares}
              onChange={handleDolaresChange}
            />
            <Image
              src="/images/united-states.png"
              alt="USA Flag"
              width={48}
              height={48}
              className="absolute top-[3.5rem] left-[16.2rem] transform -translate-x-1/2 -translate-y-1/2"
            />
          </label>
        </div>

        <div className="w-72 relative">
          <label className="dark:text-gray-200 text-gray-700 text-lg ml-2 font-bold">
            Peso Argentino
            <input
              type="number"
              className="w-full border-2 border-gray-200 rounded-md dark:text-white px-3 py-2 outline-none focus:border-blue-100 text-black text-4xl placeholder:text-xl"
              placeholder="Ingresa el monto"
              value={pesos}
              onChange={handlePesosChange}
            />
            <Image
              src="/images/argentina.png"
              alt="Argentina Flag"
              width={48}
              height={48}
              className="absolute top-[3.5rem] left-[16.2rem] transform -translate-x-1/2 -translate-y-1/2"
            />
          </label>
        </div>
      </div>
      <div className="mt-10">
        <p>
          <span className="text-gray-800 dark:text-gray-400  text-sm md:text-md ml-2 font-bold">
            Fuente:{" "}
            <Link
              target="_blank"
              className="text-lg hover:text-red-400 duration-200"
              href="https://criptoya.com"
            >
              Criptoya.com
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Calculadora;
