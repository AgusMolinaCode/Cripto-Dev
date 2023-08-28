"use client";
import React from "react";
import axios from "axios";
import Dolares from "./Dolares";
import { useQueries } from "@tanstack/react-query";

interface DolarData {
  oficial: number;
  blue: number;
  solidario: number;
  ccb: number;
  mep: number;
  mepal30ci: number;
  mepgd30: number;
  mepgd30ci: number;
  ccl: number;
  cclal30: number;
  cclal30ci: number;
  cclgd30: number;
  cclgd30ci: number;
  blue_bid: number;
  qatar: number;
  mep_var: number;
  ccl_var: number;
  ccb_var: number;
  blue_var: number;
  time: string;
}

const AllDolares = () => {
  const Results = useQueries({
    queries: [
      {
        queryKey: ["dolarData", 1],
        queryFn: async () => {
          const { data } = await axios.get("https://criptoya.com/api/dolar");
          return data as DolarData;
        },
        refetchInterval: 5000,
      },
    ],
  });

  const dolar = Results[0].data as DolarData;

  if (Results[0].isLoading) {
    return (
      <div className=" grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-1 mx-auto content-center">
        <div className="h-[150px] max-w-[500px] animate-pulse bg-gray-400 dark:bg-gray-800 relative md:h-[9rem]  items-center justify-center overflow-hidden rounded-xl"></div>
        <div className="h-[150px] max-w-[500px] animate-pulse bg-gray-400 dark:bg-gray-800 relative md:h-[9rem]  items-center justify-center overflow-hidden rounded-xl"></div>
        <div className="h-[150px] max-w-[500px] animate-pulse bg-gray-400 dark:bg-gray-800 relative md:h-[9rem]  items-center justify-center overflow-hidden rounded-xl"></div>
        <div className="h-[150px] max-w-[500px] animate-pulse bg-gray-400 dark:bg-gray-800 relative md:h-[9rem]  items-center justify-center overflow-hidden rounded-xl"></div>
        <div className="h-[150px] max-w-[500px] animate-pulse bg-gray-400 dark:bg-gray-800 relative md:h-[9rem]  items-center justify-center overflow-hidden rounded-xl"></div>
        <div className="h-[150px] max-w-[500px] animate-pulse bg-gray-400 dark:bg-gray-800 relative md:h-[9rem]  items-center justify-center overflow-hidden rounded-xl"></div>
        <div className="h-[150px] max-w-[500px] animate-pulse bg-gray-400 dark:bg-gray-800 relative md:h-[9rem]  items-center justify-center overflow-hidden rounded-xl"></div>
        <div className="h-[150px] max-w-[500px] animate-pulse bg-gray-400 dark:bg-gray-800 relative md:h-[9rem]  items-center justify-center overflow-hidden rounded-xl"></div>
      </div>
    );
  }

  if (Results[0].isError) {
    return (
      <div className="flex justify-center items-start mx-auto">
        <h1 className="text-white dark:text-black text-4xl font-bold absolute inset-0 flex items-start justify-center">
          Error...
        </h1>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-1 mx-auto content-center">
      <Dolares
        title="Dolar Blue"
        value={dolar?.blue}
        time={dolar?.time}
        percentage={dolar?.blue_var}
      />
      <Dolares
        title="Dolar Solidario"
        value={dolar?.solidario}
        time={dolar?.time}
      />
      <Dolares
        title="Dolar Oficial"
        value={dolar?.oficial}
        time={dolar?.time}
      />
      <Dolares
        title="Dolar Cripto"
        value={dolar?.ccb}
        time={dolar?.time}
        percentage={dolar?.ccb_var}
      />
      <Dolares
        title="Dolar MEP"
        value={dolar?.mep}
        time={dolar?.time}
        percentage={dolar?.mep_var}
      />
      <Dolares
        title="Dolar CCL"
        value={dolar?.ccl}
        time={dolar?.time}
        percentage={dolar?.ccl_var}
      />
      <Dolares title="Dolar Qatar" value={dolar?.qatar} time={dolar?.time} />
      <Dolares
        title="Euro Blue"
        value={dolar?.blue && dolar.blue * 1.18}
        time={dolar?.time}
      />
    </div>
  );
};

export default AllDolares;
