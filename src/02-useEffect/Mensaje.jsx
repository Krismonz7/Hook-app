import React, { useEffect, useState } from 'react'


export const Mensaje = () => {
  const [position, setPosition] = useState({x:0,y:0});
  useEffect(() => {
    const onMouseMove = ({x,y})=>{
      setPosition({x,y});
    }
    window.addEventListener('mousemove', onMouseMove);
  
    return () => {

      window.removeEventListener('mousemove', onMouseMove);

    }
  }, []);
  
  return (
    <>

    <h3>Usuario ya existe</h3>

    <h4>
      {
        (JSON.stringify(position))
      }
    </h4>
    
    </>
  )
}
