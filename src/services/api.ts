import axios from "axios";

const api = axios.create({
    baseURL: process.env.API_URL,
    timeout: 2000,
    headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
		'X-RapidAPI-Host': process.env.API_HOST
    }
})

export default api