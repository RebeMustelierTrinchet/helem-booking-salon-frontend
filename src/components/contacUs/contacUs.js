import React from "react";
import styles from "./contacUs.module.css"
import I1 from "./../../images/buen(1).png"
import I2 from "./../../images/Untitled1 (2).png"

export default function ContacUs(){
    return(
        <div className={styles.main__container}>
            
            <div className={styles.image__container}>         
                <img className={styles.image} src={I1}></img>
                <img className={styles.image2} src={I2}></img>
                <div className={styles.information__container}>
                    <h1 className={styles.text}>HELLEN SALON</h1>
                    <p className={styles.text1}>We offer hairdressing, styling, and beauty services in the Houston area</p>
                    <hr></hr>
                    
                    <h2 className={styles.text}>T: 832-929-2923</h2>
                    <p className={styles.text}>
                        416 N Sam Houston Parkway East, Suite F<br />
                        Houston, TX 77060
                    </p>
                </div>
            </div>  
            
        </div>
       
    )
}