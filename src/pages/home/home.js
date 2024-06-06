import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./home.module.css";
import Capture from "./imagenes/Capture.jpg"
import Rebeca from "./imagenes/Rebeca.jpg";
import IMG from "./imagenes/IMG.png";
import { Link } from 'react-router-dom';
import CarouselHome from '../../components/carouselHome/carouselHome';
import CarouselMovilView from './../../components/carouselMovilView/carouselMovilView'
import ContacUs from '../../components/contacUs/contacUs';
import CarouselHomeCopy from '../../components/carouselHome copy/carouselHome';
// import Feature_services from '../../components/Featured-Services/Featured-Services';
import CircularCarousel from '../../components/Featured-Services/Featured-Services';

const IMAGES = [Rebeca, Capture, IMG]


export default function Home() {
  return (
    <div className={styles.main__container}>
      <div className={styles.carousel__container}>
        <CarouselHomeCopy/>
        <CarouselMovilView/>
        <ContacUs/>
        <CircularCarousel/>
      </div>
      
    </div>
  );
}

