import { useState,useEffect } from "react"
import { getTweets } from "./Reqs/req";
import { Tweettype } from "./interfaces/interfaces";
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
                <div key={ind} style={{height:'30vh',width:'70vh'}}>
                    <div className="h-25 bg-danger">

                    </div>
                    <div>
                        <h1 key={ind}>{elm.content}</h1>
                    </div>
                    <div className="bg-info h-25" >

                    </div>
                </div>
            ))}
            </div>
        </div>


    )


}