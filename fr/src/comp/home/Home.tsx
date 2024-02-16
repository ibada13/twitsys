import { useState,useEffect } from "react"
import { getTweets } from "./Reqs/req";
import { Tweettype } from "./interfaces/interfaces";
export const Home = () => { 
    const [tweets, SetTweets] = useState<Tweettype[]>([]);


    useEffect(() => {
        const callback = (res: any) => { 
            console.log(res)
            SetTweets(res.data.tweets as Tweettype[])
        }
        getTweets(callback)
    },[])



    return (
        <div className="text-center">
            {tweets.map((elm,ind) => ( 
                <h1 key={ind}>{elm.content}</h1>
            ))}
        </div>


    )


}