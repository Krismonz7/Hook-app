import React from 'react';
import { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';

export const Memorize = () => {

    const {counter,increment,decrement,reset}=useCounter(1);
    const [show, setshow] = useState(false);

  return (

    <>

    <h1>Counter: <Small value={counter} /></h1>

    <button 
    className="btn btn-primary"
    onClick={()=>increment()}
    >
        +1
    </button>

    <button
    className='btn btn-outline-primary'
    onClick={()=>setshow(!show)}
    >
      Shiw/Hide {JSON.stringify(show)}
    </button>

    </>
    
  )
}
