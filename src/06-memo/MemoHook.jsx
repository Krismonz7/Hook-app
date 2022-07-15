import React from 'react';
import { useMemo ,useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';


const heavyStuff = (iterationNumber = 1) => {

  for (let i = 0; i < iterationNumber; i++) {
    console.log(' iteracion') 
  }
  return(`${iterationNumber} iteraciones realizadas`);

}

export const MemoHook = () => { 

    const {counter,increment,decrement,reset}=useCounter(1);
    const [show, setshow] = useState(true);

    //useMemo: memoriza la funcion y la ejecuta cuando haya un cambio en la condicion
    const messageMemorize = useMemo(
      //funcion
      ()=>heavyStuff(counter) ,
      //condicion
       [counter] );


  return (

    <>
    <h4>{messageMemorize}</h4>
    <h1>Counter: <small>{counter}</small></h1>

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
