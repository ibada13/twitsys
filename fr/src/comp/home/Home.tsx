import { useState,useEffect } from "react"
import { getTweets } from "./Reqs/req";
import { Tweettype } from "./interfaces/interfaces";
import { Tweet } from "./comps/Comps";
export const Home = () => { 
    const [tweets, SetTweets] = useState<Tweettype[]>([{id:-1,content:"sorry there is no tweets to see",image:null}]);


    useEffect(() => {
        const callback = (res: any) => { 
            console.log(res)
            SetTweets(res.data.tweets as Tweettype[])
        }
        getTweets(callback)
    },[])



    return (
        <div className="text-center  h-auto min-vh-100 d-flex justify-content-center m-2">
            <div className="">

            {tweets.map((elm, ind) => (
                <Tweet  key={elm.id} id={elm.id} content={ elm.content} image={null}/>
            ))}
            </div>
        </div>


    )


}