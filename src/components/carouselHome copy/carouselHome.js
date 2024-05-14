import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./carouselHome.module.css";

import IMG1_1 from'./imagenes/IMG1.1.jpg';
import IMG1_2 from'./imagenes/IMG1.2.jpg';
import IMG1_3 from'./imagenes/IMG1.3.jpg';

import IMG2_1 from'./imagenes/IMG2.2.jpg';
import IMG2_2 from'./imagenes/IMG2.3.jpg';
import IMG2_3 from'./imagenes/IMG2.1.jpg';

import IMG3_1 from'./imagenes/IMG3.2.jpg';
import IMG3_2 from'./imagenes/IMG3.3.jpg';
import IMG3_3 from'./imagenes/IMG3.1.jpg';

import I1 from "./imagenes/Capture.jpg"
import I2 from "./imagenes/Rebeca.jpg";
import I3 from "./imagenes/IMG1.jpg";


import { Link } from 'react-router-dom';


export default function CarouselHomeCopy() {
    // const IMAGES = [Rebeca, Capture, IMG]

  return (
    <div className={styles.main__container}>
      <div className={styles.carousel__container}>
        <Carousel fade className={styles.carousel}>
            <Carousel.Item  className={styles.carousel__Item}  interval={9000}>
              <div className={styles.carousel__Item__Div}>
                <div className={styles.image__Div}>
                  <img className={styles.image} src={I3}/>
                  <img className={styles.image1} src={I1}/>
                </div> 
                <div className={styles.image__Div}>
                  <img className={styles.central__image1} src={I1}/>
                  <img className={styles.central__image} src={I3}/>
                </div> 
                <div className={styles.image__Div}>
                  <img className={styles.image_left} src={I3}/>
                  <img className={styles.image_left1} src={I1}/>
                </div> 
              </div>
            </Carousel.Item>

            <Carousel.Item  className={styles.carousel__Item} interval={9000}>
            <div className={styles.carousel__Item__Div}>
                <div className={styles.image__Div}>
                  <img className={styles.image} src={I1}/>
                  <img className={styles.image1} src={I2}/>
                </div> 
                <div className={styles.image__Div}>
                  <img className={styles.central__image1} src={I2}/>
                  <img className={styles.central__image} src={I1}/>
                </div> 
                <div className={styles.image__Div}>
                  <img className={styles.image_left} src={I1}/>
                  <img className={styles.image_left1} src={I2}/>
                </div> 
              </div>
            </Carousel.Item>

            <Carousel.Item  className={styles.carousel__Item} interval={9000}>
            <div className={styles.carousel__Item__Div}>
                <div className={styles.image__Div}>
                  <img className={styles.image} src={I2}/>
                  <img className={styles.image1} src={I3}/>
                </div> 
                <div className={styles.image__Div}>
                  <img className={styles.central__image1} src={I3}/>
                  <img className={styles.central__image} src={I2}/>
                </div> 
                <div className={styles.image__Div}>
                  <img className={styles.image_left} src={I2}/>
                  <img className={styles.image_left1} src={I3}/>
                </div> 
              </div>
            </Carousel.Item>
     
        </Carousel>
      </div>

      <div className={styles.text__container}>
        <p className={styles.text__container__paragraph}>
          {'   '}Dream of perfect hair and make it come tru in our beauty salon. Our hair
          care specialists offer you the most innovative and efective treatments. Feel bueautiful
          and confident with helthy and shiny hair.
        </p>
        <div className={styles.schedule_button_div}><button className={styles.schedule_button}><Link to="/bookOnline"> Book Online</Link></button></div>
      </div>

     
      
    </div>
  );
}


