import React from 'react'
import CounterNumber from './CounterNumber';
import CounterControls from './CounterControls';

const Counter = props => (
  <div>
    <CounterNumber store={props.store} />
    <CounterControls store={props.store} />
  </div>
)

export default Counter