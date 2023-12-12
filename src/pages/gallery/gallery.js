import React from "react";
import styles from "./gallery.module.css"
import Layout from "../layout/layout";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comentarios from "../../components/comentarios/comentarios";

import Capture1  from "./imagenes/Capture1.PNG"
import Capture2  from "./imagenes/Capture2.PNG"
import Capture3  from "./imagenes/Capture3.PNG"
import S1 from "./imagenes/S1.png"
import S2 from "./imagenes/S2.png"
import S3 from "./imagenes/S3.png"
import S4 from "./imagenes/S4.png"
import R2 from "./imagenes/R2.jpg"
import I1 from "./imagenes/I1.jpg"
import I2 from "./imagenes/I2.jpg"
import I3 from "./imagenes/I3.jpg"



const IMAGES = [S1, S2, S3, S4, Capture1,Capture2, Capture3, R2, I1, I2, I3]

export default function Gallery(){
    return(
        <div className={styles.contenedorPrincipal}>
      <div className={styles.contenedorCarrusel}>
        <Carousel className={styles.carousel}>
          {IMAGES.map((image, index) => {
            return(
              <Carousel.Item key={index} className={styles.carouselItem}>
              <div className={styles.carouselItemDiv}>
                <div className={styles.imageDiv}>
                  <img className={styles.imagen} src={image} />
                </div>
              </div>
            </Carousel.Item>
            );
          })}
        </Carousel>
      </div>

      <div className={styles.comentariosDiv}>

          <Comentarios />

      </div>
        
      
    </div>
    )
}