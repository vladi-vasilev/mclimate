import axios from "axios"

type BodyType = {
    client_id: string,
    client_secret: string,
    username: string,
    password: string
}

const options = {
    headers: { "Content-Type": "application/json" }
}

export const postRequest = (url: string, data: BodyType ) => {
    return axios.post(url, data, options)
}
    