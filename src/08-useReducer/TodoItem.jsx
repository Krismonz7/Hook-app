import React from 'react'

export const TodoItem = ({element,onDeleteTodo,onToggleTodo}) => {

  return (

    <li className='list-group-item d-flex justify-content-between'>
    <span
    className={`align-self-center ${element.done ? 'text-decoration-line-through' : ''}`}
    onClick={()=>onToggleTodo(element.id)}
    aria-label="span"
    >{element.description}</span>
    <button  
    className='btn btn-primary'
    onClick={ () =>
      {
        onDeleteTodo(element.id)
      }}
    >
      Borrar  
    </button>
    </li>
  ) 
}
