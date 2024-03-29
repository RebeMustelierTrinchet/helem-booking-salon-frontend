import React from "react";
import styles from "./gallery.module.css"
import Layout from "../layout/layout";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comments from "../../components/comments/comments";

import I1 from "./imagenes/I1.jpg"
import I2 from "./imagenes/I2.jpg"
import I3 from "./imagenes/I3.jpg"
import I4 from "./imagenes/I4.jpg"
import I5 from "./imagenes/I5.jpg"
import I6 from "./imagenes/I6.jpg"



const IMAGES = [I1, I2, I3, I4, I5, I6]

export default function Gallery(){
    return(
        <div className={styles.main__container} >
      <div className={styles.carousel__container}>
        <Carousel variant="dark" className={styles.carousel}>
          {IMAGES.map((image, index) => {
            return(
              <Carousel.Item interval={9000} key={index} className={styles.carousel__Item}>
              <div className={styles.carousel__Item__Div}>
                <div className={styles.image__container}>
                  <img className={styles.image} src={image} />
                </div>
              </div>
            </Carousel.Item>
            );
          })}
        </Carousel>
      </div>

      <div className={styles.comments__container}>

          <Comments />

      </div>
        
      
    </div>
    )
}