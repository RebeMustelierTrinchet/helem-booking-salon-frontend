import React from "react";
import styles from "./barrafinal.module.css"
import Capture1 from "../../pages/layout/imagenes/Capture1.PNG"
import Capture from "../../pages/layout/imagenes/Capture.PNG"
import { Link } from 'react-router-dom';
import { CgMail } from "react-icons/cg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const DEFAULT_TIME = "8:00 AM - 5:30 PM"

const SCHEDULE = [
    {
        day: "Monday",
        time: DEFAULT_TIME
    },
    {
        day: "Tuesday",
        time: DEFAULT_TIME
    },
    {
        day: "Wednesday",
        time: DEFAULT_TIME
    },
    {
        day: "Thursday",
        time: DEFAULT_TIME
    },
    {
        day: "Friday",
        time: DEFAULT_TIME
    },
    {
        day: "Saturday",
        time: DEFAULT_TIME
    },
    {
        day: "Sunday",
        time: "Close"
    },
]


export default function BarraFinal(){
    return(
        <div className={styles.contenedorPrincipal}>
           <div className={styles.footerWrapperDiv}>
                <ul className={styles.contenedorLista}>
                    <li className={styles.botonNav} Link to="/">Home</li>
                    <li className={styles.botonNav} Link to="/faqs">Faqs</li>
                    <li className={styles.botonNav} Link to="/gallery">Gallery</li>
                    <li className={styles.botonNav} Link to="/pages">Contact Us</li>
                    <li className={styles.botonNav} Link to="/bookOnline">Book Online</li>
                </ul>
           </div>
           
            <div  className={styles.contText}>
                <h1 className={styles.text}>7500 Bellaire Boulevard, Houston Tx</h1>
                <div>
                    <ul className={styles.contLista}>
                        <li className={styles.boton} Link to="https://www.facebook.com/profile.php?id=100082191186102"><FaFacebookF /></li>
                        <li className={styles.boton} Link to="https://www.instagram.com/hellentrinchet/"><FaInstagram /></li>
                        <li className={styles.boton} Link to="/"><FaTwitter /></li>
                        <li className={styles.boton} Link to="/emails"><CgMail /></li>
                    </ul>
                </div>
            </div>
            <div className={styles.contenedorImagen}>
                <img className={styles.imagen} src={Capture1}></img>
                <img className={styles.imagen1} src={Capture}></img>
            </div>
            <div className={styles.contenedorTable}>
                <table className={styles.stiloTabla}>
                    {SCHEDULE.map((item, index) => {
                        return(
                            <tr key={index}>
                            <td className={styles.tabla}>{item.day}</td>
                            <td className={styles.tabla}>{item.time}</td>
                            </tr>
                        );
                     })}
                </table>
            </div>

        </div>
    )
}