import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({todos,onDeleteTodo,onToggleTodo}) => {
    return(
        <ul className='list-group'>
        {
                todos.map(element=>

                <TodoItem 
                element={element} 
                key={element.id} 
                onDeleteTodo={ onDeleteTodo }
                onToggleTodo={ onToggleTodo }
                />)
        }
        </ul>
    )
}
