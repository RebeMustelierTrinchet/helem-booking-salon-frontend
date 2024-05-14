import axios from "axios"


const API_DOMAIN = process.env.REACT_APP_API_DOMAIN


export const createMessage = async(body, setMessages) => {


    const URL = `${API_DOMAIN}/message/`

    const headerConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.post(URL, body, headerConfig).then(async(response) => {
        const result = await response.data
        setMessages("Success")
    }).catch((error) => {
        console.log("Error creating a message: ", error)
        setMessages("Error")
    })

}