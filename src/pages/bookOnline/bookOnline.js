import React from "react";
import Styles from "./bookOnline.module.css"
import Layout from "../layout/layout";
import BarraFinal from "../../components/barraFinal/barrafinal";

export default function BookOnline(){
    return(
        <div>
            <div>
                <table>
                    <tr>
                    <td className={Styles.tabla}> Monday    </td>
                    <td className={Styles.tabla}> 8:00-17.30</td>
                    </tr>
                    <tr>
                    <td className={Styles.tabla}> Tuesday</td>
                    <td className={Styles.tabla}> 8:00-17.30</td>
                    </tr>
                    <tr>
                    <td className={Styles.tabla}> Thursday</td>
                    <td className={Styles.tabla}> 8:00-17.30</td>
                    </tr>
                    <tr>
                    <td className={Styles.tabla}> Friday</td>
                    <td className={Styles.tabla}> 8:00-17.30</td>
                    </tr>
                    <tr>
                    <td className={Styles.tabla}> Saturday</td>
                    <td className={Styles.tabla}> 8:00-17.30</td>
                    </tr>
                    <tr>
                    <td className={Styles.tabla}> Sanday</td>
                    <td className={Styles.tabla}> Close</td>
                    </tr>

                </table>
            </div>

        </div>
    )
}