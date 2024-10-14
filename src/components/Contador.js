//DEBEMOS IMPORTAR Component PARA LA HERENCIA
import { Component } from "react";

//PODEMOS DECLARAR MÉTODOS FUERA DE LA CLASE
//LOS MÉTODOS NO SE PUEDEN UTILIZAR NADA DEL Component
//Y SE DECLARAN CON function

function metodoExterno() {
    console.log("Function externa de la clase");
}

class Contador extends Component {
    //LAS VARIABLES Y LOS MÉTODOS SE DECLARAN FUERA DEL RENDER
    //NO SE UTILIZAN PALABRAS CLAVE COMO var, let o const
    numero = 1;

    //LOS METODOS SE DECLARAN DIRECTAMENTE AQUÍ
    incrementarNumero = () => {
        //PARA PODER ACCEDER A LAS VARIABLES DE LA CLASE
        //DEBEMOS UTILIZAR LA PALABRA this
        this.numero = this.numero + 1
        console.log("Valor de número: " + this.numero);

    }

    //VAMOS A DECLARAR UNA VARIABLE DE ESTADO QUE TENDRÁ EL VALOR DE PROPS
    state = {
        valor: parseInt(this.props.inicio)
    }

    //CREAMOS UN MÉTODO PARA CAMBIAR EL VALOR DEL STATE
    incrementarValorState = () => {
        //PARA MODIFICAR LOS ELEMENTOS QUE TENGAMOS DENTRO DE STATE
        //SE UTILIZA setState CON UN JSON DEL OBJETO CON LAS VARIABLES
        //QUE DESEEMOS MODIFICAR
        //LAS VARIABLES QUE NO MODIFIQUEMOS NO CAMBIARAN
        this.setState({
            valor: this.state.valor + 1
        });
    }

    render() {
        return (<div>
            <h1>Class Component Contador</h1>
            <h2 style={{ color: "blue" }}>Inicio del contador: {this.props.inicio}</h2>

            <h2 style={{ color: "red" }}>Valor del state: {this.state.valor}</h2>
            {/* LA LLAMADA A LOS MÉTODOS ES MÁS SENCILLA, NO NECESITAMOS LAMBDA Y TAMPOCO SE UTILIZAN PARENTESIS */}
            <button onClick={this.incrementarValorState}>
                Incrementar State
            </button>

            {/* VAMOS A UTILIZAR UNA FUNCIÓN ANÓNIMA PARA LLAMAR A UN MÉTODO */}
            <button onClick={() => {
                //SI DESEAMOS LLAMAR A UN MÉTODO DE LA CLASE, SE UTILIZA
                //LA PALABRA this
                this.incrementarNumero();

                //SI DESEAMOS LLAMAR A UN METODO EXTERNO DEL COMPONENT
                //NO UTILIZAMOS this
                metodoExterno();
            }}>
                Incrementar Número
            </button>
        </div>);
    }
}

export default Contador;