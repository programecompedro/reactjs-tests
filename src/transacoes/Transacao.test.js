import Transacao from "./Transacao"
import React from 'react';
import { render } from "@testing-library/react"

describe("Componente Transacao", ()=>{

    describe("Snapshot do componente", () => {
        test("deve permanecer o mesmo", () => {
            const { container } = render(<Transacao data="15/10/2021" tipo="saque" valor="20"/>)

            expect(container.firstChild).toMatchSnapshot();
        })
    })
})