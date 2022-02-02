import axios from "axios";
import { baseUrl } from "./baseUrl";

const key = "asfghfyg-tfydyd-vhvhh-cxxszscd";

const body = {
    "key": key
};


axios.post(`${baseUrl}/auth`, body)
.then((res) => {console.log(res.data)})
.catch((err) => {console.log(err.response)});
    

export const header = {
    headers:{
        Authorization: key
    }
};    