import React from "react";
import { Route, Routes } from "react-router-dom";

// ------------------------------------------------------------------------------------  CSS
import "./taskStyle.css"; // main css file of all components

//  -------------------------------------------------------------------------------------------   Contexts
import { CounterProvider } from "./contextApi/context/Counter";
import { CartProvider } from "./contextApi/context/Cart";
import { WeatherProvider } from "./weather/contexts/Weather";

// ---------------------------------------------------------------------------------------------  Components
import Task from "./components/taskMeet"; // Made for learn about Components
import Counter from "./components/Counter"; // useState and useEffect hook
import TikTak from "./tictaktoe/Tiktak"; // TikTakToe game with basic react
import ApiFeched from "./api/ApiCalling"; // Calling Api and rendaring
import ContextWraper from "./contextApi/components/ContextWraper";
import CartWraper from "./contextApi/components/cartWraper";
import WeatherWraper from "./weather/WeatherWrap"; // Weather api project
// =============  Meme Ganerator
import MemeWraper from "./MemeGen/MemeWrap";

//    -----------------------------------------------------------------   Main App Component that will exicute by index
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <WeatherProvider>
            <WeatherWraper />
          </WeatherProvider>
        }
      />

      <Route
        path="meme/*"
        element={<MemeWraper />}
      />

      <Route
        path="/cart"
        element={
          <CartProvider>
            <CartWraper />
          </CartProvider>
        }
      />

      <Route
        path="/context"
        element={
          <CounterProvider>
            <ContextWraper />
          </CounterProvider>
        }
      />

      <Route path="/apipost" element={<ApiFeched />} />

      <Route path="/tiktak" element={<TikTak />} />

      <Route path="/counter" element={<Counter />} />

      <Route path="/task" element={<Task />} />
    </Routes>
  );
};

export default App;
