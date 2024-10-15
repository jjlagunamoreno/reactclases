import { Component } from "react";

class HijoNumeros extends Component {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    sumarNumeroAleatorio = () => {
        this.props.sumarNumero(this.numeroAleatorio);
    }

    render() {
        return (
            <div className="hijo-numeros-container">
                <h2>Número Hijo: {this.numeroAleatorio}</h2>
                <button onClick={this.sumarNumeroAleatorio}>
                    Sumar {this.numeroAleatorio}
                </button>
            </div>
        );
    }
}

export default HijoNumeros;
