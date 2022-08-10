import { fireEvent, render , renderHook, screen } from "@testing-library/react";
import { MultipleCustomeHooks } from "../../src/03-examples";
import { useCounter, useFetch } from "../../src/hooks";
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en MultipleCustomeHooks', () => { 

    const mockIncrement= jest.fn();

    useCounter.mockReturnValue({
        counter:1,
        increment: mockIncrement,
    })

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    test('1. Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError:null
        })

        render(<MultipleCustomeHooks/>);

        expect(screen.getByText('Breaking bad quotes'));

        expect(screen.getByText('Loading.......'));

        const nextButton = (screen.getByRole('button',{name:'Siguiente frase'}));
        
        expect(nextButton.disabled).toBeTruthy();

     });


     test('Debe mostrar un Quote', () => { 

        useFetch.mockReturnValue({
            data: [{author: 'Fernando', quote:'Hola mundo'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomeHooks/>);

        expect(screen.getByText('Fernando')).toBeTruthy();
        expect(screen.getByText('Hola mundo')).toBeTruthy();

      });


      test('Debe de mandar la fc=uncion de implementar', () => { 

        render(<MultipleCustomeHooks/>);

        
        const nextButton =  screen.getByRole('button',{name:'Siguiente frase'});
        
        fireEvent.click(nextButton);
        
        screen.debug();

        expect(mockIncrement).toHaveBeenCalled();
       })

 })