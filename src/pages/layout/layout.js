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

export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <div>
                <NavBar />

                <div className={styles.body}>
                    {children}
                </div>
                <div className={styles.footer}>
                    <BarraFinal />
                </div>
            </div>
        </div>
    )
}