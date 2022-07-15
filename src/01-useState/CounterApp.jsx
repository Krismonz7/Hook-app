import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30
    })

    const {counter1,counter2,counter3} = state;
  return (
    <div className='counterApp'>
        
        Count: {counter1} <br />
        Count: {counter2} <br />
        Count: {counter3} <br />

        <button onClick={()=> setCounter({
            counter1:counter1 + 1,
            counter2,
            counter3
        }
        )}>+1</button>
        <button>reset</button>
        <button onClick={()=> setCounter(counter - 1)}>-1</button>

    </div>
  )
}
