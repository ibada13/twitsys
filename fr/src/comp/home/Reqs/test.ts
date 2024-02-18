import axios from "axios";
import { json } from "stream/consumers";

const url :string ="http://127.0.0.1:8000"

export const test  = (endpoint:string, params:any,callback:any) => {
    axios.post(url + endpoint,  {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then((response) => { 
        callback(response)
        console.log(response.data.x);
    })
    .catch((error) => { 
        console.error(error);
    });
};

// Example usage

