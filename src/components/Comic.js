import { Component } from "react";

class Comic extends Component {
    render() {
        return (<div style={{ backgroundColor: "#6C7A89" }}>
            <h2>Cómic: {this.props.comic.titulo}</h2>
            <p>{this.props.comic.descripcion}</p>
            <img src={this.props.comic.imagen} style={{ width: "100px", height: "150px" }} /><br />

            <button style={{ backgroundColor: "blue" }} onClick={() => {
                this.props.seleccionarFavorito(this.props.comic);
            }}>
                Seleccionar Favorito
            </button>

            <button style={{ backgroundColor: "red" }} onClick={() => {
                this.props.eliminarComic(this.props.index);
            }}>
                Eliminar Cómic
            </button>
        </div >)
    }
}

export default Comic;