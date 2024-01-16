import React from "react";
import styles from "./bookOnline.module.css"
import Layout from "../layout/layout";
import BarraFinal from "../../components/barraFinal/barrafinal";
import { useEffect, useState } from "react";
import { Form, Alert, Button } from "react-bootstrap"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createAppointment } from "../../api/appointments-api"


const DEFAULT_TIME = "8:00 AM - 5:30 PM"

// preguntar para completarlo
const SERVICIOS = [
    "Hair Wash",
    "Cut & Style",
    "Colour (highlights, balayage, dyes, bleaching.)",
    "Strains",
    "Treatments (keratin, botox, nanoplasty.)"
]


export default function BookOnline() {

    const [customer, setCustomer] = useState("")
    const [service, setService] = useState("Hair Wash")
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState("8: 00 a.m")
    const [apiResult, setApiResult] = useState(null)
    const [showAlert, setShowAlert] = useState(false)

    const formatTimeToDisplayHelper = (index) => {
        let hour = 8 + (index / 2)
        if (index > 9) {
            hour = hour % 12
        }
        return parseInt(hour) + (
            index % 2 == 0 ? " : 00" : " : 30"
        );
    }

    // hi

    const formatTimeExt = (index) => {
        return (index > 7 ? " p.m" : " a.m")
    }

    const formatTimeToDisplay = (index) => {
        return formatTimeToDisplayHelper(index) + " " + formatTimeExt(index)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const body = JSON.stringify({
            customer,
            service,
            date,
            time,
            phone,
            status: "PRENDIENTE"
        })
        await createAppointment(body, setApiResult)
    }

    useEffect(() => {
        if (apiResult === "Success") {
            setCustomer("")
            setService("Hair Wash")
            setPhone("")
            setDate(new Date())
            setTime(setTime("8: 00 a.m"))
            setApiResult(null)
            setShowAlert(true)
        }
    }, [apiResult])

    return (
        <div className={styles.bookOnlineDiv}>
            <div className={styles.bookOnlineDivWrapper}>

                {showAlert ?
                    <Alert variant="success" onClose={() => setShowAlert(false)} dismissible className={styles.alerta}>
                        <h1 className={styles.alertText}> Your appointment has been sent for approval </h1>
                    </Alert> : <></>
                }

                <h1 className={styles.title}>Booking</h1>

                <Form.Label htmlFor="inputCustumer" className={styles.formsLabel}>Name</Form.Label>
                <Form.Control className={styles.forms}
                    type="text"
                    id="inputCustumer"
                    aria-describedby="inputCustumer"
                    value={customer}
                    onChange={(e) => { setCustomer(e.target.value) }}
                />

                <Form.Label htmlFor="inputPhone" className={styles.formsLabel}>Phone</Form.Label>
                <Form.Control
                    className={styles.forms}
                    type="text"
                    id="inputPhone"
                    aria-describedby="inputPhone"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value) }}
                />

                <Form.Label htmlFor="inputService" className={styles.formsLabel}>Service</Form.Label>
                <Form.Select value={service} onChange={(e) => setService(e.target.value)}
                    className={styles.forms}
                    id="inputService" aria-label="Default select example">
                    {SERVICIOS.map((serviceItem, serviceIndex) => {
                        return (
                            <option key={serviceIndex} value={serviceItem}>
                                {serviceItem}
                            </option>
                        );
                    })}
                </Form.Select>

                <div className={styles.formsDiv}>

                    <div className={styles.formsSubDiv}>
                        <Form.Label htmlFor="inputDate" className={styles.formsText1} >Date</Form.Label>
                        <DatePicker id="inputDate" selected={date} onChange={(newDate) => setDate(newDate)} className={styles.formsItem1} />
                    </div>

                    <div className={styles.formsTimeDiv}>
                        <Form.Label htmlFor="inputTime" className={styles.formsText} >Time</Form.Label>
                        <Form.Select value={time} onChange={(e) => setTime(e.target.value)}
                            className={styles.formsItem}
                            id="inputTime" aria-label="Default select example">
                            {new Array(20).fill(0).map((item, index) => {
                                return (
                                    <option key={index} value={formatTimeToDisplay(index)}>
                                        {
                                            formatTimeToDisplay(index)
                                        }
                                    </option>
                                );
                            })}
                        </Form.Select>
                    </div>
                </div>

                <Button variant="primary" onClick={(e) => onSubmit(e)} className={styles.button} >Save</Button>

            </div>

        </div>
    )
}