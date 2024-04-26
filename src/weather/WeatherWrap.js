import React, { useEffect } from "react"
import Input from "./components/Input"
import Card from "./components/Card"
import Button from "./components/Button"

import './weather.css'

import { useWeather } from "./contexts/Weather"


const WeatherWraper =()=>{

    const weather = useWeather();

    useEffect(()=>{
        // get current location here
        weather.fetchUserCurrentLocationData()
    },[])

    return (
        <div className="taskContainer weatherWraper">
            <h1>Wather API</h1>
            <Input />
            <Button onClick={()=> weather.fetchData()} value="Refresh" class="search" />
            <Card />
            <Button class="reset" value="Reset" onClick={()=>weather.fetchUserCurrentLocationData()} />
        </div>
    )
}

export default WeatherWraper