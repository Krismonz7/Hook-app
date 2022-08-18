import { fireEvent, render , screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";  


describe('Pruebas en componente LoginPage', () => { 

    test('1. Debe mostrar el componente sin el usuario', () => { 

        render(
            <UserContext.Provider value={{user:null,setUser:null}}> 
                <LoginPage/>
            </UserContext.Provider>
        );

        screen.debug();

        const pretAG = screen.getByLabelText('pre');

        expect(pretAG.innerHTML).toBe('null');

    });

    test('2. Debe llamar el setUser cuando hace click en el boton', () => { 

        const setUser = jest.fn();
        render(

            <UserContext.Provider value={{user:'Kirbo',setUser}}>
                <LoginPage/>
            </UserContext.Provider>

        );

        const btnSend = screen.getByRole("button");

        fireEvent.click(btnSend);

        expect(setUser).toHaveBeenCalled();

        expect(setUser).toHaveBeenCalledWith({"city": "Dream Land", "id": 1, "name": "Kirby"});

    });

});