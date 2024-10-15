import React, { useState } from "react";
import './Ruleta.css'; // Importamos los estilos

const numerosRuleta = [
    { numero: 0, color: 'verde' },
    { numero: 32, color: 'rojo' },
    { numero: 15, color: 'negro' },
    { numero: 19, color: 'rojo' },
    { numero: 4, color: 'negro' },
    { numero: 21, color: 'rojo' },
    { numero: 2, color: 'negro' },
    { numero: 25, color: 'rojo' },
    { numero: 17, color: 'negro' },
    { numero: 34, color: 'rojo' },
    { numero: 6, color: 'negro' },
    { numero: 27, color: 'rojo' },
    { numero: 13, color: 'negro' },
    { numero: 36, color: 'rojo' },
    { numero: 11, color: 'negro' },
    { numero: 30, color: 'rojo' },
    { numero: 8, color: 'negro' },
    { numero: 23, color: 'rojo' },
    { numero: 10, color: 'negro' },
    { numero: 5, color: 'rojo' },
    { numero: 24, color: 'negro' },
    { numero: 16, color: 'rojo' },
    { numero: 33, color: 'negro' },
    { numero: 1, color: 'rojo' },
    { numero: 20, color: 'negro' },
    { numero: 14, color: 'rojo' },
    { numero: 31, color: 'negro' },
    { numero: 9, color: 'rojo' },
    { numero: 22, color: 'negro' },
    { numero: 18, color: 'rojo' },
    { numero: 29, color: 'negro' },
    { numero: 7, color: 'rojo' },
    { numero: 28, color: 'negro' },
    { numero: 12, color: 'rojo' },
    { numero: 35, color: 'negro' },
    { numero: 3, color: 'rojo' },
    { numero: 26, color: 'negro' }
];

const Ruleta = () => {
    const [resultado, setResultado] = useState(null);
    const [girando, setGirando] = useState(false);
    const [angulo, setAngulo] = useState(0);

    const girarRuleta = () => {
        setGirando(true);

        // Selecciona un número ganador aleatorio
        const indiceGanador = Math.floor(Math.random() * numerosRuleta.length);
        const numeroGanador = numerosRuleta[indiceGanador];

        // Calcula la rotación necesaria para que el número ganador esté arriba
        const anguloPorNumero = 360 / numerosRuleta.length;
        const nuevoAngulo = 360 * 5 + (indiceGanador * anguloPorNumero); // 5 vueltas completas + ajuste para el número
        setAngulo(nuevoAngulo);

        // Establece el número ganador después de la rotación
        setTimeout(() => {
            setResultado(numeroGanador);
            setGirando(false);
        }, 4000); // Tiempo de rotación de 4 segundos
    };

    return (
        <div className="ruleta-container">
            <div className={`ruleta ${girando ? "girando" : ""}`} style={{ transform: `rotate(${angulo}deg)` }}>
                {numerosRuleta.map((item, index) => (
                    <div
                        key={index}
                        className={`numero-ruleta ${item.color}`}
                        style={{
                            transform: `rotate(${(index * 360) / numerosRuleta.length}deg) translateY(-150px)` // Ajustamos translateY a -70px
                        }}
                    >
                        {item.numero}
                    </div>
                ))}
                <div className={`pelota ${girando ? "girando-pelota" : ""}`}></div>
            </div>

            <button onClick={girarRuleta} disabled={girando}>
                {girando ? "Girando..." : "Girar Ruleta"}
            </button>

            {resultado && (
                <h2 className={`resultado ${resultado.color}`}>
                    ¡La pelota cayó en {resultado.numero} ({resultado.color})!
                </h2>
            )}
        </div>
    );
};

export default Ruleta;
