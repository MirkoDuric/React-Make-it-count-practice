import React from "react";

function SuperButtons(props) {
  return (
    <div>
      <p>Super Buttons</p>
      <button onClick={props.onPlusAll}>Increase all</button>
      <button onClick={props.onMinusAll}>Decrease all</button>
    </div>
  );
}

export default SuperButtons;
