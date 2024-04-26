import React, {useState, useEffect} from "react";

const Timer =()=>{
    const [time, setTime] = useState(0)
    
    useEffect(()=>{
        setTimeout(()=>setTime(time + 1), 1000)
        /*
        * if I use setIntervel function instead of this setTimeout function, I have to clear it.
         * Example: return clearInterval(SetIntervelVariable)
         */
    },[time])
    
    
    // Making Time Clock
    const date = new Date()
    var hour = date.getHours()
    if (hour > 12) {
        hour -= 12
    }

    return  (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <p>Counter: {time}</p>
            <p>current time is {`${hour} : ${date.getMinutes()} : ${date.getSeconds()}`}</p>
        </div>
    )
}

export default Timer