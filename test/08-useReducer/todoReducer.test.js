import { todoReducer } from "../../src/08-useReducer/todoReducer";


describe('Pruebas en reducer todoReducer.js', () => { 

    //Estado inicial
    const initialState = [{
        id:1,
        description:'Demo todo',
        done:false
    },
    {
        id:2,
        description:'Kirby Todo',
        done:false
    }];


        test('1. Debe de regresar el estado inicial del TODO', () => { 

        //Como enviamos en la accion un objeto vacio, debe retornar el estado inicial
        const newState = todoReducer(initialState,{});

        expect(newState).toBe(initialState);

    });



    test('2. Debe de agregar un TODO', () => { 

        //Mandamos la accion a realizar
        const action = {
            type:'[TODO] Add todo',
            //En el payload vamos a mandar el objeto a agregar
            payload:{
                id:2,
                description:'Todo 2 Kirby',
                done:false
            }
        };

        //Ejecutamos un nuevo estado

        const newState = todoReducer(initialState,action);

        //Despuess de agregar un objeto, seian dos objetos, por lo cual tendria un largo de 2

        expect(newState.length).toBe(3);

        expect(newState).toContain(action.payload);

        });


        test('3. Debe de eliminar un TODO', () => { 

            const actionRemove = {
                type:'[TODO] Remove Todo',
                payload:2
            };

            const newState = todoReducer(initialState,actionRemove);

            console.log(newState)

            expect(newState.length).toBe(1);
        });


        test('4. Debe hacer el toggle del TODO', () => { 

            const actionToggle = {
                type:'[TODO] Check Todo',
                payload:1
            };

            const newState = todoReducer(initialState,actionToggle);

            console.log(newState)

            expect(newState[0].done).toBeTruthy();

        });



        //Solucion del instructor

        test('5. Debe eliminar un TODO', () => { 

            const action = {
                type:'[TODO] Remove Todo',
                payload:1
            };

            const newState = todoReducer(initialState,action);

            expect(newState.length).toBe(1);

        });

        test('6. Debe hacer el toggle del TODO', () => { 

            const actionToggle = {
                type:'[TODO] Check Todo',
                payload:1
            };

            const newState = todoReducer(initialState,actionToggle);

            expect(newState[0].done).toBeTruthy();

            const newState2 =  todoReducer(newState,actionToggle);

            expect(newState2[0].done).toBeFalsy();

        });

 })