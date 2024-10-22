import ContacUs from '../../components/contacUs/contacUs';
import Contac_Us from './../email/email';
import styles from './contact.module.css'


export default function Contact() {
    return (
      <div className={styles.main__container}>
          <Contac_Us/>
          <ContacUs/>
        
      </div>
    );
  }
  