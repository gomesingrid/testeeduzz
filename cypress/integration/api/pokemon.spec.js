
/// <reference types="cypress" />

import url from "../../fixtures/env.json"

describe('Funcionalidade: Teste na API de Pokemons', () => {
    
    it('Deve listar os pokemons da api = GET em pokemons', () => {
        
        cy.request({
            method: 'GET',
            url: url.urlPrd+'/pokemon/ditto'
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

