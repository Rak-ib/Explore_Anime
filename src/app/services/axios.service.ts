import axios from "axios";



// https://exploreanimebackend.vercel.app/animes
const appClient=axios.create({
    baseURL:'https://exploreanimebackend.vercel.app/anime',
    // baseURL:'http://localhost:3000/anime',
    headers:{
        'Content-Type':'application/json'
    }
})
export default appClient;