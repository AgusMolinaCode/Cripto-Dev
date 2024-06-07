'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";

const AllDolares = () => {
  const [dolar, setDolar] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://dolarapi.com/v1/dolares");
      setDolar(data);
    };

    fetchData();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-1 mx-auto content-center">
      {Object.entries(dolar).map(([key, value]) => (
        <div key={key}>
          <h2>{key}</h2>
          <p>Moneda: {value.moneda}</p>
          <p>Casa: {value.casa}</p>
          <p>Nombre: {value.nombre}</p>
          <p>Compra: {value.compra}</p>
          <p>Venta: {value.venta}</p>
          <p>Fecha de Actualización: {value.fechaActualizacion}</p>
        </div>
      ))}
    </div>
  );
};

export default AllDolares;