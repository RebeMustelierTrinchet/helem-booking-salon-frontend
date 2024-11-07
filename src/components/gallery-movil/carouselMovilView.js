import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./carouselMovilView.module.css";
import I1 from "./../../images/I1.jpeg";
import I2 from "./../../images/I2.jpeg";
import I3 from "./../../images/I3.jpeg";
import I4 from "./../../images/I4.jpeg";
import I5 from "./../../images/I5.jpeg";
import I6 from "./../../images/I6.jpeg";
import I7 from "./../../images/I7.jpeg";
import I8 from "./../../images/I8.jpeg";
import I9 from "./../../images/I9.jpeg";
import I10 from "./../../images/I10.jpeg";
import I11 from "./../../images/I11.jpeg";
import I12 from "./../../images/I12.jpeg";
import I13 from "./../../images/I13.jpeg";
import I14 from "./../../images/I14.jpeg";
import I15 from "./../../images/I15.jpeg";
import I16 from "./../../images/I16.jpeg";

const IMAGES = [I1, I2, I3, I4, I5, I6,I7,I8, I9, I10, I11, I12, I13, I14, I15, I16]


export default function Gallery_Movil_View() {
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
    </div>
  );
}

