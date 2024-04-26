import {createContext, useState} from "react";

export const CounterContext = createContext(null)

export const CounterProvider =(profs)=>{

    const [count, setCount] = useState(0)

    return (
        <CounterContext.Provider value={{count, setCount}}>
            {profs.children}
        </CounterContext.Provider>
    )
}