import { Component } from "react";
import HijoNumeros from "./HijoNumeros";
import './styles.css'; // Importamos los estilos

class PadreNumeros extends Component {

    state = {
        suma: 0,
        hijos: [0] // Empezamos con un único componente hijo
    }

    sumarNumero = (numeroDelHijo) => {
        this.setState((prevState) => ({
            suma: prevState.suma + numeroDelHijo
        }));
    }

    agregarHijo = () => {
        this.setState((prevState) => ({
            hijos: [...prevState.hijos, prevState.hijos.length]
        }));
    }

    render() {
        return (
            <div className="padre-numeros-container">
                <h1>Componente Padre Números</h1>
                <h2>Suma total: {this.state.suma}</h2>

                {this.state.hijos.map((hijo, index) => (
                    <HijoNumeros key={index} sumarNumero={this.sumarNumero} />
                ))}

                <button onClick={this.agregarHijo}>Nuevo+</button>
            </div>
        );
    }
}

export default PadreNumeros;
