import axios from "axios"
const url:String="http://127.0.0.1:8000/"
let getTweets = (callback:any) => { 

axios.get(url+'tweets/')
  .then(function (response) {
      console.log(response.data);
      callback(response)
  })
  .catch(function (error) {
    console.error(error);
  });

}



export {getTweets }

