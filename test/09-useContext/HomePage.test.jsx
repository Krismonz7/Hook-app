import { render , screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { HomePage } from "../../src/09-useContext/HomePage"




describe('Pruebas en componente Home Page', () => {

    test('1. Pruebas en componente sin el usuario', () => { 

        render(
        <UserContext.Provider value={{user:'Kirby'}}>
            <HomePage/>
        </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');//aria-label
        
        expect(preTag.innerHTML).toContain("Kirby")
        
        screen.debug();
    });

    test('2. Debe de mostrar el componente con el usuario', () => { 

        const user ={
            id:1,
            name:"Kirby"
        };

        render(
            <UserContext.Provider value={{user}}>
                <HomePage/>
            </UserContext.Provider>
        );

        screen.debug();

        const preTag =  screen.getByLabelText('pre');

        expect(preTag.innerHTML).toContain(user.id.toString());

        expect(preTag.innerHTML).toContain(user.name);
    });

 })