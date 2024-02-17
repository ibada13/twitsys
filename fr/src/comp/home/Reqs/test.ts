import axios from "axios";

const url :string ="http://127.0.0.1:8000"

export const test  = (endpoint:string, params:any) => {
    axios.get(url + endpoint)
    .then((response) => { 
        console.log(response.data);
    })
    .catch((error) => { 
        console.error(error);
    });
};

// Example usage

