import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOff] = useState(false)

  function handleClick(){
    setIsOff(() => !isOn)
  }
  
  const color = isOn ? "red" : "white";

  return <button style={{background : color}} onClick={handleClick} >{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
