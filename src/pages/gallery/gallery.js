import React from "react";
import styles from "./gallery.module.css"
import Layout from "../layout/layout";

import Capture1  from "./imagenes/Capture1.PNG"
import Capture2  from "./imagenes/Capture2.PNG"
import Capture3  from "./imagenes/Capture3.PNG"
import Img1 from "./imagenes/Img1.jpg"
import Img2  from "./imagenes/Img2.jpg"
import Img3  from "./imagenes/Img3.jpg"

import BarraFinal from "../../components/barraFinal/barrafinal";

export default function Gallery(){
    return(
        <div>
            <div className={styles.contenedorImagen}>
                <div className={styles.Imagen}>
                    <img src={Img1} className={styles.imagenIzquierda}></img>
                    <p className={styles.texs} > Trabajos de Calidad</p>
                </div>
                <div className={styles.Imagen}>
                <p className={styles.texs} > Encuentra tu Imagen Ideal </p>
                    <img src={Img2} className={styles.imagenDerecha}></img>
                </div>
                <div className={styles.Imagen}>
                    <img src={Img3} className={styles.imagenIzquierda}></img>
                    <p className={styles.texs} > Tu Cabello es mi Lienzo y <br /><br/><br/> tu energia mi inspiracion</p>
                </div>
                <div className={styles.Imagen}>
                <p className={styles.texs} > El mejor color en el mundo es<br/><br/><br/> el que te queda bien a tí</p>
                    <img src={Capture1} className={styles.imagenDerecha}></img>
                </div>
                <div className={styles.Imagen}>
                    <img src={Capture2} className={styles.imagenIzquierda}></img>
                    <p className={styles.texs} > Para ser irreemplazable,<br/><br/><br/> debes buscar ser <br/><br/><br/>diferente</p>
                </div>
                <div className={styles.Imagen}>
                <p className={styles.texs} >La moda pasa.<br/><br/><br/> El estilo, jamás</p>
                    <img src={Capture3} className={styles.imagenDerecha}></img>
                </div>
            </div>
        </div>
    )
}