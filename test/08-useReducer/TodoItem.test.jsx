import { render , screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";
import { todoReducer } from "../../src/08-useReducer/todoReducer";



describe('Pruebas en Todo Item Component ', () => { 

    const todo = {
        id:1,
        description:'1. Llegar dream land',
        done:false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(()=> jest.clearAllMocks());
    
    test('1. Debe mostrar el todo pendiente', () => { 

        render(<TodoItem element={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>);

        screen.debug();

        const liElement =  screen.getByRole("listitem");

        expect(liElement.innerHTML).toContain(todo.description);

        const spanElement = screen.getByLabelText('span');

        expect(spanElement.innerHTML).toContain(todo.description);

        expect(screen.getByText(todo.description)).toBeTruthy();

    });

});