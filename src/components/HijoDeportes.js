import { Component } from "react";

class HijoDeportes extends Component {
    // //QUIERO VISUALIZAR EL DEPORTE FAVORITO
    // seleccionarFavorito = () => {
    //     this.setState({
    //         mensaje: "Su deporte favorito es: " + this.props.nombre
    //     })
    // }
    seleccionarFavorito = () => {
        //CAPTURAMOS EL DEPORTE 
        var deporte = this.props.nombre;
        //REALIZAMOS LA LLAMADA AL OADRE ENVIANDO EL DEPORTE
        this.props.mostrarFavorito(deporte);
    }

    state = {
        mensaje: ""
    }

    render() {
        return (<div>
            <h2 style={{ color: "fuchsia" }}>{this.props.nombre}</h2>
            <h4>{this.state.mensaje}</h4>
            <button onClick={this.seleccionarFavorito}>Seleccionar favorito</button>
        </div>)
    }
}
export default HijoDeportes;