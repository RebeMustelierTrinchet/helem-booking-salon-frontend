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
import Carousel_Gallery from "../../components/gallery-carrousel/gallery";
import Gallery_Movil_View from "../../components/gallery-movil/carouselMovilView";



const IMAGES = [I1, I2, I3, I4, I5, I6]

export default function Gallery() {

 
   
  
  return (

    <div className={styles.main__container} >
      {/* <div className={styles.carousel__container}>
        <Carousel variant="dark" className={styles.carousel} slide={false}>
          {IMAGES.map((image, index) => {
            return (
              <Carousel.Item interval={10000} key={index} className={styles.carousel__Item}>

                <div className={styles.carousel__Item__Div}>
                  <div className={styles.image__container}>
                    <img className={styles.image} src={image} />
                    
                  </div>
                  <table className={styles.table}>
                    <tbody> 
                        {Array.from({ length: 40 }).map((_, rowIndex) => (
                          <tr key={rowIndex} className={styles.tr_container}> 
                            {Array.from({ length: 30 }).map((_, colIndex) => (
                              <td key={colIndex} className={styles.td_container}>
                                <div className={styles.inner_container} style={{ animationDelay: `${Math.random() * 7}s` }}></div>
                              </td>

                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                </div>
                
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div> */}
      <Carousel_Gallery/>
      <Gallery_Movil_View/>

      <div className={styles.comments__container}>
        <Comments />
      </div>
    </div>
  )
}