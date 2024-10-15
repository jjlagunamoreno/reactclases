import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Contador from './components/Contador';
import DibujosComplejos from './components/DibujosComplejos';
import DibujosComplejosReact from './components/DibujosComplejosReact';
import PadreDeportes from './components/PadreDeportes';
import PadreNumeros from './components/PadreNumeros';
import Ruleta from './components/Ruleta';
import Comics from './components/Comics';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Ejercicio componente Contador */}
    {/* <Contador inicio="9" />
    <Contador inicio="14" /> */}

    {/* Ejercicio componente DibujosComplejos */}
    {/* <DibujosComplejos /> */}

    {/* Ejercicio componente DibujosComplejosReact */}
    {/* <DibujosComplejosReact /> */}

    {/* Ejercicio componente Padre e Hijo Deportes */}
    {/* <PadreDeportes /> */}

    {/* Ejercicio Sumar Números con Padre e Hijos */}
    {/* <PadreNumeros /> */}

    {/* Proyecto por mi mismo de ruleta de casino */}
    {/* <Ruleta /> */}

    {/* Proyecto por mi mismo de Comics de casino */}
    <Comics />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
