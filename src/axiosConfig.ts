import axios from "axios";


const API = axios.create({
    baseURL: 'https://abcrob-nexus-backend.onrender.com/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});





API.interceptors.response.use(
    (response)=> response,
    (error)=>{
        if(error.response && error.response.status === 401){
            console.log('Token expired or logging Out...')
        }
        return Promise.reject(error);
    }
)


export default API;