import { render , screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

describe('Pruebas en TodoApp compnent', () => { 

    useTodo.mockReturnValue(
        {
            todos:[
                {id:1,description:'1 Kirby',dobe:false},
                {id:2,description:'2 Link',dobe:true}
            ],
            pendingTodosCount:1,
            todosCount:2,
            handleDeleteTodo: jest.fn(),
            handleToggleTodo: jest.fn(),
            handleNewTodo: jest.fn()
        }
    )
        
    test('1. Debe de mostrar el componente correctamente', () => { 

        render(<TodoApp/>);

        //screen.debug();

        expect(screen.getByText('1 Kirby')).toBeTruthy();
        expect(screen.getByText('2 Link')).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();

    })

})