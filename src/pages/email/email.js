import React from "react";
import styles from "./email.module.css"
import { Form, Alert, Button } from "react-bootstrap"
import { useEffect, useState } from "react";
import { createMessage } from "../../api/message-api";



export default function ContacUs() {
    const [customer, setCustomer] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")
    const [apiResult, setApiResult] = useState(null)
    const [showAlert, setShowAlert] = useState(false)


   
    const onSubmit = async (e) => {
        e.preventDefault()
        const body = JSON.stringify({
            name: customer,
            phone,
            email,
            message,
        })
        await createMessage(body, setApiResult)
    }

    useEffect(() => {
        if (apiResult === "Success") {
            setCustomer("")
            setPhone("")
            setemail("")
            setmessage("")
            setApiResult(null)
            setShowAlert(true)
        }
    }, [apiResult])



    return (
        <div className={styles.contact__us__container}>
            <div className={styles.sub__contact__us__container}>

                {showAlert ?
                    <Alert variant="success" onClose={() => setShowAlert(false)} dismissible className={styles.alert}>
                        <h1 className={styles.alert__Text}> Your menssage has been sent </h1>
                    </Alert> : <></>
                }

                <h1 className={styles.title}>{'Contact Us'}</h1>

                <Form.Label htmlFor="inputCustumer" className={styles.forms__label}>Name</Form.Label>
                <Form.Control className={styles.forms}
                    type="text"
                    id="inputCustumer"
                    aria-describedby="inputCustumer"
                    value={customer}
                    onChange={(e) => { setCustomer(e.target.value) }}
                />

                <Form.Label htmlFor="inputPhone" className={styles.forms__label}>Phone</Form.Label>
                <Form.Control
                    className={styles.forms}
                    type="text"
                    id="inputPhone"
                    aria-describedby="inputPhone"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value) }}
                />

                
                <Form.Label htmlFor="inputEmail" className={styles.forms__label}>Email</Form.Label>
                <Form.Control className={styles.forms}
                    type="text"
                    id="inputEmail"
                    aria-describedby="inputEmail"
                    value={email}
                    onChange={(e) => { setemail(e.target.value) }}
                />
                <Form.Label htmlFor="inputMessage" className={styles.forms__label}>Message</Form.Label>
                <Form.Control className={styles.forms__message}
                    type="text"
                    id="inputMessage"
                    aria-describedby="inputMessage"
                    value={message}
                    onChange={(e) => { setmessage(e.target.value) }}
                />
                
                <div className={styles.btn__conteiner}>
                    <Button variant="outline-light" onClick={(e) => onSubmit(e)} data-animation="diagonal" className={styles.button__submit}>{ ' Submit '}
                    </Button> 
                </div>

            </div>

        </div>
    )
}