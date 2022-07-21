import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({todos}) => {
    return(
        <ul className='list-group'>
        {
                todos.map(element=>
                <TodoItem description={element.description} key={element.id}/>)
        }
        </ul>
    )
}
