import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function StateEffect () {

const [ count, setCount ] = useState(0);
const [ color, setColor] = useState("");
const [ message, setMessage] = useState("0 the begining and the end");

function addCount() {
  if (count <= 19) {
    setCount(prevCount => prevCount + 1);             
}
  

  else {
    setCount(count)

  }
}

function decreaseCount() {
  if (count > 0) {
    setCount(prevCount => prevCount -1)
  }
}

useEffect(()=> {
  if ( count === 0) {
    setColor("white")
    console.log("the begining and the end of everything")
    setMessage("0 the begining and the end")
  }
 
  else if (count > 0 && count <= 5) {
  console.log("count upgraded " + count + " times" );
  setColor("golden");
  setMessage("you have clicked " + count + " times")
  }

  else if (count <= 10) {
    console.log("count upgraded " + count + " times" );
    setColor("lightgreen");
    setMessage("you have clicked " + count + " times")
    }

    else if (count <= 15) {
      console.log("count upgraded " + count + " times" );
      setColor("purple");
      setMessage("you have clicked " + count + " times")
      }

      else if (count <= 19) {
        console.log("count upgraded " + count + " times" );
        setColor("yellow");
        setMessage("you have clicked " + count + " times")
        }
  else {
    console.log( "you have reached clicks limit");
    setColor("red")
    setMessage("you have reached clicks limit (20)")
  }
},[count]);

return (
  <div className="App">

   <div className="stateffectContainer">
    <div>
    <Button variant="contained" onClick={addCount}>add 1</Button>
    </div>
    <h2 className={color}>{message}</h2>
    <div>
      <Button variant="contained" onClick={decreaseCount}>decrease 1</Button>
    </div>    
    </div>
    <Link to="/projects"><button id="stateEffecttHomeButton" className="homeButton"><img src="https://cdn.iconscout.com/icon/free/png-256/google-home-2981837-2476489.png" height="50"></img><h5>back</h5></button></Link>
  </div>
);

}

export default StateEffect