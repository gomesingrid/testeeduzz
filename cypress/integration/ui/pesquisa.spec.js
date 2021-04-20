/// <reference types="cypress" />

describe('Pesquisar site eduzz no google', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('Deve validar o texto do resultado do site Eduzz', () => {
        cy.busca('www.eduzz.com')
        cy.get('#rcnt').should('contain', 'Vem crescer com a gente')
    });
});