import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./carouselMovilView.module.css";
import Capture from "./imagenes/Capture.jpg"
import Rebeca from "./imagenes/Rebeca.jpg";
import IMG from "./imagenes/IMG.png";
import { Link } from 'react-router-dom';
import CarouselHome from '../carouselHome/carouselHome';

const IMAGES = [Rebeca, Capture, IMG]


export default function CarouselMovilView() {
  return (
    <div className={styles.main__container}>
      <div className={styles.carousel__container}>
        <Carousel className={styles.carousel}>
          {IMAGES.map((image, index) => (
            <Carousel.Item key={index} className={styles.carousel__Item}>
              <div className={styles.carousel__Item__Div}>
                <div className={styles.image__Div}>
                  <img className={styles.image} src={image} alt={`Helem Salon Carousel ${index}`} />
                </div>
                
              </div>
            </Carousel.Item>
          ))}
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

