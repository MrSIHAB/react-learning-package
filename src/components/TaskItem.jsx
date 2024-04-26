import React from "react";

const Todoitem = (prof) => {
  return (
    <li className="taskItem">
      <input type="checkbox" />
      <p className="taskName">{prof.txt}</p>
      <button className="btn">···</button>
    </li>
  );
};

export default Todoitem;