import styled from "@emotion/styled";
import React, { useState } from "react";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCripto = (label, stateInicial, opciones = []) => {
  const [state, setState] = useState(stateInicial);

  const id = `select-${label.replace(/\s+/g, "-").toLowerCase()}`;

  const SelectCripto = () => (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Select
        id={id}
        onChange={(e) => setState(e.target.value)}
        value={state}
      >
        <option value="">-- Seleccione --</option>
        {opciones.length > 0 ? (
          opciones.map((cripto) => (
            <option
              key={cripto.CoinInfo.Id}
              value={cripto.CoinInfo.Name}
            >
              {cripto.CoinInfo.FullName}
            </option>
          ))
        ) : (
          <option disabled>Sin opciones disponibles</option>
        )}
      </Select>
    </>
  );

  // retornar state, interfaz y función para modificar el state
  return [state, SelectCripto, setState];
};

export default useCripto;
