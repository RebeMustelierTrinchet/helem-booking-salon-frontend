import axios from "axios"


const API_DOMAIN = process.env.REACT_APP_API_DOMAIN


export const createAppointment = async(body, setAPIAppointments) => {


    const URL = `${API_DOMAIN}/appointments/`

    const headerConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.post(URL, body, headerConfig).then(async(response) => {
        const result = await response.data
        setAPIAppointments("Success")
    }).catch((error) => {
        console.log("Error creating a appointment: ", error)
        setAPIAppointments("Error")
    })

}