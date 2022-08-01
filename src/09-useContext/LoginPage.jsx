import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

  const {user,setUser} = useContext(UserContext);

    console.log(user);

  return (
    <div>

      <h1>LoginPage</h1>

  <pre>
    {JSON.stringify(user,null,3)}
  </pre>

  <button 
  className="btn btn-primary"
  onClick={()=>{
  setUser({
    name:'Kirby', 
    id:1,
    city:'Dream Land'
  })
  }}
  >Registrar usuario</button>

    </div>
  )
} 
