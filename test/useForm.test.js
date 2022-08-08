import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useForm } from "../src/hooks/useForm"


describe('Pruebas en Custom - Hook useForm', () => { 


    const initialForm = {
        name:'Kirby',
        email:'kirby@gmail.com',
    }

    test('1. Debe regresar los valores por defecto', () => {

        const { result } = renderHook(()=> useForm(initialForm));

        const {formState,onInputChange,onResetForm}=result.current;

        expect(formState).toEqual(initialForm);

        expect(result.current).toEqual({
            name: 'Kirby',
            email:'kirby@gmail.com',
            formState: { name: 'Kirby', email: 'kirby@gmail.com' },
            onResetForm,
            onInputChange
        })        
 
    })

    test('2. Debe cambiar el nombre del formulario', () => { 

        const  nameChange = 'Link';

        //Montar hook

        const { result } = renderHook(()=> useForm(initialForm));

        const { onInputChange } = result.current;

        //onInputChange()

        act(()=>{
            onInputChange({target:{name,nameChange}})
        })

        //Aqui hacemos el expect 

        expect(result.current.formState.name === nameChange);

     });


     test('3. Debe hacer el reset del formulario', () => { 
        const {result} =  renderHook(()=>useForm(initialForm));

        const {formState,onResetForm,onInputChange}=result.current;

        act(()=>{
            onInputChange({target:{name,value:'null'}});
            onResetForm();
        })

        expect(formState.name).toBe(initialForm.name);
        expect(formState.email).toBe(initialForm.email);

      });

 })