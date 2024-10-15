import { Component } from "react";
import Comic from "./Comic";

class Comics extends Component {
    state = {
        comics: [
            {
                titulo: "Spiderman",
                imagen:
                    "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
                descripcion: "Hombre araña"
            },
            {
                titulo: "Wolverine",
                imagen:
                    "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
                descripcion: "Lobezno"
            },
            {
                titulo: "Guardianes de la Galaxia",
                imagen:
                    "https://www.zonanegativa.com/imagenes/2018/03/Groot-portada.jpg",
                descripcion: "Yo soy Groot"
            },
            {
                titulo: "Avengers",
                imagen:
                    "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                descripcion: "Los Vengadores"
            },
            {
                titulo: "Spawn",
                imagen:
                    "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                descripcion: "Al Simmons"
            },
            {
                titulo: "Batman",
                imagen:
                    "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                descripcion: "Murcielago"
            }
        ],
        favorito: null
    }

    seleccionarFavorito = (comicFavorito) => {
        console.log("Selecionar favorito");
        this.setState({
            favorito: comicFavorito
        })
    }

    eliminarComic = (index) => {
        console.log("Eliminar cómic");
        //ELIMINAR ALGO DE UN ARRAY
        //TENEMOS UN MÉTODO LLAMMADO splice QUE NOS PIDE EL INDEX DEL 
        //ELEMENTO A ELIMINAR DEL ARRAY Y EL NÍMERO DE ELEMENTOS A ELIMINAR
        this.state.comics.splice(index, 1);
        this.setState({
            comics: this.state.comics
        })
    }

    render() {
        return (<div style={{ textAlign: "center" }}>
            <h1 style={{ textDecoration: "underline" }}>Comics</h1>
            {/* {
                <div style={{ backgroundColor: "lightgreen" }}>
                    <h2 style={{ color: "blue" }}>{this.state.favorito.titulo}</h2>
                    <img src={this.state.favorito.imagen} style={{ width: "100px", height: "150px" }} />
                </div>
            } */}
            {
                this.state.favorito &&
                (<div style={{ backgroundColor: "lightgreen" }}>
                    <h1>Favortio</h1>
                    <h2 style={{ color: "blue" }}>{this.state.favorito.titulo}</h2>
                    <img src={this.state.favorito.imagen} style={{ width: "100px", height: "150px" }} />
                </div>)
            }

            {/* Con esto llamamos a cada uno de los 'comics' para saber los que hay dentro y escribirlos
            en nuestro dibujo */}
            {
                this.state.comics.map((objetoComic, index) => {
                    return (<Comic key={index}
                        index={index}
                        comic={objetoComic}
                        seleccionarFavorito={this.seleccionarFavorito}
                        eliminarComic={this.eliminarComic}
                    />)

                })
            }
        </div>)
    }
}

export default Comics;