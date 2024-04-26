//  Input component where user input his city and 
//  we change the searchCity variable with user's query by onChange EventListener

//  importing Our Weather Context Hook
import { useWeather } from "../contexts/Weather";


//  --------------------------   Actual Input Component
const Input = () => {
  // calling Hook
  const weather = useWeather()

  // rendaring and updating data of weather context
  return (
    <>
    <input
      className="inputFeild"
      type="search"
      placeholder="Enter Your City"
      value={weather.searchCity}
      onChange={(e)=> weather.setSearchCity(e.target.value)}
    />
    </>
  );
};

export default Input