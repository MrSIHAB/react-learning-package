import React from "react";
import Header from "./Header";
import Todoitem from "./TaskItem";
import Button from "./Button";
import Timer from "./time";

const Task = ()=>{
    return (
        <div className="taskContainer">
        <Timer />
        <Header txt="Task Manager" />
        <Todoitem txt="Eat" />
        <Todoitem txt="Code" />
        <Todoitem txt="Play" />
        <Todoitem txt="Study" />
        <Todoitem txt="Sleep Again" />
        <Button />
      </div>
    )
}

export default Task