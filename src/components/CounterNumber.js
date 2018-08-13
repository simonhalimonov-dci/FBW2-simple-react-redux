import React from 'react'

const CounterNumber = props => (
  <div>
    {props.store.getState()}
  </div>
)

export default CounterNumber