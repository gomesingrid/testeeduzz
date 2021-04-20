/// <reference types="cypress" />
import url from "../../support/pages/urls"

describe('Pesquisar site eduzz no google', () => {
    beforeEach(() => {
        cy.visit(url)
    });
    it('Deve validar o texto do resultado do site Eduzz', () => {
        cy.get('.gLFyf').type('www.eduzz.com')
        cy.get('.FPdoLc > center > .gNO89b').click()
        cy.get('#rcnt').contains('Vem crescer com a gente')
        
        
    });
});