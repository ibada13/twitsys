import { Tweettype } from "../interfaces/interfaces"
export const Tweet = (props:Tweettype) => { 

    return (
        <div  style={{height:'30vh',width:'70vh'}}>
            <div className="h-25 bg-danger">
        
            </div>
            <div>
                <h1 >{props.content}</h1>
            </div>
            <div className="bg-info h-25" >
        
            </div>
    </div>
    )

}

