import axios from "axios";

const url :string ="http://127.0.0.1:8000/"

export const test = () => {
    axios.get(url)
        .then((response) => { 
            console.log(response)
        }
           
        )
        .catch((error) => { 
            console.log(error)
        })
}