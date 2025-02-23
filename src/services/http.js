import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:5174",
    timeout: 1000,
    headers: {
        "Content-type": "application/json", 
    },
});

export default http;