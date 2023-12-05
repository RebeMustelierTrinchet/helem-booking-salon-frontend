import React from "react";
import Styles from "./barrafinal.module.css"
import Capture1 from "../../pages/layout/imagenes/Capture1.PNG"
import Capture from "../../pages/layout/imagenes/Capture.PNG"


export default function BarraFinal(){
    return(
        <div className={Styles.contenedorPrincipal}>
           <div>
            <ol className={Styles.lista}>
                <li className={Styles.enunciadoPrincipal}>ABOUT US</li>
                <br/>
                <li>Salon </li>
                <li>Terms & Conditions</li>
                <li>Work with us</li>
            </ol>
           </div>
           <div>
            <ol className={Styles.lista}>
                <li className={Styles.enunciadoPrincipal}>COSTUMERS CARES</li>
                <li> Contact Us</li>
                <li>Delivery Information</li>
                <li>Return Police</li>
            </ol>
           </div>
           <div className={Styles.contenedorImagen}>
                <img className={Styles.imagen} src={Capture1}></img>
                <img className={Styles.imagen1} src={Capture}></img>
            </div>

        </div>
    )
}