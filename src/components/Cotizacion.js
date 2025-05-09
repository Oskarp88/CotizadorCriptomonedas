import styled from '@emotion/styled';
import React from 'react';

const ResultadoDiv = styled.div`
  color: #fff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #618685;
  border-radius: 10px;
  background-color: #1c1c1c;
`;

const Info = styled.p`
  font-size: 18px;
  margin: 8px 0;

  span {
    font-weight: bold;
    color: #618685;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  margin: 12px 0;

  span {
    font-weight: bold;
    color: #f5d547;
  }
`;

const Cotizacion = ({ result }) => {
  if (Object.keys(result).length === 0) return null;

  return (
    <ResultadoDiv>
      <Precio>
        El precio es: <span>{result.PRICE}</span>
      </Precio>
      <Info>
        Precio más alto del día: <span>{result.HIGHDAY}</span>
      </Info>
      <Info>
        Precio más bajo del día: <span>{result.LOWDAY}</span>
      </Info>
      <Info>
        Variación últimas 24 horas:{' '}
        <span>{result.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última actualización:{' '}
        <span>{result.LASTUPDATE}</span>
      </Info>
    </ResultadoDiv>
  );
};

export default Cotizacion;
