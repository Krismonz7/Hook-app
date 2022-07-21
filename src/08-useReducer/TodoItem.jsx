import React from 'react'

export const TodoItem = ({description}) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
    <span>{description}</span>
    <button className='btn btn-primary'>
      Borrar 
    </button>
    </li>
  )
}
