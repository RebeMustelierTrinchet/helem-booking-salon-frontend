import React from "react";
import styles from "./footer.module.css"
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


export default function Footer(){
    return(
        <div className={styles.main__container}>
           <div className={styles.footer__Wrapper__Div}>
                   <button className={styles.btn__displacement}><Link to="/">HOME</Link></button>
                    <button className={styles.btn__displacement}><Link to="/faqs"> FAQS </Link></button>
                    <button className={styles.btn__displacement}><Link to="/gallery"> GALLERY </Link></button>
                    <button className={styles.btn__displacement}><Link to="/contact-us"> CONTACT US </Link></button>
                    <button className={styles.btn__displacement}><Link to="/bookOnline"> BOOK ONLINE </Link></button>
           </div>
           
            <div  className={styles.contText}>
                <h1 className={styles.text}>9313 Tallyho rd apt 401, Houston TX 77017</h1>
                <div>
                    <ul className={styles.List__container}>
                        <li className={styles.btn__social__media} Link to="https://www.facebook.com/profile.php?id=100082191186102"><FaFacebookF /></li>
                        <li className={styles.btn__social__media} Link to="https://www.instagram.com/hellentrinchet/"><FaInstagram /></li>
                        <li className={styles.btn__social__media} Link to="/"><FaTwitter /></li>
                        <li className={styles.btn__social__media} Link to="/emails"><CgMail /></li>
                    </ul>
                </div>
            </div>
            <div className={styles.Image__container}>
                <img className={styles.image} src={Capture1} alt="Helem Salon logo part 1" />
                <img className={styles.image1} src={Capture} alt="Helem Salon logo part 2" />
            </div>
            <div className={styles.table__container}>
                <table className={styles.Table}>
                    {SCHEDULE.map((item, index) => {
                        return(
                            <tr key={index}>
                            <td className={styles.table__item}>{item.day}</td>
                            <td className={styles.table__item}>{item.time}</td>
                            </tr>
                        );
                     })}
                </table>
            </div>

        </div>
    )
}