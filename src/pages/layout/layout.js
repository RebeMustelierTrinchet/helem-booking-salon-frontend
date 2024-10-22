import React from 'react';
import styles from "./layout.module.css";
import NavBar from '../../components/navbar/navbar';

import Footer from '../../components/footer/footer';

export default function Layout({ children }) {
    return (
        <div className={styles.main__container}>
            {/* <div   className={styles.layout}>
                <NavBar />

                <div className={styles.body}>
                    {children}
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div> */}
            Coming soon
        </div>
    )
}