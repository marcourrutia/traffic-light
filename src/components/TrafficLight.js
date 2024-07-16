import { useState } from "react";
import "./TrafficLight.css";

export const TrafficLight = () => {
    const [ color, setcolor ] = useState();
  return (
    <>
      <div className="top"></div>
      <div className="container">
        <div className="light red" onClick={e => {}}></div>
        <div className="light yellow"></div>
        <div className="light green"></div>
      </div>
    </>
  );
};
