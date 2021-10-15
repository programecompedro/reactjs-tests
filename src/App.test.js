import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';


describe("Componente Principal", () => { // Cenário de testes
    describe("Quando abro o app do banco", () => {
        // Casos de teste
        test('o nome é exibido', () => { 
            render(<App />);
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        });

        // Verifica saldo
        test("Saldo é exibido", () => {
            render(<App />);
            expect(screen.getByText("Saldo:")).toBeInTheDocument();
        });

        test("o botão de realizar transação é exibido", () => {
            render(<App />);
            expect(screen.getByText("Realizar operação")).toBeInTheDocument();
        })
    })
})




/*
** Deve-se importar o componente que será testado e também ferramentas do react (render, screen, React)
** Criasse um cenário de testes com o describe - descrição , passa um arrow function e por fim
** usasse o it("seu titulo do teste"), arrow function renderizando o app 

** IT é obrigatório num arquivo de teste
*/