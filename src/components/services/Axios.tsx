import axios from "axios";


const serviceData = axios.create({
    baseURL:"https://api.rawg.io/api"
})

export default serviceData