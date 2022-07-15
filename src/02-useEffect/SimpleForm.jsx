import React, { useEffect, useState } from 'react'
import { Mensaje } from './Mensaje';
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    user: 'Kirby',
    mail: 'kirby@gmail.com'
  });

  const onInputChange = ({target}) =>{
    const {name,value} = target;
    setFormState({
      ...formState,
      [name]:value
    })
  }
  const {user,mail} = formState;


  //UseEffect estructura basica
  useEffect(()=>{
    console.log('useeffect')
  },[])

  /*
  useEffect(()=>{
    console.log('Formulario combio :b')
  },[formState]);

  useEffect(()=>{
    console.log('user combio :b')
  },[user]);

  useEffect(()=>{
    console.log('mail combio :b')
  },[mail]); */


    
  
  return (
    <div className='counterApp'> 
        
        <h1>Simple form</h1>
        <input type="text"
        placeholder='Username'
        className='user'
        name='user'
        value={user}
        onChange={onInputChange}
        />
         
        <input type="text"
        placeholder='Email'
        className='user-mail'
        name='mail'
        value={mail}
        onChange={onInputChange}
        />  
        {
          (user==='Link') && <Mensaje />
        }
        
    </div>
  )
}
