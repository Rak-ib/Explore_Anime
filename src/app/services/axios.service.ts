import axios from "axios";




const appClient=axios.create({
    baseURL:'https://explore-anime-backend-bqf3.vercel.app/animes',
    headers:{
        'Content-Type':'application/json'
    }
})
export default appClient;