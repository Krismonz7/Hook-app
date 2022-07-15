import React from 'react'
import { useCounter } from '../hooks/useCounter';


export const CounterWithCustomeHook = () => {

  const {counter,increment,decrement,reset}=useCounter();
  return (
    <div className='counterApp'>

    <h1>CounterWithCustomeHook</h1>
    <h2>{counter}</h2> 
    <hr />

        <button onClick={()=>increment(10)}>+1</button>
        <button onClick={reset}>reset</button>
        <button onClick={()=>decrement(10)}>-1</button>

    </div>
  )
}
