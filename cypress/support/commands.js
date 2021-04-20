
Cypress.Commands.add('busca', (texto) => {
    cy.get('.gLFyf').type(texto)
    cy.get('.FPdoLc > center > .gNO89b').click()
})