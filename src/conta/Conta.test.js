import React from 'react';
import { screen, render } from '@testing-library/react';
import Conta from './Conta';

describe ("Componente da Conta", () => {
    it("Exibir o saldo da conta como valor monetário", () => {
        render(<Conta saldo={1000} />)

        const saldo = screen.getByTestId('saldo-conta');

        expect(saldo.textContent).toBe("R$ 1000");
    })
})