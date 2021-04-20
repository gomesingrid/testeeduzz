/// <reference types="cypress" />

describe('Pesquisar site eduzz no google', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('Deve validar o texto do resultado do site Eduzz', () => {
        cy.get('.gLFyf').type('www.eduzz.com')
        cy.get('.FPdoLc > center > .gNO89b').click()
        cy.get('#rcnt').should('contain', 'Vem crescer com a gente')
        
    });
});