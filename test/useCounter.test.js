import { act, renderHook } from "@testing-library/react";
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

        expect(counter).toBe(initial);

      });


      test('3. Debe hacer increment en counter del Custome - Hook', () => { 

        const {result} = renderHook(()=>useCounter());

        const {counter,increment} = result.current;

        act(()=>{
    
            increment();
            increment(2)
        
        });
        
        expect(result.current.counter).toBe(4)

       });


       test('4. Debe disminuir la cantidad', () => { 

        const {result} = renderHook(()=>useCounter(100));
        const {decrement}=result.current;
        act(()=>{
            decrement(5);
        });
        console.log(result.current.counter)

        expect (result.current.counter).toBe(95);

        });


        test('5. Debe resetear al estado inicial que se le mando', () => { 

            const initial = 100;

            const {result} = renderHook(()=>useCounter(initial));

            const {increment,reset} = result.current;

            act(()=>{
                increment(5);
            });

            console.log(result.current.counter)

            expect(result.current.counter).toBe(initial+5);

            act(()=>{
                reset();
            })

            console.log(result.current.counter);

            expect(result.current.counter).toBe(initial)

         })

 })

