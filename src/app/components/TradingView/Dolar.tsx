"use client";
import { TickerTape, CopyrightStyles } from "react-ts-tradingview-widgets";

const Dolar = () => {
  const TickerTapeSymbol = [
    {
      proName: "NASDAQ:TSLA",
      title: "Tesla",
    },
    {
      proName: "NASDAQ:AAPL",
      title: "Apple",
    },
    {
      proName: "NASDAQ:AMZN",
      title: "Amazon",
    },
    {
      proName: "NASDAQ:META",
      title: "Meta",
    },
    {
      proName: "NYSE:KO",
      title: "Coca Cola",
    },
  ];

  const styles: CopyrightStyles = {
    parent: {
      display: "none",
    },
  };

  return (
    <div className="w-full">
      <TickerTape
        colorTheme="dark"
        symbols={TickerTapeSymbol}
        copyrightStyles={styles}
      ></TickerTape>
    </div>
  );
};

export default Dolar;
