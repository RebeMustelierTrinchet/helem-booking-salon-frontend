import React from 'react'; 
import Capture1 from "./imagenes/Capture1.PNG";
import Capture from "./imagenes/Capture.PNG";
import styles from "./layout.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from 'react-router-dom';
import ContactUs from './email';
import NavBar from '../../components/navbar/navbar';

import BarraFinal from '../../components/barraFinal/barrafinal';

export default function Layout({children}){
    return(
        <div>
            <NavBar/>
            {/* <div className={styles.contenedorPrincipal}>
                <div>
                    <img className={styles.imagen} src={Capture1}></img>
                    <img className={styles.imagen1} src={Capture}></img>
                </div>
                <div className={styles.contenedorDestino}>
                    <button className={styles.botonDestino}><Link to="/home"> HOME </Link></button>
                    <button className={styles.botonDestino}><Link to="/pages"> PAGES </Link></button>
                    <button className={styles.botonDestino}><Link to="/bookOnline"> BOOK ONLINE </Link></button>
                    <button className={styles.botonDestino}><Link to="/gallery"> GALERIA </Link></button>
                </div>
                <div>
                    <button className={styles.boton} ><Link to="https://www.facebook.com/profile.php?id=100082191186102"><FaFacebookF /></Link></button>
                    <button className={styles.boton} ><Link to="https://www.instagram.com/hellentrinchet/">< FaInstagram/></Link></button>
                    <button className={styles.boton} ><FaTwitter /></button>
                    <button className={styles.boton} ><Link to='/emails'> <CgMail /> </Link></button>
                </div> */}
            {/* </div> */}

        {children}

        <BarraFinal />
        </div>
    )
}