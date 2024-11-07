import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./home.module.css";
import Capture from "./imagenes/Capture.jpg"
import Rebeca from "./imagenes/Rebeca.jpg";
import IMG from "./imagenes/IMG.png";
import CarouselMovilView from './../../components/carouselMovilView/carouselMovilView'
import CarouselHomeCopy from '../../components/carouselHome copy/carouselHome';
import CircularCarousel from '../../components/Featured-Services/Featured-Services';
import ImportanceOfImage from '../../components/why-us/why_us';

const IMAGES = [Rebeca, Capture, IMG]


export default function Home() {
  return (
    <div className={styles.main__container}>
      <div className={styles.carousel__container}>
        <CarouselHomeCopy/>
        <CarouselMovilView/>
        {/* <ImportanceOfImage/> */}
        <h3 className={styles.title}>What we offerd ?</h3>
        <CircularCarousel/>
      </div>
      
    </div>
  );
}

