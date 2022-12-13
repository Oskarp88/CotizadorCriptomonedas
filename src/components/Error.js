import styled from '@emotion/styled';
import React from 'react';

const MesageError = styled.p`
   background-color: #b7322c;
   padding: 1rem;
   color: #fff;
   font-size: 30px;
   font-weight: bold;
   text-align: center;
   text-transform: uppercase;
   font-family: 'Beba Neue', cursive;
`;

const Error = ({mensaje}) => {
    return ( 
        <MesageError>{mensaje}</MesageError>
      );
}
 
export default Error;