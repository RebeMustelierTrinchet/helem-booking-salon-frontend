import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./FaqHeader.module.css";
import { Link } from 'react-router-dom';



export default function FaqHeader() {
  return (
    <div className={styles.main__container}>
      <div className={styles.text__conteiner}>
        <p className={styles.text}>Frequently</p>
        <hr className={styles.line} />
        <div className={styles.text2__conteiner}>
            <p className={styles.text2}>Frequently</p>
        </div>
        
      </div>
      <div className={styles.text__conteiner}>
        <p className={styles.text}>Asked</p>
        <hr className={styles.line} />
        <div className={styles.text2__conteiner}>
            <p className={styles.text2}>Asked</p>
        </div>
      </div>
      <div className={styles.text__conteiner}>
        <p className={styles.text}>Questions</p>
        <hr className={styles.line} />
        <div className={styles.text2__conteiner}>
            <p className={styles.text2}>Questions</p>
        </div>
      </div>
      
    </div>
  );
}

