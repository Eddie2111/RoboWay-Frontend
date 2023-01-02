import axios from "axios";

export const Run = async()=>{
    await axios.get(Backend, {withCredentials: true, headers: {'Content-Type': 'application/json'} })
}

//export const Backend = "https://roboway.onrender.com/";

export const Backend = "http://localhost:3000/";


