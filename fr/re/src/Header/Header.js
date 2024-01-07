import React, { useState } from "react"
let Header = () => {
    return (
        <>
            <App />
        </>
    )

}
let App = () => { 
    const[count,Setcount] = useState(0)
    const[text,Settext]= useState("")
    let plus = () => {
        Setcount(count + 1 )
        Settext("ITS WORKING")
    }
    let mines = () => {
        Setcount(count - 1 )
        Settext("ITS WORKING")
    }
    let hello = (n) => { 
        console.log(n)
    }
    return (
        <>
            <h1>count = {count}</h1><br />
            <h1>{text}</h1><br />
            <button onClick={plus}>plus</button>
            <button onClick={mines}>mines</button>
            <br />
            <input id="he" onChange={hello(this.target.value)} value={55}></input>
        </>

    )
}
export default Header 