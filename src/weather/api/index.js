/*
 *  https://api.weatherapi.com/v1/current.json?key=988a52410b8146998cf103439242604&q=London&aqi=no
 *  This is an api key to fetch weather
 */


// Initilized the long weather api in a variable without any "Query"
const baseurl =
  "https://api.weatherapi.com/v1/current.json?key=988a52410b8146998cf103439242604";


//  getting data from city name and exporting that function
export const getWeatherDataForCity = async (city) => {
  let response = await fetch(`${baseurl}&q=${city}&aqi=yes`);
  return await response.json();
};


//  getting data with 'Latitude' & 'Longitude' and exporting that function
export const getWeatherDataForLocation = async (lat, lon) => {
  let response = await fetch(`${baseurl}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};
