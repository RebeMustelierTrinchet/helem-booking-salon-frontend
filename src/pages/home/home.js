import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./home.module.css";
import Capture from "./imagenes/Capture.PNG"
import Rebeca from "./imagenes/Rebeca.jpg";
import IMG from "./imagenes/IMG.jpg";
import Layout from "../layout/layout";
import BarraFinal from '../../components/barraFinal/barrafinal';


export default function Home() {
  return (
    <div className={styles.contenedorPrincipal}>
      <div className={styles.contenedorCarrusel}>
        <Carousel className={styles.carousel}>
          <Carousel.Item  className={styles.carouselItem1}>
            <div>
            <img className={styles.imagen} src={Rebeca} >
            </img>
            </div>
          </Carousel.Item>
          <Carousel.Item className={styles.carouselItem2}>
            <div >
            <img className={styles.imagen} src={Capture} ></img>
            </div>
          </Carousel.Item>
          <Carousel.Item className={styles.carouselItem3}>
            <div >
            <img className={styles.imagen} src={IMG} ></img>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      
    </div>
  );
}

