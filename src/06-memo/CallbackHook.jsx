import React, { useState , useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

useCallback

export const CallbackHook = () => {

    const [counter, setCounter] = useState(1);
    const increment = useCallback(
          (value) => {
            console.log('se ejecuto usecallback')
            setCounter((c)=> c + value)
          },
          []
        );


    

  return (
    <div>
        CallbackHook

        <h2>Cuenta: {counter}</h2>

        <ShowIncrement increment={increment}/>

    </div>
  )
};
