import React from 'react'
import { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {

    const {description,onInputChange,onResetForm,formState} = useForm({
      description:''
    }); 

    const onFormSubmit = (event) =>{
      event.preventDefault();


      if(description.length <= 1) return;

      const newTodo = {
        id: new Date().getDate() * Math.random(),
        done:false,
        description
      }

      onNewTodo(newTodo);
      onResetForm();
    };
 
  return (
    <form action="" onSubmit={onFormSubmit}>
            <input 
            type="text" 
            placeholder='Que hay que hacer?'
            className='form-control'
            id='inputValue'
            onChange={onInputChange}
            name='description'
            value={description}
            />
            <button type='submit' className='btn btn-danger' > 
              Enviar
            </button>
    </form>
  )
}
