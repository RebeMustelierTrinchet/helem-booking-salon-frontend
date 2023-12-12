import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./home.module.css";
import Capture from "./imagenes/Capture.jpg"
import Rebeca from "./imagenes/Rebeca.jpg";
import IMG from "./imagenes/IMG.png";
import { Link } from 'react-router-dom';

const IMAGES = [Rebeca, Capture, IMG]


export default function Home() {
  return (
    <div className={styles.contenedorPrincipal}>
      <div className={styles.contenedorCarrusel}>
        <Carousel className={styles.carousel}>
          {IMAGES.map((image, index) => (
            <Carousel.Item key={index} className={styles.carouselItem}>
              <div className={styles.carouselItemDiv}>
                <div className={styles.imageDiv}>
                  <img className={styles.imagen} src={image} alt={`Helem Salon Carousel Image ${index}`} />
                </div>
                <div className={styles.contTexto}>
                  <p>
                    Dream of perfect hair and make it come tru in our beauty salon. Our hair
                    care specialists offer you the most innovative and efective treatments. Feel bueautiful
                    and confident with helthy and shiny hair.
                  </p>
                  <button className={styles.schedule_button}><Link to="/bookOnline"> Book Online</Link></button>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      
    </div>
  );
}

