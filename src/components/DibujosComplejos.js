import { Component } from "react";
class DibujosComplejos extends Component{
    //VAMOS A DIBUJAR UNA SERIE DE NUMEROS EN FORMATO HTML
    //UTILIZANDO UN ARRAY CON <li>
    dibujarNumeros = () => {
        //DECLARAMOS UN ARRAY PARA ALMACENAR EL DIBUJO
        var lista = [];
        //VAMOS A REALIZAR UN BUCLE PARA RELLENAR NUMEROS DINAMICOS
        for (var i = 1; i <=7; i++) {
            var numero = parseInt(Math.random() * 100) + 1;
            //MEDIANTE EL METODO push DEL ARRAY IREMOS
            //RELLENANDO EL CODIGO HTML
            lista.push(<li>{numero}</li>);
        }
        return lista;
    }
    render() {
        return (<div>
            <h1>Dibujos complejos HTML</h1>
            <ul>
                {this.dibujarNumeros()}
            </ul>
        </div>)
    }
}
export default DibujosComplejos;