import React from 'react'
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote , Quote} from '../03-examples';


export const Layout = () => { 
     
    const {counter,increment,decrement}=useCounter();
    
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

    const {data,isLoading,hasError} =useFetch(url);

    const {author,quote} = !!data && data[0];

  return (

    <>
      
      MultipleCustomeHooks

      <h1>Breaking bad quotes</h1>

{
  isLoading ? <LoadingQuote/> : <Quote author={author} quote={quote} counter={counter}/>
    
}

<button className="btn btn-primary m-2" disabled={isLoading} onClick={()=>decrement()}>
  Frase anterior
</button>
<button className="btn btn-primary m-2" disabled={isLoading} onClick={()=>increment()}>
  Siguiente frase
</button>

    </>

  )
}

