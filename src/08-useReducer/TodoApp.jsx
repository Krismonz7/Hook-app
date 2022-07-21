import React from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer'

const initialState= [

];


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) =>{
      console.log({todo});
      const action = { 
        type:'[TODO] Add todo',
        payload:todo
      };
      console.log(dispatch(action)); 
    };


    useEffect(() => {
      console.log(todos);
      localStorage.setItem('todos',JSON.stringify(todos) )
    }, [todos]);
    

  return (
    <div>
      <h1>TodoApp: 10 <small>pendientes : 2</small></h1>

      <div className="row">

        <div className="col-7">
          {/*Todo list*/}
          <TodoList todos={todos}/>
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
