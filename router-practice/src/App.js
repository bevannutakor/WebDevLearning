import logo from './logo.svg';
import './App.css';
import {useState} from "react";

//testing purposes
const App = () => {
  const [heading, setHeading] = useState("Magnificent Mondays");

  const clickHandler = () => {
    setHeading("radical rhinos")
  }
  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  );
}

export default App;