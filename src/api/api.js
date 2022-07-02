import axios from 'axios'

    export default axios.create({
        // baseURL:"https://lexi.lskit.com/api",
        baseURL:"/api",
        headers:{
            "Content-type" : "aplication/json"
        }
    });
