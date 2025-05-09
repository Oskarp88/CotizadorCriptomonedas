import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import Cotizacion from "./components/Cotizacion";
import Formulario from "./components/Formulario";
import Spinner from "./components/Spinner";
import imagen from "./cryptomonedas.png";

const Contenedor = styled.main`
  width: 100%;
  margin: 0 auto;
  flex: display;
  justify-content: center;
  align-items: center;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 80%;
  margin-top: 2rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 50px;
  margin: 80px 0 50px;

  &::after {
    content: "";
    width: 100%;
    height: 6px;
    background-color: #36486b;
    display: block;
  }
`;

function App() {
  const [moneda, guardarMoneda] = useState("");
  const [criptomoneda, guardarCriptomoneda] = useState("");
  const [result, setResult] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (moneda === "" || criptomoneda === "") return;

      guardarCargando(true);

      try {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const { data } = await axios.get(url);

        setTimeout(() => {
          guardarCargando(false);
          setResult(data.DISPLAY[criptomoneda][moneda]);
        }, 3000);
      } catch (error) {
        console.error("Error al consultar la API:", error);
        guardarCargando(false);
      }
    };

    cotizarCriptomoneda();
  }, [moneda, criptomoneda]);

  return (
    <Contenedor>
      <section>
        <Imagen src={imagen} alt="imagen cripto" />
      </section>

      <section>
        <header>
          <Heading>Cotiza Criptomonedas al Instante</Heading>
        </header>

        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />

        {cargando ? <Spinner /> : <Cotizacion result={result} />}
      </section>
    </Contenedor>
  );
}

export default App;
