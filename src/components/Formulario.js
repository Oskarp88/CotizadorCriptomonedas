import styled from '@emotion/styled';
import axios  from 'axios';
import React, { useEffect, useState } from 'react';
import useCripto from '../hooks/useCripto';
import useMonedas from '../hooks/useMonedas';
import Error from './Error';



const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #36486b;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover{
        background-color: #618685;
        cursor: pointer;
    }
`;

const Formulario = ({guardarMoneda,guardarCriptomoneda}) => {

    //state para el listado de criptomonedas
    const [listacripto, guardarCriptomonedas] = useState([]);
    const [error, guardarError]= useState(false);

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'COP', nombre: 'Peso Colombiano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]

    //Utilizar useMoneda
    const [moneda, SelectMonedas] = useMonedas('Elige una moneda','',MONEDAS);
    //Utilizar useCripto
    const [criptomoneda, SelectCripto] = useCripto('Elige tu Criptomoneda','',listacripto);
    //ejecutar llamado a la Api
    useEffect(()=>{
        const consultarApi = async ()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result =  await axios.get(url);
            guardarCriptomonedas(result.data.Data);
        }
        consultarApi();
    },[]);

    //cuando se ejecuta submit

    const cotizarModena = (e)=>{
        e.preventDefault();

        //validar los campos si estan lleno
        if(moneda === '' || criptomoneda === ''){
            guardarError(true);
            return;
        }

        //pasar los datos al componente principal
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);

    }

    return ( 
        <form onSubmit={cotizarModena}>
            {error ? <Error mensaje = 'SELECCIONA TODOS LOS CAMPOS'/>:null}
            <SelectMonedas />
            <SelectCripto />

            <Boton type='submit' value='Calcular'/>
        </form>
     );
}
 
export default Formulario;
