import axios from "axios";



// https://exploreanimebackend.vercel.app/animes
const appClient=axios.create({
    baseURL:'https://explore-anime-backend-tatd.vercel.app/animes',
    headers:{
        'Content-Type':'application/json'
    }
})
export default appClient;