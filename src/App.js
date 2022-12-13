import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import Cotizacion from "./components/Cotizacion";
import Formulario from "./components/Formulario";
import Spinner from "./components/Spinner.js";
import imagen from "./cryptomonedas.png"

const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    @media (min-width:992px){
      display: grid;
      grid-template-columns: repeat(2,1fr);
      column-gap: 2rem;
    }
`;

const Imagen = styled.img`
   max-width: 100%;
   margin-top: 5rem;
`;

const Heading = styled.h1`
   font-family: 'Bebas Neue', cursive;
   color: #fff;
   text-align: center;
   font-weight: 700;
   font-size: 50px;
   margin-bottom: 50px;
   margin-top: 80px;

   &::after{
    content: '';
    width: 100%;
    height: 6px;
    background-color: #36486b;
    display:block;
   }
`;

function App() {

  const [moneda, guardarMoneda]=useState('');
  const [criptomoneda, guardarCriptomoneda]=useState('');
  const [result, setResult] = useState({});
  const [cargando, guardarCargando]=useState(false);

  useEffect(()=>{

    const cotizarCriptomoneda = async ()=>{
      //evitamos la ejecucion la primera vez
     if(moneda ==='')return;

     // consultar la api para obtener la cotizacion de las moneda
     const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
     const result = await axios.get(url);

     //mostrar el spinner
     guardarCargando(true);

     //ocultar el spinner y mostrar el resultado
     setTimeout(()=>{
      //cambiar el estadp de cargando
      guardarCargando(false);
      //guardar cotizacion
      setResult(result.data.DISPLAY[criptomoneda][moneda]);
     }, 3000);
     
    }
    cotizarCriptomoneda();

  }, [moneda, criptomoneda]);

  //mostrar el spinner o resultado
  const componente = (cargando) ? <Spinner /> : <Cotizacion result={result} />
  return (
    <Contenedor >
      <div>
        <Imagen src={imagen} alt='imagen cripto'/>
      </div>
      <div>
        <Heading>
          Cotiza Criptomonedas al Instante
        </Heading>
        <Formulario 
           guardarMoneda={guardarMoneda}
           guardarCriptomoneda={guardarCriptomoneda}
        />
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
