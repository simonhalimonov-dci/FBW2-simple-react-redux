import React from "react";
import CounterButton from "./CounterButton";

const CounterControls = props => (
  <div>
    <CounterButton store={props.store}>
      <button onClick={() => props.store.dispatch({ type: "DECREASE" })}>
        DECREASE
      </button>
    </CounterButton>
    <CounterButton store={props.store}>
      <button onClick={() => props.store.dispatch({ type: "INCREASE" })}>
        INCREASE
      </button>
    </CounterButton>
  </div>
);

export default CounterControls;
