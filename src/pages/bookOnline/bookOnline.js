import React from "react";
import styles from "./bookOnline.module.css"
import Layout from "../layout/layout";
import BarraFinal from "../../components/barraFinal/barrafinal";


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

export default function BookOnline(){
    return(
        <div className={styles.bookOnlineDiv}>
            <div className={styles.bookOnlineDivWrapper}>
                <table className={styles.table}>
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