import React from "react";
import styles from "./contacUs.module.css"
import I1 from "./images/I1.jpg"
import I2 from "./images/I2.png"

export default function ContacUs(){
    return(
        <div className={styles.main__container}>
            
            
            <div className={styles.image__container}>         
                <img className={styles.image} src={I1}></img>
                <div className={styles.information__container}>
                    <hr className={styles.line}></hr>
                    <h1 className={styles.text}>HELLEN</h1>
                    <h2 className={styles.text}>T: 832-929-2923</h2>
                    <h2 className={styles.text}>G: hellentrinchet@gmail.com</h2>
                </div>
            </div>  
            <div className={styles.direction__container}>
                <img className={styles.image} src={I2}></img>
                <div className={styles.information__container}>
                    <hr className={styles.line}></hr>
                    <h1 className={styles.text}>9313 Tallyho rd apt 401, Houston TX 77017</h1>
            
            </div>
            </div>
            

            
        </div>
       
    )
}