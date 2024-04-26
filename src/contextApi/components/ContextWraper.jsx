import { useContext } from "react"
import { CounterContext } from "../context/Counter"
import Counter from "./Counter"

const ContextWraper =()=>{

    const CounterState = useContext(CounterContext)

    return (
        <div className="taskContainer">
            <h1>Count is {CounterState.count}</h1>
            <Counter />
            <Counter />
            <Counter />
        </div>
    )
}

export default ContextWraper