import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';


export const Quote = ({quote , author , counter}) => {

  const pref=useRef();

  const [boxSize, setBoxSize] = useState({width:0,height:0})

  useLayoutEffect(() => {
    console.log('Layout creado')

    const {width,height} = pref.current.getBoundingClientRect();
    setBoxSize({width:width,height:height})
    console.log(boxSize)
    return()=>{
      console.log('Cerrado')
    }
  }, [quote])

  return (
    <>
    <blockquote 
    className='blockquote text-end m-1'
    style={{display:'flex'}}
    >
        <p ref={pref} className='mb-1'>{quote}</p>
        <footer className='blockquote-footer'>{author}</footer>
      </blockquote>
      <p>{counter}</p>
      <hr />
      {JSON.stringify(boxSize)}
    </>
  ) 
}
