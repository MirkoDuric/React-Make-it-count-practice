import React from "react";
import Buttons from "./Buttons";

function Counter(props) {
  return (
    <div>
      <p>Counter</p>
      <p>{props.value}</p>
      <div>
        <Buttons onPlus={props.onPlus} onMinus={props.onMinus} />
      </div>
    </div>
  );
}

export default Counter;
