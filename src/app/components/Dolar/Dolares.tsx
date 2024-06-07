"use client";
import React, { useRef, useState } from "react";

interface DolaresProps {
  title: string;
  value: number;
  percentage: number;
  time: any;
}
const Dolares = ({ title, value, time, percentage }: DolaresProps) => {
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
    <div>
      <h1>{title}</h1>
      <p>Valor: {value}</p>
      <p>Tiempo: {new Date(time * 1000).toLocaleString()}</p>
      <p>Variación: {percentage}%</p>
    </div>
  );
};

export default Dolares;
