import { fireEvent, render , screen } from "@testing-library/react";
import { MultipleCustomeHooks } from "../../src/03-examples";
import { useCounter, useFetch } from "../../src/hooks";
jest.mock('../../src/hooks/useFetch');

describe('Pruebas en MultipleCustomeHooks', () => { 

    test('1. Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError:null
        })

        render(<MultipleCustomeHooks/>);

        expect(screen.getByText('Breaking bad quotes'));

        expect(screen.getByText('Loading.......'));

        const nextButton = (screen.getByRole('button',{name:'Siguiente frase'}))
        
        expect(nextButton.disabled).toBeTruthy()

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

        useFetch.mockReturnValue({
            data: [{author: 'Fernando', quote:'Hola mundo'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomeHooks/>);

        
        const nextButton =  screen.getByRole('button',{name:'Siguiente frase'});
        
        fireEvent.click(nextButton)
        
        screen.debug();

        //expect(useCounter).toHaveBeenCalled();
       })

 })