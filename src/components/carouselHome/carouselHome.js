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

import Capture from "./imagenes/Capture.jpg"
import Rebeca from "./imagenes/Rebeca.jpg";
import IMG from "./imagenes/IMG1.jpg";


import { Link } from 'react-router-dom';


export default function CarouselHome() {
    const IMAGES = [Rebeca, Capture, IMG]

  return (
    <div className={styles.main__container}>
      <div className={styles.carousel__container}>
        <Carousel fade className={styles.carousel}>
            <Carousel.Item  className={styles.carousel__Item}  interval={9000}>
              <div className={styles.carousel__Item__Div}>
                <div className={styles.image__Div}>
                  <img className={styles.image} src={IMG3_1}/>
                  <img className={styles.image} src={IMG1_1}/>
                </div> 
                <div className={styles.image__Div}>
                  <img className={styles.central__image} src={IMG1_2}/>
                  <img className={styles.central__image} src={IMG3_2}/>
                </div> 
                <div className={styles.image__Div}>
                  <img className={styles.image} src={IMG3_3}/>
                  <img className={styles.image} src={IMG1_3}/>
                </div> 
              </div>
            </Carousel.Item>

            <Carousel.Item  className={styles.carousel__Item} interval={9000}>
                <div className={styles.carousel__Item__Div}>
                    <div className={styles.image__Div}>
                    <img className={styles.image} src={IMG1_1}/>
                    <img className={styles.image} src={IMG2_1}/>
                    </div> 
                    <div className={styles.image__Div}>
                    <img className={styles.central__image} src={IMG2_2}/>
                    <img className={styles.central__image} src={IMG1_2}/>
                    </div> 
                    <div className={styles.image__Div}>
                    <img className={styles.image} src={IMG1_3}/>
                    <img className={styles.image} src={IMG2_3}/>
                    </div> 
                </div>
            </Carousel.Item>

            <Carousel.Item  className={styles.carousel__Item} interval={9000}>
                <div className={styles.carousel__Item__Div}>
                    <div className={styles.image__Div}>
                    <img className={styles.image} src={IMG2_1}/>
                    <img className={styles.image} src={IMG3_1}/>
                    </div> 
                    <div className={styles.image__Div}>
                    <img className={styles.central__image} src={IMG3_2}/>
                    <img className={styles.central__image} src={IMG2_2}/>
                    </div> 
                    <div className={styles.image__Div}>
                    <img className={styles.image} src={IMG2_3}/>
                    <img className={styles.image} src={IMG3_3}/>
                    </div> 
                </div>
            </Carousel.Item>
     
        </Carousel>
      </div>

      <div className={styles.text__container}>
        <p className={styles.text__container__paragraph}>
          Dream of perfect hair and make it come tru in our beauty salon. Our hair
          care specialists offer you the most innovative and efective treatments. Feel bueautiful
          and confident with helthy and shiny hair.
        </p>
        <div className={styles.schedule_button_div}><button className={styles.schedule_button}><Link to="/bookOnline"> Book Online</Link></button></div>
      </div>
      
    </div>
  );
}

