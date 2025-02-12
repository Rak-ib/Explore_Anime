import axios from "axios";




const appClient=axios.create({
    baseURL:'https://exploreanimebackend.vercel.app/animes',
    headers:{
        'Content-Type':'application/json'
    }
})
export default appClient;