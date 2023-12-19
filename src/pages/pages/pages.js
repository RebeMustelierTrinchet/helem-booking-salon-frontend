import React from "react";
import styles from "./pages.module.css"
import Layout from "../layout/layout";
import Carousel from 'react-bootstrap/Carousel';
import I1 from "./images/I1.jpg"
import I2 from "./images/I2.png"
import Mapa from './mapa'
import BarraFinal from "../../components/barraFinal/barrafinal";

export default function Pges(){
    return(
        <div className={styles.contenedorPrincipal}>
            
            
            <div className={styles.imagContenedor}>         
            <img className={styles.imagen} src={I1}></img>
            <div className={styles.contenedorInformacion}>
                <hr className={styles.linea}></hr>
                <h1 className={styles.text}>HELLEN</h1>
                <h2 className={styles.text}>T: 832-929-2923</h2>
                <h2 className={styles.text}>G: hellentrinchet@gmail.com</h2>
            </div>
            </div>  
            <div className={styles.direccion}>
            <img className={styles.imagen} src={I2}></img>
            <div className={styles.contenedorInformacion}>
                <hr className={styles.linea}></hr>
                <h1 className={styles.text}>9313 Tallyho rd apt 401, Houston Tx 77017</h1>
            
            </div>
            </div>
            

            
        </div>
       
    )
}