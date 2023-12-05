import React from "react";
import styles from "./pages.module.css"
import Layout from "../layout/layout";
import Carousel from 'react-bootstrap/Carousel';
import Capture from "./images/Capture.PNG"
import Capture1 from "./images/Capture1.PNG"
import Capture2 from "./images/Capture2.PNG"
import Mapa from './mapa'
import BarraFinal from "../../components/barraFinal/barrafinal";

export default function Pges(){
    return(
        <div className={styles.contenedorPrincipal}>
            
            <div className={styles.contenedorCarrusel}>
                <Carousel className={styles.carousel}>
                    <Carousel.Item  className={styles.carouselItem1}>
                    <div>
                        <img className={styles.imagen} src={Capture} >
                        </img>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem2}>
                        <div >
                        <img className={styles.imagen} src={Capture1} >
                        </img> 
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem3}>
                        <div >
                        <img className={styles.imagen} src={Capture2} >
                        </img> 
                        </div>
                    </Carousel.Item>
                </Carousel>
                
                {/* <div className={styles.mapa}>
                    <Mapa />
                </div> */}

            </div>
            <div className={styles.contenedorInformacion}>
                <hr className={styles.linea}></hr>
                <h1>HELLEN</h1>
                <h2>T: 832-929-2923</h2>
                <h2>G: hellentrinchet@gmail.com</h2>
            </div>
            <div>
            </div>
        </div>
    )
}