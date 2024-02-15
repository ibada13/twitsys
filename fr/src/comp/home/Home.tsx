import { useState,useEffect } from "react"
import { getTweets } from "./Reqs/req";
import { Tweet } from "./interfaces/interfaces";
export const Home = () => { 
    const [tweets, SetTweets] = useState<Tweet[]>([]);


    useEffect(() => {
        const callback = (res: any) => { 
            console.log(res)
            SetTweets(res.data.tweets as Tweet[])
        }
        getTweets(callback)
    },[])



    return (
        <div>
            {tweets.map((elm:any,ind) => ( 
                <h1 key={ind}>{elm.content}</h1>
            ))}
        <h1></h1>
        </div>


    )


}