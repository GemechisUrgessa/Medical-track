import axios from "axios"

export const BASE_URL = 'https://755c-2a0d-5600-43-6000-00-b7a0.ngrok.io/'

let token = localStorage.getItem('token')

export let clientInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
        "Authorization":`${token}`,
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    baseURL: BASE_URL
})

