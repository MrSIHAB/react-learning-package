/*
 *  Type: React - Context API
 *  Description: This is a part of weather checher App. In this file I shared user's query, current Location and Fecthed data with multiple components
 *  Author: Shoaib Hossain (SIHAB)
 *  Course From: Phyush Garg
 */


// importing basic react hooks
import { createContext, useContext, useState } from "react";
// importing the weather fetching functions that we made in api folder
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

//  Initialized a context named WeatherContext
export const WeatherContext = createContext(null);

//  Made our own hook for Weather context
export const useWeather = () => {
  return useContext(WeatherContext);
};


//  -------------------  The provider component for weather context
export const WeatherProvider = (profs) => {
  const [data, setData] = useState(null); // this will hold the fetched weather data
  const [searchCity, setSearchCity] = useState(null); // this is user's inputed location

  // Fetching weather API from user's input
  const fetchData = async () => {
    const response = await getWeatherDataForCity(searchCity);
    setData(response); // setting response to data
  };

  // Auto check location and fetch weather data
  const fetchUserCurrentLocationData = async () => {
    // this will give the geo location of the user. (user's permission required)
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude; // getting Latitude
      let lon = position.coords.longitude; // getting Longitude (uper function required)

      // calling the weather function
      await getWeatherDataForLocation(lat, lon).then((data) =>{
        setData(data) // setting response to data>[global variable]
        setSearchCity(data?.location?.name) //  setting location name as input value
      });
    });
  };

  //   -----------------------------   Returning the provider with specific values and functions
  return (
    <WeatherContext.Provider
      value={{
        data,
        searchCity,
        setSearchCity,
        fetchData,
        fetchUserCurrentLocationData,
      }}
    >
      {profs.children}
    </WeatherContext.Provider>
  );
};


// No exports required as we exported all functions while initializing
