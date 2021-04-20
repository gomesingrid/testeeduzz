
/// <reference types="cypress" />

describe('Funcionalidade: Teste na API de Pokemons', () => {
    
    it('Deve listar os pokemons da api = GET em pokemons', () => {
        
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'
        }).should((response) => {
            //cy.log(response.body.usuarios)
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.body.species.name).to.equal("ditto")
            expect(response.body.id).to.equal(132)
            expect(response.body.types[0].type.name).to.equal("normal")
        })
    });


});

