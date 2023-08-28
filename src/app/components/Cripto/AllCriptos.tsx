"use client";
import React from "react";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import Criptos from "./Criptos";

interface CriptoData {
  ask: number;
  totalAsk: number;
  bid: number;
  time: string;
  moneda: string;
}

const AllCriptos = () => {
  const Results = useQueries({
    queries: [
      {
        queryKey: ["usdtData", 0],
        queryFn: async () => {
          const { data } = await axios.get(
            "https://criptoya.com/api/belo/usdt/ars/0.1"
          );
          return data as CriptoData;
        },
        refetchInterval: 5000,
      },
      {
        queryKey: ["btcData", 1],
        queryFn: async () => {
          const { data } = await axios.get(
            "https://criptoya.com/api/satoshitango/btc/usd/0.1"
          );
          return data as CriptoData;
        },
        refetchInterval: 5000,
      },
      {
        queryKey: ["ethData", 2],
        queryFn: async () => {
          const { data } = await axios.get(
            "https://criptoya.com/api/satoshitango/eth/usd/0.1"
          );
          return data as CriptoData;
        },
        refetchInterval: 5000,
      },
      {
        queryKey: ["xrpData", 2],
        queryFn: async () => {
          const { data } = await axios.get(
            "https://criptoya.com/api/satoshitango/xrp/ars/0.1"
          );
          return data as CriptoData;
        },
        refetchInterval: 5000,
      },
      {
        queryKey: ["solData", 2],
        queryFn: async () => {
          const { data } = await axios.get(
            "https://criptoya.com/api/satoshitango/sol/ars/0.1"
          );
          return data as CriptoData;
        },
        refetchInterval: 5000,
      },
      {
        queryKey: ["usdcData", 2],
        queryFn: async () => {
          const { data } = await axios.get(
            "https://criptoya.com/api/satoshitango/usdc/ars/0.1"
          );
          return data as CriptoData;
        },
        refetchInterval: 5000,
      },
      {
        queryKey: ["daiData", 2],
        queryFn: async () => {
          const { data } = await axios.get(
            "https://criptoya.com/api/satoshitango/dai/ars/0.1"
          );
          return data as CriptoData;
        },
        refetchInterval: 5000,
      },
      {
        queryKey: ["dogeData", 2],
        queryFn: async () => {
          const { data } = await axios.get(
            "https://criptoya.com/api/satoshitango/doge/ars/0.1"
          );
          return data as CriptoData;
        },
        refetchInterval: 5000,
      },
    ],
  });

  const usdt = Results[0].data as CriptoData;
  const btc = Results[1].data as CriptoData;
  const eth = Results[2].data as CriptoData;
  const xrp = Results[3].data as CriptoData;
  const sol = Results[4].data as CriptoData;
  const usdc = Results[5].data as CriptoData;
  const dai = Results[6].data as CriptoData;
  const doge = Results[7].data as CriptoData;

  if (
    Results[0].isLoading ||
    Results[1].isLoading ||
    Results[2].isLoading ||
    Results[3].isLoading ||
    Results[4].isLoading ||
    Results[5].isLoading ||
    Results[6].isLoading ||
    Results[7].isLoading
  ) {
    return (
      <div className="flex justify-center h-[1000px] items-start mx-auto">
        <h1 className="text-white dark:text-black text-4xl font-bold "></h1>
      </div>
    );
  }

  if (
    Results[0].isError ||
    Results[1].isError ||
    Results[2].isError ||
    Results[3].isError ||
    Results[4].isError ||
    Results[5].isError ||
    Results[6].isError ||
    Results[7].isError
  ) {
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
      <Criptos
        title="Bitcoin"
        value={btc?.totalAsk}
        bid={btc?.bid}
        time={btc?.time}
        moneda="USD"
      />
      <Criptos
        title="USDT"
        value={usdt?.totalAsk}
        bid={usdt?.bid}
        time={usdt?.time}
        moneda="ARS"
      />
      <Criptos
        title="Ethereum"
        value={eth?.totalAsk}
        bid={eth?.bid}
        time={eth?.time}
        moneda="USD"
      />
      <Criptos
        title="Ripple"
        value={xrp?.totalAsk}
        bid={xrp?.bid}
        time={xrp?.time}
        moneda="ARS"
      />
      <Criptos
        title="Solana"
        value={sol?.totalAsk}
        bid={sol?.bid}
        time={sol?.time}
        moneda="ARS"
      />
      <Criptos
        title="USDC"
        value={usdc?.totalAsk}
        bid={usdc?.bid}
        time={usdc?.time}
        moneda="ARS"
      />
      <Criptos
        title="DAI"
        value={dai?.totalAsk}
        bid={dai?.bid}
        time={dai?.time}
        moneda="ARS"
      />
      <Criptos
        title="Dogecoin"
        value={doge?.totalAsk}
        bid={doge?.bid}
        time={doge?.time}
        moneda="ARS"
      />
    </div>
  );
};

export default AllCriptos;
