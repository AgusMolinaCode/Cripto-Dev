"use client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";

interface Data {
  ask: number;
  totalAsk: number;
  bid: number;
  totalBid: number;
  time: number;
}

const datosIndex = [
  {
    name: "Plus",
  },
  {
    name: "Cambio AR",
    image: "/images/cambioar.jpeg",
  },
  {
    name: "BNA",
    image: "/images/bna.jpeg",
  },
  {
    name: "Santander",
    image: "/images/santander.png",
  },
  {
    name: "Galicia",
    image: "/images/galicia.png",
  },
  {
    name: "BBVA Frances",
    image: "/images/BBVA.webp",
  },
  {
    name: "Patagonia",
    image: "/images/patagonia.jpeg",
  },
  {
    name: "Macro",
    image: "/images/macro.avif",
  },
  {
    name: "HSBC",
    image: "/images/HSBC.png",
  },
  {
    name: "Bapro",
    image: "/images/bapro.jpeg",
  },
  {
    name: "Ciudad",
    image: "/images/banco_ciudad.jpeg",
  },
  {
    name: "Brubank",
    image: "/images/brubank.png",
  },
  {
    name: "Supervielle",
    image: "/images/supervielle.png",
  },
  {
    name: "ICBC",
    image: "/images/ICBC.jpeg",
  },
  {
    name: "Plaza Cambio",
    image: "/images/plaza.png",
  },
  {
    name: "Tria Cambio",
    image: "/images/TRIACAMBIO.png",
  },
  {
    name: "Hipotecario",
    image: "/images/hipotecario2.jpeg",
  },
];

const Slider = () => {
  const { data, isError, isLoading } = useQuery<Data[]>(
    ["bancostodos"],
    async () => {
      const response = await axios.get("https://criptoya.com/api/bancostodos");
      const filteredData = Object.values(response.data).filter(
        (_, index) => ![0, 1, 3, 5, 6, 8, 9, 10, 20, 21, 22, 25].includes(index)
      );
      return filteredData as Data[];
    },
    { refetchInterval: 5000 }
  );

if (isLoading) {
  const loadingContent = (
    <div className="w-full h-8 mt-3 animate-pulse">
      <div className="animate-infinite-slider bg-transparent flex gap-4 w-[calc(300px*10)]">
        {[...Array(20)].map((_, index) => (
          <div
            className="bg-gray-400 dark:bg-gray-800 w-[150px] h-9 rounded-xl"
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );

  return loadingContent;
}

  if (isError) {
    return (
      <div className="flex justify-center items-start mx-auto">
        <h1 className="text-black dark:text-white text-4xl font-bold absolute inset-0 flex items-start justify-center">
          Error...
        </h1>
      </div>
    );
  }

  return (
    <div className="relative m-auto mt-3 w-full overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[2] before:h-full  before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:-scale-x-100  after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(300px*10)]">
        {data?.map((datos, index) => {
          const indexData = datosIndex[index];
          return (
            <div
              className="slide flex w-[400px] items-center justify-center"
              key={index}
            >
              <div className="flex items-center gap-2">
                <p className="text-gray-700 dark:text-gray-500 text-xl">
                  {indexData?.name}:
                </p>
                <p className="text-gray-800 dark:text-gray-600 text-2xl">
                  {datos.totalAsk.toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
