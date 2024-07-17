import { useState } from "react";
import "./TrafficLight.css";

export const TrafficLight = () => {
  const [colorActivo, setColorActivo] = useState(null);
  const cambiarColor = (color) => {
    setColorActivo(color);
  };
  const alternarColor = () => {
    if (colorActivo === null) {
      setColorActivo("red");
    } else if (colorActivo === "red") {
      setColorActivo("yellow");
    } else if (colorActivo === "yellow") {
      setColorActivo("green");
    } else if (colorActivo === "green") {
      setColorActivo(null);
    }
  };
  return (
    <>
      <div className="top"></div>
      <div className="container">
        <div
          className={`light red ${colorActivo === "red" ? "selected" : ""}`}
          onClick={() => cambiarColor("red")}
        ></div>
        <div
          className={`light yellow ${colorActivo === "yellow" ? "selected" : ""}`}
          onClick={() => cambiarColor("yellow")}
        ></div>
        <div
          className={`light green ${colorActivo === "green" ? "selected" : ""}`}
          onClick={() => cambiarColor("green")}
        ></div>
      </div>
      <button onClick={alternarColor}>Alternar luces</button>
    </>
  );
};
