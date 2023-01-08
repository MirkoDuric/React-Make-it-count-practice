import React, { useState } from "react";
import "./styles.css";
import Counter from "./components/Counter";
import SuperButtons from "./components/SuperButtons";

export default function App(e) {
  const [countValueOne, setCountValueOne] = useState(0);
  const [countValueTwo, setCountValueTwo] = useState(0);
  const [countValueThree, setCountValueThree] = useState(0);
  function superPlus() {
    setCountValueOne(countValueOne + 1);
    setCountValueTwo(countValueTwo + 1);
    setCountValueThree(countValueThree + 1);
  }
  function superMinus() {
    setCountValueOne(countValueOne - 1);
    setCountValueTwo(countValueTwo - 1);
    setCountValueThree(countValueThree - 1);
  }
  return (
    <>
      <div className="block">
        <h1>Make It Count</h1>
        Your goal: implement a page showing <strong>3 counters</strong>
        <br />
        <ul>
          <li>every counter has a + and a - button</li>
          <li>
            for every counter, clicking on + will increase the count number on
            that single counter
          </li>
          <li>
            for every counter, clicking on - will decrease the count number on
            that single counter
          </li>
          <li>
            the page will have 2 extra buttons "decrease all" and "increase all"
          </li>
          <li>
            clicking on "increase all" will increase the count of one unit on
            all the counters
          </li>
          <li>
            clicking on "decrease all" will decrease the count of one unit on
            all the counters
          </li>
        </ul>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/state-and-lifecycle.html"
        >
          Help
        </a>
      </div>

      <div className="block">
        <Counter
          value={countValueOne}
          onPlus={() => {
            setCountValueOne(countValueOne + 1);
          }}
          onMinus={() => {
            setCountValueOne(countValueOne - 1);
          }}
        />
        <Counter
          value={countValueTwo}
          onPlus={() => {
            setCountValueTwo(countValueTwo + 1);
          }}
          onMinus={() => {
            setCountValueTwo(countValueTwo - 1);
          }}
        />
        <Counter
          value={countValueThree}
          onPlus={() => {
            setCountValueThree(countValueThree + 1);
          }}
          onMinus={() => {
            setCountValueThree(countValueThree - 1);
          }}
        />
        <SuperButtons onPlusAll={superPlus} onMinusAll={superMinus} />
      </div>
    </>
  );
}
