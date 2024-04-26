/*
 *  Type: React - Component
 *  Description: The card where we will render fetched weather data
 *  Author: Shoaib Hossain (SIHAB)
 *  Course From: Phyush Garg
 */

import { useWeather } from "../contexts/Weather" // Context Hook


//    ---------------------------  Main Card component
const Card =()=>{

    // calling the hook | return an object as we passed an object in context provider Value
    const weather = useWeather()

    // this "?" tells that if current variable is available, then continue else stop
    // On first rendaring, react will pass null value | we intilized will default null value
    return (
        <div className="card">
            <img src={weather?.data?.current?.condition?.icon} alt="Icon" />
            <h2>{weather?.data?.current?.temp_c}° C</h2>
            <h5>{weather?.data?.location?.name}, {weather?.data?.location?.country}</h5>
        </div>
    )
}

// to access this Component or fuction on other js/jsx file, we have to export it
export default Card