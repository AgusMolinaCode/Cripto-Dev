"use client";
import React, { useRef, useState } from "react";

interface CriptosProps {
  title: string;
  value: number | undefined;
  bid: number | undefined;
  time: string | undefined;
  moneda: string;
}
const Criptos = ({ title, value, time, bid, moneda }: CriptosProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const getFormattedDate = (timestamp: string) => {
    const date = new Date(parseInt(timestamp) * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedDate = `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    } ${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;

    return formattedDate;
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative md:h-[9rem] w-full items-center justify-center overflow-hidden rounded-xl border dark:border-red-100 border-gray-500 bg-gradient-to-r from-gray-200  dark:from-black dark:to-gray-800 duration-200"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
        }}
      />

      <div className="m-2 flex justify-between">
        <div className="">
          <p className="dark:text-blue-100 text-gray-800 text-xl md:text-2xl font-bold">
            {" "}
            {title}
          </p>
          <p className="dark:text-blue-300 text-teal-800 mt-3 text-2xl md:text-4xl font-bold">
            {value?.toFixed(2)}{" "}
            <span className="text-gray-500 text-lg">{moneda}$</span>
          </p>
          <p className="text-gray-500 font-bold text-md">venta</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-500  md:text-md font-bold">Mejor Precio 24hs</p>
          <p>
            <span className="text-red-400 text-2xl font-bold">
                {bid?.toFixed(2)}{" "}
            </span>
          </p>
          <p className="text-md font-bold text-gray-500">
            {getFormattedDate(time as string)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Criptos;
