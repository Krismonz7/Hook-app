import { renderHook } from "@testing-library/react";
import { useCounter } from "../src/hooks/useCounter";


describe('Pruebas en Custome-Hook useCounter', () => { 

    test('1. Debe retornar los valores por defecto', () => { 

        const initial = 1;
        const {result} = renderHook(()=>useCounter(initial));

        const {counter,increment,decrement,reset} = result.current; 

        expect(counter).toBe(initial);
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));

     });

     test('2. Debe de retonar el counter con valor de 100', () => { 

        const initial = 100;

        const {result} = renderHook(()=>useCounter(initial));
        const {counter} = result.current;

        expect(counter).toBe(initial)

      })

 })

