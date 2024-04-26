import React from "react";

// ------------------------------------------------------------------------------------  CSS
import "./taskStyle.css"; // main css file of all components


//  -------------------------------------------------------------------------------------------   Contexts
// import { CounterProvider } from "./contextApi/context/Counter";
// import { CartProvider } from "./contextApi/context/Cart";
import { WeatherProvider } from "./weather/contexts/Weather";

// ---------------------------------------------------------------------------------------------  Components
// import Task from "./components/taskMeet";    // Made for learn about Components
// import Counter from "./components/Counter";  // useState and useEffect hook
// import TikTak from "./tictaktoe/Tiktak";     // TikTakToe game with basic react
// import ApiFeched from "./api/ApiCalling";    // Calling Api and rendaring
// import ContextWraper from "./contextApi/components/ContextWraper";
// import CartWraper from "./contextApi/components/cartWraper";
import WeatherWraper from "./weather/WeatherWrap"; // Weather api project



//    -----------------------------------------------------------------   Main App Component that will exicute by index
const App = () => {
  return (
    <>
      <WeatherProvider>
        <WeatherWraper />
      </WeatherProvider>

      {/* <CartProvider>
        <CartWraper />
      </CartProvider> */}

      {/* <CounterProvider>
        <ContextWraper />
      </CounterProvider> */}

      {/* <ApiFeched /> */}
      {/* <TikTak /> */}
      {/* <Counter /> */}
      {/* <Task /> */}
    </>
  );
};

export default App;
