import styled from '@emotion/styled';
import React from 'react'

const ResultadoDiv = styled.div`
   color: #fff;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
const Info = styled.p`
   font-size: 18px;

   span{
    font-weight: bold;
    color: #36486b;
   }
`;
const Precio = styled.p`
   font-size: 30px;
   span{
    font-weight: bold;
    color: #36486b;
   }
`;
const Cotizacion = ({result}) => {
    if(Object.keys(result).length === 0) return null;

    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{result.PRICE}</span></Precio>
            <Info>El precio mas alto del dia: <span> {result.HIGHDAY}</span></Info>
            <Info>El precio mas bajo del dia: <span> {result.LOWDAY}</span></Info>
            <Info>Variación últimas 24 horas: <span> {result.CHANGEPCT24HOUR}</span></Info>
            <Info>Última Actualización: <span> {result.LASTUPDATE}</span></Info>
        </ResultadoDiv>
     );
}
 
export default Cotizacion;