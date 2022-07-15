import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';




export const FormWithCustomeHook = () => {

  const {onResetForm,formState,onInputChange,user,mail,pasword} = useForm({
    user:'',
    mail:'',
    pasword:''
  });

    
  
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

        <input type="password"
        placeholder='Pasword'
        className='pasword'
        name='pasword'
        value={pasword}
        onChange={onInputChange}
        />  
        
        <button className="btn btn-primary mt-2" onClick={onResetForm}>Reset</button>
    </div>
  )
}