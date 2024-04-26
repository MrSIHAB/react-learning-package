import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";  // A template card to render api data
import './api.css'  // calling Api project's CSS file
import { getpost } from "./Fetch";  // calling the api fetching function

// testing api 
// fetch('https://jsonplaceholder.typicode.com/todos/1') 



//  ---------------------------------------------------------------------  Main Component
const ApiFeched =()=>{

    const [data, setData] = useState(null) // will hold api data
    useEffect(()=>{
        getpost().then(post => setData(post))  // will run once after Api fetching is completed
    },[])

    // -------  Refresh or reloading api data when click on a button
    const refresh = ()=>{
        setData(null)
        getpost().then(post => setData(post))        
    }

    // returning the data with wraper
    return(
        <div className="taskContainer apiContainer">
            <h1>Api Post Rendaring</h1>
            <div className="postPart">
                {/* map() works like forEach loop */}
                {data? data.map(data => <PostCard data={data} />): <>Loading...</>} 
            </div>
            <button className="btn taskBtn" onClick={()=> refresh()} >Refresh</button>
        </div>
    )
}

export default ApiFeched