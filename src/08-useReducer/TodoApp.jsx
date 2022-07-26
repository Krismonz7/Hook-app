import React from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react'
import { useTodo } from '../hooks/useTodo';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState= [
];


export const TodoApp = () => {

   //useTodo
  //todos, handleDeleteTodo,handleToggleTodo,HandleNewTodo

  const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
    }
     const {pendingTodosCount,todosCount,handleDeleteTodo,handleToggleTodo,handleNewTodo,todos} = useTodo();
    
    return (
      <div>
      <h1>TodoApp: {todosCount} <small>pendientes : {pendingTodosCount}</small></h1>

      <div className="row">

        <div className="col-7">
          {/*Todo list*/}
          <TodoList 
          todos={todos} 
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          {/*AddTodo*/}
          <h4>Agregar todo</h4>

          <hr />

          <TodoAdd onNewTodo={handleNewTodo}/>

        </div>
      
      </div>
    
    </div>
  )
}
