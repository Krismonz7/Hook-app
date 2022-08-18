import { render , screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import {MemoryRouter} from 'react-router-dom';



describe('Pruebas en componnte MainApp', () => { 

    test('1. Debe mostrar el componente MainApp', () => { 

        render(
            <MemoryRouter>
            <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText('MainApp')).toBeTruthy();

    });

    test('2. Debe mostrar el componente LoginPage', () => { 

        render(
            <MemoryRouter initialEntries={['/Login']}>
            <MainApp/>
            </MemoryRouter>
        );

        screen.debug();

        expect(screen.getByText('LoginPage')).toBeTruthy();

    });

})