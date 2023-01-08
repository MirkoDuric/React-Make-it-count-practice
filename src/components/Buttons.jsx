import React, { useState } from "react";

function Buttons(props) {
  return (
    <div>
      <button onClick={props.onPlus}>+</button>
      <button onClick={props.onMinus}>-</button>
    </div>
  );
}

export default Buttons;
