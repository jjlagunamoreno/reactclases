import { Component } from "react";

class DibujosComplejosReact extends Component {
    state = {
        //EN STATE TENDREMOS UN CONJUNTO DE NOMBRES
        nombres: ["Jaime", "Carlos", "Hugo", "Andrei", "Manu", "Tomás", "Sofia"]
    }

    generarNombre = () => {
        this.state.nombres.push("Nuevo Nombre");
        //ACTUALIZAMOS STATE
        this.setState({
            nombres: this.state.nombres
        });
    }

    render() {
        return (<div>
            <h1>Dibujos complejos React Collection</h1>

            <button onClick={this.generarNombre}>Generar nombre</button>

            {
                //ESTO ES CÓDIGO REACT, DIFERENTE AL CÓDIGO JS
                //ES CÓDIGO LÓGICO CON SINTÁXIS JSX
                //EL CÓDIGO LÓGICO DEBE DE CONTENER UN RETURN
                this.state.nombres.map((name, index) => {
                    //ESTE CÓDIGO NUNCA DEBE ESTAR VACÍO, SIEMPRE TIENE QUE DEVOLVER UN 'return'
                    return (<h1 key={index} style={{ color: "blue" }}>{name}</h1>)
                })
            }
        </div>)
    }
}
export default DibujosComplejosReact;